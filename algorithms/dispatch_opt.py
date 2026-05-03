import os
import sys
import random
import numpy as np
import networkx as nx
import geopandas as gpd
from .data_utils import load_and_process_roads

# ================== 路网构建 ==================
def build_whu_road_graph(geojson_path):
    """构建可通行的路网图"""
    # 使用与app.py相同的处理逻辑，确保使用相同的边界文件
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    boundary_path = os.path.join(base_dir, 'data', 'WHUInfo.geojson')
    roads_gdf = load_and_process_roads(geojson_path, boundary_path)
    if roads_gdf is None:
        return nx.Graph(), []

    G = nx.Graph()

    for _, row in roads_gdf.iterrows():
        geom = row.geometry
        if geom is None:
            continue

        lines = geom.geoms if geom.geom_type == 'MultiLineString' else [geom]
        for line in lines:
            coords = list(line.coords)
            for i in range(len(coords) - 1):
                p1, p2 = coords[i], coords[i + 1]
                d = np.hypot(p1[0] - p2[0], p1[1] - p2[1]) * 111000

                road_name = row.get('name', '')
                if road_name and '求是二路' in str(road_name):
                    weight = d * 0.5
                elif road_name:
                    weight = d * 0.8
                else:
                    weight = d

                G.add_edge(p1, p2, weight=weight)

    if G.number_of_nodes() > 0:
        components = list(nx.connected_components(G))
        largest = max(components, key=len)
        G = G.subgraph(largest).copy()

    return G, list(G.nodes)


def find_nearest_node(graph, point, main_nodes=None):
    """找到离给定点最近的路网节点"""
    nodes = main_nodes if main_nodes is not None else list(graph.nodes)
    if not nodes:
        return None
    return min(nodes, key=lambda n: (n[0] - point[0]) ** 2 + (n[1] - point[1]) ** 2)


def load_demand_data(time_slot):
    """加载不同时段的需求数据"""
    data = {
        'morning': [
            {'pos': (114.3645, 30.5310), 'type': 1, 'amount': 20, 'name': '宿舍区A'},
            {'pos': (114.3657, 30.5288), 'type': -1, 'amount': 12, 'name': '教学区A'},
            {'pos': (114.3637, 30.5307), 'type': -1, 'amount': 8, 'name': '食堂'},
            {'pos': (114.3630, 30.5300), 'type': 1, 'amount': 15, 'name': '3舍'},
            {'pos': (114.3625, 30.5295), 'type': 1, 'amount': 10, 'name': '5舍'},
            {'pos': (114.3620, 30.5290), 'type': 1, 'amount': 12, 'name': '6舍'},
            {'pos': (114.3648, 30.5288), 'type': -1, 'amount': 15, 'name': '1号教学楼'},
            {'pos': (114.3667, 30.5284), 'type': -1, 'amount': 18, 'name': '2号教学楼'},
            {'pos': (114.3630, 30.5295), 'type': -1, 'amount': 10, 'name': '操场附近'},
            {'pos': (114.3650, 30.5285), 'type': -1, 'amount': 12, 'name': '信息学部南区'},
            {'pos': (114.3670, 30.5280), 'type': -1, 'amount': 15, 'name': '信息学部西区'},
            {'pos': (114.3635, 30.5280), 'type': -1, 'amount': 10, 'name': '信息学部东区'}
        ],
        'noon': [
            {'pos': (114.3657, 30.5288), 'type': 1, 'amount': 15, 'name': '教学区A'},
            {'pos': (114.3645, 30.5310), 'type': -1, 'amount': 10, 'name': '宿舍区A'},
            {'pos': (114.3637, 30.5307), 'type': -1, 'amount': 5, 'name': '食堂'},
            {'pos': (114.3648, 30.5288), 'type': 1, 'amount': 12, 'name': '1号教学楼'},
            {'pos': (114.3667, 30.5284), 'type': 1, 'amount': 15, 'name': '2号教学楼'},
            {'pos': (114.3630, 30.5295), 'type': 1, 'amount': 10, 'name': '操场附近'},
            {'pos': (114.3630, 30.5300), 'type': -1, 'amount': 12, 'name': '3舍'},
            {'pos': (114.3625, 30.5295), 'type': -1, 'amount': 10, 'name': '5舍'},
            {'pos': (114.3620, 30.5290), 'type': -1, 'amount': 12, 'name': '6舍'},
            {'pos': (114.3650, 30.5285), 'type': 1, 'amount': 15, 'name': '信息学部南区'},
            {'pos': (114.3670, 30.5280), 'type': 1, 'amount': 18, 'name': '信息学部西区'},
            {'pos': (114.3635, 30.5280), 'type': 1, 'amount': 12, 'name': '信息学部东区'}
        ],
        'evening': [
            {'pos': (114.3657, 30.5288), 'type': 1, 'amount': 18, 'name': '教学区A'},
            {'pos': (114.3645, 30.5310), 'type': -1, 'amount': 10, 'name': '宿舍区A'},
            {'pos': (114.3637, 30.5307), 'type': -1, 'amount': 8, 'name': '食堂'},
            {'pos': (114.3648, 30.5288), 'type': 1, 'amount': 15, 'name': '1号教学楼'},
            {'pos': (114.3667, 30.5284), 'type': 1, 'amount': 18, 'name': '2号教学楼'},
            {'pos': (114.3630, 30.5295), 'type': 1, 'amount': 12, 'name': '操场附近'},
            {'pos': (114.3630, 30.5300), 'type': -1, 'amount': 15, 'name': '3舍'},
            {'pos': (114.3625, 30.5295), 'type': -1, 'amount': 12, 'name': '5舍'},
            {'pos': (114.3620, 30.5290), 'type': -1, 'amount': 15, 'name': '6舍'},
            {'pos': (114.3650, 30.5285), 'type': 1, 'amount': 18, 'name': '信息学部南区'},
            {'pos': (114.3670, 30.5280), 'type': 1, 'amount': 20, 'name': '信息学部西区'},
            {'pos': (114.3635, 30.5280), 'type': 1, 'amount': 15, 'name': '信息学部东区'}
        ]
    }
    return data.get(time_slot, [])

