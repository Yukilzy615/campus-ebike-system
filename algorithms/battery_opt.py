import json
import math
import os
import random
import networkx as nx
import numpy as np
import geopandas as gpd
from .data_utils import load_and_process_roads, filter_roads
from .dispatch_opt import ACO

GROUP_TARGET_SIZE = 5
DEFAULT_MIN_LOW_BATTERY_COUNT = 40
DEFAULT_CAPACITY_PER_TRIP = 10
CAMPUS_CENTER_BD09 = (114.3652, 30.5312)

ROUTE_COLORS = [
    "#1a73e8",
    "#8e24aa",
    "#00acc1",
    "#d81b60",
    "#6d4c41",
    "#546e7a",
    "#3949ab",
    "#00897b",
]


def haversine_m(lat1, lng1, lat2, lng2):
    r = 6371000.0
    p1 = math.radians(lat1)
    p2 = math.radians(lat2)
    dp = math.radians(lat2 - lat1)
    dl = math.radians(lng2 - lng1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(a))


def _safe_float(value, default=None):
    try:
        return float(value)
    except Exception:
        return default


def _normalize_bike(raw, fallback_id):
    lng = _safe_float(raw.get("lng"))
    lat = _safe_float(raw.get("lat"))
    if lng is None or lat is None:
        return None

    battery = _safe_float(raw.get("battery"), 100.0)
    bike_id = str(raw.get("id") if raw.get("id") is not None else fallback_id)
    if not bike_id.startswith("ebike_"):
        bike_id = "ebike_" + bike_id

    return {
        "id": bike_id,
        "lng": lng,
        "lat": lat,
        "battery": battery,
        "last_used": raw.get("last_used") or raw.get("lastUsed") or raw.get("time_slot") or "-",
        "location_hint": raw.get("location_hint") or "",
    }


def _iter_lines_from_geojson(roads_geojson):
    if not roads_geojson:
        return

    features = roads_geojson.get("features") or []
    for feature in features:
        geometry = (feature or {}).get("geometry") or {}
        gtype = geometry.get("type")
        coords = geometry.get("coordinates") or []

        if gtype == "LineString":
            if len(coords) >= 2:
                yield coords
        elif gtype == "MultiLineString":
            for line in coords:
                if isinstance(line, list) and len(line) >= 2:
                    yield line


def _node_key(lng, lat):
    return f"{lng:.6f},{lat:.6f}"


def build_road_graph_from_gdf(roads_gdf):
    """从GeoDataFrame构建路网图（与dispatch_opt.py的build_whu_road_graph逻辑完全一致）"""
    if roads_gdf is None:
        return nx.Graph(), []

    G = nx.Graph()
    edge_count = 0

    for _, row in roads_gdf.iterrows():
        geom = row.geometry
        if geom is None:
            continue

        lines = geom.geoms if geom.geom_type == 'MultiLineString' else [geom]
        for line in lines:
            coords = list(line.coords)
            for i in range(len(coords) - 1):
                p1, p2 = coords[i], coords[i + 1]
                # 使用与dispatch_opt.py完全相同的距离计算方式
                d = np.hypot(p1[0] - p2[0], p1[1] - p2[1]) * 111000

                # 使用与dispatch_opt.py完全相同的权重计算方式
                road_name = row.get('name', '')
                if road_name and '求是二路' in str(road_name):
                    weight = d * 0.5
                elif road_name:
                    weight = d * 0.8
                else:
                    weight = d

                G.add_edge(p1, p2, weight=weight)
                edge_count += 1

    if G.number_of_nodes() > 0:
        components = list(nx.connected_components(G))
        largest = max(components, key=len)
        G = G.subgraph(largest).copy()

    print(f"[Battery] 路网构建 (from GDF): 节点数 {G.number_of_nodes()}, 边数 {G.number_of_edges()}, 原始边数 {edge_count}")
    print(f"[Battery] GDF中道路数量: {len(roads_gdf)}")
    print(f"[Battery] GDF列名: {list(roads_gdf.columns)}")
    return G, list(G.nodes)


