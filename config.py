#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
系统配置文件
集中管理系统的配置信息，包括数据路径、算法参数等
"""

import os

# 项目根目录
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# 数据目录
DATA_DIR = os.path.join(BASE_DIR, 'data')

# 算法模块目录
ALGORITHMS_DIR = os.path.join(BASE_DIR, 'algorithms')

# 静态文件目录
STATIC_DIR = os.path.join(BASE_DIR, 'static')

# 模拟数据目录
MOCK_DATA_DIR = os.path.join(BASE_DIR, 'mock_data')

# 数据文件路径
ROADS_FILE = os.path.join(DATA_DIR, 'WHUInfo_Roads.geojson')
BUILDINGS_FILE = os.path.join(DATA_DIR, 'WHUInfo_Buildings.geojson')
POIS_FILE = os.path.join(DATA_DIR, 'WHUInfo_Points.geojson')
AREA_FILE = os.path.join(DATA_DIR, 'WHUInfo_Area.geojson')
DEMANDS_FILE = os.path.join(DATA_DIR, 'demands.csv')

# 模拟数据文件路径
BIKE_SIMULATION_FILE = os.path.join(MOCK_DATA_DIR, 'bike_simulation_data.json')
DISPATCH_DATA_FILE = os.path.join(MOCK_DATA_DIR, 'dispatch_data.json')
HEATMAP_DATA_FILE = os.path.join(MOCK_DATA_DIR, 'heatmap_data.json')
LOCATION_DATA_FILE = os.path.join(MOCK_DATA_DIR, 'location_data.json')
MAP_DATA_FILE = os.path.join(MOCK_DATA_DIR, 'map_data.json')

# 前端静态文件路径
INDEX_HTML = os.path.join(STATIC_DIR, 'index.html')
SCRIPT_JS = os.path.join(STATIC_DIR, 'script.js')
STYLE_CSS = os.path.join(STATIC_DIR, 'style.css')

# 算法参数
ALGORITHM_PARAMS = {
    # 选址优化参数
    'location': {
        'population_size': 20,      # 种群大小
        'n_generations': 50,       # 迭代次数
        'service_radius': 100,      # 服务半径（米）
        'crossover_prob': 0.7,      # 交叉概率
        'mutation_prob': 0.2,       # 变异概率
        'candidate_sample_rate': 0.05  # 候选点采样率
    },
    # 调度优化参数
    'dispatch': {
        'n_ants': 10,              # 蚂蚁数量
        'n_iter': 30,              # 迭代次数
        'alpha': 1,                # 信息素重要程度
        'beta': 3,                 # 启发式信息重要程度
        'rho': 0.2,                # 信息素挥发系数
        'q': 100,                  # 信息素强度
        'capacity': 30             # 车辆容量
    },
    # 电单车模拟参数
    'simulation': {
        'levels': {
            'low': 50,             # 低数据量
            'medium': 100,         # 中等数据量
            'high': 150            # 高数据量
        }
    }
}

# 系统配置
SYSTEM_CONFIG = {
    'host': '0.0.0.0',          # 服务器主机
    'port': 5000,               # 服务器端口
    'debug': True,              # 调试模式
    'cors': True,               # 允许跨域
    'api_base': '/api'           # API基础路径
}

# 校园边界（信息学部）
CAMPUS_BOUNDARY = {
    'min_lon': 114.348,
    'max_lon': 114.359,
    'min_lat': 30.526,
    'max_lat': 30.535
}

# 星湖区域（需要排除的区域）
STAR_LAKE_AREA = {
    'min_lon': 114.352,
    'max_lon': 114.358,
    'min_lat': 30.527,
    'max_lat': 30.531
}

# 校门区域（需要排除的区域）
GATE_AREAS = [
    # 南二门
    {"center": (114.3545, 30.5255), "radius": 0.001},  # 半径约111米
    # 珞喻门
    {"center": (114.3585, 30.5325), "radius": 0.001}   # 半径约111米
]

# 时段定义
TIME_SLOTS = {
    'morning': '早高峰 (7:00-9:00)',
    'noon': '午高峰 (11:00-13:00)',
    'evening': '晚高峰 (17:00-19:00)'
}

# 高需求区域
HIGH_DEMAND_AREAS = [
    (30.5300, 114.3530),  # 3舍
    (30.5295, 114.3525),  # 5舍
    (30.5290, 114.3520),  # 6舍
    (30.5290, 114.3550),  # 教学楼
    (30.5288, 114.3557),  # 教学区
    (30.5307, 114.3537),  # 食堂
    (30.5310, 114.3540),  # 学生活动中心
    (30.5285, 114.3545)   # 图书馆
]