# ================== 距离矩阵 ==================
def precompute_dist_matrix(G, actions, main_nodes):
    """预计算距离矩阵"""
    n = len(actions)
    if n == 0:
        return np.array([])

    snapped = [find_nearest_node(G, a['pos'], main_nodes) for a in actions]
    dist_mat = np.full((n, n), np.inf)

    for i in range(n):
        if snapped[i] is None:
            continue
        lengths = nx.single_source_dijkstra_path_length(G, snapped[i], weight='weight')
        for j in range(n):
            if snapped[j] is not None and snapped[j] in lengths:
                dist_mat[i, j] = lengths[snapped[j]]

    for i in range(n):
        for j in range(n):
            if dist_mat[i, j] == np.inf:
                p1 = actions[i]['pos']
                p2 = actions[j]['pos']
                dist_mat[i, j] = np.hypot(p1[0] - p2[0], p1[1] - p2[1]) * 111000

    return dist_mat

# ================== 蚁群算法 ==================
class ACO:
    """蚁群算法实现"""
    def __init__(self, actions, dist_mat, capacity, n_ants=50, n_iter=100, alpha=1.5, beta=2.5, rho=0.1, q=200, seed=42):
        self.actions = actions
        self.n = len(actions)
        self.dist = dist_mat
        self.capacity = capacity
        self.n_ants = n_ants
        self.n_iter = n_iter
        self.alpha = alpha
        self.beta = beta
        self.rho = rho
        self.q = q
        self.seed = seed

        np.random.seed(seed)
        random.seed(seed)
        self.pheromone = np.ones((self.n, self.n)) * 0.1

    def solve(self):
        """解决路径规划问题"""
        best_path = None
        best_cost = np.inf

        for _ in range(self.n_iter):
            all_paths = []
            for _ in range(self.n_ants):
                path, cost = self._build_path()
                if path and cost < best_cost:
                    best_cost = cost
                    best_path = path
                all_paths.append((path, cost))

            self.pheromone *= (1 - self.rho)

            for path, cost in all_paths:
                if not path or cost <= 0:
                    continue
                delta = self.q / (cost + 1e-6)
                for i in range(len(path) - 1):
                    self.pheromone[path[i], path[i + 1]] += delta

        return best_path, best_cost

    def _pick_next(self, curr, candidates):
        """选择下一个节点"""
        scores = []
        for j in candidates:
            tau = self.pheromone[curr, j] ** self.alpha
            eta = (1.0 / (self.dist[curr, j] + 1e-6)) ** self.beta
            scores.append(tau * eta)

        total = sum(scores)
        if total <= 0:
            return random.choice(candidates)

        probs = [s / total for s in scores]
        r = random.random()
        acc = 0.0
        for idx, p in enumerate(probs):
            acc += p
            if r <= acc:
                return candidates[idx]
        return candidates[-1]

    def _build_path(self):
        """构建路径"""
        if self.n == 0:
            return [], np.inf

        supply = [i for i, a in enumerate(self.actions) if a['type'] == 1]
        demand = [i for i, a in enumerate(self.actions) if a['type'] == -1]

        unvisited = set(range(self.n))

        # 调度车默认满载40辆电动车
        # 优先从供应点出发，确保有足够的车辆供应
        if supply:
            # 从供应量最大的供应点出发
            curr = max(supply, key=lambda x: self.actions[x]['amount'])
        elif demand:
            # 如果没有供应点，从需求量最大的需求点出发
            curr = max(demand, key=lambda x: self.actions[x]['amount'])
        else:
            return [], np.inf

        path = [curr]
        unvisited.remove(curr)

        # 调度车默认满载40辆电动车
        curr_load = self.capacity
        total_dist = 0.0

        while unvisited:
            candidates = []

            for i in list(unvisited):
                action = self.actions[i]
                candidates.append(i)

            if not candidates:
                break

            # 优先访问需求点
            preferred = [i for i in candidates if self.actions[i]['type'] == -1]
            if preferred:
                candidates = preferred

            next_idx = self._pick_next(curr, candidates)
            total_dist += self.dist[curr, next_idx]

            if self.actions[next_idx]['type'] == 1:
                # 供应点：补充车辆到满载
                curr_load = self.capacity
            else:
                # 需求点：从调度车卸车
                # 不需要更新负载，因为调度车默认满载
                pass

            curr = next_idx
            path.append(curr)
            unvisited.remove(curr)

        return path, total_dist

