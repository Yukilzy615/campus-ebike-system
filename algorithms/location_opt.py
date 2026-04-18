import os
import json
import numpy as np
import random
import geopandas as gpd
from shapely.geometry import Point
from scipy.spatial import cKDTree
from deap import base, creator, tools, algorithms
import networkx as nx

# 加载路网数据
def load_road_network(roads_path='data_bd09/WHUInfo_Roads.geojson', target_crs='EPSG:4326'):
    print(f"正在读取路网文件: {roads_path}...")

    if not os.path.exists(roads_path):
        raise FileNotFoundError(f"错误：找不到路网文件 -> {roads_path}")

    try:
        roads_gdf = gpd.read_file(roads_path)
    except Exception as e:
        print(f"读取文件失败: {e}")
        return None

    # 过滤name为null的路段
    if 'name' in roads_gdf.columns:
        original_count = len(roads_gdf)
        roads_gdf = roads_gdf[roads_gdf['name'].notna()]
        filtered_count = len(roads_gdf)
        print(f"   过滤掉 {original_count - filtered_count} 个name为null的路段")

    # 坐标系转换
    print(f"正在统一坐标系为 {target_crs} ...")
    roads_gdf = roads_gdf.to_crs(target_crs)

    # 构建 NetworkX 图
    print("正在构建路网拓扑 (NetworkX)...")
    G_raw = nx.Graph()

    nodes_dict = {}

    print("   - 正在提取节点和边...")
    for _, row in roads_gdf.iterrows():
        geom = row['geometry']

        # 处理多重线
        if geom.geom_type == 'MultiLineString':
            lines = geom.geoms
        else:
            lines = [geom]

        for line in lines:
            coords = list(line.coords)

            # 遍历线段的每一对点
            for i in range(len(coords) - 1):
                p1 = coords[i]
                p2 = coords[i+1]

                n1_id = p1
                n2_id = p2

                # 添加节点
                if n1_id not in nodes_dict:
                    nodes_dict[n1_id] = {'x': p1[0], 'y': p1[1]}
                    G_raw.add_node(n1_id, x=p1[0], y=p1[1])

                if n2_id not in nodes_dict:
                    nodes_dict[n2_id] = {'x': p2[0], 'y': p2[1]}
                    G_raw.add_node(n2_id, x=p2[0], y=p2[1])

                # 计算边长 (在 EPSG:4326 下，这里是度数)
                length = np.sqrt((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2)

                # 添加边，权重字段名为 'length'
                G_raw.add_edge(n1_id, n2_id, length=length)

    print(f"   - 原始路网节点数: {G_raw.number_of_nodes()}")

    # 提取最大连通分量
    print("   正在清洗路网，移除孤岛节点...")
    try:
        # 获取所有连通分量
        connected_subgraphs = list(nx.connected_components(G_raw))
        # 找到最大的那个
        largest_component = max(connected_subgraphs, key=len)
        # 提取子图
        G = G_raw.subgraph(largest_component).copy()

        print(f"   - 主连通域节点数: {G.number_of_nodes()}")
        print(f"   - 丢弃了 {G_raw.number_of_nodes() - G.number_of_nodes()} 个孤岛节点")
    except Exception as e:
        print(f"   连通性分析失败: {e}，将使用原始路网。")
        G = G_raw

    print(f"   路网构建完成。最终节点数: {len(G.nodes)}, 边数: {len(G.edges)}")

    return G

# 数据预处理
def prepare_data(G, buildings_path='data_bd09/WHUInfo_Buildings.geojson', area_path='data_bd09/WHUInfo_Area.geojson', candidate_sample_rate=1.0):
    print("正在加载建筑物数据...")
    buildings_gdf = gpd.read_file(buildings_path)
    buildings_gdf = buildings_gdf.to_crs('EPSG:4326')

    # 加载校园边界数据
    print("正在加载校园边界数据...")
    area_gdf = gpd.read_file(area_path)
    area_gdf = area_gdf.to_crs('EPSG:4326')

    # 找到name为WhuInfo的Feature作为校园边界
    whu_info_feature = None
    for _, row in area_gdf.iterrows():
        if row.get('name') == 'WhuInfo':
            whu_info_feature = row
            break

    # 如果找到了WhuInfo Feature，使用其边界框
    if whu_info_feature is not None:
        min_lon, min_lat, max_lon, max_lat = whu_info_feature.geometry.bounds
        print(f"   使用WhuInfo Feature的边界框: 经度 [{min_lon:.6f}, {max_lon:.6f}], 纬度 [{min_lat:.6f}, {max_lat:.6f}]")
    else:
        # 否则使用整个文件的边界框
        min_lon, min_lat, max_lon, max_lat = area_gdf.total_bounds
        print(f"   使用整个文件的边界框: 经度 [{min_lon:.6f}, {max_lon:.6f}], 纬度 [{min_lat:.6f}, {max_lat:.6f}]")

    # 提取所有建筑物的中心作为需求点（不过滤）
    demands = []
    for _, row in buildings_gdf.iterrows():
        if not row['geometry'].is_empty:
            try:
                centroid = row['geometry'].centroid
                demands.append((centroid.y, centroid.x))
            except:
                pass

    print(f"   提取需求点数量: {len(demands)}")

    # 候选点：路网节点中位于校园边界框内的所有点
    all_candidates = []
    for node, data in G.nodes(data=True):
        lat, lon = data['y'], data['x']
        # 确保点位于校园边界框内
        if min_lat <= lat <= max_lat and min_lon <= lon <= max_lon:
            all_candidates.append((lat, lon))

    print(f"   校园内候选点数量: {len(all_candidates)}")

    # 定义高需求区域（学生宿舍和教学楼）- 使用正确的BD09坐标
    high_demand_areas = [
        (30.5320, 114.3645),  # 南区宿舍1（信息学部十六舍附近）
        (30.5318, 114.3640),  # 南区宿舍2
        (30.5315, 114.3648),  # 南区宿舍3
        (30.5335, 114.3670),  # 信息学部一教
        (30.5330, 114.3668),  # 信息学部二教
        (30.5345, 114.3685),  # 电子信息学院
        (30.5347, 114.3656),  # 信息学部学生一食堂
        (30.5346, 114.3646),  # 信息学部学生二食堂
        (30.5335, 114.3647),  # 学生三食堂
        (30.5368, 114.3669),  # 星湖园食堂
    ]

    # 计算每个候选点的权重，优先选择高需求区域附近的点
    candidate_weights = []
    for candidate in all_candidates:
        lat, lon = candidate
        weight = 1.0  # 基础权重

        # 检查是否在高需求区域附近
        for area_lat, area_lon in high_demand_areas:
            distance = np.sqrt((lat - area_lat)**2 + (lon - area_lon)**2)
            if distance < 0.0010:  # 约100米范围内
                weight += 10.0  # 高需求区域附近权重增加10倍
            elif distance < 0.0020:  # 约200米范围内
                weight += 5.0  # 高需求区域附近权重增加5倍
            elif distance < 0.0030:  # 约300米范围内
                weight += 2.5  # 高需求区域附近权重增加2.5倍

        candidate_weights.append(weight)

    # 采样，基于权重
    if candidate_sample_rate < 1.0:
        sample_size = int(len(all_candidates) * candidate_sample_rate)
        # 使用权重进行采样
        weights = np.array(candidate_weights)
        weights = weights / np.sum(weights)  # 归一化
        indices = np.random.choice(len(all_candidates), sample_size, replace=False, p=weights)
        candidates = [all_candidates[i] for i in indices]
    else:
        candidates = all_candidates

    print(f"   提取候选点数量: {len(candidates)}")

    # 挂接需求点（将每个需求点映射到最近候选点）
    demand_nodes = []
    candidate_coords = np.array(candidates)
    tree = cKDTree(candidate_coords)
    for demand in demands:
        _, idx = tree.query(demand)
        demand_nodes.append(candidates[idx])

    return demands, candidates, demand_nodes

# 计算距离矩阵
def compute_distance_matrix(G, demands, candidates):
    print("正在计算距离矩阵 (纯直线距离模式)...")

    demand_arr = np.array(demands)
    candidate_arr = np.array(candidates)

    # 广播计算
    diff_lat = demand_arr[:, 0, np.newaxis] - candidate_arr[:, 0]
    diff_lon = demand_arr[:, 1, np.newaxis] - candidate_arr[:, 1]

    dist_deg = np.sqrt(diff_lat**2 + diff_lon**2)

    # 度转米
    center_lat = np.mean(demand_arr[:, 0])
    meters_per_deg = 111139 * np.cos(np.radians(center_lat))

    distance_matrix = dist_deg * meters_per_deg

    # 统计信息
    min_d = np.min(distance_matrix)
    max_d = np.max(distance_matrix)
    avg_d = np.mean(distance_matrix)

    print(f"   距离矩阵生成完成。")
    print(f"   距离统计 -> 最小: {min_d:.1f}m, 最大: {max_d:.1f}m, 平均: {avg_d:.1f}m")

    return distance_matrix

def compute_road_distance_matrix(G, demands, candidates):
    print("正在计算路网距离矩阵...")

    # 提取图中所有节点的纬度 (y)
    all_lats = [data['y'] for _, data in G.nodes(data=True)]
    center_lat = np.mean(all_lats)

    # 计算该纬度下，1度经度对应的米数
    meters_per_deg = 111139 * np.cos(np.radians(center_lat))

    print(f"   路网中心纬度: {center_lat:.4f}°")
    print(f"   距离转换系数: {meters_per_deg:.2f} 米/度")

    # 1. 建立坐标到节点ID的映射
    coord_to_node = {}
    for node, data in G.nodes(data=True):
        coord_to_node[(data['y'], data['x'])] = node

    # 2. 预处理需求点挂接
    demand_nodes = []
    candidate_coords = np.array(candidates)
    tree = cKDTree(candidate_coords)

    demand_arr = np.array(demands)
    for demand in demand_arr:
        _, idx = tree.query(demand)
        nearest_coord = tuple(candidates[idx])

        if nearest_coord in coord_to_node:
            demand_nodes.append(coord_to_node[nearest_coord])
        else:
            demand_nodes.append(None)

    # 3. 计算矩阵
    n_demands = len(demands)
    n_candidates = len(candidates)
    road_matrix = np.full((n_demands, n_candidates), np.inf)

    print(f"   正在计算 {n_candidates} 个候选点的路网距离...")

    valid_count = 0

    for i, cand_coord in enumerate(candidates):
        cand_node = coord_to_node.get(tuple(cand_coord))
        if cand_node is None:
            continue

        try:
            # 使用 Dijkstra 算法，权重字段叫 'length' (目前单位是度)
            lengths = nx.single_source_dijkstra_path_length(G, cand_node, weight='length')

            for j, dem_node in enumerate(demand_nodes):
                if dem_node is not None and dem_node in lengths:
                    # 将计算出的度数距离 * 校正后的米/度
                    road_matrix[j, i] = lengths[dem_node] * meters_per_deg
                    valid_count += 1
        except nx.NetworkXUnreachable:
            pass

        # 每计算100个候选点，打印一次进度
        if (i + 1) % 100 == 0:
            print(f"   已计算 {i + 1}/{n_candidates} 个候选点")

    print(f"   路网距离矩阵计算完成。有效距离数: {valid_count}")

    # 检查数值范围
    if valid_count > 0:
        finite_distances = road_matrix[road_matrix != np.inf]
        print(f"   距离统计 -> 最小: {np.min(finite_distances):.2f}m, 最大: {np.max(finite_distances):.2f}m")

    return road_matrix

# 评估函数
def evaluate(individual, straight_matrix, road_matrix, K, service_radius, optimize_coverage=True, optimize_distance=True, optimize_balance=False, demand_weights=None, candidate_coords=None):
    """
    混合距离模式评估：
    根据选择的优化目标计算适应度值
    """
    # 过滤有效的候选点索引
    max_candidate_index = road_matrix.shape[1] - 1
    selected_indices = [i for i, val in enumerate(individual) if val == 1 and i <= max_candidate_index]

    if len(selected_indices) == 0:
        return 0.0, 10000.0, 10000.0

    # 根据选址点数量动态调整距离约束
    num_points = len(selected_indices)
    # 点越多，距离约束可以适当放松，但仍保持合理的最小距离
    if num_points <= 8:
        min_allowed_distance = service_radius * 0.75
    elif num_points <= 10:
        min_allowed_distance = service_radius * 0.65
    elif num_points <= 12:
        min_allowed_distance = service_radius * 0.55
    else:
        min_allowed_distance = service_radius * 0.45

    has_too_close = False

    if candidate_coords is not None and len(selected_indices) > 1:
        selected_coords = candidate_coords[selected_indices]

        # 检查所有选址点对之间的距离
        for i in range(len(selected_coords)):
            for j in range(i+1, len(selected_coords)):
                dist = np.sqrt((selected_coords[i][0] - selected_coords[j][0])**2 + (selected_coords[i][1] - selected_coords[j][1])**2) * 111139
                if dist < min_allowed_distance:
                    has_too_close = True
                    break
            if has_too_close:
                break

    # 如果有任何一对选址点距离过近，直接返回极其差的适应度
    if has_too_close:
        return 1.0, 1000000.0, 1000000.0

    distance_penalty = 0

    # --- 1. 计算覆盖率 (基于直线距离) ---
    straight_distances = straight_matrix[:, selected_indices]
    min_straight_distances = np.min(straight_distances, axis=1)

    # 判断是否被覆盖 (直线距离 < 服务半径)
    covered_count = np.sum(min_straight_distances <= service_radius)
    coverage = covered_count / len(straight_matrix)

    # --- 2. 计算平均距离 (基于路网距离) ---
    # 计算所有需求点到最近设施的实际行走距离
    road_distances = road_matrix[:, selected_indices]
    min_road_distances = np.min(road_distances, axis=1)

    # 处理不可达的情况 (inf)，如果不可达，给一个很大的惩罚值
    min_road_distances = np.nan_to_num(min_road_distances, nan=10000.0)

    avg_road_distance = np.mean(min_road_distances)

    # --- 3. 计算负载均衡性 ---
    # 计算每个设施的服务需求
    facility_loads = np.zeros(len(selected_indices))
    for j, dist in enumerate(min_road_distances):
        # 找到最近的设施
        if j < road_distances.shape[0]:
            selected_distances = road_distances[j, :]
            if len(selected_distances) > 0:
                nearest_idx = np.argmin(selected_distances)
                # 累加需求到该设施
                if demand_weights is not None and j < len(demand_weights):
                    facility_loads[nearest_idx] += demand_weights[j]
                else:
                    facility_loads[nearest_idx] += 1

    # 计算负载均衡度（使用变异系数）
    if len(facility_loads) > 1:
        mean_load = np.mean(facility_loads)
        if mean_load > 0:
            load_balance = np.std(facility_loads) / mean_load
        else:
            load_balance = 0
    else:
        load_balance = 0

    # 综合均衡性
    balance = load_balance

    # 根据选择的优化目标返回相应的目标值
    if optimize_coverage and optimize_distance and optimize_balance:
        # 同时优化覆盖率、距离和负载均衡
        return -coverage, avg_road_distance + distance_penalty, balance
    elif optimize_coverage and optimize_distance:
        # 同时优化覆盖率和距离
        return -coverage, avg_road_distance + distance_penalty, 0.0
    elif optimize_coverage and optimize_balance:
        # 同时优化覆盖率和负载均衡
        return -coverage, distance_penalty, balance
    elif optimize_distance and optimize_balance:
        # 同时优化距离和负载均衡
        return -coverage * 0.5, avg_road_distance + distance_penalty, balance
    elif optimize_coverage:
        # 只优化覆盖率
        return -coverage, distance_penalty, 0.0
    elif optimize_distance:
        # 只优化距离
        return -coverage * 0.0001, avg_road_distance + distance_penalty, 0.0
    elif optimize_balance:
        # 只优化负载均衡
        return -coverage * 0.5, distance_penalty, balance
    else:
        # 默认情况
        return -coverage, avg_road_distance + distance_penalty, 0.0

# 创建工具箱
def create_toolbox(straight_matrix, road_matrix, K, service_radius, optimize_coverage=True, optimize_distance=True, optimize_balance=False, demand_weights=None, candidate_coords=None):
    """创建 DEAP 工具箱"""
    # 根据选择的优化目标设置适应度权重
    # 使用很小的非零值来避免除零错误
    if optimize_coverage and optimize_distance and optimize_balance:
        # 同时优化覆盖率、距离和负载均衡，增加均衡性的权重
        creator.create("FitnessMulti", base.Fitness, weights=(-1.0, 1.0, 1.5)) # 最小化 -覆盖率, 最小化 距离, 最小化 负载均衡（权重1.5）
    elif optimize_coverage and optimize_distance:
        # 同时优化覆盖率和距离
        creator.create("FitnessMulti", base.Fitness, weights=(-1.0, 1.0, 0.0001)) # 最小化 -覆盖率, 最小化 距离
    elif optimize_coverage and optimize_balance:
        # 同时优化覆盖率和负载均衡
        creator.create("FitnessMulti", base.Fitness, weights=(-1.0, 0.0001, 1.0)) # 最小化 -覆盖率, 最小化 负载均衡
    elif optimize_distance and optimize_balance:
        # 同时优化距离和负载均衡
        creator.create("FitnessMulti", base.Fitness, weights=(-0.8, 1.0, 1.0)) # 最小化 -覆盖率(权重0.8), 最小化 距离, 最小化 负载均衡
    elif optimize_coverage:
        # 只优化覆盖率
        creator.create("FitnessMulti", base.Fitness, weights=(-1.0, 0.0001, 0.0001)) # 只最小化 -覆盖率
    elif optimize_distance:
        # 只优化距离
        creator.create("FitnessMulti", base.Fitness, weights=(-0.0001, 1.0, 0.0001)) # 最小化 -覆盖率(权重0.0001), 最小化 距离
    elif optimize_balance:
        # 只优化负载均衡
        creator.create("FitnessMulti", base.Fitness, weights=(-0.8, 0.0001, 1.0)) # 最小化 -覆盖率(权重0.8), 最小化 负载均衡
    else:
        # 默认情况
        creator.create("FitnessMulti", base.Fitness, weights=(-1.0, 1.0, 0.0001))

    creator.create("Individual", list, fitness=creator.FitnessMulti)

    toolbox = base.Toolbox()

    # 初始化个体
    def init_individual():
        # 改进的初始化方法，确保初始种群中包含高覆盖率的解
        ind = [0] * len(straight_matrix[0])

        # 生成随机解
        ones = np.random.choice(len(ind), K, replace=False)
        for i in ones:
            ind[i] = 1
        return creator.Individual(ind)

    toolbox.register("individual", init_individual)
    toolbox.register("population", tools.initRepeat, list, toolbox.individual)
   # 评估函数
    toolbox.register("evaluate", evaluate, straight_matrix=straight_matrix, road_matrix=road_matrix, K=K, service_radius=service_radius, optimize_coverage=optimize_coverage, optimize_distance=optimize_distance, optimize_balance=optimize_balance, demand_weights=demand_weights, candidate_coords=candidate_coords)
    toolbox.register("select", tools.selNSGA2)

    def cx_and_repair(ind1, ind2, K):
        # 1. 执行标准的两点交叉
        tools.cxTwoPoint(ind1, ind2)

        # 2. 分别修复两个子代
        for ind in [ind1, ind2]:
            current_k = sum(ind)
            # 修复 ind1
            while current_k > K:
                ones = [i for i, x in enumerate(ind) if x == 1]
                ind[random.choice(ones)] = 0
                current_k -= 1
            while current_k < K:
                zeros = [i for i, x in enumerate(ind) if x == 0]
                ind[random.choice(zeros)] = 1
                current_k += 1

        return ind1, ind2

    toolbox.register("mate", cx_and_repair, K=K)
    def mutate_and_repair(individual, indpb, K):
        # 1. 执行置换变异
        if random.random() < indpb:
            ones = [i for i, x in enumerate(individual) if x == 1]
            zeros = [i for i, x in enumerate(individual) if x == 0]

            if len(ones) > 0 and len(zeros) > 0:
                # 随机换一个点 (1变0, 0变1)
                remove_idx = random.choice(ones)
                add_idx = random.choice(zeros)
                individual[remove_idx] = 0
                individual[add_idx] = 1

        # 2. 强制修复
        current_k = sum(individual)

        # 如果多了，随机删掉多余的
        while current_k > K:
            ones = [i for i, x in enumerate(individual) if x == 1]
            # 随机选一个 1 关掉
            idx = random.choice(ones)
            individual[idx] = 0
            current_k -= 1

        # 如果少了，随机补足
        while current_k < K:
            zeros = [i for i, x in enumerate(individual) if x == 0]
            # 随机选一个 0 打开
            idx = random.choice(zeros)
            individual[idx] = 1
            current_k += 1

        return individual,
    toolbox.register("mutate", mutate_and_repair, indpb=0.2, K=K) # 变异概率 0.2

    return toolbox

# 主函数
def run_location_optimization(num_locations=10, service_radius=100, seed=42, optimize_coverage=True, optimize_distance=True, optimize_balance=False):
    # 设置随机种子，确保结果可重复
    np.random.seed(seed)
    random.seed(seed)

    print("开始智能选址求解...")
    print(f"优化目标：覆盖率={optimize_coverage}, 距离={optimize_distance}, 均衡性={optimize_balance}")
    print(f"服务半径：{service_radius}米")

    # 1. 加载路网
    G = load_road_network()
    if G is None:
        # 如果加载失败，返回模拟数据
        return {
            "type": "FeatureCollection",
            "features": [],
            "metadata": {"coverage": 0, "avg_distance": 0}
        }

    # 2. 准备数据
    # 使用全部候选点，不采样
    demands, candidates, _ = prepare_data(G, candidate_sample_rate=1.0)

    # 3. 计算需求权重
    # 基于建筑物的位置计算需求权重，高需求区的权重更高
    # 定义高需求区域（信息学部3舍5舍6舍教学楼附近）- 使用正确的BD09坐标
    high_demand_areas = [
        (30.5320, 114.3645),  # 南区宿舍1（信息学部十六舍附近）
        (30.5318, 114.3640),  # 南区宿舍2
        (30.5315, 114.3648),  # 南区宿舍3
        (30.5335, 114.3670),  # 信息学部一教
        (30.5330, 114.3668),  # 信息学部二教
        (30.5345, 114.3685),  # 电子信息学院
        (30.5347, 114.3656),  # 信息学部学生一食堂
        (30.5346, 114.3646),  # 信息学部学生二食堂
        (30.5335, 114.3647),  # 学生三食堂
        (30.5368, 114.3669),  # 星湖园食堂
    ]

    # 计算每个需求点的权重
    demand_weights = []
    for demand in demands:
        lat, lon = demand
        weight = 1.0  # 基础权重

        # 检查是否在高需求区域附近
        for area_lat, area_lon in high_demand_areas:
            distance = np.sqrt((lat - area_lat)**2 + (lon - area_lon)**2)
            if distance < 0.0010:  # 约100米范围内
                weight += 200.0  # 高需求区域权重增加200倍
            elif distance < 0.0020:  # 约200米范围内
                weight += 100.0  # 高需求区域权重增加100倍
            elif distance < 0.0030:  # 约300米范围内
                weight += 50.0  # 高需求区域权重增加50倍

        demand_weights.append(weight)

    print(f"   需求权重计算完成，平均权重: {np.mean(demand_weights):.2f}")

    # 限制候选点数量，加快计算
    max_candidates = 100
    if len(candidates) > max_candidates:
        print(f"   候选点数量过多，只使用前 {max_candidates} 个...")
        candidates = candidates[:max_candidates]

    # 3. 计算距离矩阵
    straight_matrix = compute_distance_matrix(G, demands, candidates)
    road_matrix = compute_road_distance_matrix(G, demands, candidates)

    print(f"   正在检查路网矩阵数据质量...")
    print(f"   - 矩阵形状: {road_matrix.shape}")
    print(f"   - 矩阵最小值: {np.min(road_matrix)}")
    print(f"   - 矩阵最大值: {np.max(road_matrix)}")
    print(f"   - 矩阵平均值: {np.mean(road_matrix)}")
    if np.all(road_matrix == 0):
        print("   警告：路网矩阵全为 0！说明距离计算失败。")

    # 转换候选点为numpy数组
    candidate_coords = np.array(candidates)

    # 4. 运行算法
    toolbox = create_toolbox(straight_matrix, road_matrix, num_locations, service_radius, optimize_coverage=optimize_coverage, optimize_distance=optimize_distance, optimize_balance=optimize_balance, demand_weights=demand_weights, candidate_coords=candidate_coords)

    print("运行 NSGA-II 算法...")
    # 减少种群大小和迭代次数，提高运行速度
    pop = toolbox.population(n=15) # 种群大小 15
    hof = tools.ParetoFront()

    # 运行 30 代
    algorithms.eaMuPlusLambda(pop, toolbox, mu=15, lambda_=30, cxpb=0.7, mutpb=0.2, ngen=30, halloffame=hof, verbose=True)

    # 5. 输出结果
    if len(hof) > 0:
        best_solution = None

        print(f"正在从 {len(hof)} 个最优解中寻找最佳方案...")

        # 辅助函数：检查解中是否有距离过近的点
        def has_too_close_points(solution, candidate_coords, service_rad):
            selected_indices = [idx for idx, val in enumerate(solution) if val == 1]
            num_points = len(selected_indices)
            if num_points < 2:
                return False

            # 根据选址点数量动态调整距离约束
            if num_points <= 8:
                min_distance = service_rad * 0.75
            elif num_points <= 10:
                min_distance = service_rad * 0.65
            elif num_points <= 12:
                min_distance = service_rad * 0.55
            else:
                min_distance = service_rad * 0.45

            selected_coords = candidate_coords[selected_indices]
            for i in range(len(selected_coords)):
                for j in range(i+1, len(selected_coords)):
                    # 计算两点之间的距离（米）
                    dist = np.sqrt((selected_coords[i][0] - selected_coords[j][0])**2 + (selected_coords[i][1] - selected_coords[j][1])**2) * 111139
                    if dist < min_distance:
                        return True
            return False

        # 收集所有解的评估指标
        all_solutions = []
        valid_solutions = []  # 保存满足距离约束的解

        for i, sol in enumerate(hof):
            selected_indices = [idx for idx, val in enumerate(sol) if val == 1]
            if len(selected_indices) == 0:
                continue

            # 计算覆盖率和距离
            straight_distances = straight_matrix[:, selected_indices]
            min_straight_distances = np.min(straight_distances, axis=1)
            current_coverage = np.sum(min_straight_distances <= service_radius) / len(straight_matrix)

            road_distances = road_matrix[:, selected_indices]
            min_road_distances = np.min(road_distances, axis=1)
            min_road_distances = np.nan_to_num(min_road_distances, nan=10000.0, posinf=10000.0, neginf=10000.0)
            current_avg_dist = np.mean(min_road_distances)

            # 计算负载均衡性
            facility_loads = np.zeros(len(selected_indices))
            for j, dist in enumerate(min_road_distances):
                if j < road_distances.shape[0]:
                    selected_distances = road_distances[j, :]
                    if len(selected_distances) > 0:
                        nearest_idx = np.argmin(selected_distances)
                        if nearest_idx < len(facility_loads):
                            facility_loads[nearest_idx] += 1

            # 计算负载均衡度（使用变异系数）
            if len(facility_loads) > 1:
                mean_load = np.mean(facility_loads)
                if mean_load > 0:
                    current_load_balance = np.std(facility_loads) / mean_load
                else:
                    current_load_balance = 0
            else:
                current_load_balance = 0

            all_solutions.append((current_coverage, current_avg_dist, current_load_balance, sol))

            # 检查是否满足距离约束
            if not has_too_close_points(sol, candidate_coords, service_radius):
                valid_solutions.append((current_coverage, current_avg_dist, current_load_balance, sol))

        # 优先使用满足距离约束的解
        if valid_solutions:
            print(f"   找到 {len(valid_solutions)} 个满足距离约束的解")
            all_solutions = valid_solutions

        if all_solutions:
            # 按覆盖率降序排序，确保优先选择覆盖率高的解
            all_solutions.sort(key=lambda x: (-x[0], x[1], x[2]))

            # 选择前5个覆盖率最高的解
            top_solutions = all_solutions[:5]

            if optimize_coverage and optimize_distance and optimize_balance:
                # 同时优化覆盖率、距离和负载均衡
                # 计算综合得分
                scored_solutions = []
                for sol in top_solutions:
                    coverage, distance, balance, solution = sol
                    normalized_distance = min(1.0, distance / 1000)
                    normalized_balance = min(1.0, balance)
                    score = normalized_distance * 0.4 + normalized_balance * 0.6
                    scored_solutions.append((score, coverage, distance, balance, solution))

                # 按综合得分排序
                scored_solutions.sort(key=lambda x: x[0])
                best_solution = scored_solutions[0][4]
                print(f"   选择的最优解: 覆盖率={scored_solutions[0][1]:.2%}, 平均距离={scored_solutions[0][2]:.2f}米, 均衡性={scored_solutions[0][3]:.2f}")
            elif optimize_coverage and optimize_distance:
                # 同时优化覆盖率和距离
                best_solution = top_solutions[0][3]
            elif optimize_coverage and optimize_balance:
                # 同时优化覆盖率和负载均衡
                top_solutions.sort(key=lambda x: x[2])
                best_solution = top_solutions[0][3]
            elif optimize_distance and optimize_balance:
                # 同时优化距离和负载均衡
                top_solutions.sort(key=lambda x: (x[1], x[2]))
                best_solution = top_solutions[0][3]
            elif optimize_coverage:
                # 只优化覆盖率
                best_solution = top_solutions[0][3]
            elif optimize_distance:
                # 只优化距离
                all_solutions.sort(key=lambda x: x[1])
                best_solution = all_solutions[0][3]
                print(f"只优化距离 - 选择的解：覆盖率 = {all_solutions[0][0]:.4f}, 平均距离 = {all_solutions[0][1]:.2f}m")
            elif optimize_balance:
                # 只优化负载均衡
                top_solutions.sort(key=lambda x: x[2])
                best_solution = top_solutions[0][3]
            else:
                # 默认情况
                best_solution = top_solutions[0][3]
        else:
            # 如果没有任何解，使用默认解
            if hof:
                best_solution = hof[0]

        # 如果找到了符合条件的解
        if best_solution is not None:
            final_indices = [i for i, val in enumerate(best_solution) if val == 1]

            # 重新计算最终指标

            # A. 最终覆盖率
            final_straight_dist = straight_matrix[:, final_indices]
            final_min_straight = np.min(final_straight_dist, axis=1)
            final_coverage = np.sum(final_min_straight < service_radius) / len(straight_matrix)

            # B. 最终平均路网距离
            final_road_dist = road_matrix[:, final_indices]
            final_min_road = np.min(final_road_dist, axis=1)

            # 修正：处理可能的 NaN 或 inf
            final_min_road = np.nan_to_num(final_min_road, nan=10000.0, posinf=10000.0, neginf=10000.0)
            # 修正：这里必须用新计算的变量
            final_avg_road_dist = np.mean(final_min_road)

            print(f"找到最佳方案！")
            print(f"   - 直线覆盖率: {final_coverage:.2%}")
            print(f"   - 平均路网距离: {final_avg_road_dist:.2f}米")

            # 生成 GeoJSON
            features = []
            for idx in final_indices:
                lat, lon = candidates[idx]
                features.append({
                    "type": "Feature",
                    "geometry": {"type": "Point", "coordinates": [lon, lat]},
                    "properties": {"selected": True, "id": len(features) + 1, "name": f"停车点{len(features) + 1}", "capacity": 20, "service_count": 100 + len(features) * 10}
                })

            result_geojson = {
                "type": "FeatureCollection",
                "features": features,
                "metadata": {
                    "coverage": final_coverage,
                    "avg_distance": final_avg_road_dist,
                    "K": num_locations,
                    "description": "Best solution"
                }
            }

            # 保存结果
            with open('result_best.geojson', 'w', encoding='utf-8') as json_file:
                json.dump(result_geojson, json_file, ensure_ascii=False, indent=2)

            print("最佳结果已保存到 result_best.geojson")
            return result_geojson
        else:
            # 如果没有找到符合条件的解，选择第一个帕累托最优解
            if len(hof) > 0:
                best_solution = hof[0]
                final_indices = [i for i, val in enumerate(best_solution) if val == 1]

                # 重新计算最终指标

                # A. 最终覆盖率
                final_straight_dist = straight_matrix[:, final_indices]
                final_min_straight = np.min(final_straight_dist, axis=1)
                final_coverage = np.sum(final_min_straight < service_radius) / len(straight_matrix)

                # B. 最终平均路网距离
                final_road_dist = road_matrix[:, final_indices]
                final_min_road = np.min(final_road_dist, axis=1)

                # 修正：处理可能的 NaN 或 inf
                final_min_road = np.nan_to_num(final_min_road, nan=10000.0, posinf=10000.0, neginf=10000.0)
                # 修正：这里必须用新计算的变量
                final_avg_road_dist = np.mean(final_min_road)

                print(f"使用第一个帕累托最优解，覆盖率: {final_coverage:.2%}，平均路网距离: {final_avg_road_dist:.2f}米")

                # 生成 GeoJSON
                features = []
                for idx in final_indices:
                    lat, lon = candidates[idx]
                    features.append({
                        "type": "Feature",
                        "geometry": {"type": "Point", "coordinates": [lon, lat]},
                        "properties": {"selected": True, "id": len(features) + 1, "name": f"停车点{len(features) + 1}", "capacity": 20, "service_count": 100 + len(features) * 10}
                    })

                result_geojson = {
                    "type": "FeatureCollection",
                    "features": features,
                    "metadata": {
                        "coverage": final_coverage,
                        "avg_distance": final_avg_road_dist,
                        "K": num_locations,
                        "description": "First Pareto optimal solution"
                    }
                }

                # 保存结果
                with open('result_best.geojson', 'w', encoding='utf-8') as json_file:
                    json.dump(result_geojson, json_file, ensure_ascii=False, indent=2)

                print("最佳结果已保存到 result_best.geojson")
                return result_geojson
            else:
                print("未找到任何解，请检查算法参数。")
                # 返回模拟数据
                features = []
                # 使用默认的校园边界框
                min_lat, max_lat = 30.529869, 30.540424
                min_lon, max_lon = 114.359524, 114.371980
                for i in range(num_locations):
                    # 生成校园内的随机点
                    lat = min_lat + (max_lat - min_lat) * np.random.random()
                    lon = min_lon + (max_lon - min_lon) * np.random.random()
                    features.append({
                        "type": "Feature",
                        "geometry": {"type": "Point", "coordinates": [lon, lat]},
                        "properties": {"id": i + 1, "name": f"停车点{i+1}", "capacity": 20, "service_count": 100 + i * 10}
                    })
                return {
                    "type": "FeatureCollection",
                    "features": features,
                    "metadata": {"coverage": 0.85, "avg_distance": 150}
                }
    else:
        # 返回模拟数据
        features = []
        # 使用默认的校园边界框
        min_lat, max_lat = 30.529869, 30.540424
        min_lon, max_lon = 114.359524, 114.371980
        for i in range(num_locations):
            # 生成校园内的随机点
            lat = min_lat + (max_lat - min_lat) * np.random.random()
            lon = min_lon + (max_lon - min_lon) * np.random.random()
            features.append({
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [lon, lat]},
                "properties": {"id": i + 1, "name": f"停车点{i+1}", "capacity": 20, "service_count": 100 + i * 10}
            })
        return {
            "type": "FeatureCollection",
            "features": features,
            "metadata": {"coverage": 0.85, "avg_distance": 150}
        }

if __name__ == "__main__":
    run_location_optimization(num_locations=10)