import os
import sys
import numpy as np
import pandas as pd
import networkx as nx
import geopandas as gpd
import time
import random

# ================== 路网构建（精确矩形裁剪）==================
def build_whu_road_graph(geojson_path):
    G = nx.Graph()
    gdf = gpd.read_file(geojson_path)
    
    # 不过滤任何道路，保留所有道路（包括name为空的）
    print(f"加载道路数量: {len(gdf)} 条", file=sys.stderr)
    
    # 构建 NetworkX 图
    for _, row in gdf.iterrows():
        geom = row.geometry
        lines = geom.geoms if geom.geom_type == 'MultiLineString' else [geom]
        for line in lines:
            coords = list(line.coords)
            for i in range(len(coords)-1):
                p1, p2 = coords[i], coords[i+1]
                d = np.hypot(p1[0]-p2[0], p1[1]-p2[1]) * 111000
                # 为有名称的道路（特别是求是二路）设置较低的权重，优先选择
                road_name = row.get('name', '')
                if road_name and '求是二路' in road_name:
                    weight = d * 0.5  # 权重减半，优先选择
                elif road_name:
                    weight = d * 0.8  # 有名称的道路权重降低
                else:
                    weight = d
                G.add_edge(p1, p2, weight=weight)
    
    # 取最大连通分量
    if G.number_of_nodes() > 0:
        components = list(nx.connected_components(G))
        largest = max(components, key=len)
        G = G.subgraph(largest).copy()
    
    # 打印统计信息
    print(f"过滤后剩余 {len(gdf)} 条道路，构建图含 {G.number_of_nodes()} 个节点", file=sys.stderr)
    return G, list(G.nodes)

def find_nearest_node(graph, point, main_nodes=None):
    nodes = main_nodes if main_nodes is not None else list(graph.nodes)
    best = min(nodes, key=lambda n: (n[0]-point[0])**2 + (n[1]-point[1])**2)
    return best

# ================== 需求数据加载（内置模拟，确保不同时段不同）==================
def load_demand_data(time_slot):
    # 内置模拟数据，确保各时段不同，覆盖整个校园
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
    # 用欧氏距离填充不可达
    for i in range(n):
        for j in range(n):
            if dist_mat[i, j] == np.inf:
                p1 = actions[i]['pos']
                p2 = actions[j]['pos']
                dist_mat[i, j] = np.hypot(p1[0]-p2[0], p1[1]-p2[1]) * 111000
    return dist_mat

# ================== 蚁群算法 ==================
class ACO:
    def __init__(self, actions, dist_mat, capacity, n_ants=10, n_iter=30, alpha=1, beta=3, rho=0.2, q=100, seed=42):
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
        # 设置随机种子，确保相同输入下产生相同的输出
        np.random.seed(seed)
        random.seed(seed)
        self.pheromone = np.ones((self.n, self.n))

    def solve(self):
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
                if not path:
                    continue
                delta = self.q / (cost + 1e-6)
                for i in range(len(path)-1):
                    self.pheromone[path[i], path[i+1]] += delta
        return best_path, best_cost

    def _build_path(self):
        unvisited = set(range(self.n))
        supply = [i for i, a in enumerate(self.actions) if a['type'] == 1]
        demand = [i for i, a in enumerate(self.actions) if a['type'] == -1]
        if not supply or not demand:
            return [], 0
        
        path = []
        total_dist = 0
        
        # 按照供应点→需求点的顺序构建路径
        # 先选择一个供应点作为起点
        curr = supply[0]
        path.append(curr)
        unvisited.remove(curr)
        remaining_supply = supply[1:]
        
        # 构建供应-需求配对
        while remaining_supply or demand:
            # 交替访问供应点和需求点
            if len(path) % 2 == 1:  # 奇数位置，下一个应该是需求点
                candidates = demand
            else:  # 偶数位置，下一个应该是供应点
                candidates = remaining_supply
            
            if not candidates:
                # 如果没有候选点，切换到另一种类型
                if len(path) % 2 == 1:
                    candidates = remaining_supply
                else:
                    candidates = demand
            
            if not candidates:
                break
            
            # 计算选择概率
            probs = []
            for j in candidates:
                tau = self.pheromone[curr, j]
                eta = 1.0 / (self.dist[curr, j] + 1e-6)
                probs.append(tau**self.alpha * eta**self.beta)
            probs = np.array(probs) / sum(probs)
            next_idx = candidates[np.argmax(probs)]
            
            # 添加到路径
            total_dist += self.dist[curr, next_idx]
            path.append(next_idx)
            unvisited.remove(next_idx)
            
            # 从候选列表中移除
            if next_idx in remaining_supply:
                remaining_supply.remove(next_idx)
            elif next_idx in demand:
                demand.remove(next_idx)
            
            curr = next_idx
        
        return path, total_dist