# ================== 数据预处理 ==================
def parse_parking_points(parking_points):
    """解析停车点数据"""
    actions = []

    if not parking_points:
        return actions

    for idx, pt in enumerate(parking_points):
        if not isinstance(pt, dict):
            continue

        lat = pt.get('lat', pt.get('latitude'))
        lng = pt.get('lng', pt.get('longitude'))
        transfer = pt.get('transfer', 0)
        demand_type = pt.get('demand_type', 0)
        amount = pt.get('amount', transfer)
        current = pt.get('current', 0)
        demand = pt.get('demand', 0)

        try:
            lat = float(lat)
            lng = float(lng)
            transfer = int(round(float(transfer)))
            amount = int(round(float(amount)))
            demand_type = int(round(float(demand_type))) if demand_type is not None else 0
            current = int(round(float(current)))
            demand = int(round(float(demand)))
        except Exception:
            continue

        name = str(pt.get('name') or f'停车点{idx + 1}')

        # 计算实际的供需差异
        action_type = 0
        action_amount = 0
        
        if transfer != 0:
            action_type = -1 if transfer > 0 else 1
            action_amount = abs(transfer)
        elif demand_type in (1, -1):
            action_type = -1 if demand_type == 1 else 1
            action_amount = abs(amount)
        elif current > 0 and demand > 0:
            # 基于当前车辆数和需求量计算供需差异
            diff = current - demand
            if diff > 0:
                # 供应过剩
                action_type = 1
                action_amount = diff
            else:
                # 需求不足
                action_type = -1
                action_amount = abs(diff)
        else:
            # 如果没有足够的信息，跳过该停车点
            continue

        if action_amount <= 0:
            continue

        if action_type == -1:
            actions.append({
                'pos': (lng, lat),
                'type': -1,
                'amount': action_amount,
                'name': name
            })
        else:
            actions.append({
                'pos': (lng, lat),
                'type': 1,
                'amount': action_amount,
                'name': name
            })

    return actions

