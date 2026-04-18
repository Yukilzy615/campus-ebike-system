import json
import math
import os
import heapq
import random

GROUP_TARGET_SIZE = 5
DEFAULT_MIN_LOW_BATTERY_COUNT = 40
DEFAULT_CAPACITY_PER_TRIP = 6
CAMPUS_CENTER_BD09 = (114.3652, 30.5312)

ROUTE_COLORS = [
    "#28a745",
    "#1a73e8",
    "#fb8c00",
    "#8e24aa",
    "#00acc1",
    "#d81b60",
    "#6d4c41",
    "#546e7a",
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


def build_road_graph(roads_geojson):
    if not roads_geojson:
        return {"coords": {}, "adj": {}}

    coords = {}
    adj = {}

    for line in _iter_lines_from_geojson(roads_geojson):
        for i in range(len(line) - 1):
            p1 = line[i]
            p2 = line[i + 1]
            if not isinstance(p1, list) or not isinstance(p2, list) or len(p1) < 2 or len(p2) < 2:
                continue

            lng1 = _safe_float(p1[0])
            lat1 = _safe_float(p1[1])
            lng2 = _safe_float(p2[0])
            lat2 = _safe_float(p2[1])
            if None in (lng1, lat1, lng2, lat2):
                continue

            k1 = _node_key(lng1, lat1)
            k2 = _node_key(lng2, lat2)

            if k1 not in coords:
                coords[k1] = {"lng": round(lng1, 6), "lat": round(lat1, 6)}
            if k2 not in coords:
                coords[k2] = {"lng": round(lng2, 6), "lat": round(lat2, 6)}

            d = haversine_m(lat1, lng1, lat2, lng2)
            adj.setdefault(k1, []).append((k2, d))
            adj.setdefault(k2, []).append((k1, d))

    return {"coords": coords, "adj": adj}


def _nearest_node_id(graph, lng, lat):
    coords = graph.get("coords") or {}
    if not coords:
        return None

    best_id = None
    best_dist = float("inf")
    for node_id, node in coords.items():
        d = haversine_m(lat, lng, node["lat"], node["lng"])
        if d < best_dist:
            best_dist = d
            best_id = node_id
    return best_id


def _shortest_path_node_ids(graph, start_id, end_id):
    adj = graph.get("adj") or {}
    if not start_id or not end_id or start_id not in adj or end_id not in adj:
        return []
    if start_id == end_id:
        return [start_id]

    pq = [(0.0, start_id)]
    dist = {start_id: 0.0}
    prev = {}
    visited = set()

    while pq:
        cur_dist, node = heapq.heappop(pq)
        if node in visited:
            continue
        visited.add(node)

        if node == end_id:
            break

        for nxt, weight in adj.get(node, []):
            nd = cur_dist + weight
            if nd < dist.get(nxt, float("inf")):
                dist[nxt] = nd
                prev[nxt] = node
                heapq.heappush(pq, (nd, nxt))

    if end_id not in dist:
        return []

    path = [end_id]
    cur = end_id
    while cur != start_id:
        cur = prev.get(cur)
        if cur is None:
            return []
        path.append(cur)
    path.reverse()
    return path


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


def _connect_points_via_road(start_point, end_point, graph):
    coords = graph.get("coords") or {}
    if not coords:
        return [
            {"lng": start_point["lng"], "lat": start_point["lat"]},
            {"lng": end_point["lng"], "lat": end_point["lat"]},
        ]

    start_id = _nearest_node_id(graph, start_point["lng"], start_point["lat"])
    end_id = _nearest_node_id(graph, end_point["lng"], end_point["lat"])
    path_ids = _shortest_path_node_ids(graph, start_id, end_id)

    if not path_ids:
        return [
            {"lng": start_point["lng"], "lat": start_point["lat"]},
            {"lng": end_point["lng"], "lat": end_point["lat"]},
        ]

    points = [{"lng": start_point["lng"], "lat": start_point["lat"]}]
    for node_id in path_ids[1:-1]:
        node = coords[node_id]
        points.append({"lng": node["lng"], "lat": node["lat"]})
    points.append({"lng": end_point["lng"], "lat": end_point["lat"]})
    return _dedup_points(points)


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


def _candidate_points_from_roads(roads_geojson):
    points = []
    seen = set()
    for line in _iter_lines_from_geojson(roads_geojson):
        for p in line:
            if not isinstance(p, list) or len(p) < 2:
                continue
            lng = _safe_float(p[0])
            lat = _safe_float(p[1])
            if lng is None or lat is None:
                continue
            key = _node_key(lng, lat)
            if key in seen:
                continue
            seen.add(key)
            points.append({"lng": round(lng, 6), "lat": round(lat, 6)})
    return points


def _generate_more_low_bikes(threshold, need_count, roads_geojson, existing_count):
    rng = random.Random(20260419 + need_count + existing_count)
    candidates = _candidate_points_from_roads(roads_geojson)

    if not candidates:
        candidates = [
            {"lng": 114.3645, "lat": 30.5310},
            {"lng": 114.3657, "lat": 30.5288},
            {"lng": 114.3668, "lat": 30.5287},
            {"lng": 114.3637, "lat": 30.5307},
        ]

    low_max = max(12, int(threshold))
    generated = []
    for i in range(need_count):
        base = candidates[rng.randint(0, len(candidates) - 1)]
        lng = base["lng"] + (rng.random() - 0.5) * 0.00018
        lat = base["lat"] + (rng.random() - 0.5) * 0.00018
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


def get_low_battery_vehicles(threshold=30, min_count=DEFAULT_MIN_LOW_BATTERY_COUNT,
                             data_dir="data_bd09", roads_geojson=None):
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
        )
        for idx, raw in enumerate(extra):
            bike = _normalize_bike(raw, f"extra_{idx + 1}")
            if bike is not None:
                low.append(bike)

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


def plan_battery_routes(low_bikes, service_points=None, roads_geojson=None, capacity_per_trip=DEFAULT_CAPACITY_PER_TRIP):
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

    vehicle_count = max(1, math.ceil(len(normalized_bikes) / cap))
    service_points = _pick_service_points(service_points or [], normalized_bikes)
    bike_groups = _spatial_chunks(normalized_bikes, vehicle_count)
    graph = build_road_graph(roads_geojson)

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

        ordered_bikes = _nearest_neighbor_order(service_point, group)

        polyline = [{"lng": service_point["lng"], "lat": service_point["lat"]}]
        current = {"lng": service_point["lng"], "lat": service_point["lat"]}

        for bike in ordered_bikes:
            seg = _connect_points_via_road(current, bike, graph)
            if seg:
                polyline.extend(seg[1:] if len(seg) > 1 else seg)
            current = bike

        # 闭环：完成服务后返回补给点/出发点
        back_seg = _connect_points_via_road(current, service_point, graph)
        if back_seg:
            polyline.extend(back_seg[1:] if len(back_seg) > 1 else back_seg)

        polyline = _dedup_points(polyline)
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
                    "lng": b["lng"],
                    "lat": b["lat"],
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
