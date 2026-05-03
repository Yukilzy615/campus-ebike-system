# 校园电动车智能调度系统

## 项目简介

本项目是一个基于武汉大学地理数据的校园电动车智能调度系统，实现了智能选址、动态调度、电动车模拟、电池运维等核心功能。

## 功能特性

### 1. 系统概览

- 校园地图可视化（百度地图）
- 热力图展示（支持早/午/晚高峰时段）
- 图层控制（智能选址点、人工选址点、覆盖范围、热力图、校园边界、调度路线、低电量车辆、换电路线等）
- 方案导出功能
- 多角色登录（管理员/调度员）

### 2. 智能选址

- 基于遗传算法的停车点优化
- 支持自定义选址参数（数量、服务半径等）
- 覆盖率、平均距离、均衡度等指标评估
- 手动编辑与算法推荐对比

### 3. 电动车模拟

- 基于校园地图的电动车流动模拟
- 支持早/午/晚高峰时段选择
- 支持低/中/高数据量级配置
- 实时动画展示（开始/停止/清除控制）
- 车辆状态可视化（空闲/移动）

### 4. 动态调度

- 基于蚁群算法的调度路线生成
- 多调度员任务分配与管理（支持1-3个调度员）
- 完整路线可视化（包含供需点）
- 调度员自动查看分配路线
- 路段点击高亮与信息显示

### 5. 电池运维

- 低电量车辆识别（可调节阈值，默认为30%）
- 换电路线规划（蚁群算法优化）
- 多车多路线优化（单车载量默认为6辆）
- 调度员分配与查看

### 6. 意见反馈

- 调度员提交反馈
- 管理员处理反馈
- 状态管理与备注功能
- 按角色过滤显示（管理员看全部，调度员只看本人）

### 7. AI 辅助决策

- 方案解释
- 调度待办（按角色过滤显示）
- 风险预警（按角色过滤显示）
- 决策建议
- 受限问答
- 响应时间监控（目标响应时间：50ms）

## 项目结构

```
campus_ebike/
├── app.py                 # Flask后端主程序
├── config.py              # 配置文件
├── requirements.txt       # 依赖包列表
├── algorithms/            # 算法模块
│   ├── __pycache__/       # Python缓存
│   ├── ai_assistant.py    # AI助手
│   ├── battery_opt.py     # 电池运维算法
│   ├── bike_simulator.py  # 电动车模拟器
│   ├── data_utils.py      # 数据工具
│   ├── dispatch_opt.py    # 动态调度算法
│   ├── feedback_store.py  # 反馈存储
│   └── location_opt.py    # 智能选址算法
├── data/                  # 数据目录
│   ├── demands.csv                   # 需求数据
│   ├── feedback.json                 # 反馈数据
│   ├── WHUInfo.geojson               # 完整边界
│   ├── WHUInfo_Area.geojson          # 区域边界
│   ├── WHUInfo_Buildings.geojson     # 建筑数据
│   ├── WHUInfo_Buildings_Clipped.geojson # 裁剪后建筑数据
│   ├── WHUInfo_Points.geojson       # POI数据
│   ├── WHUInfo_Points_Clipped.geojson   # 裁剪后POI数据
│   ├── WHUInfo_Roads.geojson         # 路网数据
│   └── WHUInfo_Roads_Filtered.geojson   # 过滤后路网数据
└── static/               # 前端资源
    ├── index.html        # 主页面
    ├── script.js        # 前端脚本
    └── style.css        # 样式文件
```

## 快速开始

### 1. 环境要求

- Python 3.8+
- pip包管理器

### 2. 安装依赖

```bash
pip install -r requirements.txt
```

### 3. 运行项目

```bash
python app.py
```

服务默认启动在 `http://localhost:5001`

### 4. 登录系统

- **管理员账号**：admin / admin
- **调度员账号**：调度员1 / 123456、调度员2 / 123456

## 技术栈

### 后端

- Flask - Web框架
- NumPy/Pandas - 数据处理
- Shapely - 空间计算
- Scikit-learn - 机器学习
- SciPy - 科学计算
- DEAP - 遗传算法
- NetworkX - 图计算
- GeoPandas - 空间数据处理

### 前端

- 原生 JavaScript
- Baidu Maps API - 地图可视化

## 算法说明

### 智能选址（遗传算法）

- 种群大小：25
- 进化代数：50
- 服务半径：200米
- 交叉概率：0.7
- 变异概率：0.2
- 候选点采样率：1.0
- 停车点容量：20

### 动态调度（蚁群算法）

- 蚂蚁数量：50
- 迭代次数：100
- 信息素重要度：1.5
- 启发信息重要度：2.5
- 信息素挥发系数：0.1
- 信息素增强系数：200

### 电池运维

- 低电量阈值：30%（可调节）
- 最低低电量车辆数：40（样本不足时自动补强）
- 单车载量：10辆
- 分组目标：5辆

## API接口

### 系统数据

- `GET /api/map-data` - 获取地图数据（路网、建筑、POI、区域）
- `GET /api/heatmap-data` - 获取热力图数据（支持时段参数）
- `GET /api/roads` - 获取过滤后的路网数据

### 智能选址

- `GET/POST /api/optimize-location` - 选址优化（支持自定义参数）
- `POST /api/save-locations` - 保存手动编辑的停车点
- `POST /api/calculate-coverage` - 计算给定选址点的覆盖率
- `GET /api/compare-locations` - 获取算法推荐点与手动点的对比数据

### 动态调度

- `GET/POST /api/optimize-dispatch` - 调度优化（支持按角色返回单路线或多路线）

### 电动车模拟

- `GET /api/bike-simulation` - 电动车模拟展示数据

### 电池运维

- `GET /api/battery/low` - 获取低电量车辆列表（样本不足时自动补强）
- `POST /api/battery/route` - 规划换电运维路线

### 意见反馈

- `GET /api/feedback/list` - 反馈列表（按角色过滤）
- `POST /api/feedback/create` - 提交反馈
- `POST /api/feedback/update` - 更新反馈（仅管理员）

### AI辅助

- `POST /api/ai/compare-report` - 方案解释
- `POST /api/ai/priority` - 调度待办
- `POST /api/ai/risk` - 风险预警
- `POST /api/ai/decision` - 决策建议
- `POST /api/ai/chat` - 受限问答

## 数据说明

### 坐标系

- 使用百度坐标系（BD09）

### 时段配置

- 早高峰：7:00-9:00
- 午高峰：11:00-13:00
- 晚高峰：17:00-19:00

### 校园区域

- 经度范围：114.3595-114.3720
- 纬度范围：30.5299-30.5404

## 注意事项

1. 确保 data 目录下有完整的地理数据文件
2. 首次运行会自动创建缺失的数据文件
3. 建议使用最新版本的浏览器访问系统
4. 调度员登录后会自动显示分配的路线
5. 管理员可进行任务分配，调度员只能查看自己的任务

## 开发团队

本项目为课程设计项目，包含智能选址、电动车模拟、动态调度、电池运维、意见反馈、AI 辅助决策等多个模块。