# ================== 路径计算 ==================
def shortest_path_coords(G, main_nodes, start_pos, end_pos):
    """计算最短路径坐标"""
    # 确保路网图存在
    if G.number_of_nodes() == 0:
        coords = [[start_pos[0], start_pos[1]], [end_pos[0], end_pos[1]]]
        dist = np.hypot(start_pos[0] - end_pos[0], start_pos[1] - end_pos[1]) * 111000
        return coords, dist
    
    # 找到最近的路网节点
    s_nearest = find_nearest_node(G, start_pos, main_nodes)
    e_nearest = find_nearest_node(G, end_pos, main_nodes)
    
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
    
    # ⭐修复：从停车点原始位置开始 -> 路网起点 -> 完整路网 -> 路网终点 -> 停车点原始位置
    coords = []
    
    # 1. 先添加原始起点
    coords.append([start_pos[0], start_pos[1]])
    
    # 2. 添加路网起点（如果和原始起点不一样）
    if (start_pos[0] != s_nearest[0] or start_pos[1] != s_nearest[1]):
        coords.append([s_nearest[0], s_nearest[1]])
    
    # 3. 添加完整的路网路径（跳过重复的起点）
    for node in path_nodes[1:]:
        coords.append([node[0], node[1]])
    
    # 4. 添加原始终点（如果和路网终点不一样）
    if (end_pos[0] != e_nearest[0] or end_pos[1] != e_nearest[1]):
        coords.append([end_pos[0], end_pos[1]])
    
    # 计算额外距离（停车点到路网节点的直线距离）
    extra_dist = 0.0
    extra_dist += np.hypot(start_pos[0] - s_nearest[0], start_pos[1] - s_nearest[1]) * 111000
    extra_dist += np.hypot(end_pos[0] - e_nearest[0], end_pos[1] - e_nearest[1]) * 111000
    
    total_dist = path_dist + extra_dist
    
    return coords, float(total_dist)