def build_road_graph(roads_geojson):
    """构建路网图（返回NetworkX图）- 与dispatch_opt.py使用相同的过滤逻辑"""
    try:
        if isinstance(roads_geojson, str):
            try:
                import json
                geojson_obj = json.loads(roads_geojson)
                roads_geojson = geojson_obj
                print(f"[Battery] 成功解析GeoJSON字符串")
            except Exception as e:
                print(f"[Battery] 解析GeoJSON字符串失败: {e}")
                roads_gdf = load_and_process_roads(roads_geojson)
                if roads_gdf is not None:
                    print(f"[Battery] 从文件路径加载路网数据成功")
                    return build_road_graph_from_gdf(roads_gdf)
                else:
                    print(f"[Battery] 从文件路径加载路网数据失败")
                    return nx.Graph(), []

        if not roads_geojson:
            print(f"[Battery] 路网数据为空")
            return nx.Graph(), []

        print(f"[Battery] 处理路网数据，类型: {type(roads_geojson)}")
        if isinstance(roads_geojson, dict):
            print(f"[Battery] 路网数据包含features: {('features' in roads_geojson)}")
            if 'features' in roads_geojson:
                print(f"[Battery] features数量: {len(roads_geojson['features'])}")

        # 先将GeoJSON转换为GDF，应用与dispatch_opt.py相同的过滤逻辑
        try:
            temp_gdf = gpd.GeoDataFrame.from_features(roads_geojson['features']) if 'features' in roads_geojson else gpd.GeoDataFrame(roads_geojson)
            # 尝试从GeoJSON的crs属性中获取CRS信息
            if temp_gdf.crs is None:
                if 'crs' in roads_geojson:
                    crs_type = roads_geojson['crs'].get('properties', {}).get('name', '')
                    if '4326' in crs_type:
                        temp_gdf = temp_gdf.set_crs('EPSG:4326', allow_override=True)
                    elif 'CGCS2000' in crs_type or 'China' in crs_type:
                        temp_gdf = temp_gdf.set_crs('EPSG:4490', allow_override=True)
                else:
                    # 默认设置为EPSG:4326（WGS84）
                    temp_gdf = temp_gdf.set_crs('EPSG:4326', allow_override=True)
            # 应用与dispatch_opt.py相同的过滤逻辑
            filtered_gdf = filter_roads(temp_gdf)
            print(f"[Battery] 过滤后道路数量: {len(filtered_gdf)}")
            return build_road_graph_from_gdf(filtered_gdf)
        except Exception as e:
            print(f"[Battery] 转换为GDF失败，使用简化方法: {e}")

        # 如果上述方法失败，使用简化方法（但这可能不会正确过滤）
        G = nx.Graph()
        for line in _iter_lines_from_geojson(roads_geojson):
            for i in range(len(line) - 1):
                p1, p2 = line[i], line[i + 1]
                if not isinstance(p1, list) or not isinstance(p2, list) or len(p1) < 2 or len(p2) < 2:
                    continue

                lng1, lat1 = _safe_float(p1[0]), _safe_float(p1[1])
                lng2, lat2 = _safe_float(p2[0]), _safe_float(p2[1])
                if None in (lng1, lat1, lng2, lat2):
                    continue

                d = haversine_m(lat1, lng1, lat2, lng2)
                G.add_edge((lng1, lat1), (lng2, lat2), weight=d)

        if G.number_of_nodes() > 0:
            components = list(nx.connected_components(G))
            largest = max(components, key=len)
            G = G.subgraph(largest).copy()

        print(f"[Battery] 路网构建 (from GeoJSON): 节点数 {G.number_of_nodes()}, 边数 {G.number_of_edges()}")
        return G, list(G.nodes)
    except Exception as e:
        import traceback
        error_trace = traceback.format_exc()
        print(f"[Battery] 构建路网图时出错: {e}\n{error_trace}")
        return nx.Graph(), []


def _find_nearest_node(G, main_nodes, point):
    """找到离给定点最近的路网节点"""
    if not main_nodes:
        return None
    return min(main_nodes, key=lambda n: (n[0] - point[0]) ** 2 + (n[1] - point[1]) ** 2)