# ================== 生成多条路径 ==================
def generate_multiple_routes(actions, dist_mat, capacity=30, seed=42, time_slot='morning'):
    """
    根据供需状态生成多条点对点调度路线
    每个供应点直接向需求点转运，每辆车容量30
    """
    np.random.seed(seed)
    random.seed(seed)
    
    supply_indices = [i for i, a in enumerate(actions) if a['type'] == 1]
    demand_indices = [i for i, a in enumerate(actions) if a['type'] == -1]
    
    if not supply_indices or not demand_indices:
        return []
    
    # 复制供需量，用于逐步消耗
    remaining_supply = {i: actions[i]['amount'] for i in supply_indices}
    remaining_demand = {i: actions[i]['amount'] for i in demand_indices}
    
    routes = []
    vehicle_id = 1
    
    # 当还有供应和需求时，持续生成路线
    while remaining_supply and remaining_demand:
        # 遍历所有供应点，找到最佳匹配
        best_s = None
        best_d = None
        min_dist = float('inf')
        
        for s in remaining_supply:
            for d in remaining_demand:
                d_ij = dist_mat[s][d]
                if d_ij < min_dist:
                    min_dist = d_ij
                    best_s = s
                    best_d = d
        
        if best_s is None or best_d is None:
            break
        
        # 本次转运量 = min(剩余供应, 剩余需求, 车辆容量)
        transfer = min(remaining_supply[best_s], remaining_demand[best_d], capacity)
        # 确保转运量至少为1（如果为0则跳过）
        if transfer <= 0:
            break
        
        # 创建一条路径：直接从供应点到需求点
        path = [best_s, best_d]
        routes.append((vehicle_id, path))
        vehicle_id += 1
        
        # 更新剩余供需
        remaining_supply[best_s] -= transfer
        remaining_demand[best_d] -= transfer
        if remaining_supply[best_s] <= 0:
            del remaining_supply[best_s]
        if remaining_demand[best_d] <= 0:
            del remaining_demand[best_d]
    
    # 如果还有未处理的供需（理论上不会，但安全起见）
    if remaining_supply or remaining_demand:
        print(f"警告：仍有未匹配的供需，供应剩余 {sum(remaining_supply.values())}, 需求剩余 {sum(remaining_demand.values())}", file=sys.stderr)
    
    # 打印生成的路由信息
    print(f"生成 {len(routes)} 条点对点调度路线", file=sys.stderr)
    for vid, path in routes:
        s_idx = path[0]
        d_idx = path[1]
        amount = min(actions[s_idx]['amount'], actions[d_idx]['amount'], capacity)
        print(f"  车辆{vid}: {actions[s_idx]['name']} -> {actions[d_idx]['name']} (转运 {amount} 辆)", file=sys.stderr)
    
    return routes

