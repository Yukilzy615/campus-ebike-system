#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DATA_DIR = os.path.join(BASE_DIR, 'data')
ALGORITHMS_DIR = os.path.join(BASE_DIR, 'algorithms')
STATIC_DIR = os.path.join(BASE_DIR, 'static')

# 数据文件
ROADS_FILE = os.path.join(DATA_DIR, 'WHUInfo_Roads.geojson')
BUILDINGS_FILE = os.path.join(DATA_DIR, 'WHUInfo_Buildings.geojson')
POIS_FILE = os.path.join(DATA_DIR, 'WHUInfo_Points.geojson')
AREA_FILE = os.path.join(DATA_DIR, 'WHUInfo_Area.geojson')
DEMANDS_FILE = os.path.join(DATA_DIR, 'demands.csv')
FEEDBACK_FILE = os.path.join(DATA_DIR, 'feedback.json')

# 算法参数
ALGORITHM_PARAMS = {
    'location': {
        'population_size': 25,
        'n_generations': 50,
        'service_radius': 200,
        'crossover_prob': 0.7,
        'mutation_prob': 0.2,
        'candidate_sample_rate': 1.0,
        'point_capacity': 20
    },
    'dispatch': {
        'n_ants': 50,
        'n_iter': 100,
        'alpha': 1.5,
        'beta': 2.5,
        'rho': 0.1,
        'q': 200,
        'capacity': 30
    },
    'simulation': {
        'levels': {
            'low': 50,
            'medium': 100,
            'high': 150
        }
    },
    'battery': {
        'default_threshold': 30,
        'min_low_battery_count': 40,
        'capacity_per_trip': 10,
        'group_target_size': 5
    }
}

# 系统配置
SYSTEM_CONFIG = {
    'host': '0.0.0.0',
    'port': 5001,
    'debug': True,
    'cors': True,
    'api_base': '/api'
}

# 校园边界
CAMPUS_BOUNDARY = {
    'min_lng': 114.359524,
    'max_lng': 114.371980,
    'min_lat': 30.529869,
    'max_lat': 30.540424
}

# 时段配置
TIME_SLOTS = {
    'morning': '早高峰 (7:00-9:00)',
    'noon': '午高峰 (11:00-13:00)',
    'evening': '晚高峰 (17:00-19:00)'
}

# 校园中心坐标
CAMPUS_CENTER_BD09 = (114.3652, 30.5312)

# 路线颜色
ROUTE_COLORS = [
    "#28a745",
    "#1a73e8",
    "#fb8c00",
    "#8e24aa",
    "#00acc1",
    "#d81b60",
    "#6d4c41",
    "#546e7a"
]
