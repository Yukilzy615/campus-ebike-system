"""
Flask后端主程序 - 校园电单车智能系统
负责所有API接口，集成选址、调度、电单车模拟算法
"""

import os
import json
import pandas as pd
try:
    import geopandas as gpd
except ImportError:
    gpd = None
    print("警告：geopandas未安装，将使用基础功能")
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

# ----------------------------- 导入算法模块（B和C提供） -----------------------------
from algorithms.location_opt import run_location_optimization
from algorithms.dispatch_opt import run_dispatch_optimization
from algorithms.bike_simulator import generate_bike_simulation

# ----------------------------- 初始化Flask -----------------------------
app = Flask(__name__, static_folder='static')
CORS(app)  # 允许跨域

# ----------------------------- 数据加载 -----------------------------
DATA_DIR = 'data_bd09'  # 使用转换后的BD09坐标数据
ROADS_FILE = os.path.join(DATA_DIR, 'WHUInfo_Roads.geojson')
BUILDINGS_FILE = os.path.join(DATA_DIR, 'WHUInfo_Buildings.geojson')
POIS_FILE = os.path.join(DATA_DIR, 'WHUInfo_Points.geojson')
AREA_FILE = os.path.join(DATA_DIR, 'WHUInfo_Area.geojson')
DEMANDS_FILE = os.path.join('data', 'demands.csv')  # 需求数据不需要转换