# ================== 生成 GeoJSON ==================
def format_result(routes, actions, G, main_nodes, capacity=30):
    if not routes:
        return {"geojson": {"type": "FeatureCollection", "features": []}, "metrics": {"total_distance": 0, "total_vehicles": 0, "total_transfer": 0}}
    
    features = []
    total_dist = 0
    total_transfer = 0
    total_vehicles = len(routes)
    
    for vehicle_id, path in routes:
        path_dist = 0
        path_transfer = 0
        road_path_coords = []
        segment_road_coords = []
        segment_transfers = []
        
        if len(path) < 2:
            continue
        
        for i in range(len(path)-1):
            current_idx = path[i]
            next_idx = path[i+1]
            
            # 确保索引为整数
            if isinstance(current_idx, tuple):
                current_idx = current_idx[0]
            if isinstance(next_idx, tuple):
                next_idx = next_idx[0]
            current_idx = int(current_idx)
            next_idx = int(next_idx)
            
            # 类型修正
            if actions[current_idx]['type'] not in [1, -1]:
                actions[current_idx]['type'] = 1
            if actions[next_idx]['type'] not in [1, -1]:
                actions[next_idx]['type'] = -1
            
            # 转运量
            # 基于停车点的实际需求计算转运量
            # 对于供应点到需求点的路段，转运量等于需求点的需求
            if actions[current_idx]['type'] == 1 and actions[next_idx]['type'] == -1:
                # 供应点到需求点，转运量等于需求点的需求
                transfer_amount = actions[next_idx]['amount']
            else:
                # 其他情况，基于供应点的供应计算
                transfer_amount = actions[current_idx]['amount']
            # 确保转运量至少为1辆，最多不超过30辆
            transfer_amount = max(1, min(30, transfer_amount))
            path_transfer += transfer_amount
            
            # 存储每个路段的转运量
            segment_transfers.append(transfer_amount)
            
            current_pos = actions[current_idx]['pos']
            next_pos = actions[next_idx]['pos']
            
            # 添加起点（仅第一次）
            if i == 0:
                road_path_coords.append([current_pos[0], current_pos[1]])
            
            # 初始化该路段坐标（直线，起点+终点）
            segment_road = [[current_pos[0], current_pos[1]], [next_pos[0], next_pos[1]]]
            seg_dist = np.hypot(current_pos[0]-next_pos[0], current_pos[1]-next_pos[1]) * 111000
            
            # 尝试路网路径
            current_node = find_nearest_node(G, current_pos, main_nodes)
            next_node = find_nearest_node(G, next_pos, main_nodes)
            if current_node is not None and next_node is not None and current_node != next_node:
                try:
                    best_path = nx.dijkstra_path(G, current_node, next_node, weight='weight')
                    if len(best_path) > 1:
                        # 成功：使用路网路径
                        segment_road = [list(node) for node in best_path]
                        # 重新计算距离
                        seg_dist = 0
                        for k in range(len(best_path)-1):
                            x1, y1 = best_path[k]
                            x2, y2 = best_path[k+1]
                            seg_dist += np.hypot(x1-x2, y1-y2) * 111000
                        # 添加路网节点到总路径（跳过第一个，因为起点已添加）
                        for node in best_path[1:]:
                            road_path_coords.append([node[0], node[1]])
                    else:
                        # 路径只有一个节点，使用直线
                        print(f"路段{i+1}: 路径只有一个节点，使用直线", file=sys.stderr)
                        road_path_coords.append([next_pos[0], next_pos[1]])
                except Exception as e:
                    print(f"路段{i+1}: 路网路径失败，使用直线: {e}", file=sys.stderr)
                    road_path_coords.append([next_pos[0], next_pos[1]])
            else:
                # 节点匹配失败或相同，使用直线
                print(f"路段{i+1}: 节点匹配失败或相同，使用直线", file=sys.stderr)
                road_path_coords.append([next_pos[0], next_pos[1]])
            
            # 确保 segment_road 至少有两个点
            if len(segment_road) < 2:
                segment_road = [[current_pos[0], current_pos[1]], [next_pos[0], next_pos[1]]]
                print(f"路段{i+1}: 修复 segment_road 长度不足，重置为直线", file=sys.stderr)
            
            # 调试：输出坐标点数量
            print(f"路段{i+1}: segment_road 包含 {len(segment_road)} 个点", file=sys.stderr)
            
            path_dist += seg_dist
            segment_road_coords.append(segment_road)
        
        # 添加终点坐标
        end_idx = path[-1]
        end_pos = actions[end_idx]['pos']
        road_path_coords.append([end_pos[0], end_pos[1]])
        
        total_dist += path_dist
        total_transfer += path_transfer
        
        # 生成 LineString 要素
        line_feature = {
            "type": "Feature",
            "geometry": {"type": "LineString", "coordinates": road_path_coords},
            "properties": {
                "vehicle_id": vehicle_id,
                "total_distance": path_dist,
                "total_transfer": path_transfer,
                "point_count": len(path),
                "path": [actions[idx]['name'] for idx in path],
                "original_coords": [[actions[idx]['pos'][0], actions[idx]['pos'][1]] for idx in path],
                "segment_road_coords": segment_road_coords,
                "segment_transfers": segment_transfers
            }
        }
        features.append(line_feature)
        
        # 为每个点创建 Point 要素
        for i, idx in enumerate(path):
            pos = actions[idx]['pos']
            point_feature = {
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [pos[0], pos[1]]},
                "properties": {
                    "name": actions[idx]['name'],
                    "type_text": "供应" if actions[idx]['type'] == 1 else "需求",
                    "transfer_amount": actions[idx]['amount'],
                    "order": i+1,
                    "vehicle_id": vehicle_id
                }
            }
            features.append(point_feature)
    
    return {
        "geojson": {"type": "FeatureCollection", "features": features},
        "metrics": {"total_distance": total_dist, "total_vehicles": total_vehicles, "total_transfer": total_transfer}
    }

