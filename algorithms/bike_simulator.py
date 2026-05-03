import json
import random
import numpy as np
import os
import geopandas as gpd
import networkx as nx
from .data_utils import load_and_process_roads

# 构建可通行的路网
def build_whu_road_graph(road_geojson='data/WHUInfo_Roads.geojson'):
    print("正在构建可通行的路网...")
    
    # 使用绝对路径
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    file_path = os.path.join(base_dir, road_geojson)
    boundary_path = os.path.join(base_dir, 'data', 'WHUInfo.geojson')
    print(f"正在读取路网数据：{file_path}")
    print(f"正在读取边界数据：{boundary_path}")
    
    # 使用数据处理工具加载并处理路网数据，使用WHUInfo.geojson作为边界
    roads_gdf = load_and_process_roads(file_path, boundary_path)
    if roads_gdf is None:
        return nx.Graph(), []
    
    # 构建图
    G = nx.Graph()
    
    for _, row in roads_gdf.iterrows():
        geom = row.geometry
        if hasattr(geom, 'geom_type'):
            if geom.geom_type == 'MultiLineString':
                lines = geom.geoms
            elif geom.geom_type == 'LineString':
                lines = [geom]
            else:
                continue
            
            for line in lines:
                coords = list(line.coords)
                if len(coords) >= 2:
                    for i in range(len(coords) - 1):
                        p1, p2 = coords[i], coords[i + 1]
                        # 经纬度转米简易公式 (武汉地区)
                        d = np.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2) * 111000
                        G.add_edge(p1, p2, weight=d)
    
    print(f"路网构建完成：共 {G.number_of_nodes()} 个节点")
    
    # 计算主连通分量
    if G.number_of_nodes() > 0:
        components = list(nx.connected_components(G))
        main_component = max(components, key=len)
        print(f"主连通分量大小：{len(main_component)} 个节点")
        
        # 只保留主连通分量
        G_main = G.subgraph(main_component).copy()
        print(f"保留主连通分量后：共 {G_main.number_of_nodes()} 个节点")
        main_component_nodes = list(G_main.nodes)
        return G_main, main_component_nodes
    else:
        return G, []

# 生成电单车模拟数据
def generate_bike_simulation(time_slot, level):
    print(f"生成电单车模拟数据 [时段: {time_slot}, 数据量: {level}]")
    
    # 根据数据量级别确定车辆数量
    level_map = {"low": 50, "medium": 100, "high": 150}
    count = level_map.get(level, 100)
    
    # 构建可通行的路网
    G, main_component_nodes = build_whu_road_graph()
    
    # 提取路网上的所有节点作为候选位置
    road_nodes = main_component_nodes
    if not road_nodes:
        print("   警告：路网中没有可通行的节点，使用默认位置")
        # 使用默认的高需求点（BD09坐标）
        demand_points = {
            "morning": [
                (114.3645, 30.5310),  # 宿舍区A
                (114.3625, 30.5305),  # 宿舍区西
                (114.3640, 30.5318),  # 北侧宿舍
                (114.3626, 30.5307),  # 13舍
                (114.3619, 30.5309),  # 15/16舍
                (114.3658, 30.5280),  # 南门
            ],
            "noon": [
                (114.3637, 30.5307),  # 一食堂、二食堂
                (114.3630, 30.5296),  # 三食堂、四食堂
                (114.3650, 30.5328),  # 星园食堂
                (114.3626, 30.5327),  # 五洲餐厅
                (114.3657, 30.5288),  # 1号教学楼
                (114.3668, 30.5287),  # 2号教学楼
            ],
            "evening": [
                (114.3657, 30.5288),  # 1号教学楼
                (114.3668, 30.5287),  # 2号教学楼
                (114.3646, 30.5283),  # 5号教学楼
                (114.3656, 30.5314),  # 图书馆
                (114.3645, 30.5310),  # 宿舍区A
                (114.3625, 30.5305),  # 宿舍区西
            ]
        }
        current_demand_points = demand_points.get(time_slot, demand_points["morning"])
        road_nodes = current_demand_points
    
    print(f"   可通行路网节点数量: {len(road_nodes)}")
    
    # 生成新数据
    bikes = []
    for i in range(count):
        # 从路网上随机选择一个节点作为电单车位置
        if road_nodes:
            node = random.choice(road_nodes)
            # 确保节点是坐标元组
            if isinstance(node, tuple):
                if len(node) == 2:
                    # (lon, lat) 格式
                    lng, lat = node
                else:
                    # 其他格式，使用默认位置
                    lat = 30.5300
                    lng = 114.3550
            else:
                # 不是元组，使用默认位置
                lat = 30.5300
                lng = 114.3550
            
            # 在节点周围添加小的随机偏移
            lat += (random.random() - 0.5) * 0.0001
            lng += (random.random() - 0.5) * 0.0001
        else:
            # 没有路网节点，使用默认位置
            lat = 30.5300
            lng = 114.3550
        
        # 随机状态
        status = "idle" if random.random() > 0.3 else "moving"
        bikes.append({
            "id": i + 1,
            "lat": round(lat, 6),
            "lng": round(lng, 6),
            "status": status,
            "speed": 15 if status == "moving" else 0,
            "battery": 100
        })
    
    result = {
        "time": time_slot, 
        "level": level, 
        "count": count, 
        "bikes": bikes
    }
    
    return result

if __name__ == "__main__":
    # 生成不同时段和数据量的模拟数据
    time_slots = ["morning", "noon", "evening"]
    levels = ["low", "medium", "high"]
    
    for time_slot in time_slots:
        for level in levels:
            generate_bike_simulation(time_slot, level)