def _shortest_path_coords(G, main_nodes, start_pos, end_pos):
    """计算最短路径坐标（复用dispatch_opt的逻辑）"""
    # 确保路网图存在
    if G.number_of_nodes() == 0:
        coords = [[start_pos[0], start_pos[1]], [end_pos[0], end_pos[1]]]
        dist = np.hypot(start_pos[0] - end_pos[0], start_pos[1] - end_pos[1]) * 111000
        return coords, dist
    
    # 找到最近的路网节点
    s_nearest = _find_nearest_node(G, main_nodes, start_pos)
    e_nearest = _find_nearest_node(G, main_nodes, end_pos)
    
    if not s_nearest or not e_nearest:
        coords = [[start_pos[0], start_pos[1]], [end_pos[0], end_pos[1]]]
        dist = np.hypot(start_pos[0] - end_pos[0], start_pos[1] - end_pos[1]) * 111000
        return coords, dist
    
    # 使用最近节点计算完整路径
    try:
        path_nodes = nx.shortest_path(G, s_nearest, e_nearest, weight='weight')
        path_dist = nx.shortest_path_length(G, s_nearest, e_nearest, weight='weight')
    except Exception as e:
        coords = [[start_pos[0], start_pos[1]], [end_pos[0], end_pos[1]]]
        dist = np.hypot(start_pos[0] - end_pos[0], start_pos[1] - end_pos[1]) * 111000
        return coords, dist
    
    # 从起点到终点的完整路径
    coords = []
    
    # 1. 先添加原始起点
    coords.append([start_pos[0], start_pos[1]])
    
    # 2. 添加路网起点（如果和原始起点不一样）
    if (start_pos[0] != s_nearest[0] or start_pos[1] != s_nearest[1]):
        coords.append([s_nearest[0], s_nearest[1]])
    
    # 3. 添加完整的路网路径（跳过重复的起点）
    # 处理 s_nearest == e_nearest 的情况
    if len(path_nodes) > 1:
        for node in path_nodes[1:]:
            coords.append([node[0], node[1]])
    else:
        # 如果起点和终点在同一个节点，确保至少有一个中间点
        # 添加一个微小偏移的点作为中间点
        if s_nearest:
            offset = 1e-7
            mid_point = [
                s_nearest[0] + offset,
                s_nearest[1] + offset
            ]
            coords.append(mid_point)
    
    # 4. 添加原始终点（如果和路网终点不一样）
    if (end_pos[0] != e_nearest[0] or end_pos[1] != e_nearest[1]):
        coords.append([end_pos[0], end_pos[1]])
    else:
        # 确保终点被添加
        coords.append([end_pos[0], end_pos[1]])
    
    # 计算额外距离（起点和终点到路网节点的直线距离）
    extra_dist = 0.0
    extra_dist += np.hypot(start_pos[0] - s_nearest[0], start_pos[1] - s_nearest[1]) * 111000
    extra_dist += np.hypot(end_pos[0] - e_nearest[0], end_pos[1] - e_nearest[1]) * 111000
    
    total_dist = path_dist + extra_dist
    
    return coords, float(total_dist)


def _dedup_points(points):
    deduped = []
    last_key = None
    for p in points:
        key = _node_key(p["lng"], p["lat"])
        if key == last_key:
            continue
        deduped.append({"lng": p["lng"], "lat": p["lat"]})
        last_key = key
    return deduped