# ================== 结果格式化 ==================
def format_single_route(vehicle_id, route_name, path, actions, G, main_nodes, total_transfer_override=None):
    """格式化单条路线"""
    if not path:
        return None

    # 构建原始任务的映射，用于查找转运数量
    task_transfer_map = {}
    original_tasks = []
    
    if isinstance(actions, dict) and 'original_tasks' in actions:
        original_tasks = actions.get('original_tasks', [])
        task_map = actions.get('task_map', {})
        actions = actions.get('actions', [])
        
        for task in original_tasks:
            s_idx = task['s_idx']
            d_idx = task['d_idx']
            s_group_idx = task_map.get(s_idx)
            d_group_idx = task_map.get(d_idx)
            if s_group_idx is not None and d_group_idx is not None:
                task_transfer_map[(s_group_idx, d_group_idx)] = task['transfer']

    # 调度车初始满载40辆电动车
    vehicle_load = 40
    max_capacity = 40

    # 生成路段和路线
    segment_road_coords = []
    segment_transfers = []
    total_distance = 0.0

    # 先计算每一段的转运数量
    for i in range(len(path) - 1):
        a1 = actions[path[i]]
        a2 = actions[path[i + 1]]

        # 计算转运数量（针对当前路段）
        transfer_amount = 0
        if a1['type'] == 1 and a2['type'] == -1:
            supply_amount = int(a1['amount'])
            demand_amount = int(a2['amount'])
            transfer_amount = min(supply_amount, demand_amount)
        elif a1['type'] == 1 and a2['type'] == 1:
            if vehicle_load < max_capacity:
                can_load = max_capacity - vehicle_load
                load_amount = min(can_load, int(a1['amount']))
                transfer_amount = load_amount
                vehicle_load += load_amount
        elif a1['type'] == -1 and a2['type'] == -1:
            unload_amount = min(int(a2['amount']), vehicle_load)
            transfer_amount = unload_amount
            vehicle_load -= unload_amount
        elif a1['type'] == -1 and a2['type'] == 1:
            if vehicle_load > 0:
                transfer_amount = min(vehicle_load, int(a2['amount']))
                vehicle_load -= transfer_amount
        
        transfer_amount = max(0, transfer_amount)
        segment_transfers.append(transfer_amount)

    # ⭐修复：依次连接所有途经点，而不是只连接起点到终点
    # 方法：计算每两个相邻点之间的路径，然后把它们拼接起来
    if len(path) >= 2:
        route_coords = []
        total_distance = 0.0
        
        # 依次计算每两个相邻点之间的路径并拼接
        for i in range(len(path) - 1):
            a1 = actions[path[i]]
            a2 = actions[path[i + 1]]
            start_pos = a1['pos']
            end_pos = a2['pos']
            
            # 计算这段路径
            road_coords, path_dist = shortest_path_coords(G, main_nodes, start_pos, end_pos)
            segment_road_coords.append(road_coords)
            total_distance += path_dist
            
            # 拼接到完整路径（避免重复的点）
            if len(route_coords) == 0:
                # 第一段，直接添加
                route_coords.extend(road_coords)
            else:
                # 后续段，跳过第一个点（因为它和上一段最后一个点相同）
                route_coords.extend(road_coords[1:])
    else:
        # 只有一个点
        only_pos = actions[path[0]]['pos']
        route_coords = [[only_pos[0], only_pos[1]]]

    total_supply = sum(actions[idx]['amount'] for idx in path if actions[idx]['type'] == 1)
    total_demand = sum(actions[idx]['amount'] for idx in path if actions[idx]['type'] == -1)
    total_transfer = int(total_transfer_override if total_transfer_override is not None else sum(segment_transfers))
    shortage = max([actions[idx]['amount'] for idx in path if actions[idx]['type'] == -1] or [0])

    line_feature = {
        "type": "Feature",
        "geometry": {"type": "LineString", "coordinates": route_coords},
        "properties": {
            "vehicle_id": vehicle_id,
            "route_name": route_name,
            "from": actions[path[0]]['name'],
            "to": actions[path[-1]]['name'],
            "from_type": "供应" if actions[path[0]]['type'] == 1 else "需求",
            "to_type": "供应" if actions[path[-1]]['type'] == 1 else "需求",
            "transfer": total_transfer,
            "shortage": shortage,
            "distance_m": total_distance,
            "total_distance_m": total_distance,
            "total_distance": total_distance,
            "total_transfer": total_transfer,
            "point_count": len(path),
            "path": [actions[idx]['name'] for idx in path],
            "path_types": ["供应" if actions[idx]['type'] == 1 else "需求" for idx in path],
            "original_coords": [[actions[idx]['pos'][0], actions[idx]['pos'][1]] for idx in path],
            "segment_road_coords": segment_road_coords,
            "segment_transfers": segment_transfers
        }
    }

    point_features = []
    for order, idx in enumerate(path, start=1):
        action = actions[idx]
        # ⭐修复：停车点标记显示在原始位置，而不是吸附到路网节点
        point_features.append({
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [action['pos'][0], action['pos'][1]]},
            "properties": {
                "name": action['name'],
                "type_text": "供应" if action['type'] == 1 else "需求",
                "transfer_amount": -action['amount'] if action['type'] == 1 else action['amount'],
                "order": order,
                "vehicle_id": vehicle_id,
                "route_name": route_name
            }
        })

    summary = {
        "name": route_name,
        "from": actions[path[0]]['name'],
        "to": actions[path[-1]]['name'],
        "transfer": total_transfer,
        "shortage": shortage,
        "distance_m": total_distance,
        "vehicle_id": vehicle_id
    }

    return {
        "features": [line_feature] + point_features,
        "summary": summary,
        "distance_m": total_distance,
        "transfer": total_transfer
    }