# ================== 主接口 ==================
def run_dispatch_optimization(time_slot='morning', parking_points=None):
    print(f"=== 调度优化，时段: {time_slot}, 停车点数量: {len(parking_points) if parking_points else 0}", file=sys.stderr)
    
    # 1. 加载路网
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    road_file = os.path.join(base_dir, 'data_bd09', 'WHUInfo_Roads.geojson')
    G, main_nodes = build_whu_road_graph(road_file)
    
    if G.number_of_nodes() == 0:
        print("路网为空", file=sys.stderr)
        return {"geojson": {"type": "FeatureCollection", "features": []}, "metrics": {}}
    
    # 为每个停车点计算净流量
    actions = []
    
    # 如果没有停车点数据，使用默认停车点数据
    if not parking_points:
        print("没有接收到停车点数据，使用默认停车点数据", file=sys.stderr)
        parking_points = [
            {"lat": 30.5310, "lng": 114.3645, "transfer": -9},  # 供应点
            {"lat": 30.5288, "lng": 114.3657, "transfer": 15},  # 需求点
            {"lat": 30.5307, "lng": 114.3637, "transfer": 13},  # 需求点
            {"lat": 30.5314, "lng": 114.3656, "transfer": 11},  # 需求点
            {"lat": 30.5280, "lng": 114.3658, "transfer": 9},   # 需求点
            {"lat": 30.5295, "lng": 114.3630, "transfer": 7},   # 需求点
            {"lat": 30.5285, "lng": 114.3650, "transfer": 5}    # 需求点
        ]
    
    # 使用前端发送的停车点数据
    for idx, pt in enumerate(parking_points):
        # 获取停车点坐标
        if isinstance(pt, dict):
            lat = pt.get('lat')
            lng = pt.get('lng')
        else:
            lat = pt[1] if len(pt) >= 2 else 0
            lng = pt[0] if len(pt) >= 1 else 0
        
        pos = (lng, lat)
        
        # 获取停车点供需状态
        # 优先使用 'transfer' 字段，因为这是与前端表格一致的供需状态数据
        if isinstance(pt, dict):
            if 'transfer' in pt:
                transfer = pt['transfer']
                # 根据转运量确定供需类型
                if transfer > 0:
                    # 不足状态，需要接收转运（需求点）
                    amount = transfer
                    typ = -1
                elif transfer < 0:
                    # 过剩状态，需要发送转运（供应点）
                    amount = abs(transfer)
                    typ = 1
                else:
                    # 平衡状态，不参与转运
                    continue
            elif 'amount' in pt and 'demand_type' in pt:
                # 使用 'amount' 和 'demand_type' 字段
                amount = pt['amount']
                typ = pt['demand_type']
                # 确保 amount 大于 0
                if amount <= 0:
                    continue
            else:
                # 如果没有所需字段，跳过
                continue
        else:
            # 如果不是字典类型，跳过
            continue
        
        # 生成停车点名称，优先使用前端发送的name字段
        if isinstance(pt, dict) and 'name' in pt:
            name = pt['name']
        else:
            name = f"停车点{idx+1}"
        
        actions.append({
            'pos': pos,
            'type': typ,
            'amount': amount,
            'name': name
        })
    
    # 如果只有一个供应点，确保其供应量足够大
    supply_count = sum(1 for a in actions if a['type'] == 1)
    if supply_count == 1:
        supply_index = next(i for i, a in enumerate(actions) if a['type'] == 1)
        # 确保供应点的量至少是最大需求量的2倍
        max_demand = max(a['amount'] for a in actions if a['type'] == -1)
        actions[supply_index]['amount'] = max(actions[supply_index]['amount'], max_demand * 2)
    
    # 移除净流量为0的点（理论上不会出现，但安全起见）
    filtered_actions = [a for a in actions if a['amount'] > 0]
    
    # 如果没有供需点，返回空
    if not filtered_actions:
        print("无供需点，返回空", file=sys.stderr)
        return {"geojson": {"type": "FeatureCollection", "features": []}, "metrics": {}}
    
    # 3. 计算距离矩阵
    dist_mat = precompute_dist_matrix(G, filtered_actions, main_nodes)
    
    # 4. 使用贪心算法生成多条点对点调度路线
    # 每个供应点直接向需求点转运，每辆车容量30
    supply_indices = [i for i, a in enumerate(filtered_actions) if a['type'] == 1]
    demand_indices = [i for i, a in enumerate(filtered_actions) if a['type'] == -1]
    
    if supply_indices and demand_indices:
        # 使用贪心算法生成多条点对点路线
        routes = generate_multiple_routes(filtered_actions, dist_mat, capacity=30, seed=42, time_slot=time_slot)
        if routes:
            print(f"生成 {len(routes)} 条点对点调度路线", file=sys.stderr)
        else:
            # 如果生成失败，使用简单的供需匹配
            print("贪心算法生成路线失败，使用简单匹配", file=sys.stderr)
            routes = []
            vehicle_id = 1
            for s_idx in supply_indices:
                for d_idx in demand_indices:
                    if filtered_actions[s_idx]['amount'] > 0 and filtered_actions[d_idx]['amount'] > 0:
                        transfer = min(filtered_actions[s_idx]['amount'], filtered_actions[d_idx]['amount'], 30)
                        if transfer > 0:
                            routes.append((vehicle_id, [s_idx, d_idx]))
                            vehicle_id += 1
    else:
        # 如果没有供需点，创建默认路径
        print("未找到有效供需点，创建默认路径", file=sys.stderr)
        path = list(range(len(filtered_actions)))
        routes = [(1, path)]
    
    # 更新actions为过滤后的版本
    actions = filtered_actions
    
    # 5. 生成 GeoJSON
    result = format_result(routes, actions, G, main_nodes, capacity=30)
    print(f"调度完成，总距离: {result['metrics']['total_distance']:.2f}m", file=sys.stderr)
    return result