def _connect_points_via_road(start_point, end_point, G, main_nodes):
    """连接两个点，走最短路径"""
    if G.number_of_nodes() == 0:
        return [
            {"lng": start_point["lng"], "lat": start_point["lat"]},
            {"lng": end_point["lng"], "lat": end_point["lat"]},
        ]

    start_pos = (start_point["lng"], start_point["lat"])
    end_pos = (end_point["lng"], end_point["lat"])

    coords, _ = _shortest_path_coords(G, main_nodes, start_pos, end_pos)

    if not coords or len(coords) < 2:
        return [
            {"lng": start_point["lng"], "lat": start_point["lat"]},
            {"lng": end_point["lng"], "lat": end_point["lat"]},
        ]

    # 确保即使起点和终点相同，也返回至少2个点
    result = [{"lng": c[0], "lat": c[1]} for c in coords]
    if len(result) == 1:
        result.append({"lng": end_point["lng"], "lat": end_point["lat"]})
    elif result[0] == result[-1] and len(result) == 2:
        # 如果起点和终点相同，添加一个微小偏移的点确保线段有效
        offset = 1e-7
        result.append({
            "lng": end_point["lng"] + offset,
            "lat": end_point["lat"] + offset
        })

    return result


def _polyline_distance(points):
    if not points or len(points) < 2:
        return 0.0
    total = 0.0
    for i in range(len(points) - 1):
        p1 = points[i]
        p2 = points[i + 1]
        total += haversine_m(p1["lat"], p1["lng"], p2["lat"], p2["lng"])
    return total


def _load_battery_mock_file(path):
    if not os.path.exists(path):
        return []
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        bikes = data.get("bikes") or []
        return bikes if isinstance(bikes, list) else []
    except Exception:
        return []


def _candidate_points_from_roads(roads_geojson=None, roads_gdf=None):
    """从路网数据生成候选点"""
    CAMPUS_MIN_LAT = 30.520
    CAMPUS_MAX_LAT = 30.540
    CAMPUS_MIN_LNG = 114.340
    CAMPUS_MAX_LNG = 114.370
    
    points = []
    seen = set()
    
    # 优先使用GeoDataFrame
    if roads_gdf is not None:
        print(f"[Battery] Using roads_gdf for candidate points")
        for _, row in roads_gdf.iterrows():
            geom = row.geometry
            if geom is None:
                continue

            if geom.geom_type == 'MultiLineString':
                lines = geom.geoms
            else:
                lines = [geom]

            for line in lines:
                coords_list = list(line.coords)
                for p in coords_list:
                    lng = _safe_float(p[0])
                    lat = _safe_float(p[1])
                    if lng is None or lat is None:
                        continue
                    if not (CAMPUS_MIN_LAT <= lat <= CAMPUS_MAX_LAT and CAMPUS_MIN_LNG <= lng <= CAMPUS_MAX_LNG):
                        continue
                    key = _node_key(lng, lat)
                    if key in seen:
                        continue
                    seen.add(key)
                    points.append((lng, lat))
        return points
    
    # 如果没有GeoDataFrame，使用GeoJSON
    if roads_geojson is None:
        return points
        
    print(f"[Battery] Using roads_geojson for candidate points")
    
    if isinstance(roads_geojson, str):
        try:
            import json
            geojson_obj = json.loads(roads_geojson)
            for line in _iter_lines_from_geojson(geojson_obj):
                for p in line:
                    if not isinstance(p, list) or len(p) < 2:
                        continue
                    lng = _safe_float(p[0])
                    lat = _safe_float(p[1])
                    if lng is None or lat is None:
                        continue
                    if not (CAMPUS_MIN_LAT <= lat <= CAMPUS_MAX_LAT and CAMPUS_MIN_LNG <= lng <= CAMPUS_MAX_LNG):
                        continue
                    key = _node_key(lng, lat)
                    if key in seen:
                        continue
                    seen.add(key)
                    points.append((lng, lat))
            return points
        except Exception:
            pass
    
    # 直接处理GeoJSON对象
    for line in _iter_lines_from_geojson(roads_geojson):
        for p in line:
            if not isinstance(p, list) or len(p) < 2:
                continue
            lng = _safe_float(p[0])
            lat = _safe_float(p[1])
            if lng is None or lat is None:
                continue
            if not (CAMPUS_MIN_LAT <= lat <= CAMPUS_MAX_LAT and CAMPUS_MIN_LNG <= lng <= CAMPUS_MAX_LNG):
                continue
            key = _node_key(lng, lat)
            if key in seen:
                continue
            seen.add(key)
            points.append((lng, lat))
    return points


