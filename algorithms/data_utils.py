import os
import json
import geopandas as gpd
from shapely.geometry import Point

# 加载WHUInfo边界
def load_whu_boundary(boundary_path='data/WHUInfo.geojson'):
    """加载WHUInfo边界"""
    if not os.path.exists(boundary_path):
        print(f"警告：边界文件不存在: {boundary_path}")
        return None
    try:
        boundary_gdf = gpd.read_file(boundary_path)
        boundary_gdf = boundary_gdf.to_crs('EPSG:4326')
        return boundary_gdf
    except Exception as e:
        print(f"加载边界文件失败: {e}")
        return None

# 过滤路网数据
def filter_roads(roads_gdf):
    """过滤路网数据：排除name值为null和保留name值为null但是fclass值为service或residential的数据"""
    if 'name' in roads_gdf.columns:
        # 保留name不为null的道路，或者name为null但fclass为service或residential的道路
        if 'fclass' in roads_gdf.columns:
            filtered_gdf = roads_gdf[(
                roads_gdf['name'].notna() | 
                (roads_gdf['name'].isna() & roads_gdf['fclass'].isin(['service', 'residential']))
            )]
        else:
            # 如果没有fclass列，只保留name不为null的道路
            filtered_gdf = roads_gdf[roads_gdf['name'].notna()]
        print(f"过滤后道路数量: {len(filtered_gdf)}")
        return filtered_gdf
    return roads_gdf

# 使用边界裁剪数据
def clip_data_with_boundary(data_gdf, boundary_gdf):
    """使用边界裁剪数据"""
    if boundary_gdf is None:
        return data_gdf
    try:
        clipped_gdf = gpd.clip(data_gdf, boundary_gdf)
        print(f"裁剪后数据数量: {len(clipped_gdf)}")
        return clipped_gdf
    except Exception as e:
        print(f"裁剪数据失败: {e}")
        return data_gdf

# 加载并处理路网数据
def load_and_process_roads(roads_path='data/WHUInfo_Roads.geojson', boundary_path='data/WHUInfo.geojson'):
    """加载并处理路网数据"""
    if not os.path.exists(roads_path):
        print(f"警告：路网文件不存在: {roads_path}")
        return None
    
    try:
        # 加载路网数据
        roads_gdf = gpd.read_file(roads_path)
        roads_gdf = roads_gdf.to_crs('EPSG:4326')
        print(f"原始道路数量: {len(roads_gdf)}")
        
        # 过滤路网数据
        filtered_roads = filter_roads(roads_gdf)
        
        # 加载边界
        boundary_gdf = load_whu_boundary(boundary_path)
        
        # 裁剪路网数据
        clipped_roads = clip_data_with_boundary(filtered_roads, boundary_gdf)
        
        return clipped_roads
    except Exception as e:
        print(f"处理路网数据失败: {e}")
        return None

# 加载并处理建筑物数据
def load_and_process_buildings(buildings_path='data/WHUInfo_Buildings.geojson', boundary_path='data/WHUInfo.geojson'):
    """加载并处理建筑物数据"""
    if not os.path.exists(buildings_path):
        print(f"警告：建筑物文件不存在: {buildings_path}")
        return None
    
    try:
        # 加载建筑物数据
        buildings_gdf = gpd.read_file(buildings_path)
        buildings_gdf = buildings_gdf.to_crs('EPSG:4326')
        print(f"原始建筑物数量: {len(buildings_gdf)}")
        
        # 加载边界
        boundary_gdf = load_whu_boundary(boundary_path)
        
        # 裁剪建筑物数据
        clipped_buildings = clip_data_with_boundary(buildings_gdf, boundary_gdf)
        
        return clipped_buildings
    except Exception as e:
        print(f"处理建筑物数据失败: {e}")
        return None

# 加载并处理POI数据
def load_and_process_pois(pois_path='data/WHUInfo_Points.geojson', boundary_path='data/WHUInfo.geojson'):
    """加载并处理POI数据"""
    if not os.path.exists(pois_path):
        print(f"警告：POI文件不存在: {pois_path}")
        return None
    
    try:
        # 加载POI数据
        pois_gdf = gpd.read_file(pois_path)
        pois_gdf = pois_gdf.to_crs('EPSG:4326')
        print(f"原始POI数量: {len(pois_gdf)}")
        
        # 加载边界
        boundary_gdf = load_whu_boundary(boundary_path)
        
        # 裁剪POI数据
        clipped_pois = clip_data_with_boundary(pois_gdf, boundary_gdf)
        
        return clipped_pois
    except Exception as e:
        print(f"处理POI数据失败: {e}")
        return None