# ================== 主接口 ==================
def run_dispatch_optimization(time_slot='morning', parking_points=None, role='admin', dispatcher_count=3):
    """运行调度优化算法"""
    role = str(role or 'admin').lower()
    role_mode = 'dispatcher' if role == 'dispatcher' else 'admin'

    print(f"=== 调度优化开始：role={role_mode}, time_slot={time_slot}, points={len(parking_points) if parking_points else 0}", file=sys.stderr)

    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    # 使用与app.py相同的处理逻辑，直接使用WHUInfo_Roads.geojson并应用过滤和裁剪
    road_file = os.path.join(base_dir, 'data', 'WHUInfo_Roads.geojson')
    G, main_nodes = build_whu_road_graph(road_file)

    if G.number_of_nodes() == 0:
        return {"geojson": {"type": "FeatureCollection", "features": []}, "routes": [], "metrics": {}}

    if parking_points:
        actions = parse_parking_points(parking_points)
    else:
        actions = load_demand_data(time_slot)
    if not actions:
        return {"geojson": {"type": "FeatureCollection", "features": []}, "routes": [], "metrics": {}}

    # 计算供应点和需求点的数量
    supply_count = sum(1 for a in actions if a['type'] == 1)
    demand_count = sum(1 for a in actions if a['type'] == -1)
    
    # 计算总供应和总需求
    total_supply = sum(a['amount'] for a in actions if a['type'] == 1)
    total_demand = sum(a['amount'] for a in actions if a['type'] == -1)
    
    print(f"=== 基础数据 ===", file=sys.stderr)
    print(f"供应点数量: {supply_count}", file=sys.stderr)
    print(f"需求点数量: {demand_count}", file=sys.stderr)
    print(f"总供应: {total_supply} 辆", file=sys.stderr)
    print(f"总需求: {total_demand} 辆", file=sys.stderr)
    print(f"净需求: {max(0, total_demand - total_supply)} 辆", file=sys.stderr)

    all_features = []
    route_summaries = []
    total_distance = 0.0
    total_transfer = 0

    if role_mode == 'dispatcher':
        # 调度员模式：只生成一条路线
        dist_mat = precompute_dist_matrix(G, actions, main_nodes)
        # 每辆调度车初始满载40辆可用电动车
        aco = ACO(actions, dist_mat, capacity=40)
        best_path, _ = aco.solve()

        if not best_path:
            return {"geojson": {"type": "FeatureCollection", "features": []}, "routes": [], "metrics": {}}

        route_result = format_single_route(
            vehicle_id="vehicle_1",
            route_name="调度员路线",
            path=best_path,
            actions=actions,
            G=G,
            main_nodes=main_nodes
        )

        if not route_result:
            return {"geojson": {"type": "FeatureCollection", "features": []}, "routes": [], "metrics": {}}

        all_features.extend(route_result["features"])
        route_summaries.append(route_result["summary"])
        total_distance += route_result["distance_m"]
        total_transfer += route_result["transfer"]

    else:
        # 管理员模式：生成多条路线
        # 1. 计算所需的调度车数量
        # 每辆调度车初始满载40辆可用电动车
        initial_capacity_per_vehicle = 40
        
        # 计算理论上需要的最少车辆数（基于供需）
        required_vehicles_by_demand = max(1, int((total_demand + initial_capacity_per_vehicle - 1) / initial_capacity_per_vehicle))
        
        # 2. 计算基于路程的车辆数
        # 预计算距离矩阵
        dist_mat = precompute_dist_matrix(G, actions, main_nodes)
        
        # 计算总路程需求
        total_workload = 0.0
        for i in range(len(actions)):
            for j in range(len(actions)):
                if actions[i]['type'] == 1 and actions[j]['type'] == -1:
                    total_workload += dist_mat[i, j]
        
        # 每辆调度车的最大路程限制（1.5km，浮动0.2km）
        max_distance_per_vehicle = 1700.0  # 1.7km
        required_vehicles_by_distance = max(1, int(total_workload / max_distance_per_vehicle) + 1)
        
        # 3. 确定最终车辆数（不设上限，让算法自动决定需要的车辆数）
        required_vehicles = max(required_vehicles_by_demand, required_vehicles_by_distance)
        # 如果前端传递了调度车数量限制，则使用前端的值
        if dispatcher_count > 0:
            required_vehicles = min(required_vehicles, dispatcher_count)
        
        # 限制最大车辆数为10辆
        required_vehicles = min(required_vehicles, 10)
        
        print(f"=== 车辆数计算 ===", file=sys.stderr)
        print(f"基于供需的车辆数: {required_vehicles_by_demand}", file=sys.stderr)
        print(f"基于路程的车辆数: {required_vehicles_by_distance}", file=sys.stderr)
        print(f"最终车辆数: {required_vehicles}", file=sys.stderr)

        # 4. 分配任务到不同的调度车
        # 确保每个选址点只被一辆调度车处理
        assigned_points = set()
        vehicle_groups = []

        supply_points = [i for i, a in enumerate(actions) if a['type'] == 1]
        demand_points = [i for i, a in enumerate(actions) if a['type'] == -1]

        print(f"=== 任务分配 ===", file=sys.stderr)
        print(f"总供应点数: {len(supply_points)}", file=sys.stderr)
        print(f"总需求点数: {len(demand_points)}", file=sys.stderr)

        # 计算总需求和目标每车工作量
        total_demand = sum(actions[i]['amount'] for i in demand_points)
        target_per_vehicle = total_demand / required_vehicles if required_vehicles > 0 else total_demand

        # 计算每个需求点到所有供应点的最小距离
        demand_to_supply_dist = {}
        for d_idx in demand_points:
            min_dist = min(dist_mat[d_idx, s_idx] for s_idx in supply_points) if supply_points else 0
            demand_to_supply_dist[d_idx] = min_dist

        # 基于地理位置进行聚类分配
        # 1. 将需求点按到最近供应点的距离排序
        demand_by_loc = sorted(demand_points, key=lambda i: demand_to_supply_dist[i])

        # 2. 轮询分配给调度车，确保工作量均匀
        vehicle_loads = [0] * required_vehicles
        vehicle_supply_assignments = [[] for _ in range(required_vehicles)]
        vehicle_demand_assignments = [[] for _ in range(required_vehicles)]

        # 先按需求点地理分布分配（轮询方式确保均匀）
        for d_idx in demand_by_loc:
            # 找到当前负载最小的调度车
            min_load_vehicle = min(range(required_vehicles), key=lambda v: vehicle_loads[v])
            vehicle_demand_assignments[min_load_vehicle].append(d_idx)
            vehicle_loads[min_load_vehicle] += actions[d_idx]['amount']
            assigned_points.add(d_idx)

        # 3. 为每辆调度车分配就近的供应点
        for v_idx in range(required_vehicles):
            if not vehicle_demand_assignments[v_idx]:
                continue

            # 找到该车需求点就近的供应点
            assigned_demands = vehicle_demand_assignments[v_idx]
            assigned_supplies = []

            # 先分配就近的供应点
            for s_idx in supply_points:
                if len(assigned_supplies) >= 2:  # 每车最多2个供应点
                    break
                # 检查这个供应点是否距离该车的任意需求点较近
                for d_idx in assigned_demands:
                    if dist_mat[s_idx, d_idx] < 800:  # 800米内视为就近
                        if s_idx not in assigned_points:
                            assigned_supplies.append(s_idx)
                            assigned_points.add(s_idx)
                            break

            # 如果就近供应点不够，分配任何未分配的供应点
            if not assigned_supplies:
                for s_idx in supply_points:
                    if s_idx not in assigned_points:
                        assigned_supplies.append(s_idx)
                        assigned_points.add(s_idx)
                        break

            # 如果还是没有供应点，从已分配的供应点中调配（但确保每个供应点最多被2辆车使用）
            if not assigned_supplies:
                for s_idx in supply_points:
                    # 检查这个供应点被多少辆车使用了
                    usage_count = sum(1 for v in range(v_idx) if s_idx in vehicle_supply_assignments[v])
                    if usage_count < 2:  # 每个供应点最多被2辆车使用
                        assigned_supplies.append(s_idx)
                        break

            vehicle_supply_assignments[v_idx] = assigned_supplies

        # 4. 构建最终的任务组
        for v_idx in range(required_vehicles):
            vehicle_actions = []
            vehicle_indices = []

            for s_idx in vehicle_supply_assignments[v_idx]:
                vehicle_actions.append(actions[s_idx])
                vehicle_indices.append(s_idx)

            for d_idx in vehicle_demand_assignments[v_idx]:
                vehicle_actions.append(actions[d_idx])
                vehicle_indices.append(d_idx)

            if not [i for i in vehicle_indices if actions[i]['type'] == -1]:
                continue

            total_demand_for_vehicle = sum(actions[i]['amount'] for i in vehicle_demand_assignments[v_idx])

            print(f"车辆 {v_idx + 1} 分配: {len(vehicle_actions)} 个点", file=sys.stderr)
            print(f"  供应点: {[actions[i]['name'] for i in vehicle_supply_assignments[v_idx]]}", file=sys.stderr)
            print(f"  需求点: {[actions[i]['name'] for i in vehicle_demand_assignments[v_idx]]}", file=sys.stderr)
            print(f"  总需求量: {total_demand_for_vehicle}", file=sys.stderr)

            vehicle_groups.append({
                'actions': vehicle_actions,
                'indices': vehicle_indices
            })
        
        # 5. 为每个车辆组运行蚁群算法
        for idx, vehicle_group in enumerate(vehicle_groups, start=1):
            group_actions = vehicle_group['actions']
            
            # 计算组内的距离矩阵
            group_dist_mat = precompute_dist_matrix(G, group_actions, main_nodes)
            
            # 运行蚁群算法
            aco = ACO(group_actions, group_dist_mat, capacity=40, seed=42 + idx)
            best_path, best_cost = aco.solve()
            
            if not best_path:
                continue
            
            # 生成路线结果
            route_result = format_single_route(
                vehicle_id=f"vehicle_{idx + 1}",
                route_name=f"路线{idx + 1}",
                path=best_path,
                actions=group_actions,
                G=G,
                main_nodes=main_nodes
            )
            
            if not route_result:
                continue
            
            # 检查路线长度
            route_distance = route_result["distance_m"]
            if route_distance > 1700:
                print(f"警告：路线{idx}长度为{route_distance:.2f}m，超过1.7km限制", file=sys.stderr)
            
            all_features.extend(route_result["features"])
            route_summaries.append(route_result["summary"])
            total_distance += route_result["distance_m"]
            total_transfer += route_result["transfer"]

    # 6. 计算指标
    metrics = {
        "total_distance": total_distance,
        "total_distance_m": total_distance,
        "total_vehicles": len(route_summaries),
        "vehicle_count": len(route_summaries),
        "route_count": len(route_summaries),
        "total_transfer": total_transfer,
        "average_distance_per_vehicle": total_distance / len(route_summaries) if route_summaries else 0
    }

    # 注意：不要为所有点重复生成Point要素，因为format_single_route已经生成了
    # 这样避免了重复点，并且确保所有点都有正确的vehicle_id和route_name

    result = {
        "role_mode": role_mode,
        "time_slot": time_slot,
        "geojson": {"type": "FeatureCollection", "features": all_features},
        "routes": route_summaries,
        "shortage_count": demand_count,
        "metrics": metrics
    }

    print(f"=== 调度优化完成：route_count={len(route_summaries)}, total_distance={total_distance:.2f}m, average_distance_per_vehicle={metrics['average_distance_per_vehicle']:.2f}m", file=sys.stderr)
    return result