def _generate_more_low_bikes(threshold, need_count, roads_geojson, existing_count, roads_gdf=None):
    rng = random.Random(20260419 + need_count + existing_count)
    candidates = _candidate_points_from_roads(roads_geojson, roads_gdf)

    if not candidates:
        candidates = [
            (114.3645, 30.5310),
            (114.3657, 30.5288),
            (114.3668, 30.5287),
            (114.3637, 30.5307),
        ]

    low_max = max(12, int(threshold))
    generated = []
    for i in range(need_count):
        base = candidates[rng.randint(0, len(candidates) - 1)]
        lng, lat = base[0], base[1]
        battery = rng.randint(5, low_max)
        hh = rng.randint(7, 20)
        mm = rng.randint(0, 59)
        generated.append({
            "id": f"ebike_mock_{existing_count + i + 1:03d}",
            "lng": round(lng, 6),
            "lat": round(lat, 6),
            "battery": battery,
            "last_used": f"{hh:02d}:{mm:02d}",
            "location_hint": "电池运维补充数据",
        })
    return generated


def snap_bike_to_road(bike, G, main_nodes):
    """将车辆吸附到路网节点上"""
    if not G or not main_nodes:
        return bike
    
    bike_pos = (bike["lng"], bike["lat"])
    nearest_node = _find_nearest_node(G, main_nodes, bike_pos)
    
    if nearest_node:
        return {
            **bike,
            "lng": nearest_node[0],
            "lat": nearest_node[1],
            "location_hint": bike.get("location_hint", "") + " (已吸附到路网)"
        }
    return bike


def get_low_battery_vehicles(threshold=30, min_count=DEFAULT_MIN_LOW_BATTERY_COUNT,
                             data_dir="data", roads_geojson=None, roads_gdf=None):
    threshold = float(threshold)
    min_count = max(1, int(min_count))

    battery_file = os.path.join(data_dir, "battery_mock.json")
    raw_bikes = _load_battery_mock_file(battery_file)

    normalized = []
    for idx, raw in enumerate(raw_bikes):
        bike = _normalize_bike(raw, f"mock_{idx + 1}")
        if bike is not None:
            normalized.append(bike)

    low = [b for b in normalized if float(b.get("battery", 100)) <= threshold]

    if len(low) < min_count:
        extra = _generate_more_low_bikes(
            threshold=threshold,
            need_count=min_count - len(low),
            roads_geojson=roads_geojson,
            existing_count=len(normalized),
            roads_gdf=roads_gdf
        )
        for idx, raw in enumerate(extra):
            bike = _normalize_bike(raw, f"extra_{idx + 1}")
            if bike is not None:
                low.append(bike)

    # 将所有低电量车辆吸附到路网节点上
    if roads_gdf is not None:
        print(f"[Battery] 正在将低电量车辆吸附到路网")
        G, main_nodes = build_road_graph_from_gdf(roads_gdf)
        low = [snap_bike_to_road(bike, G, main_nodes) for bike in low]
    elif roads_geojson is not None:
        print(f"[Battery] 正在将低电量车辆吸附到路网")
        G, main_nodes = build_road_graph(roads_geojson)
        low = [snap_bike_to_road(bike, G, main_nodes) for bike in low]

    low.sort(key=lambda b: (float(b.get("battery", 100)), b.get("id", "")))
    return low


def _nearest_neighbor_order(start_point, bikes):
    remain = bikes[:]
    ordered = []
    current = {"lng": start_point["lng"], "lat": start_point["lat"]}

    while remain:
        best_idx = 0
        best_dist = float("inf")
        for i, bike in enumerate(remain):
            d = haversine_m(current["lat"], current["lng"], bike["lat"], bike["lng"])
            if d < best_dist:
                best_dist = d
                best_idx = i
        nxt = remain.pop(best_idx)
        ordered.append(nxt)
        current = nxt

    return ordered