# 加载GeoJSON（保持字典格式）
def load_geojson(file_path):
    """加载GeoJSON文件，处理可能的错误"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"错误：文件不存在: {file_path}")
        return {"type": "FeatureCollection", "features": []}
    except json.JSONDecodeError:
        print(f"错误：文件格式不正确: {file_path}")
        return {"type": "FeatureCollection", "features": []}
    except Exception as e:
        print(f"错误：加载文件时出错: {file_path}, {e}")
        return {"type": "FeatureCollection", "features": []}

roads_geojson = load_geojson(ROADS_FILE)
buildings_geojson = load_geojson(BUILDINGS_FILE)
pois_geojson = load_geojson(POIS_FILE)
area_geojson = load_geojson(AREA_FILE)

# 过滤路网数据（与dispatch_opt.py和bike_simulator.py保持一致）
filtered_roads_geojson = roads_geojson

# 加载需求CSV，如果文件不存在则创建默认数据
if os.path.exists(DEMANDS_FILE):
    demands_df = pd.read_csv(DEMANDS_FILE)
else:
    # 创建默认需求数据
    import numpy as np
    # 生成模拟需求数据（使用BD09坐标范围）
    time_slots = ['morning', 'noon', 'evening']
    lats = np.random.uniform(30.528, 30.535, 100)
    lngs = np.random.uniform(114.360, 114.370, 100)
    demands = np.random.randint(1, 10, 100)
    
    data = []
    for time_slot in time_slots:
        for lat, lng, demand in zip(lats, lngs, demands):
            data.append({'time_slot': time_slot, 'start_lat': lat, 'start_lng': lng, 'demand': demand})
    
    demands_df = pd.DataFrame(data)
    demands_df.to_csv(DEMANDS_FILE, index=False)
    print(f"已创建默认需求数据文件: {DEMANDS_FILE}")

# 可选：加载为GeoDataFrame（供算法使用）
roads_gdf = buildings_gdf = pois_gdf = area_gdf = None
if gpd is not None:
    try:
        roads_gdf = gpd.read_file(ROADS_FILE)
        buildings_gdf = gpd.read_file(BUILDINGS_FILE)
        pois_gdf = gpd.read_file(POIS_FILE)
        area_gdf = gpd.read_file(AREA_FILE)
        print("GeoDataFrame加载成功")
    except Exception as e:
        print(f"警告：geopandas读取失败，算法可能需要自行处理文件: {e}")
else:
    print("geopandas未安装，跳过GeoDataFrame加载")

# ----------------------------- 辅助函数 -----------------------------

def point_in_polygon(point, polygon):
    """判断点是否在多边形内部（使用射线法）
    point: [lng, lat]
    polygon: 多边形坐标列表，格式为 [[[lng1, lat1], [lng2, lat2], ...]]
    """
    lng, lat = point
    inside = False
    
    # 遍历多边形的每条边
    for ring in polygon:
        n = len(ring)
        for i in range(n):
            j = (i + 1) % n
            xi, yi = ring[i]
            xj, yj = ring[j]
            
            # 检查点是否在边的上方或下方
            if ((yi > lat) != (yj > lat)):
                # 计算交点的经度
                x_intersect = ( (lat - yi) * (xj - xi) ) / (yj - yi) + xi
                # 如果点的经度小于交点经度，则射线与边相交
                if lng < x_intersect:
                    inside = not inside
    
    return inside

def is_point_in_area(lng, lat, area_geojson):
    """判断点是否在校园区域内
    lng: 经度
    lat: 纬度
    area_geojson: 区域GeoJSON数据
    """
    # 校园边界的BD09坐标范围
    CAMPUS_BOUNDARY = {
        'min_lng': 114.359524,
        'max_lng': 114.371980,
        'min_lat': 30.529869,
        'max_lat': 30.540424
    }
    
    # 首先检查点是否在校园边界内
    if not (CAMPUS_BOUNDARY['min_lng'] <= lng <= CAMPUS_BOUNDARY['max_lng'] and 
            CAMPUS_BOUNDARY['min_lat'] <= lat <= CAMPUS_BOUNDARY['max_lat']):
        return False
    
    # 然后检查点是否在任何一个区域内
    for feature in area_geojson.get('features', []):
        geometry = feature.get('geometry', {})
        geom_type = geometry.get('type')
        coordinates = geometry.get('coordinates', [])
        
        if geom_type == 'MultiPolygon':
            for polygon in coordinates:
                if point_in_polygon([lng, lat], polygon):
                    return True
        elif geom_type == 'Polygon':
            if point_in_polygon([lng, lat], coordinates):
                return True
    
    # 如果点在校园边界内但不在任何特定区域内，也返回True
    return True

def get_heatmap_points(time_slot):
    """根据时段和需求模拟规则生成热力图点 [lat, lng, weight]"""
    # 需求模拟规则
    demand_rules = {
        'morning': {
            'from': {'宿舍': 1.0},
            'to': {'教学楼': 0.7, '食堂': 0.1, '其他': 0.2}
        },
        'noon': {
            'from': {'教学楼': 0.8, '其他': 0.2},
            'to': {'食堂': 0.6, '宿舍': 0.2, '其他': 0.2}
        },
        'evening': {
            'from': {'教学楼': 0.7, '食堂': 0.2, '其他': 0.1},
            'to': {'宿舍': 1.0}
        }
    }
    
    # 建筑容量（预设）
    building_capacity = {
        '宿舍': 1000,
        '教学楼': 1500,
        '食堂': 500,
        '其他': 300
    }
    
    # 从POI数据中生成热力图点
    points = []
    
    # 遍历POI数据
    for feature in pois_geojson.get('features', []):
        geometry = feature.get('geometry', {})
        geom_type = geometry.get('type')
        coordinates = geometry.get('coordinates', [])
        
        # 只处理点类型的POI
        if geom_type != 'Point':
            continue
        
        # 获取POI的坐标
        if isinstance(coordinates, list) and len(coordinates) == 2:
            lng, lat = coordinates
            
            # 检查点是否在区域内
            if not is_point_in_area(lng, lat, area_geojson):
                continue
            
            # 获取POI的属性
            properties = feature.get('properties', {})
            name = str(properties.get('name', '')).lower()
            
            # 确定POI的类别
            category = '其他'
            if '学生宿舍' in name:
                category = '宿舍'
            elif '教学楼' in name:
                category = '教学楼'
            elif '食堂' in name:
                category = '食堂'
            
            # 根据时段和需求规则计算需求权重
            if time_slot in demand_rules:
                rule = demand_rules[time_slot]
                from_weights = rule.get('from', {})
                to_weights = rule.get('to', {})
                
                # 计算从该POI出发的需求
                if category in from_weights:
                    from_weight = from_weights[category]
                    capacity = building_capacity.get(category, 300)
                    demand = int(from_weight * capacity)
                    if demand > 0:
                        points.append([lat, lng, demand])
                
                # 计算到该POI的需求
                if category in to_weights:
                    to_weight = to_weights[category]
                    capacity = building_capacity.get(category, 300)
                    demand = int(to_weight * capacity)
                    if demand > 0:
                        points.append([lat, lng, demand])
    
    print(f"时段 {time_slot} 生成的热力图点数量: {len(points)}")
    # 打印一些点的坐标，以便验证
    if points:
        print(f"前5个点的坐标: {points[:5]}")
    return points

# ----------------------------- API 接口 -----------------------------
def add_category_to_pois(pois_data):
    """为POI数据添加category字段映射"""
    # 复制数据以避免修改原始数据
    pois_copy = json.loads(json.dumps(pois_data))
    
    for feature in pois_copy.get('features', []):
        properties = feature.get('properties', {})
        name = str(properties.get('name', '')).lower()
        layer = str(properties.get('LAYER', '')).lower()
        amenity = str(properties.get('amenity', '')).lower()
        building = str(properties.get('building', '')).lower()
        tourism = str(properties.get('tourism', '')).lower()
        shop = str(properties.get('shop', '')).lower()
        highway = str(properties.get('highway', '')).lower()
        place = str(properties.get('place', '')).lower()
        
        # 根据字段映射category
        if '学生宿舍' in name:
            properties['category'] = '宿舍'
        elif '教学楼' in name:
            properties['category'] = '教学楼'
        elif '食堂' in name:
            properties['category'] = '食堂'
        elif '门' in name:
            properties['category'] = '校门'
        else:
            properties['category'] = '其他'
    
    return pois_copy

@app.route('/api/map-data', methods=['GET'])
def get_map_data():
    """返回基础地图数据：路网、建筑、POI、区域"""
    # 为POI数据添加category字段
    enhanced_pois = add_category_to_pois(pois_geojson)
    
    return jsonify({
        "roads": roads_geojson,
        "buildings": buildings_geojson,
        "pois": enhanced_pois,
        "area": area_geojson
    })

@app.route('/api/heatmap-data', methods=['GET'])
def get_heatmap_data():
    """返回热力图数据（支持时段参数）"""
    time_slot = request.args.get('time', 'morning')
    if time_slot not in ['morning', 'noon', 'evening']:
        time_slot = 'morning'
    points = get_heatmap_points(time_slot)
    return jsonify({"points": points})

@app.route('/api/optimize-location', methods=['GET', 'POST'])
def optimize_location():
    """智能选址：返回推荐停车点GeoJSON"""
    if request.method == 'POST':
        # 从POST请求中获取数据
        data = request.get_json()
        num = data.get('num_locations', 10)
        radius = data.get('service_radius', 200)
        coverage = data.get('optimize_coverage', True)
        distance = data.get('optimize_distance', True)
        balance = data.get('optimize_balance', False)
    else:
        # 从GET请求中获取数据
        num = request.args.get('num', default=10, type=int)
        radius = request.args.get('radius', default=200, type=int)
        coverage = request.args.get('coverage', default='true', type=str).lower() == 'true'
        distance = request.args.get('distance', default='true', type=str).lower() == 'true'
        balance = request.args.get('balance', default='false', type=str).lower() == 'true'
    # 调用B同学的算法（可传入roads_gdf, pois_gdf等）
    result = run_location_optimization(num_locations=num, service_radius=radius, optimize_coverage=coverage, optimize_distance=distance, optimize_balance=balance)
    return jsonify(result)

@app.route('/api/optimize-dispatch', methods=['GET', 'POST'])
def optimize_dispatch():
    """动态调度：返回调度路径GeoJSON及指标"""
    if request.method == 'POST':
        # 从POST请求中获取数据
        data = request.get_json()
        time_slot = data.get('time_slot', 'morning')
        parking_points = data.get('parking_points', [])
    else:
        # 从GET请求中获取数据
        time_slot = request.args.get('time', 'morning')
        parking_points = []
    
    if time_slot not in ['morning', 'noon', 'evening']:
        time_slot = 'morning'
    
    result = run_dispatch_optimization(time_slot, parking_points)
    return jsonify(result)

@app.route('/api/save-locations', methods=['POST'])
def save_locations():
    """保存前端手动编辑的停车点（简易存储到文件）"""
    data = request.get_json()
    if not data or 'features' not in data:
        return jsonify({"status": "error", "message": "无效数据"}), 400
    # 保存到data/manual_locations.geojson
    with open(os.path.join(DATA_DIR, 'manual_locations.geojson'), 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    return jsonify({"status": "success", "message": f"已保存 {len(data['features'])} 个停车点"})

@app.route('/api/compare-locations', methods=['GET'])
def compare_locations():
    """获取算法推荐点与手动点的对比数据"""
    algo_result = run_location_optimization()
    manual_file = os.path.join(DATA_DIR, 'manual_locations.geojson')
    if os.path.exists(manual_file):
        with open(manual_file, 'r', encoding='utf-8') as f:
            manual_geojson = json.load(f)
    else:
        manual_geojson = {"type": "FeatureCollection", "features": []}
    # 简单对比（覆盖率可从算法metadata获取）
    comparison = {
        "algo_coverage": algo_result.get("metadata", {}).get("coverage", 0),
        "manual_coverage": 0,  # 前端可自行计算
        "improvement": 0
    }
    return jsonify({
        "algorithm": algo_result,
        "manual": manual_geojson,
        "comparison": comparison
    })

@app.route('/api/bike-simulation', methods=['GET'])
def bike_simulation():
    """电单车模拟展示数据（调用C同学的生成函数）"""
    time_slot = request.args.get('time', 'morning')
    level = request.args.get('level', 'medium')
    if time_slot not in ['morning', 'noon', 'evening']:
        time_slot = 'morning'
    if level not in ['low', 'medium', 'high']:
        level = 'medium'
    result = generate_bike_simulation(time_slot, level)
    return jsonify(result)

@app.route('/api/roads', methods=['GET'])
def get_roads():
    """获取过滤后的路网数据"""
    return jsonify(filtered_roads_geojson)

# ----------------------------- 前端入口 -----------------------------
@app.route('/')
def index():
    """提供前端页面"""
    import os
    # 检查static目录是否存在
    if os.path.exists('static/index.html'):
        return send_from_directory('static', 'index.html')
    else:
        return "前端页面未找到，请确保static目录存在"

# 为static目录提供静态文件服务
@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

# 为根路径提供静态文件服务（处理前端页面中的相对路径）
@app.route('/<path:path>')
def serve_root_static(path):
    import os
    # 检查static目录中是否存在该文件
    static_path = os.path.join('static', path)
    if os.path.exists(static_path):
        return send_from_directory('static', path)
    # 如果不存在，返回404
    return "文件未找到", 404

"""
4.15 增添
"""
@app.route('/data/<path:filename>')
def serve_data(filename):
    # 获取 data 文件夹的绝对路径
    data_dir = os.path.join(app.root_path, 'data')
    return send_from_directory(data_dir, filename)

@app.route('/data_bd09/<path:filename>')
def serve_data_bd09(filename):
    # 获取 data_bd09 文件夹的绝对路径
    data_dir = os.path.join(app.root_path, 'data_bd09')
    return send_from_directory(data_dir, filename)

# ----------------------------- 启动 -----------------------------
if __name__ == '__main__':
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        print(f"请将数据文件放置于 {DATA_DIR} 目录下")
    app.run(debug=True, host='0.0.0.0', port=5001)