def _pick_service_points(service_points, low_bikes):
    normalized = []
    for i, p in enumerate(service_points or []):
        lng = _safe_float(p.get("lng"))
        lat = _safe_float(p.get("lat"))
        if lng is None or lat is None:
            continue
        normalized.append({
            "id": f"sp_{i + 1}",
            "name": p.get("name") or p.get("label") or p.get("service_point_name") or f"服务点{i + 1}",
            "lng": lng,
            "lat": lat,
        })

    if normalized:
        return normalized

    return [{
        "id": "campus_center",
        "name": "校园中心补给点",
        "lng": CAMPUS_CENTER_BD09[0],
        "lat": CAMPUS_CENTER_BD09[1],
    }]


def _pick_nearest_service_point(group, service_points):
    if not service_points:
        return {
            "id": "campus_center",
            "name": "校园中心补给点",
            "lng": CAMPUS_CENTER_BD09[0],
            "lat": CAMPUS_CENTER_BD09[1],
        }

    if not group:
        return service_points[0]

    center_lng = sum(b["lng"] for b in group) / len(group)
    center_lat = sum(b["lat"] for b in group) / len(group)
    return min(service_points, key=lambda p: haversine_m(center_lat, center_lng, p["lat"], p["lng"]))


def _spatial_chunks(low_bikes, vehicle_count):
    sorted_bikes = sorted(low_bikes, key=lambda b: (b["lng"], b["lat"], b["id"]))
    chunk_size = max(1, math.ceil(len(sorted_bikes) / vehicle_count))
    chunks = []
    for i in range(0, len(sorted_bikes), chunk_size):
        part = sorted_bikes[i:i + chunk_size]
        if part:
            chunks.append(part)
    return chunks


def plan_battery_routes(low_bikes, service_points=None, roads_geojson=None, roads_gdf=None, capacity_per_trip=DEFAULT_CAPACITY_PER_TRIP):
    normalized_bikes = []
    for idx, raw in enumerate(low_bikes or []):
        bike = _normalize_bike(raw, f"req_{idx + 1}")
        if bike is not None:
            normalized_bikes.append(bike)

    cap = max(1, int(capacity_per_trip or DEFAULT_CAPACITY_PER_TRIP))

    if not normalized_bikes:
        return {
            "routes": [],
            "vehicle_count": 0,
            "route_count": 0,
            "total_distance_m": 0.0,
            "bike_count": 0,
            "capacity_per_trip": cap,
            "bike_assignments": {},
            "message": "无低电量车辆",
        }

    # 直接使用与dispatch_opt.py相同的路网加载逻辑，确保使用过滤后的路网数据
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    road_file = os.path.join(base_dir, 'data', 'WHUInfo_Roads.geojson')
    boundary_path = os.path.join(base_dir, 'data', 'WHUInfo.geojson')
    roads_gdf_for_route = load_and_process_roads(road_file, boundary_path)

    if roads_gdf_for_route is not None:
        print(f"[Battery Route] Using load_and_process_roads for route generation, roads_gdf has {len(roads_gdf_for_route)} features")
        G, main_nodes = build_road_graph_from_gdf(roads_gdf_for_route)
    elif roads_gdf is not None:
        print(f"[Battery Route] Using roads_gdf for route generation, roads_gdf has {len(roads_gdf)} features")
        G, main_nodes = build_road_graph_from_gdf(roads_gdf)
    else:
        print(f"[Battery Route] Using roads_geojson for route generation")
        G, main_nodes = build_road_graph(roads_geojson)

    print(f"[Battery Route] Road network: {G.number_of_nodes()} nodes, {G.number_of_edges()} edges")
    print(f"[Battery Route] Main nodes sample: {main_nodes[:5] if main_nodes else 'empty'}")

    # 保存车辆的原始位置，再吸附
    for bike in normalized_bikes:
        bike['original_lng'] = bike['lng']
        bike['original_lat'] = bike['lat']

    # 将所有车辆吸附到路网节点上
    print(f"[Battery Route] 正在将车辆吸附到路网节点")
    normalized_bikes = [snap_bike_to_road(bike, G, main_nodes) for bike in normalized_bikes]

    vehicle_count = max(1, math.ceil(len(normalized_bikes) / cap))
    service_points = _pick_service_points(service_points or [], normalized_bikes)

    # 将服务点也吸附到路网节点上
    print(f"[Battery Route] 正在将服务点吸附到路网节点")
    for i, sp in enumerate(service_points):
        sp_pos = (sp["lng"], sp["lat"])
        nearest_node = _find_nearest_node(G, main_nodes, sp_pos)
        if nearest_node:
            service_points[i] = {
                **sp,
                "lng": nearest_node[0],
                "lat": nearest_node[1]
            }

    # 使用空间聚类将车辆分组
    bike_groups = _spatial_chunks(normalized_bikes, vehicle_count)

    routes = []
    bike_assignments = {}
    total_distance = 0.0

    for i, group in enumerate(bike_groups):
        if not group:
            continue

        vehicle_id = f"battery_service_{i + 1}"
        vehicle_name = f"换电运维车{i + 1}"
        route_color = ROUTE_COLORS[i % len(ROUTE_COLORS)]
        service_point = _pick_nearest_service_point(group, service_points)

        # 使用ACO蚁群算法优化路线（与调度算法一致）
        # 换电场景：运维车从服务点出发，访问所有车辆换电，最后返回服务点
        # ACO逻辑：从type=1（供应点/起点）出发，优先访问type=-1（需求点）
        # 为了让ACO从服务点出发，将服务点设为type=1，车辆设为type=-1
        actions = []
        # 首先添加服务点作为起点（type=1会优先被选择）
        actions.append({
            'pos': (service_point["lng"], service_point["lat"]),
            'type': 1,  # 供应点（起点）
            'amount': len(group),
            'name': service_point.get("name", "补给点")
        })
        # 然后添加所有车辆作为需要访问的点
        for idx, bike in enumerate(group):
            actions.append({
                'pos': (bike["lng"], bike["lat"]),
                'type': -1,  # 需求点（需要访问）
                'amount': 1,
                'name': bike.get("id", f"车辆{idx}")
            })

        # 构建距离矩阵
        n = len(actions)
        dist_mat = np.full((n, n), np.inf)

        for a_idx in range(n):
            for b_idx in range(n):
                if a_idx == b_idx:
                    dist_mat[a_idx, b_idx] = 0
                    continue
                start_pos = actions[a_idx]['pos']
                end_pos = actions[b_idx]['pos']
                # 使用路网计算最短路径距离
                try:
                    s_nearest = _find_nearest_node(G, main_nodes, start_pos)
                    e_nearest = _find_nearest_node(G, main_nodes, end_pos)
                    if s_nearest and e_nearest:
                        path_length = nx.shortest_path_length(G, s_nearest, e_nearest, weight='weight')
                        # 添加到路网节点的额外距离
                        extra = np.hypot(start_pos[0] - s_nearest[0], start_pos[1] - s_nearest[1]) * 111000
                        extra += np.hypot(end_pos[0] - e_nearest[0], end_pos[1] - e_nearest[1]) * 111000
                        dist_mat[a_idx, b_idx] = path_length + extra
                    else:
                        dist_mat[a_idx, b_idx] = haversine_m(start_pos[1], start_pos[0], end_pos[1], end_pos[0])
                except:
                    dist_mat[a_idx, b_idx] = haversine_m(start_pos[1], start_pos[0], end_pos[1], end_pos[0])

        # 检查distance matrix中是否有inf值
        inf_count = np.isinf(dist_mat).sum()
        if inf_count > 0:
            print(f"[Battery] Distance matrix中有 {inf_count} 个inf值（总共 {n*n} 个）")
        print(f"[Battery] Distance matrix中非inf值数量: {n*n - inf_count}")

        # 使用ACO蚁群算法计算最优路径
        aco = ACO(actions, dist_mat, capacity=cap, n_ants=30, n_iter=50, seed=42 + i)
        best_path, best_cost = aco.solve()

        print(f"[Battery] ACO结果: best_path={best_path}, best_cost={best_cost}, 车辆数量={len(group)}")

        # 使用ACO的最佳路径
        # 过滤掉起点（服务点），只保留车辆
        bike_indices = [idx for idx in best_path if idx != 0]
        # 根据ACO的结果重新排序车辆
        ordered_bikes = []
        used_indices = set()
        for idx in bike_indices:
            if idx == 0:
                continue
            # actions[0]是服务点，车辆从actions[1]开始
            bike_idx = idx - 1
            if 0 <= bike_idx < len(group) and bike_idx not in used_indices:
                ordered_bikes.append(group[bike_idx])
                used_indices.add(bike_idx)
        
        # 如果有遗漏的车辆（可能是因为ACO的路径没有包含所有车辆），用贪心最近邻算法补充
        if len(ordered_bikes) < len(group):
            remaining_bikes = [bike for bike in group if bike not in ordered_bikes]
            print(f"[Battery] ACO遗漏了 {len(remaining_bikes)} 辆车，用贪心算法补充")
            # 确保所有车辆都在列表中
            ordered_bikes.extend(remaining_bikes)
        
        # 确保所有车辆都被包含
        if len(ordered_bikes) < len(group):
            print(f"[Battery] 警告：有 {len(group) - len(ordered_bikes)} 辆车未被包含在路线中")

        # 生成路线
        polyline = [{"lng": service_point["lng"], "lat": service_point["lat"]}]
        current = {"lng": service_point["lng"], "lat": service_point["lat"]}

        for bike in ordered_bikes:
            # 使用原始位置构建点
            bike_original = {
                "lng": bike.get("original_lng", bike["lng"]),
                "lat": bike.get("original_lat", bike["lat"])
            }
            
            # 先连接到吸附后的位置
            seg = _connect_points_via_road(current, bike, G, main_nodes)
            if seg:
                if len(seg) > 1:
                    polyline.extend(seg[1:])
                else:
                    polyline.extend(seg)
            
            # 关键！添加原始位置！
            polyline.append(bike_original)
            current = bike_original  # 下一段从原始位置开始

        back_seg = _connect_points_via_road(current, service_point, G, main_nodes)
        if back_seg:
            if len(back_seg) > 1:
                polyline.extend(back_seg[1:])
            else:
                polyline.extend(back_seg)

        route_dist = _polyline_distance(polyline)
        total_distance += route_dist

        for order_idx, bike in enumerate(ordered_bikes):
            bike_assignments[bike["id"]] = {
                "vehicle_id": vehicle_id,
                "vehicle_name": vehicle_name,
                "route_name": f"换电任务路线{i + 1}",
                "service_order": order_idx + 1,
            }

        routes.append({
            "vehicle_id": vehicle_id,
            "vehicle_name": vehicle_name,
            "route_name": f"换电任务路线{i + 1}",
            "route_color": route_color,
            "service_count": len(ordered_bikes),
            "load_count": len(ordered_bikes),
            "remaining_capacity": max(0, cap - len(ordered_bikes)),
            "capacity_per_trip": cap,
            "service_point": {"lng": service_point["lng"], "lat": service_point["lat"]},
            "service_point_name": service_point.get("name") or "补给点",
            "route_depot_name": service_point.get("name") or "补给点",
            "start_point": {"lng": service_point["lng"], "lat": service_point["lat"]},
            "end_point": {"lng": service_point["lng"], "lat": service_point["lat"]},
            "ordered_bikes": [
                {
                    "id": b["id"],
                    "lng": b.get("original_lng", b["lng"]),
                    "lat": b.get("original_lat", b["lat"]),
                    "battery": b["battery"],
                    "last_used": b.get("last_used", "-"),
                    "service_order": idx + 1,
                }
                for idx, b in enumerate(ordered_bikes)
            ],
            "points": polyline,
            "total_distance_m": round(route_dist, 1),
        })

    return {
        "routes": routes,
        "vehicle_count": len(routes),
        "route_count": len(routes),
        "total_distance_m": round(total_distance, 1),
        "bike_count": len(normalized_bikes),
        "capacity_per_trip": cap,
        "bike_assignments": bike_assignments,
    }