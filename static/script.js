// ==================== 全局变量和常量====================



const API_BASE = '/api/';



const BAIDU_MAP_AK = 'E4805d16520de693a3fe707cdc962045'; // 百度地图 AK







// 校园中心坐标（BD09格式，从百度地图获取


const CAMPUS_CENTER_BD09 = [114.365, 30.533]; // 武汉大学信息学部中心







// 校园边界范围（BD09格式，与智能选址候选点范围一致）


// 数据已从WGS84转换为BD09，但CRS声明仍是CRS84



// 武汉大学信息学部边界坐标（BD09格式，从WHUInfo_Area.geojson中提取）

const CAMPUS_BOUNDARY_POLYGON = [

    [114.3609866586929, 30.534688114577257],

    [114.3609142339328, 30.53471072254468],

    [114.36118463644388, 30.535415019877863],

    [114.36132554315587, 30.535438844742853],

    [114.36245624881417, 30.53564219753188],

    [114.36247248246794, 30.535478268532767],

    [114.3625289267156, 30.535323756222937],

    [114.36254552421966, 30.534674575581665],

    [114.36257703776674, 30.53467634361008],

    [114.36300955709112, 30.534686353563906],

    [114.36335425961177, 30.534697988526894],

    [114.36363723064589, 30.53472824866947],

    [114.36363202259396, 30.53513286932981],

    [114.36367225119717, 30.53513334206993],

    [114.36367220031204, 30.535331562557914],

    [114.363430629229, 30.535335102834924],

    [114.36318884046446, 30.535639017657413],

    [114.3631617146435, 30.5360363290501],

    [114.36351845031476, 30.5362851904538],

    [114.36352102208751, 30.53644921779209],

    [114.36375189041604, 30.536445611693555],

    [114.36374099995719, 30.536674287905104],

    [114.36337322579271, 30.536695778449857],

    [114.36302132713001, 30.5370453495026],

    [114.36356851309586, 30.537491424330412],

    [114.3629400280813, 30.538082343469434],

    [114.36379573595481, 30.538622092354508],

    [114.36358567940238, 30.53886171932706],

    [114.36377760057819, 30.539000748886014],

    [114.36384635121203, 30.539002433473307],

    [114.36411946946158, 30.538648589190363],

    [114.3641629948038, 30.5386614567133],

    [114.36529072843416, 30.538609532901162],

    [114.36580084014811, 30.538344374939626],

    [114.36592013751951, 30.538283329421798],

    [114.36655102409823, 30.537972248732373],

    [114.36689601298743, 30.537853703421995],

    [114.36711398906357, 30.53779063277662],

    [114.3676175751327, 30.537673590671712],

    [114.36907710046447, 30.53716704103965],

    [114.36931243276568, 30.53708479425076],

    [114.36940425411701, 30.537039882543247],

    [114.36943353026122, 30.53701914467341],

    [114.36932760291964, 30.536787350484275],

    [114.3693186357256, 30.53672395498471],

    [114.3693222779695, 30.536175800393494],

    [114.36942576979426, 30.535813643178944],

    [114.36944652425115, 30.535797815796563],

    [114.36946557434302, 30.534188228358285],

    [114.37000138769315, 30.534202711870474],

    [114.36993467429701, 30.533463347526187],

    [114.36971289987115, 30.53289503967613],

    [114.3696752709355, 30.53282248716026],

    [114.36955100237988, 30.532544229459834],

    [114.36961826149259, 30.532514132720028],

    [114.36946526574923, 30.532186198324364],

    [114.36897807989628, 30.531285489741837],

    [114.3688559505414, 30.531118059000733],

    [114.36874846522664, 30.531089323867334],

    [114.36863009846984, 30.531163296633128],

    [114.36842064723098, 30.53095074664678],

    [114.36829169072792, 30.530992379739676],

    [114.36787252338448, 30.531061668439236],

    [114.3678187748022, 30.530994644583927],

    [114.36772520277391, 30.53102191585694],

    [114.36755230706686, 30.531044836975827],

    [114.36749095421125, 30.531292634140776],

    [114.3669991439199, 30.531534847150745],

    [114.36655456156026, 30.531605877853877],

    [114.36592454292305, 30.531595131234916],

    [114.3659234927408, 30.531671338967676],

    [114.36578758928715, 30.531729249327267],

    [114.36578479561493, 30.532324418847224],

    [114.36400770834065, 30.53233039954737],

    [114.3639253790833, 30.532276563806068],

    [114.36387439401616, 30.532344865485854],

    [114.36387285894077, 30.53239556559563],

    [114.36384535127759, 30.533252757564945],

    [114.36156418317931, 30.53313530515497],

    [114.36156755596778, 30.532886595868334],

    [114.36147703563435, 30.532885025423408],

    [114.36105085644274, 30.533034456827334],

    [114.3611566276169, 30.533383806447564],

    [114.36095535471142, 30.53344945940783],

    [114.36108921900093, 30.533803906442326],

    [114.3609684811367, 30.53383539435926],

    [114.36104616510792, 30.534009240864563],

    [114.3608207956116, 30.53407240564798],

    [114.36102428835689, 30.53451975095849],

    [114.36094114657772, 30.53456309054514],

    [114.3609866586929, 30.534688114577257]

];







// 全局变量



let map;



let activeMapProvider = 'baidu';



let currentMode = 'view'; // 'view', 'add', 'edit'

let currentServiceRadius = 100;

let smartMarkers = [];

let manualMarkers = [];

let smartCircles = [];

let manualCircles = [];

let dispatchLayers = [];

let dispatchLines = [];

let dispatchMarkers = [];
let activeDispatchRouteIndex = null;
let activeSegmentIndex = null;
let tempSegmentLine = null;

const DISPATCH_COLORS = ['#9c27b0', '#4caf50', '#f44336'];
const DISPATCH_HIGHLIGHT_COLOR = '#ff9800';

let poiMarkers = [];

let comparisonChart = null;

let usageChart = null;

let predictionChart = null;

const SMART_ICON_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiI+PHBvbHlnb24gcG9pbnRzPSI2LDAsMTIsMTIsMCwxMiIgZmlsbD0iIzFhNzNlOCIvPjwvc3ZnPg==';

const MANUAL_ICON_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiI+PHBvbHlnb24gcG9pbnRzPSI2LDAsMTIsMTIsMCwxMiIgZmlsbD0iI2VhNDMzNSIvPjwvc3ZnPg==';

let campusBoundaryLayer = [];

let smartMetrics = {

    coverage: 0,

    avg_distance: 0,

    balance: 0,

    capacity: 0

};

let manualLocationMetrics = null;

let dispatchFeatures = [];

let demandPointsData = null;

let radiusUpdateSeq = 0;

let selectedScheme = 'auto';

let currentDispatchScheme = '待选择';

let latestSmartLocationResult = null;

let latestDispatchResult = null;

let savedPredictionData = null;
let initialPredictionData = null;
let initialUsageData = null;
let isResetting = false;
let chartsInitialized = false;

let currentPOIData = null;

let currentPoiSource = 'mock';

let currentUserRole = 'admin';
let currentUsername = 'admin';
let feedbackListCache = [];
let feedbackEditingId = null;
let feedbackRequestSeq = 0;

// 生成选址方案 hash（用于标识当前方案）
function generateSchemeHash(scheme) {
    const effectiveScheme = scheme || getEffectiveScheme();
    const markers = effectiveScheme === 'smart' ? smartMarkers : manualMarkers;
    const markerInfos = markers.map(m => {
        let lat;
        let lng;
        if (m.marker && typeof m.marker.getPosition === 'function') {
            const pos = m.marker.getPosition();
            lat = pos.lat;
            lng = pos.lng;
        } else {
            lat = m.lat;
            lng = m.lng;
        }
        return `${lat.toFixed(6)},${lng.toFixed(6)}`;
    }).sort().join('|');
    return `${effectiveScheme}_${currentServiceRadius}_${markers.length}_${markerInfos}`;
}

// 电动车模拟全局状态
let ebikeSimMarkers = [];
let ebikeSimData = [];
let ebikeAnimationTimer = null;
let ebikeAnimationRunning = false;
let ebikeRoadReady = false;
let ebikeRoadLoadingPromise = null;
let batteryRouteLines = [];
let lowBatteryMarkers = [];
let currentLowBatteryList = [];
let batteryRouteAssignments = {};
let batteryLastRouteResult = null;
let aiPanelSessionToken = 0;


const BATTERY_ROUTE_COLORS = ['#1a73e8', '#00acc1', '#6d4c41', '#546e7a'];
const BATTERY_DEFAULT_CAPACITY = 10;
const BATTERY_STATE_STORAGE_KEY = 'battery_ops_state_v1';
const BATTERY_ARROW_ROTATION_OFFSET = 90;
const AI_RESULT_FALLBACK_TEXT = '当前未获取到分析结果，请先运行相关模块或稍后重试';

let dispatcherSelectedVehicleKey = '';

// 坐标系判断边界：前端底图使用 BD09，后端数据可能混入 WGS84，需要归一化
const EBIKE_BD09_BOUNDS = {
    minLng: 114.3590,
    maxLng: 114.3725,
    minLat: 30.5290,
    maxLat: 30.5410
};

const EBIKE_WGS84_BOUNDS = {
    minLng: 114.3460,
    maxLng: 114.3605,
    minLat: 30.5250,
    maxLat: 30.5375
};



// 真实路网数据（由 loadRealRoadNetwork 加载）

const realRoadNetwork = {

    nodes: {},

    edges: []

};



// 兜底的模拟路网数据

const mockRoadNetwork = {

    type: "FeatureCollection",

    features: [

        {

            type: "Feature",

            geometry: {

                type: "LineString",

                coordinates: [

                    [114.3658, 30.5302],

                    [114.3660, 30.5295],

                    [114.3657, 30.5288]

                ]

            }

        },

        {

            type: "Feature",

            geometry: {

                type: "LineString",

                coordinates: [

                    [114.3625, 30.5305],

                    [114.3635, 30.5302],

                    [114.3637, 30.5307],

                    [114.3645, 30.5295],

                    [114.3660, 30.5295]

                ]

            }

        },

        {

            type: "Feature",

            geometry: {

                type: "LineString",

                coordinates: [

                    [114.3640, 30.5318],

                    [114.3652, 30.5318],

                    [114.3656, 30.5314],

                    [114.3658, 30.5302],

                    [114.3667, 30.5284]

                ]

            }

        }

    ]

};







// 模拟热力图数据（根据WHUInfo_Area.geojson的范围生成）



const MOCK_HEATMAP_DATA = {



    morning: [



        [30.5310, 114.3545, 95], [30.5307, 114.3545, 90], [30.5302, 114.3547, 85],



        [30.5314, 114.3545, 88], [30.5302, 114.3536, 82], [30.5307, 114.3526, 78],



        [30.5301, 114.3526, 80], [30.5311, 114.3536, 85], [30.5309, 114.3519, 75],



        [30.5305, 114.3517, 72], [30.5300, 114.3519, 70], [30.5317, 114.3545, 80],



        [30.5288, 114.3535, 45], [30.5285, 114.3524, 42], [30.5294, 114.3495, 35],



        [30.5288, 114.3557, 15], [30.5284, 114.3569, 12], [30.5288, 114.3568, 10],



        [30.5279, 114.3546, 18], [30.5283, 114.3546, 15], [30.5294, 114.3515, 20],



        [30.5270, 114.3558, 40], [30.5335, 114.3576, 30], [30.5327, 114.3597, 25]



    ],



    noon: [



        [30.5307, 114.3537, 95], [30.5296, 114.3530, 90], [30.5293, 114.3531, 85],



        [30.5328, 114.3550, 80], [30.5327, 114.3526, 75],



        [30.5288, 114.3557, 60], [30.5288, 114.3568, 55], [30.5284, 114.3569, 50],



        [30.5283, 114.3546, 45], [30.5279, 114.3546, 40], [30.5297, 114.3510, 42],



        [30.5310, 114.3545, 35], [30.5307, 114.3526, 30], [30.5314, 114.3556, 28],



        [30.5314, 114.3556, 50]



    ],



    evening: [



        [30.5288, 114.3557, 15], [30.5284, 114.3569, 12], [30.5288, 114.3568, 10],



        [30.5283, 114.3546, 15], [30.5279, 114.3546, 12], [30.5294, 114.3515, 18],



        [30.5297, 114.3510, 15],



        [30.5310, 114.3545, 95], [30.5307, 114.3545, 92], [30.5302, 114.3547, 88],



        [30.5314, 114.3545, 85], [30.5302, 114.3536, 80], [30.5307, 114.3526, 75],



        [30.5309, 114.3519, 70], [30.5311, 114.3536, 78], [30.5305, 114.3517, 68],



        [30.5307, 114.3537, 50], [30.5296, 114.3530, 45],



        [30.5270, 114.3558, 55], [30.5335, 114.3576, 40]



    ]



};







// 坐标转换函数（WGS84 常BD09常


function wgs84ToBd09(lng, lat) {



    if (typeof gcoord === 'undefined') {



        console.warn('gcoord库未加载，使用原始坐标');



        return { lng, lat };



    }



    try {


        const result = gcoord.transform(


            [lng, lat],


            gcoord.WGS84,


            gcoord.BD09


        );


        return { lng: result[0], lat: result[1] };


    } catch (error) {


        console.error('坐标转换失津:', error);


        return { lng, lat };


    }



}

function bd09ToWgs84(lng, lat) {



    if (typeof gcoord === 'undefined') {



        console.warn('gcoord库未加载，使用原始坐标');



        return { lng, lat };



    }



    try {



        const result = gcoord.transform(



            [lng, lat],



            gcoord.BD09,



            gcoord.WGS84



        );



        return { lng: result[0], lat: result[1] };



    } catch (error) {



        console.error('坐标转换失津:', error);



        return { lng, lat };



    }



}






// 计算两点之间的距离（米）



function calcDistanceMeters(lat1, lng1, lat2, lng2) {



    const R = 6371e3; // 地球半径（米常


    const φ1 = lat1 * Math.PI / 180;


    const φ2 = lat2 * Math.PI / 180;


    const Δφ = (lat2 - lat1) * Math.PI / 180;


    const Δλ = (lng2 - lng1) * Math.PI / 180;





    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +


        Math.cos(φ1) * Math.cos(φ2) *


        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);


    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));





    return R * c;



}







// 使用射线法判断点是否在多边形内

function isPointInPolygon(lng, lat, polygon) {

    let inside = false;

    const n = polygon.length;

    for (let i = 0, j = n - 1; i < n; j = i++) {

        const xi = polygon[i][0], yi = polygon[i][1];
        const xj = polygon[j][0], yj = polygon[j][1];
        
        // 处理除以零的情况（水平边）
        if (yj === yi) {
            continue; // 跳过水平边
        }

        if (((yi > lat) !== (yj > lat)) &&
            (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) {
            inside = !inside;
        }

    }

    return inside;

}



// 检查点是否在校园边界内（使用真正的多边形边界）

function isInsideBoundary(lat, lng) {

    return isPointInPolygon(lng, lat, CAMPUS_BOUNDARY_POLYGON);

}

// 显示校园边界
function showCampusBoundary() {
    // 创建边界多边形
    const boundaryPolygon = new BMap.Polygon(
        CAMPUS_BOUNDARY_POLYGON.map(coord => new BMap.Point(coord[0], coord[1])),
        {
            strokeColor: '#ff0000',
            strokeWeight: 2,
            strokeOpacity: 0.8,
            fillColor: '#ff0000',
            fillOpacity: 0.1
        }
    );
    
    // 添加到地图
    map.addOverlay(boundaryPolygon);
    
    // 3秒后自动移除
    setTimeout(() => {
        map.removeOverlay(boundaryPolygon);
    }, 3000);
}







// 显示 Toast 消息



function showToast(message) {

    // 简单的 toast 实现

    const toast = document.createElement('div');

    toast.className = 'toast show';

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);

}







// 显示进度常


function showProgress(text) {



    const overlay = document.getElementById('progress-overlay');



    const progressText = document.getElementById('progress-text');



    if (overlay && progressText) {



        progressText.textContent = text;



        overlay.style.display = 'flex';



    }



}







// 隐藏进度常


function hideProgress() {



    const overlay = document.getElementById('progress-overlay');



    if (overlay) {



        overlay.style.display = 'none';



    }



}







// ==================== 地图初始常====================



async function initMap() {



    try {



        // 强制重新初始化地常


        activeMapProvider = 'baidu';







        // 等待百度地图API加载



        if (!window.BMap) {



            try {



                await new Promise((resolve, reject) => {



                    const callbackName = '__baiduMapInit_' + Date.now();



                    window[callbackName] = function() {



                        resolve();



                    };



                    const script = document.createElement('script');



                    script.src = 'https://api.map.baidu.com/api?v=3.0&ak=' + encodeURIComponent(BAIDU_MAP_AK) + '&callback=' + callbackName;



                    script.onerror = function() {



                        console.error('百度地图API加载失津');



                        reject(new Error('百度地图API加载失津'));



                    };



                    document.head.appendChild(script);







                    // 涅时处理



                    setTimeout(() => {



                        if (!window.BMap) {



                            console.error('百度地图API加载涅时');



                            reject(new Error('百度地图API加载涅时'));



                        }



                    }, 10000);



                });



                



                // 加载热力图插常


                await new Promise((resolve, reject) => {



                    const script = document.createElement('script');



                    script.src = 'https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js';



                    script.onerror = function() {



                        console.error('百度地图热力图插件加载失常');



                        reject(new Error('百度地图热力图插件加载失常'));



                    };



                    script.onload = function() {



                        // 检查热力图插件是否加载成功



                        if (window.BMapLib && window.BMapLib.HeatmapOverlay) {



                            resolve();



                        } else {



                            // 热力图插件加载成功但 BMap.HeatmapLayer 未定义，可能需要再等待一会


                            setTimeout(() => {



                                if (window.BMapLib && window.BMapLib.HeatmapOverlay) {



                                    resolve();



                                } else {



                                    reject(new Error('百度地图热力图插件加载成功但 BMapLib.HeatmapOverlay 未定义'));



                                }



                            }, 1000);



                        }



                    };



                    document.head.appendChild(script);







                    // 涅时处理



                    setTimeout(() => {



                        if (!(window.BMapLib && window.BMapLib.HeatmapOverlay)) {



                            console.error('百度地图热力图插件加载涅常');



                            reject(new Error('百度地图热力图插件加载涅常'));



                        }



                    }, 10000);



                });



            } catch (error) {



                console.error('百度地图API加载出错:', error);



                // 即使API加载失津，也继续执桌，使用默认的地图功能



            }



        }







        // 检查地图容常


        const mapContainer = document.getElementById('map');



        if (!mapContainer) {



            console.error('地图容器不存常');



            return;



        }







        // 清除旧地图实常


        if (map) {



            map.clearOverlays();



            map = null;



        }







        // 创建百度地图实例



        map = new BMap.Map('map');



        const centerPoint = new BMap.Point(CAMPUS_CENTER_BD09[0], CAMPUS_CENTER_BD09[1]);



        map.centerAndZoom(centerPoint, 18);



        map.enableScrollWheelZoom(true);







        console.info('百度地图 JS API 加载成功');






        // 初始化菜单切换功能


        initMenuSwitch('');







        // 初始化校园切换功能


        // initCampusSwitch(); // 暂时注释，毥函数未定常






        // 地图点击事件



        map.addEventListener('click', onMapClick);
        
        // 地图缩放事件，保持路径粗细稳定
        map.addEventListener('zoomend', function() {
            dispatchLines.forEach(line => {
                if (line && typeof line.setStrokeWeight === 'function') {
                    line.setStrokeWeight(5);
                }
            });
        });







        // 立即绘制校园边界和加载POI数据



        try {



            console.log('开始绘制校园边界');



            drawCampusBoundary();



            console.log('开始加常POI 数据');



            loadMapData();



        } catch (error) {



            console.error('初始化后操作出错:', error);



        }



    } catch (error) {



        console.error('地图初始化出常', error);



    }



}







// 地图点击事件处理



function onMapClick(e) {



    if (currentMode === 'add') {



        const point = e.point;
        const rawLat = point.lat;
        const rawLng = point.lng;

        // 转换坐标系：确保使用BD09格式（和智能选址一致）
        const normalized = normalizeBikeToBd09(rawLng, rawLat);
        if (!normalized) {
            console.warn('人工选址点坐标转换失败:', { rawLng, rawLat });
            return;
        }
        
        const lat = normalized.lat;
        const lng = normalized.lng;
        const bdPoint = new BMap.Point(lng, lat);

        // 检查是否在信息学部边界内
        if (!isInsideBoundary(lat, lng)) {

            showToast('请在信息学部范围内选择！');
            alert('请在红色边界内选择选址点！');
            
            // 显示信息学部边框，3秒后自动消失
            showCampusBoundary();

            return;

        }







        // 使用         // 将选址点后后转到最近的路网节点，确保路线沿路网轮行
        const snappedPoint = snapToNearestRoad(lat, lng, 100);
        if (snappedPoint.snapped) {
            console.log('人工选址点后转行路网点 (' + snappedPoint.lat + ', ' + snappedPoint.lng + ')');
            // 使用轮网点的坐标
            normalized.lat = snappedPoint.lat;
            normalized.lng = snappedPoint.lng;
        }


        // 创建三三角形标记（红扲常


        const icon = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {



            scale: 0.8,



            strokeWeight: 1,



            strokeColor: '#ea4335',



            fillColor: '#ea4335',



            fillOpacity: 0.9



        });

        const marker = new BMap.Marker(bdPoint, { icon, enableDragging: currentMode === 'add' });

        // 拖拽结束事件
        marker.addEventListener('dragend', function(e) {
            // 检查是否在人工选址模式
            if (currentMode !== 'add') {
                // 恢复到原位置
                const idx = manualMarkers.findIndex(m => m.marker === this);
                if (idx >= 0) {
                    const oldPoint = new BMap.Point(manualMarkers[idx].lng, manualMarkers[idx].lat);
                    this.setPosition(oldPoint);
                }
                showToast('请先点击"开始人工选址"按钮进入编辑模式');
                return;
            }
            
            const newRawPoint = e.point;
            
            // 转换坐标系（拖拽后的坐标也需要转换）
            const newNormalized = normalizeBikeToBd09(newRawPoint.lng, newRawPoint.lat);
            if (!newNormalized) {
                console.warn('拖拽后坐标转换失败:', { lng: newRawPoint.lng, lat: newRawPoint.lat });
                return;
            }
            
            const newLat = newNormalized.lat;
            const newLng = newNormalized.lng;
            
            // 检查是否在信息学部边界内
            if (!isInsideBoundary(newLat, newLng)) {
                // 恢复到原位置
                const idx = manualMarkers.findIndex(m => m.marker === this);
                if (idx >= 0) {
                    const oldPoint = new BMap.Point(manualMarkers[idx].lng, manualMarkers[idx].lat);
                    this.setPosition(oldPoint);
                }
                showToast('请在信息学部范围内选择！');
                showCampusBoundary();
                return;
            }
            
            const newBdPoint = new BMap.Point(newLng, newLat);
            
            const idx = manualMarkers.findIndex(m => m.marker === this);
            if (idx >= 0) {
                manualMarkers[idx].lat = newLat;
                manualMarkers[idx].lng = newLng;
                
                // 更新覆盖范围
                if (manualCircles[idx]) {
                    map.removeOverlay(manualCircles[idx]);
                    manualCircles[idx] = new BMap.Circle(
                        newBdPoint,



                        currentServiceRadius,



                        {



                            strokeColor: '#ea4335',



                            strokeWeight: 1,



                            fillColor: '#ea4335',



                            fillOpacity: 0.15



                        }



                    );



                    map.addOverlay(manualCircles[idx]);



                }

                // 拖拽后调用后端API重新计算覆盖率
                calculateManualCoverageFromAPI();


            }


        });







        // 右键删除
        marker.addEventListener('rightclick', function(e) {
            // 检查是否在人工选址模式
            if (currentMode !== 'add') {
                showToast('请先点击"开始人工选址"按钮进入编辑模式');
                return;
            }

            const idx = manualMarkers.findIndex(m => m.marker === this);


            if (idx >= 0) {


                map.removeOverlay(this);


                if (manualCircles[idx]) {


                    map.removeOverlay(manualCircles[idx]);


                }


                manualMarkers.splice(idx, 1);
                manualCircles.splice(idx, 1);

                // 重要：修改人工选址时重置缓存的指标，这样下次会重新计算
                manualLocationMetrics = null;

                // 调用后端API计算覆盖率，确保与智能选址计算方式一致
                calculateManualCoverageFromAPI();
                document.getElementById('status-manual').textContent = manualMarkers.length;


            }


        });







        // ⭐修复：生成带序号的名称，与智能选址点保持一致
        const pointName = `人工选址点${manualMarkers.length + 1}`;
        
        // 弹出信息（与智能选址点保持一致）
        const popupContent = `
            <div class="popup-content">
                <div class="popup-title">${pointName}</div>
                <div class="popup-row"><span class="popup-label">名称</span><span class="popup-value">${pointName}</span></div>
                <div class="popup-row"><span class="popup-label">容量</span><span class="popup-value">40 车位</span></div>
                <div class="popup-row"><span class="popup-label">坐标</span><span class="popup-value">${lat.toFixed(5)}, ${lng.toFixed(5)}</span></div>
            </div>
        `;







        const infoWindow = new BMap.InfoWindow(popupContent, {



            width: 250



        });









        // 覆盖范围常
        // 先添加标记，再添加点击事件
        map.addOverlay(marker);
        marker._isOnMap = true; // 标记已经在地图上

        // 添加点击事件 - 使用闭包确保正确引用
        const savedMarker = marker;
        const savedInfoWindow = infoWindow;
        marker.addEventListener('click', function() {
            console.log('点击人工标记!');
            map.openInfoWindow(savedInfoWindow, savedMarker.getPosition());
        });

        const circle = new BMap.Circle(
            bdPoint,
            currentServiceRadius,
            {
                strokeColor: '#ea4335',
                strokeWeight: 1,
                fillColor: '#ea4335',
                fillOpacity: 0.15,
                zIndex: 9900, // 设置较低的zIndex，确保在调度路径之下
                enableClicking: false // 禁止点击，让点击事件传递到下面的调度路径
            }
        );

        map.addOverlay(circle);
        circle._isOnMap = true; // 标记圆已经在地图上

        manualCircles.push(circle);

        // 保存 infoWindow 到标记对象中，并设置名称
        manualMarkers.push({ 
            marker, 
            lat: lat, 
            lng: lng, 
            name: pointName, 
            type: 'manual', 
            serviceRadius: currentServiceRadius, 
            infoWindow: infoWindow 
        });
        // 打开信息窗口（暂时注释掉，避免报错）
        // marker.openInfoWindow(infoWindow);

        document.getElementById('status-manual').textContent = manualMarkers.length;
        // 更新系统概览数据
        updateSystemStatus();

        // 重置缓存的指标，并调用后端API计算覆盖率
        manualLocationMetrics = null;
        
        // 调用后端API计算覆盖率，确保与智能选址计算方式一致
        calculateManualCoverageFromAPI();


    }


}







// 调用后端API计算人工选址覆盖率
async function calculateManualCoverageFromAPI() {
    if (manualMarkers.length === 0) {
        document.getElementById('manual-coverage').textContent = '0%';
        document.getElementById('manual-coverage-bar').style.width = '0%';
        return;
    }
    
    const points = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));
    try {
        const response = await fetch('/api/calculate-coverage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                parking_points: points,
                service_radius: currentServiceRadius
            })
        });
        const result = await response.json();
        if (result.coverage !== undefined) {
            manualLocationMetrics = {
                coverage: result.coverage,
                avg_distance: result.avg_distance || 0,
                balance: result.balance || 0,
                capacity: result.capacity || 0
            };
        }
    } catch (error) {
        console.error('计算人工方案覆盖率失败:', error);
        // 如果API调用失败，使用前端计算作为后备
        const points = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));
        manualLocationMetrics = calculateCoreMetrics(points);
    }
    
    // 更新覆盖率显示
    const coverage = manualLocationMetrics.coverage * 100;
    document.getElementById('manual-coverage').textContent = coverage.toFixed(1) + '%';
    document.getElementById('manual-coverage-bar').style.width = coverage + '%';
    
    // 更新核心指标显示
    updateCoreMetrics();
}



// 删除人工选址常


function deleteManualMarker(button) {



    // 实现删除逻编辑



}







// 开始人工选址



function startManualLocation() {



    currentMode = 'add';



    document.getElementById('mode-start').disabled = true;



    document.getElementById('mode-save').disabled = false;



    document.getElementById('manual-location-instruction').textContent = '点击地图添加选址点，右键删除选址点，支持拖拽调整';



    showToast('进入人工选址模式，点击地图添加选址点');
    
    // 更新所有已有人工点的拖拽权限
    manualMarkers.forEach(item => {
        if (item.marker) {
            // 启用拖拽
            item.marker.enableDragging();
        }
    });



}







// 保存人工选址方案



async function saveManualLocation() {



    currentMode = 'view';



    document.getElementById('mode-start').disabled = false;



    document.getElementById('mode-save').disabled = true;



    document.getElementById('manual-location-instruction').textContent = '点击"开始人工选址"按钮后，鼠标左键添加选址，右键删除选址，支持拖拽调整';



    showToast('人工选址方案已保存');
    
    // 更新所有已有人工点的拖拽权限
    manualMarkers.forEach(item => {
        if (item.marker) {
            // 禁用拖拽
            item.marker.disableDragging();
        }
    });




    updateSchemeStatusDisplay();

    // 重要：保存人工方案时，调用后端API计算指标，保持与智能方案一致！
    if (manualMarkers.length > 0) {
        const points = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));
        console.log('Calling /api/calculate-coverage for manual save with:', {
            parking_points: points,
            service_radius: currentServiceRadius
        });
        try {
            const response = await fetch('/api/calculate-coverage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    parking_points: points,
                    service_radius: currentServiceRadius
                })
            });
            const result = await response.json();
            console.log('Response from /api/calculate-coverage for manual save:', result);
            if (result.coverage !== undefined) {
                manualLocationMetrics = {
                    coverage: result.coverage,
                    avg_distance: result.avg_distance || 0,
                    balance: result.balance || 0,
                    capacity: result.capacity || 0
                };
                console.log('Updated manualLocationMetrics after save:', manualLocationMetrics);
            }
        } catch (error) {
            console.error('计算人工方案覆盖率失败:', error);
        }
    }

    // 人工选址完成后，更新停车点供需状态
    const timeSlot = document.getElementById('dispatch-time')?.value || 'morning';
    generateSupplyDemandTable(timeSlot, 'manual');
    // 设置当前方案为人工选址
    selectedScheme = 'manual';

    // 更新核心指标
    updateCoreMetrics();
    updateManualCoverage();
    // 更新方案选择器的显示
    const selector = document.getElementById('selected-scheme');
    if (selector) {
        selector.value = 'manual';
    }

    // 重新渲染调度路线，确保在最上层
    if (window.currentDispatchGeoJson) {
        renderDispatch(window.currentDispatchGeoJson);
    }
    // 更新标记显示
    updateSelectedScheme();
}







// 清空人工选址



function clearManualLocations(silent) {



    if (map) {
        manualMarkers.forEach(item => map.removeOverlay(item.marker));
    }



    if (map) {
        manualCircles.forEach(circle => map.removeOverlay(circle));
    }



    manualMarkers = [];



    manualCircles = [];



    manualLocationMetrics = null;



    document.getElementById('status-manual').textContent = '0';


    document.getElementById('manual-coverage').textContent = '0%';


    document.getElementById('manual-coverage-bar').style.width = '0%';


    updateSchemeStatusDisplay();
    updateCoreMetrics();
    // 更新标记显示
    updateSelectedScheme();

    if (!silent) {
        showToast('人工选址点已清空');
    }


}







// 运行智能选址



async function runSmartLocation() {
    showProgress('正在运行智能选址算法...');
    const count = parseInt(document.getElementById('smart-count')?.value) || 10;
    const serviceRadius = parseInt(document.getElementById('service-radius')?.value) || currentServiceRadius || 100;
    const objCoverage = !!document.getElementById('obj-coverage')?.checked;
    const objDistance = !!document.getElementById('obj-distance')?.checked;
    const objBalance = !!document.getElementById('obj-balance')?.checked;

    currentServiceRadius = serviceRadius;

    try {
        const response = await fetch(API_BASE + 'optimize-location', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                num_locations: count,
                service_radius: serviceRadius,
                optimize_coverage: objCoverage,
                optimize_distance: objDistance,
                optimize_balance: objBalance
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result?.error || '智能选址接口返回失败');
        }
        if (!result || !Array.isArray(result.features)) {
            throw new Error('智能选址结果格式不正确');
        }

        renderSmartLocations(result);
        // 更新系统概览数据
        updateSystemStatus();
    } catch (error) {
        console.error('智能选址失败:', error);
        showToast(`智能选址失败：${error.message || '未知错误'}`);
    } finally {
        hideProgress();
    }
}

// 生成模拟选址数据



function generateMockLocations(num, objCoverage, objDistance, objBalance) {



    // 使用预殾的候选点（基于信息学部真常POI 位置，转换为BD09格式）



    const candidates = [



        // 校园北部（高纬度）



        { lat: 30.5365, lng: 114.3658, name: "北区宿舍1", capacity: 30, service_pop: 320 },



        { lat: 30.5362, lng: 114.3645, name: "北区宿舍2", capacity: 25, service_pop: 260 },



        { lat: 30.5368, lng: 114.3670, name: "北部教学楼", capacity: 28, service_pop: 300 },



        { lat: 30.5363, lng: 114.3662, name: "北部食堂", capacity: 22, service_pop: 200 },



        { lat: 30.5359, lng: 114.3655, name: "图书馆北侧", capacity: 20, service_pop: 180 },



        // 校园中部



        { lat: 30.5355, lng: 114.3658, name: "中部宿舍", capacity: 26, service_pop: 280 },



        { lat: 30.5352, lng: 114.3642, name: "中部食堂", capacity: 20, service_pop: 190 },



        { lat: 30.5348, lng: 114.3665, name: "教学楼中心", capacity: 25, service_pop: 220 },



        { lat: 30.5345, lng: 114.3638, name: "中部活动区", capacity: 22, service_pop: 200 },



        // 校园南部（低纬度）



        { lat: 30.5341, lng: 114.3668, name: "图书馆前", capacity: 28, service_pop: 310 },



        { lat: 30.5339, lng: 114.3658, name: "3/4宿舍之常", capacity: 24, service_pop: 240 },



        { lat: 30.5336, lng: 114.3648, name: "一食堂", capacity: 22, service_pop: 210 },



        { lat: 30.5332, lng: 114.3661, name: "信息学部中心", capacity: 25, service_pop: 250 },



        { lat: 30.5331, lng: 114.3654, name: "6宿舍旁", capacity: 23, service_pop: 230 },



        { lat: 30.5328, lng: 114.3651, name: "学生活动中心", capacity: 21, service_pop: 210 },



        { lat: 30.5325, lng: 114.3648, name: "三四食堂入口", capacity: 27, service_pop: 290 },



        { lat: 30.5322, lng: 114.3642, name: "体育馆", capacity: 24, service_pop: 220 },



        { lat: 30.5319, lng: 114.3665, name: "教学楼群", capacity: 20, service_pop: 180 },



        { lat: 30.5317, lng: 114.3660, name: "1号教学楼入口", capacity: 22, service_pop: 200 },



        { lat: 30.5313, lng: 114.3679, name: "2号教学楼南侧", capacity: 20, service_pop: 180 },



        { lat: 30.5312, lng: 114.3658, name: "5号教学楼", capacity: 20, service_pop: 190 },



        { lat: 30.5305, lng: 114.3668, name: "南门附近", capacity: 25, service_pop: 220 },



        { lat: 30.5302, lng: 114.3655, name: "南部停车场", capacity: 22, service_pop: 200 },



        { lat: 30.5299, lng: 114.3670, name: "南门停车场", capacity: 28, service_pop: 310 },



        { lat: 30.5295, lng: 114.3645, name: "网安学院", capacity: 22, service_pop: 200 },



        { lat: 30.5338, lng: 114.3637, name: "15/16宿舍旁", capacity: 28, service_pop: 310 },



        { lat: 30.5357, lng: 114.3662, name: "星园食堂", capacity: 22, service_pop: 210 },



        { lat: 30.5341, lng: 114.3652, name: "研究生宿舍", capacity: 27, service_pop: 290 },



        { lat: 30.5335, lng: 114.3675, name: "实验室区", capacity: 20, service_pop: 180 }



    ];







    // 濇滤出在边界内的候选点

    let validCandidates = candidates.filter(c => isInsideBoundary(c.lat, c.lng));



    console.log('边界内的候选点数量:', validCandidates.length);



    



    if (validCandidates.length === 0) {

        console.warn('没有候选点在边界内，使用全部候选点');

        validCandidates = candidates;

    }



    // 定义功能区中心坐标（与calculateCoreMetrics保持一致）



    const zones = {



        'north_dorm1': [114.3658, 30.5365],   // 北部宿舍区1 BD09 [lng, lat]



        'north_dorm2': [114.3645, 30.5362],   // 北部宿舍区2 BD09 [lng, lat]



        'north_teaching': [114.3670, 30.5368], // 北部教学楼 BD09 [lng, lat]



        'north_canteen': [114.3662, 30.5363], // 北部食堂 BD09 [lng, lat]



        'library_north': [114.3655, 30.5359], // 图书馆北侧 BD09 [lng, lat]



        'center_dorm': [114.3658, 30.5355],    // 中部宿舍 BD09 [lng, lat]



        'center_canteen': [114.3642, 30.5352], // 中部食堂 BD09 [lng, lat]



        'teaching_center': [114.3665, 30.5348], // 教学楼中心 BD09 [lng, lat]



        'center_activity': [114.3638, 30.5345], // 中部活动区 BD09 [lng, lat]



        'library': [114.3668, 30.5341],        // 图书馆前 BD09 [lng, lat]



        'dorm_34': [114.3658, 30.5339],        // 3/4宿舍 BD09 [lng, lat]



        'canteen1': [114.3648, 30.5336],       // 一食堂 BD09 [lng, lat]



        'info_center': [114.3661, 30.5332],     // 信息学部中心 BD09 [lng, lat]



        'dorm6': [114.3654, 30.5331],           // 6宿舍旁 BD09 [lng, lat]



        'activity_center': [114.3651, 30.5328], // 学生活动中心 BD09 [lng, lat]



        'canteen_34': [114.3648, 30.5325],      // 三四食堂入口 BD09 [lng, lat]



        'gym': [114.3642, 30.5322],             // 体育馆 BD09 [lng, lat]



        'teaching_group': [114.3665, 30.5319], // 教学楼群 BD09 [lng, lat]



        'teaching1': [114.3660, 30.5317],       // 1号教学楼入口 BD09 [lng, lat]



        'teaching2_south': [114.3679, 30.5313], // 2号教学楼南侧 BD09 [lng, lat]



        'teaching5': [114.3658, 30.5312],       // 5号教学楼 BD09 [lng, lat],



        'south_gate_near': [114.3668, 30.5305],  // 南门附近 BD09 [lng, lat]



        'south_parking': [114.3655, 30.5302],   // 南部停车场 BD09 [lng, lat]



        'south_gate': [114.3670, 30.5299],      // 南门停车场 BD09 [lng, lat]



        'cyber_security': [114.3645, 30.5295],  // 网安学院 BD09 [lng, lat]



        'dorm_1516': [114.3637, 30.5338],      // 15/16宿舍旁 BD09 [lng, lat]



        'xingyuan': [114.3662, 30.5357],       // 星园食堂 BD09 [lng, lat]



        'grad_dorm': [114.3652, 30.5341],      // 研究生宿舍 BD09 [lng, lat],



        'lab_area': [114.3675, 30.5335]         // 实验室区 BD09 [lng, lat]



    };



    // 生成需求点

    const demandPoints = [];

    for (const [zoneName, zoneCoords] of Object.entries(zones)) {

        demandPoints.push({

            lat: zoneCoords[1],  // [lng, lat] 格式，所常lat 是第二个

            lng: zoneCoords[0],  // [lng, lat] 格式，所常lng 是第一致

            zoneName: zoneName

        });

    }



    // 计算每个候选点在当前服务半径下的覆盖范围



    validCandidates = validCandidates.map(candidate => {

        let coveredDemandPoints = 0;

        let totalDistance = 0;

        demandPoints.forEach(demand => {

            const distance = Math.sqrt(

                Math.pow(demand.lng - candidate.lng, 2) + 

                Math.pow(demand.lat - candidate.lat, 2)

            ) * 111319; // 转换为米



            if (distance <= currentServiceRadius) {

                coveredDemandPoints++;

                totalDistance += distance;

            }

        });



        // 计算覆盖效率和平均距离

        const coverageEfficiency = coveredDemandPoints / demandPoints.length;

        const avgDistance = coveredDemandPoints > 0 ? totalDistance / coveredDemandPoints : Infinity;

        // 加入服务半径因素，使服务半径变化时结果更明显

        const radiusFactor = currentServiceRadius / 100; // 服务半径越大，权重越高



        return {

            ...candidate,

            coverageEfficiency,

            avgDistance,

            radiusFactor

        };

    });



    // 根据优化目标排序候选点，使用确定性规则（同参数重复运行结果一致）

    const stableSortByScore = (scoreFn) => {

        validCandidates.sort((a, b) => {

            const scoreA = scoreFn(a);

            const scoreB = scoreFn(b);

            const scoreDiff = scoreB - scoreA;

            if (Math.abs(scoreDiff) > 1e-9) {

                return scoreDiff;

            }

            // 同分时使用稳定的字段做打破平局，避免每次重算结果漂移

            const nameDiff = String(a.name || '').localeCompare(String(b.name || ''));

            if (nameDiff !== 0) {

                return nameDiff;

            }

            if (a.lng !== b.lng) {

                return a.lng - b.lng;

            }

            return a.lat - b.lat;

        });

    };



    if (objCoverage && objDistance && objBalance) {

        stableSortByScore((c) => c.coverageEfficiency * 0.4 + (1 / c.avgDistance) * 0.2 + c.capacity * 0.1 + c.radiusFactor * 0.3);

    } else if (objCoverage && objDistance) {

        stableSortByScore((c) => c.coverageEfficiency * 0.5 + (1 / c.avgDistance) * 0.2 + c.radiusFactor * 0.3);

    } else if (objCoverage && objBalance) {

        stableSortByScore((c) => c.coverageEfficiency * 0.6 + c.capacity * 0.1 + c.radiusFactor * 0.3);

    } else if (objDistance && objBalance) {

        stableSortByScore((c) => (1 / c.avgDistance) * 0.5 + c.capacity * 0.2 + c.radiusFactor * 0.3);

    } else if (objCoverage) {

        stableSortByScore((c) => c.coverageEfficiency * 0.7 + c.radiusFactor * 0.3);

    } else if (objDistance) {

        stableSortByScore((c) => (1 / c.avgDistance) * 0.7 + c.radiusFactor * 0.3);

    } else if (objBalance) {

        stableSortByScore((c) => c.capacity * 0.7 + c.radiusFactor * 0.3);

    } else {

        stableSortByScore((c) => c.coverageEfficiency * 0.7 + c.radiusFactor * 0.3);

    }







    // 选择前num个点



    const selected = validCandidates.slice(0, num);







    // 生成模拟的指标数常


    let coverage = 0.5 + num * 0.04;



    let avgDistance = 200 - num * 10;







    // 确保值在合理范围常


    coverage = Math.min(0.95, coverage);



    avgDistance = Math.max(50, avgDistance);







    return {



        type: "FeatureCollection",



        features: selected.map((c, i) => ({



            type: "Feature",



            geometry: { type: "Point", coordinates: [c.lng, c.lat] },



            properties: {



                id: "P" + (i + 1),



                name: c.name,



                capacity: c.capacity,



                service_pop: c.service_pop



            }



        })),



        metadata: {



            coverage: coverage,



            avg_distance: avgDistance,



            num_locations: selected.length



        }



    };



}







// 渲染智能选址结果



function renderSmartLocations(geoJson) {



    // 清除旧的智能选址点和覆盖范围



    smartMarkers.forEach(item => map.removeOverlay(item.marker));



    smartCircles.forEach(circle => map.removeOverlay(circle));



    smartMarkers = [];



    smartCircles = [];







    // 存储最新的智能选址结果



    latestSmartLocationResult = geoJson;







    // 保存后端返回的指标数据（智能方案口径统一以后端 metadata 为准）
    if (geoJson.metadata) {
        smartMetrics = {
            coverage: Number(geoJson.metadata.coverage) || 0,
            avg_distance: Number(geoJson.metadata.avg_distance) || 0,
            balance: Number(geoJson.metadata.balance) || 0,
            capacity: Number(geoJson.metadata.capacity) || 0
        };
    }







    console.log('后端返回的 features 数量:', geoJson.features.length);
    let processedCount = 0;
    geoJson.features.forEach((feature, idx) => {
        console.log(`处理第 ${idx + 1} 个 feature:`, feature);

        if (!feature.geometry || !feature.geometry.coordinates) {
            console.warn(`第 ${idx + 1} 个 feature 没有 geometry 或 coordinates:`, feature.geometry);
            return;
        }

        const [rawLng, rawLat] = feature.geometry.coordinates;
        console.log(`第 ${idx + 1} 个 feature 提取坐标: rawLng=${rawLng}, rawLat=${rawLat}`);

        if (!Array.isArray(feature.geometry.coordinates) || feature.geometry.coordinates.length < 2) {
            console.warn(`第 ${idx + 1} 个 feature coordinates 格式错误:`, feature.geometry.coordinates);
            return;
        }



        const props = feature.properties || {};







        // 检查点是否在边界内



        const lng = Number(rawLng);
        const lat = Number(rawLat);
        console.log(`第 ${idx + 1} 个 feature 转换坐标: lng=${lng}, lat=${lat}`);

        if (!Number.isFinite(lng) || !Number.isFinite(lat)) {
            console.warn('智能选址点坐标无效:', feature.geometry.coordinates);
            return;
        }

        try {
            const inside = isInsideBoundary(lat, lng);
            console.log(`第 ${idx + 1} 个 feature 边界检查: inside=${inside}`);
            if (!inside) {
                console.warn('智能选址点不在边界内:', { lat, lng });
                // 暂时注释掉return，允许处理边界外的点
                // return;
            }
            console.log(`第 ${idx + 1} 个 feature 边界检查通过，开始坐标转换`);
        } catch (e) {
            console.error(`第 ${idx + 1} 个 feature 边界检查出错:`, e);
            // 出错时默认认为点在边界内，避免因为边界检查错误而过滤掉有效点
            console.log(`第 ${idx + 1} 个 feature 边界检查出错，默认认为在边界内`);
        }
        console.log(`处理第 ${idx + 1} 个 feature，原始坐标: lng=${rawLng}, lat=${rawLat}`);
        console.log(`第 ${idx + 1} 个 feature 处理成功，添加到 smartMarkers`);







        // 转换坐标系：确保使用BD09格式
        console.log(`第 ${idx + 1} 个 feature 开始坐标转换`);
        const normalized = normalizeBikeToBd09(lng, lat);
        console.log(`第 ${idx + 1} 个 feature 坐标转换结果:`, normalized);
        if (!normalized) {
            console.warn('智能选址点坐标转换失败:', { lng, lat }, `第 ${idx + 1} 个 feature`);
            return;
        }
        console.log(`第 ${idx + 1} 个 feature 坐标转换成功`);
        const point = new BMap.Point(normalized.lng, normalized.lat);







        // 使用 BMap.Symbol 创建三角形标记（蓝色）

        const icon = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {

            scale: 0.8,

            strokeWeight: 1,

            strokeColor: '#1a73e8',

            fillColor: '#1a73e8',

            fillOpacity: 0.9

        });

        const marker = new BMap.Marker(point, { icon, enableDragging: false });







        // 弹出信息



        const pointIndex = idx + 1;



        const popupContent = `



            <div class="popup-content">



                <div class="popup-title">智能选址点${pointIndex}</div>



                <div class="popup-row"><span class="popup-label">名称</span><span class="popup-value">智能选址点${pointIndex}</span></div>



                <div class="popup-row"><span class="popup-label">容量</span><span class="popup-value">40 车位</span></div>



                <div class="popup-row"><span class="popup-label">坐标</span><span class="popup-value">${lat.toFixed(5)}, ${lng.toFixed(5)}</span></div>



            </div>



        `;







        const infoWindow = new BMap.InfoWindow(popupContent, {



            width: 250



        });



        // 覆盖范围常
        // 先添加标记，再添加点击事件
        map.addOverlay(marker);
        marker._isOnMap = true; // 标记已经在地图上

        // 添加点击事件 - 使用闭包确保正确引用
        const savedMarker = marker;
        const savedInfoWindow = infoWindow;
        marker.addEventListener('click', function() {
            console.log('点击智能标记!');
            map.openInfoWindow(savedInfoWindow, savedMarker.getPosition());
        });

        const circle = new BMap.Circle(
            point,
            currentServiceRadius,
            {
                strokeColor: '#1a73e8',
                strokeWeight: 1,
                fillColor: '#1a73e8',
                fillOpacity: 0.15,
                zIndex: 9900, // 设置较低的zIndex，确保在调度路径之下
                enableClicking: false // 禁止点击，让点击事件传递到下面的调度路径
            }
        );

        map.addOverlay(circle);
        circle._isOnMap = true; // 标记圆已经在地图上

        smartCircles.push(circle);

        // 保存 infoWindow 到标记对象中
        smartMarkers.push({ marker, lat: normalized.lat, lng: normalized.lng, data: props, type: 'smart', serviceRadius: currentServiceRadius, infoWindow: infoWindow });



    });
    console.log('处理完成，实际添加到 smartMarkers 的数量:', smartMarkers.length);









    document.getElementById('status-smart').textContent = smartMarkers.length;

    // 使用后端返回的覆盖率指标（智能方案口径统一以后端 metadata 为准）
    // 不要重新计算覆盖率，确保前后端一致
    updateSmartCoverage();

    updateCoreMetrics();

    updateSchemeStatusDisplay();

    // 智能选址完成后，更新停车点供需状态
    const timeSlot = document.getElementById('dispatch-time')?.value || 'morning';
    generateSupplyDemandTable(timeSlot, 'smart');
    // 运行智能选址后，自动切换到智能方案
    selectedScheme = 'smart';
    // 自动更新方案选择器的显示
    const selector = document.getElementById('selected-scheme');
    if (selector) {
        selector.value = 'smart';
    }
    // 更新方案状态显示
    updateSchemeStatusDisplay();
    
    // 修复：运行智能选址后，更新核心指标和供需表格
    updateCoreMetrics();
    generateSupplyDemandTable(getActiveSupplyTimeSlot(), 'smart');
    
    // 更新标记显示，确保当前方案的标记正确显示
    updateSelectedScheme();
}







// 清除智能选址
function clearSmartLocations(silent) {
    if (map) {
        smartMarkers.forEach(item => map.removeOverlay(item.marker));
        smartCircles.forEach(circle => map.removeOverlay(circle));
    }
    smartMarkers = [];
    smartCircles = [];
    document.getElementById('status-smart').textContent = '0';
    document.getElementById('smart-coverage').textContent = '0%';
    document.getElementById('smart-coverage-bar').style.width = '0%';
    updateSchemeStatusDisplay();
    // 更新标记显示
    updateSelectedScheme();
    if (!silent) {
        showToast('智能选址点已清空');
    }
}

// 清除调度路径
function clearDispatch(silent) {
    // 清除调度模式标志
    window.isDispatchingActive = false;

    if (map) {
        dispatchLines.forEach(line => map.removeOverlay(line));
        dispatchMarkers.forEach(marker => map.removeOverlay(marker));
    }
    dispatchLines = [];
    dispatchMarkers = [];
    activeDispatchRouteIndex = null;

    if (window.currentInfoWindow && map) {
        map.closeInfoWindow(window.currentInfoWindow);
        window.currentInfoWindow = null;
    }
    
    // 清除临时路段高亮折线
    if (tempSegmentLine && map) {
        map.removeOverlay(tempSegmentLine);
        tempSegmentLine = null;
    }
    
    // ⭐修复：重新显示智能和人工选址标记！
    console.log('恢复显示智能和人工选址标记！');
    smartMarkers.forEach(item => {
        if (item.marker && !item.marker._isOnMap) {
            try {
                map.addOverlay(item.marker);
                item.marker._isOnMap = true;
            } catch (e) {}
        }
    });
    smartCircles.forEach(circle => {
        if (!circle._isOnMap) {
            try {
                map.addOverlay(circle);
                circle._isOnMap = true;
            } catch (e) {}
        }
    });
    manualMarkers.forEach(item => {
        if (item.marker && !item.marker._isOnMap) {
            try {
                map.addOverlay(item.marker);
                item.marker._isOnMap = true;
            } catch (e) {}
        }
    });
    manualCircles.forEach(circle => {
        if (!circle._isOnMap) {
            try {
                map.addOverlay(circle);
                circle._isOnMap = true;
            } catch (e) {}
        }
    });
    
    document.getElementById('status-dispatch').textContent = '0';
    document.getElementById('dispatch-count').textContent = '0 辆';
    document.getElementById('dispatch-bikes').textContent = '0 辆';
    document.getElementById('dispatch-distance').textContent = '0 km';
    document.getElementById('dispatch-time-result').textContent = '0 分钟';
    document.getElementById('dispatch-cost').textContent = '¥0';
    document.getElementById('dispatch-table-body').innerHTML = '<tr><td colspan="7" style="color:#999;padding:10px;text-align:center;">请运行调度优化</td></tr>';
    setDispatchAssignmentStatus('', true);
    if (!silent) {
        showToast('调度路径已清空');
    }
}



// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 更新服务半径显示（debounce 500ms，避免频繁请求）
const updateRadiusValue = debounce(async function() {
    const radius = document.getElementById('service-radius').value;
    document.getElementById('radius-value').textContent = radius;
    currentServiceRadius = parseInt(radius);

    const currentSeq = ++radiusUpdateSeq;
    console.log('updateRadiusValue called with radius:', currentServiceRadius, 'seq:', currentSeq);

    // 更新已有的覆盖范围圆圈（同步执行，不需要序列号检查）
    updateCoverageCircles();

    // 调用后端API重新计算智能方案的覆盖率
    if (smartMarkers.length > 0) {
        const parkingPoints = smartMarkers.map(m => ({ lat: m.lat, lng: m.lng }));
        console.log('Calling /api/calculate-coverage with:', {
            parking_points: parkingPoints,
            service_radius: currentServiceRadius
        });
        try {
            const response = await fetch('/api/calculate-coverage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    parking_points: parkingPoints,
                    service_radius: currentServiceRadius
                })
            });
            const result = await response.json();

            if (currentSeq !== radiusUpdateSeq) {
                console.log('Ignoring stale smart coverage response, currentSeq:', currentSeq, 'radiusUpdateSeq:', radiusUpdateSeq);
                return;
            }

            console.log('Response from /api/calculate-coverage:', result);
            if (result.coverage !== undefined) {
                smartMetrics.coverage = result.coverage;
                smartMetrics.avg_distance = result.avg_distance || 0;
                smartMetrics.balance = result.balance || 0;
                console.log('Updated smartMetrics:', smartMetrics);
                updateSmartCoverage();
                updateCoreMetrics();
                updateSchemeStatusDisplay();
            }
        } catch (error) {
            console.error('计算覆盖率失败:', error);
        }
    }

    // 同时也重新计算人工方案的指标（调用后端API，保持一致！）
    if (manualMarkers.length > 0) {
        const points = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));
        console.log('Calling /api/calculate-coverage for manual with:', {
            parking_points: points,
            service_radius: currentServiceRadius
        });
        try {
            const response = await fetch('/api/calculate-coverage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    parking_points: points,
                    service_radius: currentServiceRadius
                })
            });
            const result = await response.json();

            if (currentSeq !== radiusUpdateSeq) {
                console.log('Ignoring stale manual coverage response, currentSeq:', currentSeq, 'radiusUpdateSeq:', radiusUpdateSeq);
                return;
            }

            console.log('Response from /api/calculate-coverage for manual:', result);
            if (result.coverage !== undefined) {
                manualLocationMetrics = {
                    coverage: result.coverage,
                    avg_distance: result.avg_distance || 0,
                    balance: result.balance || 0,
                    capacity: result.capacity || 0
                };
                console.log('Updated manualLocationMetrics:', manualLocationMetrics);
                updateManualCoverage();
                updateCoreMetrics();
            }
        } catch (error) {
            console.error('计算人工方案覆盖率失败:', error);
        }
    }
}, 500);

// 更新覆盖范围圆圈
function updateCoverageCircles() {
    // 保存当前的调度路线数据
    const currentDispatchGeoJson = window.currentDispatchGeoJson;
    
    // 保存当前的选址标记和覆盖范围显示状态
    const smartMarkersVisible = smartMarkers.map(item => item.marker && item.marker._isOnMap);
    const manualMarkersVisible = manualMarkers.map(item => item.marker && item.marker._isOnMap);
    const smartCirclesVisible = smartCircles.map(circle => circle._isOnMap);
    const manualCirclesVisible = manualCircles.map(circle => circle._isOnMap);
    
    // 更新智能选址的覆盖范围
    smartCircles.forEach((circle, idx) => {
        if (smartMarkers[idx]) {
            const pos = new BMap.Point(smartMarkers[idx].lng, smartMarkers[idx].lat);
            map.removeOverlay(circle);
            const newCircle = new BMap.Circle(
                pos,
                currentServiceRadius,
                {
                    strokeColor: '#1a73e8',
                    strokeWeight: 1,
                    fillColor: '#1a73e8',
                    fillOpacity: 0.15,
                    zIndex: 9900, // 设置较低的zIndex，确保在调度路径之下
                    enableClicking: false // 禁止点击，让点击事件传递到下面的调度路径
                }
            );
            map.addOverlay(newCircle);
            smartCircles[idx] = newCircle;
        }
    });

    // 更新人工选址的覆盖范围
    manualCircles.forEach((circle, idx) => {
        if (manualMarkers[idx]) {
            const pos = new BMap.Point(manualMarkers[idx].lng, manualMarkers[idx].lat);
            map.removeOverlay(circle);
            const newCircle = new BMap.Circle(
                pos,
                currentServiceRadius,
                {
                    strokeColor: '#ea4335',
                    strokeWeight: 1,
                    fillColor: '#ea4335',
                    fillOpacity: 0.15,
                    zIndex: 9900, // 设置较低的zIndex，确保在调度路径之下
                    enableClicking: false // 禁止点击，让点击事件传递到下面的调度路径
                }
            );
            map.addOverlay(newCircle);
            manualCircles[idx] = newCircle;
        }
    });

    // 重新渲染调度路线，确保在最上层
    if (currentDispatchGeoJson) {
        renderDispatch(currentDispatchGeoJson);
    }
    
    // 恢复选址标记的显示状态
    smartMarkers.forEach((item, idx) => {
        if (item.marker && smartMarkersVisible[idx] && !item.marker._isOnMap) {
            try {
                map.addOverlay(item.marker);
                item.marker._isOnMap = true;
            } catch (e) {}
        }
    });
    
    manualMarkers.forEach((item, idx) => {
        if (item.marker && manualMarkersVisible[idx] && !item.marker._isOnMap) {
            try {
                map.addOverlay(item.marker);
                item.marker._isOnMap = true;
            } catch (e) {}
        }
    });
    
    // 恢复覆盖范围圆圈的显示状态
    smartCircles.forEach((circle, idx) => {
        if (smartCirclesVisible[idx] && !circle._isOnMap) {
            try {
                map.addOverlay(circle);
                circle._isOnMap = true;
            } catch (e) {}
        }
    });
    
    manualCircles.forEach((circle, idx) => {
        if (manualCirclesVisible[idx] && !circle._isOnMap) {
            try {
                map.addOverlay(circle);
                circle._isOnMap = true;
            } catch (e) {}
        }
    });

    // 重新计算并更新覆盖率
    updateSmartCoverage();
    updateManualCoverage();
    updateCoreMetrics();
}







// 复制智能方案到人常


function copySmartToManual() {
    if (smartMarkers.length === 0) {



        showToast('请先运行智能选址算法');



        return;



    }







    clearManualLocations();

    if (window.currentInfoWindow && map) {
        map.closeInfoWindow(window.currentInfoWindow);
        window.currentInfoWindow = null;
    }

    console.log('开始复制智能选址到人工，共', smartMarkers.length, '个智能选址点');







    smartMarkers.forEach((smart, idx) => {
        console.log('处理第', idx + 1, '个智能选址点:', smart);



        const lat = smart.lat;







        const lng = smart.lng;







        console.log('智能选址点坐标:', { lat, lng });

        // smart.lat 和 smart.lng 已经是 normalizeBikeToBd09 转换后的坐标，直接使用
        const normalized = { lng, lat };

        console.log('使用人工点坐标:', { lng: normalized.lng, lat: normalized.lat });







        const point = new BMap.Point(normalized.lng, normalized.lat);







        console.log('创建人工点位置:', { lng: point.lng, lat: point.lat });







        // 使用 BMap.Symbol 创建三三角形标记（红扲常







        const icon = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {







            scale: 0.8,







            strokeWeight: 1,







            strokeColor: '#ea4335',







            fillColor: '#ea4335',







            fillOpacity: 0.9







        });







        const marker = new BMap.Marker(point, { icon, enableDragging: currentMode === 'add' });

        console.log('创建人工点标记:', marker);

        console.log('准备绑定事件监听器...');

        // 拽结束事件







        marker.addEventListener('dragend', function(e) {
            // 检查是否在人工选址模式
            if (currentMode !== 'add') {
                // 恢复到原位置
                const idx = manualMarkers.findIndex(m => m.marker === this);
                if (idx >= 0) {
                    const oldPoint = new BMap.Point(manualMarkers[idx].lng, manualMarkers[idx].lat);
                    this.setPosition(oldPoint);
                }
                showToast('请先点击"开始人工选址"按钮进入编辑模式');
                return;
            }
            
            const newRawPoint = e.point;
            
            // 转换坐标系（拖拽后的坐标也需要转换）
            const newNormalized = normalizeBikeToBd09(newRawPoint.lng, newRawPoint.lat);
            if (!newNormalized) {
                console.warn('拖拽后坐标转换失败:', { lng: newRawPoint.lng, lat: newRawPoint.lat });
                return;
            }
            
            const newLat = newNormalized.lat;
            const newLng = newNormalized.lng;
            
            // 检查是否在信息学部边界内
            if (!isInsideBoundary(newLat, newLng)) {
                // 恢复到原位置
                const idx = manualMarkers.findIndex(m => m.marker === this);
                if (idx >= 0) {
                    const oldPoint = new BMap.Point(manualMarkers[idx].lng, manualMarkers[idx].lat);
                    this.setPosition(oldPoint);
                }
                showToast('请在信息学部范围内选择！');
                showCampusBoundary();
                return;
            }
            
            const newPoint = new BMap.Point(newLng, newLat);

            console.log('人工点拖拽后位置:', { lng: newPoint.lng, lat: newPoint.lat });

            const idx = manualMarkers.findIndex(m => m.marker === this);

            if (idx >= 0) {

                manualMarkers[idx].lat = newLat;



                manualMarkers[idx].lng = newLng;



                // 更新覆盖范围常


                if (manualCircles[idx]) {



                    map.removeOverlay(manualCircles[idx]);



                    manualCircles[idx] = new BMap.Circle(



                        new BMap.Point(newPoint.lng, newPoint.lat),



                        currentServiceRadius,



                        {



                            strokeColor: '#ea4335',



                            strokeWeight: 1,



                            fillColor: '#ea4335',



                            fillOpacity: 0.15,



                            zIndex: 9900, // 设置较低的zIndex，确保在调度路径之下



                            enableClicking: false // 禁止点击，让点击事件传递到下面的调度路径



                        }



                    );



                    map.addOverlay(manualCircles[idx]);



                }



                // 重要：拖拽后调用后端API重新计算覆盖率，确保与智能选址计算方式一致
                calculateManualCoverageFromAPI();



            }



        });







        // 右键删除



        marker.addEventListener('rightclick', function(e) {
            // 检查是否在人工选址模式
            if (currentMode !== 'add') {
                showToast('请先点击"开始人工选址"按钮进入编辑模式');
                return;
            }

            const idx = manualMarkers.findIndex(m => m.marker === this);



            if (idx >= 0) {


                map.removeOverlay(this);


                if (manualCircles[idx]) {


                    map.removeOverlay(manualCircles[idx]);


                }


                manualMarkers.splice(idx, 1);
                manualCircles.splice(idx, 1);

                // 重要：修改人工选址时重置缓存的指标，这样下次会重新计算
                manualLocationMetrics = null;
                
                // 重要：修改人工选址时不自动重新计算核心指标，避免前端计算错误！
                // 如果需要重新计算，点击"保存人工选址"按钮！
                updateManualCoverage();
                updateCoreMetrics();
                document.getElementById('status-manual').textContent = manualMarkers.length;
                // 更新系统概览数据
                updateSystemStatus();


            }


        });







        // ⭐修复：生成带序号的名称，与智能选址点保持一致
        const pointName = `人工选址点${manualMarkers.length + 1}`;
        
        // 弹出信息（与智能选址点保持一致）
        const popupContent = `
            <div class="popup-content">
                <div class="popup-title">${pointName}</div>
                <div class="popup-row"><span class="popup-label">名称</span><span class="popup-value">${pointName}</span></div>
                <div class="popup-row"><span class="popup-label">容量</span><span class="popup-value">40 车位</span></div>
                <div class="popup-row"><span class="popup-label">坐标</span><span class="popup-value">${lat.toFixed(5)}, ${lng.toFixed(5)}</span></div>
            </div>
        `;







        const infoWindow = new BMap.InfoWindow(popupContent, {



            width: 250



        });









        // 覆盖范围常

        // 先添加标记，再添加点击事件
        map.addOverlay(marker);

        // 添加点击事件（使用闭包保存当前标记和信息窗口）
        const savedMarker = marker;
        const savedInfoWindow = infoWindow;
        marker.addEventListener('click', function() {
            map.openInfoWindow(savedInfoWindow, savedMarker.getPosition());
        });

        const circle = new BMap.Circle(
            point,
            currentServiceRadius,
            {
                strokeColor: '#ea4335',
                strokeWeight: 1,
                fillColor: '#ea4335',
                fillOpacity: 0.15,
                zIndex: 9900, // 设置较低的zIndex，确保在调度路径之下
                enableClicking: false // 禁止点击，让点击事件传递到下面的调度路径
            }
        );

        map.addOverlay(circle);
        manualCircles.push(circle);

        manualMarkers.push({ marker, lat: normalized.lat, lng: normalized.lng, name: pointName, type: 'manual', serviceRadius: currentServiceRadius, infoWindow: infoWindow });

        // 标记添加到地图后再打开信息窗口
        // marker.openInfoWindow(infoWindow); // 暂时注释掉，避免报错

    });



    document.getElementById('status-manual').textContent = manualMarkers.length;


    
    // ⭐修复：确保复制时指标完整，特别是 capacity 字段
    manualLocationMetrics = JSON.parse(JSON.stringify(smartMetrics));
    
    // 如果 capacity 缺失或为 0，手动计算一下
    if (!manualLocationMetrics.capacity || manualLocationMetrics.capacity === 0) {
        manualLocationMetrics.capacity = smartMarkers.length * 40;
        console.log('手动计算人工方案容量:', manualLocationMetrics.capacity);
    }
    
    console.log('复制后的人工方案指标:', manualLocationMetrics);


    
    // 强制切换到人工方案显示
    selectedScheme = 'manual';

    document.getElementById('selected-scheme').value = 'manual';

    // ⭐修复：调用 updateSelectedScheme 函数来更新显示状态
    updateSelectedScheme();

    // 使用与智能方案相同的覆盖率显示
    updateManualCoverage();

    updateCoreMetrics();

    updateUsageChart();

    // 重新渲染调度路线，确保在最上层
    if (window.currentDispatchGeoJson) {
        renderDispatch(window.currentDispatchGeoJson);
    }


    loadDemandPrediction();


    updateSchemeStatusDisplay();


    showToast('智能选址方案已复制到人工方案');

}







// 更新智能选址覆盖常


function updateSmartCoverage() {


    if (smartMarkers.length === 0) {



        document.getElementById('smart-coverage').textContent = '0%';



        document.getElementById('smart-coverage-bar').style.width = '0%';



        return;



    }















    // 使用smartMetrics中的覆盖率，确保与后端计算结果一致
    const coverage = smartMetrics.coverage * 100;



    document.getElementById('smart-coverage').textContent = coverage.toFixed(1) + '%';



    document.getElementById('smart-coverage-bar').style.width = coverage + '%';



}







// 更新人工选址覆盖常


function updateManualCoverage() {
    if (manualMarkers.length === 0) {
        document.getElementById('manual-coverage').textContent = '0%';
        document.getElementById('manual-coverage-bar').style.width = '0%';
        return;
    }

    // 优先使用缓存的指标，如果没有缓存则调用后端API计算（与智能选址保持一致）
    let metrics;
    if (manualLocationMetrics && manualLocationMetrics.coverage !== undefined) {
        metrics = manualLocationMetrics;
    } else {
        // 调用后端API计算，确保与智能选址计算方式一致
        const points = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));
        fetch('/api/calculate-coverage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                parking_points: points,
                service_radius: currentServiceRadius
            })
        }).then(response => response.json())
          .then(result => {
              if (result.coverage !== undefined) {
                  manualLocationMetrics = {
                      coverage: result.coverage,
                      avg_distance: result.avg_distance || 0,
                      balance: result.balance || 0,
                      capacity: result.capacity || 0
                  };
                  const coverage = manualLocationMetrics.coverage * 100;
                  document.getElementById('manual-coverage').textContent = coverage.toFixed(1) + '%';
                  document.getElementById('manual-coverage-bar').style.width = coverage + '%';
                  updateCoreMetrics();
              }
          }).catch(error => {
              console.error('计算人工方案覆盖率失败:', error);
          });
        return;
    }

    const coverage = metrics.coverage * 100;
    document.getElementById('manual-coverage').textContent = coverage.toFixed(1) + '%';
    document.getElementById('manual-coverage-bar').style.width = coverage + '%';
}




function getActiveSupplyTimeSlot() {
    const activeTab = document.querySelector('.tabs .tab.active');
    if (!activeTab) {
        return 'morning';
    }

    const onclick = activeTab.getAttribute('onclick') || '';
    const match = onclick.match(/'(morning|noon|evening)'/);
    return match ? match[1] : 'morning';
}




function getSchemeMetricsByType(type) {
    if (type === 'smart') {
        if (smartMarkers.length === 0) {
            return null;
        }

        // 确保smartMetrics有效
        if (!smartMetrics || smartMetrics.coverage === undefined) {
            return null;
        }

        // 使用smartMetrics，确保与后端计算结果一致
        return smartMetrics;
    }

    if (type === 'manual') {
        if (manualMarkers.length === 0) {
            return null;
        }

        // 如果已经有缓存的metrics，直接使用
        if (manualLocationMetrics && manualLocationMetrics.coverage !== undefined) {
            return manualLocationMetrics;
        }

        // 否则调用后端API重新计算并缓存（与智能选址保持一致）
        calculateManualCoverageFromAPI();
        return null;  // 返回null，等待异步更新完成后的回调处理
    }

    return null;
}




function getComparisonAnalysis() {
    const smart = getSchemeMetricsByType('smart');
    const manual = getSchemeMetricsByType('manual');

    const smartScore = smart ? calculateSchemeScore(smart) : 0;
    const manualScore = manual ? calculateSchemeScore(manual) : 0;

    let recommendedScheme = 'none';
    if (smart && manual) {
        recommendedScheme = smartScore >= manualScore ? 'smart' : 'manual';
    } else if (smart) {
        recommendedScheme = 'smart';
    } else if (manual) {
        recommendedScheme = 'manual';
    }

    return {
        smartMetrics: smart,
        manualMetrics: manual,
        smartScore,
        manualScore,
        recommendedScheme
    };
}




function getEffectiveScheme() {
    if (selectedScheme !== 'auto') {
        return selectedScheme;
    }

    // 优先使用智能选址方案（如果有的话）
    if (smartMarkers.length > 0) {
        return 'smart';
    }

    // 否则使用人工选址方案（如果有的话）
    if (manualMarkers.length > 0) {
        return 'manual';
    }

    // 最后默认使用智能选址方案
    return 'smart';
}



function getMarkerPositionBD09(item) {
    if (item && item.marker && typeof item.marker.getPosition === 'function') {
        const pos = item.marker.getPosition();
        if (pos && Number.isFinite(Number(pos.lat)) && Number.isFinite(Number(pos.lng))) {
            return { lat: Number(pos.lat), lng: Number(pos.lng) };
        }
    }
    if (item && Number.isFinite(Number(item.lat)) && Number.isFinite(Number(item.lng))) {
        return { lat: Number(item.lat), lng: Number(item.lng) };
    }
    return null;
}

function getParkingPointName(item, idx, scheme) {
    const dataName = item?.data?.name || item?.name;
    if (dataName) return String(dataName);
    return scheme === 'smart' ? `智能点${idx + 1}` : `人工点${idx + 1}`;
}

function updateDispatchSummaryFromResult(dispatchResult) {
    const geojson = dispatchResult?.geojson || { type: 'FeatureCollection', features: [] };
    const metrics = dispatchResult?.metrics || {};
    const features = Array.isArray(geojson.features) ? geojson.features : [];
    const lineFeatures = features.filter(f => f?.geometry?.type === 'LineString');

    const totalVehicles = Number(metrics.vehicle_count || metrics.total_vehicles || lineFeatures.length || 0);
    const totalTransfer = Number(
        metrics.total_transfer ||
        lineFeatures.reduce((sum, f) => sum + (Number(f?.properties?.transfer || f?.properties?.total_transfer || 0) || 0), 0)
    );
    const totalDistanceM = Number(metrics.total_distance_m || metrics.total_distance || 0);

    const statusDispatch = document.getElementById('status-dispatch');
    const dispatchCount = document.getElementById('dispatch-count');
    const dispatchBikes = document.getElementById('dispatch-bikes');
    const dispatchDistance = document.getElementById('dispatch-distance');
    const dispatchTime = document.getElementById('dispatch-time-result');
    const dispatchCost = document.getElementById('dispatch-cost');

    if (statusDispatch) statusDispatch.textContent = String(totalVehicles);
    if (dispatchCount) dispatchCount.textContent = `${totalVehicles} 辆`;
    if (dispatchBikes) dispatchBikes.textContent = `${totalTransfer} 辆`;
    if (dispatchDistance) dispatchDistance.textContent = `${(totalDistanceM / 1000).toFixed(2)} km`;

    const estimatedMinutes = Math.round((totalDistanceM / 1000 / 15) * 60);
    if (dispatchTime) dispatchTime.textContent = `${estimatedMinutes} 分钟`;

    const cost = ((totalDistanceM / 1000) * 1.5).toFixed(2);
    if (dispatchCost) dispatchCost.textContent = `¥${cost}`;

    if (typeof updateDispatchTable === 'function') {
        updateDispatchTable(lineFeatures);
    }

    // 更新系统状态
    if (typeof updateSystemStatus === 'function') {
        updateSystemStatus();
    }
}

// 生成供需状态表格（基于热力图数据 + 时段人流规则）
function generateSupplyDemandTable(timeSlot, scheme, onComplete) {
    console.log('generateSupplyDemandTable called with timeSlot:', timeSlot);
    console.log('demandPointsData length:', demandPointsData ? demandPointsData.length : 'null/undefined');
    console.log('currentServiceRadius:', currentServiceRadius);
    console.log('scheme:', scheme);

    const effectiveScheme = scheme || getEffectiveScheme();
    const markers = effectiveScheme === 'smart' ? smartMarkers : manualMarkers;

    const tbody = document.getElementById('supply-demand-body');
    if (!tbody) return;

    if (markers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请先运行选址算法</td></tr>';
        // 只在有回调函数时显示提示，避免初始化时弹出
        if (onComplete && typeof onComplete === 'function') {
            showToast('请先进行智能选址或添加人工选址点');
        }
        return;
    }

    // 每次都重新从后端获取热力图数据，不使用任何缓存
    console.log('重新获取热力图数据，不使用缓存');
    fetch(`/api/heatmap-data?time=${timeSlot}&r=${Date.now()}`)
        .then(response => response.json())
        .then(data => {
            const heatmapPoints = (data && data.points && data.points.length > 0)
                ? data.points
                : (MOCK_HEATMAP_DATA[timeSlot] || []);
            console.log(`已获取${timeSlot}时段热力图数据，共${heatmapPoints.length}个点`);
            computeAndRenderSupplyDemandTable(timeSlot, effectiveScheme, markers, heatmapPoints);
            // 数据计算完成后调用回调
            if (onComplete && typeof onComplete === 'function') {
                onComplete(window.currentParkingData);
            }
        })
        .catch(error => {
            console.error('获取热力图数据失败:', error);
            const fallbackPoints = MOCK_HEATMAP_DATA[timeSlot] || [];
            computeAndRenderSupplyDemandTable(timeSlot, effectiveScheme, markers, fallbackPoints);
            // 数据计算完成后调用回调
            if (onComplete && typeof onComplete === 'function') {
                onComplete(window.currentParkingData);
            }
        });
}

function computeAndRenderSupplyDemandTable(timeSlot, scheme, markers, heatmapPoints) {

    // 时段需求规则：起点POI → 终点POI（权重）
    // 起点：人从这里骑车离开 → 车被骑走 → 供给（当前车少）
    // 终点：人到达这里停车 → 车堆积 → 需求（当前车多）
    // 调度的目的：把起点的车调到终点
    const demandRules = {
        'morning': {
            '宿舍': {'教学楼': 0.7, '食堂': 0.1, '其他': 0.2},
            '教学楼': {},
            '食堂': {},
            '其他': {}
        },
        'noon': {
            '教学楼': {'食堂': 0.6, '宿舍': 0.2, '其他': 0.2},
            '宿舍': {},
            '食堂': {},
            '其他': {}
        },
        'evening': {
            '教学楼': {'宿舍': 0.7},
            '食堂': {'宿舍': 0.2},
            '其他': {'宿舍': 0.1},
            '宿舍': {}
        }
    };

    // 建筑容量预设
    const buildingCapacity = {
        '宿舍': 1000,
        '教学楼': 1500,
        '食堂': 500,
        '图书馆': 300,
        '其他': 300
    };

    const rule = demandRules[timeSlot] || demandRules['morning'];
    console.log('当前时段需求规则:', rule);

    let tableHTML = '';
    let totalSupply = 0;
    let totalDemand = 0;
    const parkingData = [];

    // 获取周边POI数据 - 使用热力图数据作为POI数据
    const nearbyPOIs = heatmapPoints || [];

    markers.forEach((item, idx) => {
        let lat, lng;
        if (item.marker && typeof item.marker.getPosition === 'function') {
            const pos = item.marker.getPosition();
            lat = pos.lat;
            lng = pos.lng;
        } else {
            lat = item.lat;
            lng = item.lng;
        }

        // 查找停车点周边一定半径内的POI和建筑物
        const serviceRadius = currentServiceRadius || 150;
        let nearbyItems = [];
        
        if (nearbyPOIs.length > 0) {
            nearbyItems = nearbyPOIs.filter(poi => {
                let distance = 0;
                if (Array.isArray(poi)) {
                    // 热力图数据结构: [lat, lng, demand]
                    const poiLat = poi[0];
                    const poiLng = poi[1];
                    distance = Math.sqrt((lng - poiLng) ** 2 + (lat - poiLat) ** 2) * 111000;
                } else if (poi.lng && poi.lat) {
                    // 传统POI数据结构
                    const dx = lng - poi.lng;
                    const dy = lat - poi.lat;
                    distance = Math.sqrt(dx * dx + dy * dy) * 111000;
                }
                return distance <= serviceRadius && distance >= 1;
            });
        }

        // 分类统计周边POI的有效容量
        let categoryWeight = {
            '宿舍': 0,
            '教学楼': 0,
            '食堂': 0,
            '图书馆': 0,
            '其他': 0
        };

        nearbyItems.forEach(poi => {
            let category = '其他';
            let distance = 0;
            let demand = 1;
            
            if (Array.isArray(poi)) {
                // 热力图数据结构: [lat, lng, demand]
                const poiLat = poi[0];
                const poiLng = poi[1];
                demand = poi[2] || 1;
                distance = Math.sqrt((lng - poiLng) ** 2 + (lat - poiLat) ** 2) * 111000;
                
                // 根据时段和需求规则来分配权重，同时考虑POI的位置
                if (timeSlot === 'morning') {
                    // 早高峰：宿舍是起点，教学楼是终点
                    // 根据POI的位置推断类别
                    // 南部区域（较低纬度）主要是教学楼
                    if (poiLat < 30.534) {
                        category = '教学楼';
                        categoryWeight['教学楼'] += demand * Math.exp(-distance / (serviceRadius * 0.5));
                    } else {
                        category = '宿舍';
                        categoryWeight['宿舍'] += demand * Math.exp(-distance / (serviceRadius * 0.5));
                    }
                } else if (timeSlot === 'noon') {
                    // 午高峰：教学楼是起点，食堂是终点
                    // 根据POI的位置推断类别
                    if (poiLat < 30.534 && (poiLng > 114.365 && poiLng < 114.367)) {
                        category = '食堂';
                        categoryWeight['食堂'] += demand * Math.exp(-distance / (serviceRadius * 0.5));
                    } else if (poiLat < 30.534) {
                        category = '教学楼';
                        categoryWeight['教学楼'] += demand * Math.exp(-distance / (serviceRadius * 0.5));
                    } else {
                        category = '宿舍';
                        categoryWeight['宿舍'] += demand * Math.exp(-distance / (serviceRadius * 0.5));
                    }
                } else if (timeSlot === 'evening') {
                    // 晚高峰：教学楼是起点，宿舍是终点
                    // 根据POI的位置推断类别
                    if (poiLat < 30.534) {
                        category = '教学楼';
                        categoryWeight['教学楼'] += demand * Math.exp(-distance / (serviceRadius * 0.5));
                    } else {
                        category = '宿舍';
                        categoryWeight['宿舍'] += demand * Math.exp(-distance / (serviceRadius * 0.5));
                    }
                }
            } else if (poi.lng && poi.lat) {
                // 传统POI数据结构
                if (poi.name) {
                    const name = poi.name;
                    if (name.includes('宿舍') || name.includes('舍')) category = '宿舍';
                    else if (name.includes('教学楼') || name.includes('学院') || name.includes('教学')) category = '教学楼';
                    else if (name.includes('食堂') || name.includes('餐厅')) category = '食堂';
                    else if (name.includes('图书馆') || name.includes('图书')) category = '图书馆';
                }
                distance = Math.sqrt((lng - poi.lng) ** 2 + (lat - poi.lat) ** 2) * 111000;
                
                if (distance > 0) {
                    // 根据距离计算权重（距离越近权重越高）
                    const distanceFactor = Math.exp(-distance / (serviceRadius * 0.5));
                    const weight = buildingCapacity[category] * distanceFactor;
                    categoryWeight[category] += weight;
                }
            }
        });

        console.log(`停车点${idx + 1} 周边POI权重:`, categoryWeight);

        // 计算供给和需求
        // 供给 = 从该类别人流流出到终点的总量（起点有车被骑走）
        // 需求 = 人流流入到该类别的总量（终点需要停车位）
        let supplyScore = 0; // 正数表示有车被骑走（起点）
        let demandScore = 0; // 正数表示有车到达（终点）

        // 遍历规则，计算供给和需求
        for (const [startCategory, destinations] of Object.entries(rule)) {
            if (!destinations || Object.keys(destinations).length === 0) continue;
            
            const startWeight = categoryWeight[startCategory];
            if (startWeight === 0) continue;

            // 该类别作为起点：计算从这里流出的人流量（会被骑走的车）
            for (const [endCategory, flowWeight] of Object.entries(destinations)) {
                supplyScore += startWeight * flowWeight;
            }
        }

        // 计算终点需求：有多少人要到达这里停车
        for (const [startCategory, destinations] of Object.entries(rule)) {
            if (!destinations) continue;
            
            for (const [endCategory, flowWeight] of Object.entries(destinations)) {
                // 该类别作为终点：计算流入的人流量（需要停车位）
                const endWeight = categoryWeight[endCategory];
                if (endWeight > 0) {
                    const startWeight = categoryWeight[startCategory];
                    demandScore += startWeight * flowWeight;
                }
            }
        }

        console.log(`停车点${idx + 1}: supply=${supplyScore.toFixed(0)}, demand=${demandScore.toFixed(0)}`);

        // 如果没有供需信息，使用均匀分布
        if (supplyScore === 0 && demandScore === 0) {
            supplyScore = 1;
            demandScore = 1;
        }

        // 找到该停车点周边最主要的POI类型
        let mainCategory = '其他';
        let maxWeight = 0;
        for (const [cat, weight] of Object.entries(categoryWeight)) {
            if (weight > maxWeight) {
                maxWeight = weight;
                mainCategory = cat;
            }
        }

        // 根据周边主要POI类型和时段规则决定供需状态
        // 使用固定的逻辑，基于停车点的位置和类型生成固定的供需数据
        let currentVehicles, idealDemand;
        
        // 基于停车点的位置生成一个固定的种子值
        const seed = Math.floor((lat * 1000000 + lng * 1000000) % 1000);
        
        // 基于种子值生成固定的随机数
        const getFixedRandom = (seed, range) => {
            const x = Math.sin(seed) * 10000;
            return Math.floor((x - Math.floor(x)) * range);
        };
        
        // 基础值随机化，不再固定范围
        const baseRandom = () => getFixedRandom(seed, 8);  // 0-7
        
        // 为主要POI类型添加随机性，让它们有机会出现平衡状态
        const rand = (Math.sin(seed) * 10000) - Math.floor(Math.sin(seed) * 10000);
        
        if (mainCategory === '宿舍') {
            // 宿舍在早高峰是起点（车被骑走），晚高峰是终点（车堆积）
            if (timeSlot === 'morning') {
                if (rand < 0.7) {
                    // 70%概率：宿舍→教学楼，车被骑走，当前少
                    currentVehicles = 3 + baseRandom();   // 3-10
                    idealDemand = currentVehicles + 8 + baseRandom();  // 当前+8-15
                } else if (rand < 0.9) {
                    // 20%概率：平衡状态
                    currentVehicles = 7 + baseRandom();   // 7-14
                    idealDemand = 7 + baseRandom();       // 7-14
                } else {
                    // 10%概率：过剩状态（特殊情况）
                    currentVehicles = 10 + baseRandom();  // 10-17
                    idealDemand = 4 + baseRandom();       // 4-11
                }
            } else if (timeSlot === 'evening') {
                if (rand < 0.7) {
                    // 70%概率：教学楼/食堂→宿舍，车堆积，当前多
                    currentVehicles = 11 + baseRandom();  // 11-18
                    idealDemand = 5 + getFixedRandom(seed + 1, 6);   // 5-10
                } else if (rand < 0.9) {
                    // 20%概率：平衡状态
                    currentVehicles = 7 + baseRandom();   // 7-14
                    idealDemand = 7 + baseRandom();       // 7-14
                } else {
                    // 10%概率：不足状态（特殊情况）
                    currentVehicles = 3 + baseRandom();   // 3-10
                    idealDemand = 10 + baseRandom();      // 10-17
                }
            } else {
                // 午高峰：宿舍流量较小，增加平衡状态概率
                if (rand < 0.4) {
                    // 40%概率：不足状态
                    currentVehicles = 3 + baseRandom();   // 3-10
                    idealDemand = 10 + baseRandom();      // 10-17
                } else if (rand < 0.8) {
                    // 40%概率：平衡状态
                    currentVehicles = 7 + baseRandom();   // 7-14
                    idealDemand = 7 + baseRandom();       // 7-14
                } else {
                    // 20%概率：过剩状态
                    currentVehicles = 10 + baseRandom();  // 10-17
                    idealDemand = 4 + baseRandom();       // 4-11
                }
            }
        } else if (mainCategory === '教学楼') {
            // 教学楼在早高峰是终点（车堆积），晚高峰是起点（车被骑走）
            if (timeSlot === 'morning') {
                if (rand < 0.7) {
                    // 70%概率：宿舍→教学楼，车堆积
                    currentVehicles = 12 + baseRandom();  // 12-19
                    idealDemand = 4 + getFixedRandom(seed + 1, 7);   // 4-10
                } else if (rand < 0.9) {
                    // 20%概率：平衡状态
                    currentVehicles = 7 + baseRandom();   // 7-14
                    idealDemand = 7 + baseRandom();       // 7-14
                } else {
                    // 10%概率：不足状态（特殊情况）
                    currentVehicles = 3 + baseRandom();   // 3-10
                    idealDemand = 10 + baseRandom();      // 10-17
                }
            } else if (timeSlot === 'evening') {
                if (rand < 0.7) {
                    // 70%概率：教学楼→宿舍，车被骑走
                    currentVehicles = 4 + baseRandom();   // 4-11
                    idealDemand = currentVehicles + 7 + baseRandom();  // 当前+7-14
                } else if (rand < 0.9) {
                    // 20%概率：平衡状态
                    currentVehicles = 7 + baseRandom();   // 7-14
                    idealDemand = 7 + baseRandom();       // 7-14
                } else {
                    // 10%概率：过剩状态（特殊情况）
                    currentVehicles = 10 + baseRandom();  // 10-17
                    idealDemand = 4 + baseRandom();       // 4-11
                }
            } else {
                // 午高峰：教学楼→食堂，增加平衡状态概率
                if (rand < 0.4) {
                    // 40%概率：不足状态
                    currentVehicles = 3 + baseRandom();   // 3-10
                    idealDemand = 10 + baseRandom();      // 10-17
                } else if (rand < 0.8) {
                    // 40%概率：平衡状态
                    currentVehicles = 7 + baseRandom();   // 7-14
                    idealDemand = 7 + baseRandom();       // 7-14
                } else {
                    // 20%概率：过剩状态
                    currentVehicles = 10 + baseRandom();  // 10-17
                    idealDemand = 4 + baseRandom();       // 4-11
                }
            }
        } else if (mainCategory === '食堂') {
            // 食堂在早高峰是终点，午高峰是终点，晚高峰是起点
            if (timeSlot === 'morning') {
                if (rand < 0.6) {
                    // 60%概率：过剩状态
                    currentVehicles = 9 + baseRandom();  // 9-16
                    idealDemand = 7 + baseRandom();       // 7-14
                } else if (rand < 0.9) {
                    // 30%概率：平衡状态
                    currentVehicles = 7 + baseRandom();   // 7-14
                    idealDemand = 7 + baseRandom();       // 7-14
                } else {
                    // 10%概率：不足状态
                    currentVehicles = 3 + baseRandom();   // 3-10
                    idealDemand = 10 + baseRandom();      // 10-17
                }
            } else if (timeSlot === 'evening') {
                if (rand < 0.6) {
                    // 60%概率：不足状态
                    currentVehicles = 5 + baseRandom();   // 5-12
                    idealDemand = 11 + baseRandom();      // 11-18
                } else if (rand < 0.9) {
                    // 30%概率：平衡状态
                    currentVehicles = 7 + baseRandom();   // 7-14
                    idealDemand = 7 + baseRandom();       // 7-14
                } else {
                    // 10%概率：过剩状态
                    currentVehicles = 10 + baseRandom();  // 10-17
                    idealDemand = 4 + baseRandom();       // 4-11
                }
            } else {
                // 午高峰：食堂需求较大，增加平衡状态概率
                if (rand < 0.3) {
                    // 30%概率：不足状态
                    currentVehicles = 3 + baseRandom();   // 3-10
                    idealDemand = 10 + baseRandom();      // 10-17
                } else if (rand < 0.7) {
                    // 40%概率：平衡状态
                    currentVehicles = 7 + baseRandom();   // 7-14
                    idealDemand = 7 + baseRandom();       // 7-14
                } else {
                    // 30%概率：过剩状态
                    currentVehicles = 10 + baseRandom();  // 10-17
                    idealDemand = 4 + baseRandom();       // 4-11
                }
            }
        } else {
            // 其他类型或混合区域：完全随机分布
            if (rand < 0.3) {
                // 30%概率：不足状态
                currentVehicles = 3 + baseRandom();  // 3-10
                idealDemand = 10 + baseRandom();      // 10-17
            } else if (rand < 0.6) {
                // 30%概率：过剩状态
                currentVehicles = 10 + baseRandom();  // 10-17
                idealDemand = 4 + baseRandom();       // 4-11
            } else {
                // 40%概率：平衡状态
                currentVehicles = 7 + baseRandom();   // 7-14
                idealDemand = 7 + baseRandom();       // 7-14
            }
        }

        // 确保差异足够触发转运（差异>=8，差异更大更明显）
        const diff = currentVehicles - idealDemand;
        if (Math.abs(diff) < 8) {
            // 基于种子值增强差异到8-12
            const enhancement = 8 + getFixedRandom(seed + 4, 5);
            if (getFixedRandom(seed + 5, 2) === 0) {
                currentVehicles += enhancement;
            } else {
                idealDemand += enhancement;
            }
        }

        console.log(`停车点${idx + 1}: mainCategory=${mainCategory}, current=${currentVehicles}, demand=${idealDemand}`);

        totalSupply += currentVehicles;
        totalDemand += idealDemand;

        // 计算调剂量 - 差异>5辆（不包含5辆）时需要转运
        let transfer = 0;
        const currentDiff = currentVehicles - idealDemand;
        if (currentDiff > 5) {
            transfer = -Math.floor(currentDiff * 0.85);  // 转出：差异的85%
        } else if (currentDiff < -5) {
            transfer = Math.floor(Math.abs(currentDiff) * 0.85);  // 转入：差异的85%
        }

        const status = transfer > 0 ? '<span style="color:#e74c3c">不足</span>' :
                      transfer < 0 ? '<span style="color:#27ae60">过剩</span>' :
                      '<span style="color:#999">平衡</span>';

        const transferStr = transfer !== 0 ? Math.abs(transfer) + '辆' : '-';

        const zoneName = scheme === 'smart' ? `智能选址点${idx + 1}` : `人工选址点${idx + 1}`;

        tableHTML += `<tr>
            <td>${zoneName}</td>
            <td>${currentVehicles}</td>
            <td>${idealDemand}</td>
            <td>${status}</td>
            <td>${transferStr}</td>
        </tr>`;

        parkingData.push({
            name: zoneName,
            current: currentVehicles,
            demand: idealDemand,
            transfer: transfer,
            nearbyCount: nearbyItems.length,
            lat: lat,
            lng: lng,
            categoryWeight: categoryWeight
        });
    });

    console.log(`供需计算完成: 供给=${totalSupply}, 需求=${totalDemand}, 比=${(totalSupply/totalDemand).toFixed(3)}`);

    // 渲染表格
    renderSupplyDemandTable(parkingData);

    // 保存 parkingData 到全局，供调度使用
    window.currentParkingData = parkingData.map(p => ({
        name: p.name,
        current: p.current,
        demand: p.demand,
        transfer: p.transfer,
        nearbyCount: p.nearbyCount,
        lat: p.lat,
        lng: p.lng
    }));

    // 更新系统状态显示
    updateSystemStatus();
}

// 渲染供需状态表格
function renderSupplyDemandTable(parkingData) {
    const effectiveScheme = getEffectiveScheme();
    const tbody = document.getElementById('supply-demand-body');
    if (!tbody) return;

    let tableHTML = '';
    parkingData.forEach(parking => {
        const status = parking.transfer > 0 ? '<span style="color:#e74c3c">不足</span>' :
                      parking.transfer < 0 ? '<span style="color:#27ae60">过剩</span>' :
                      '<span style="color:#999">平衡</span>';
        const transferStr = parking.transfer !== 0 ? Math.abs(parking.transfer) + '辆' : '-';
        tableHTML += `<tr>
            <td>${parking.name}</td>
            <td>${parking.current}</td>
            <td>${parking.demand}</td>
            <td>${status}</td>
            <td>${transferStr}</td>
        </tr>`;
    });

    tbody.innerHTML = tableHTML;
}

// 切换供需状态表格的时段
function switchSupplyTab(timeSlot) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        const tabTime = tab.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        if (tabTime === timeSlot) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    generateSupplyDemandTable(timeSlot, selectedScheme);
}







// 根据停车点位置计算核心指标


function calculateCoreMetrics(parkingPoints) {



    if (!parkingPoints || parkingPoints.length === 0) {



        return {



            coverage: 0,



            avg_distance: 0,



            balance: 0,



            capacity: 0



        };



    }







    // 定义功能区中心坐标（BD09格式 ，与 generateSupplyDemandTable 保持一致


    const zones = {



        'dorm': [114.3652, 30.5357],      // 宿舍区核心BD09 [lng, lat]



        'teaching': [114.3663, 30.5335],  // 教学区核心BD09 [lng, lat]



        'canteen': [114.3645, 30.5353],   // 食堂 BD09 [lng, lat]



        'library': [114.3662, 30.5361],   // 图书常BD09 [lng, lat]



        'south_gate': [114.3664, 30.5317], // 南门附濑 BD09 [lng, lat]



        'playground': [114.3636, 30.5342], // 操场 BD09 [lng, lat]



        'info_south': [114.3656, 30.5321], // 信息学部南区 BD09 [lng, lat]



        'info_west': [114.3675, 30.5316],  // 信息学部楿区 BD09 [lng, lat]



        'info_east': [114.3641, 30.5327]   // 信息学部东区 BD09 [lng, lat]



    };







    // 使用功能区中心作为需求点（与 generateSupplyDemandTable 一致）



    const demandPoints = [];



    for (const [zoneName, zoneCoords] of Object.entries(zones)) {



        demandPoints.push({



            lat: zoneCoords[1],  // [lng, lat] 格式，所常lat 是第二个



            lng: zoneCoords[0],  // [lng, lat] 格式，所常lng 是第一致


            zoneName: zoneName



        });



    }







    // 计算每个需求点到最近停车点的直线距离（与后端保持一致）



    const distances = [];



    const serviceRadius = currentServiceRadius;



    let coveredCount = 0;



    const serviceCounts = new Array(parkingPoints.length).fill(0);







    demandPoints.forEach(demand => {



        let minDistance = Infinity;



        let nearestParkingIndex = -1;







        parkingPoints.forEach((parking, index) => {



            const distance = Math.sqrt(



                Math.pow(demand.lng - parking.lng, 2) + 



                Math.pow(demand.lat - parking.lat, 2)



            ) * 111319; // 转换为米







            if (distance < minDistance) {



                minDistance = distance;



                nearestParkingIndex = index;



            }



        });







        distances.push(minDistance);



        if (minDistance <= serviceRadius) {



            coveredCount++;



            if (nearestParkingIndex >= 0) {



                serviceCounts[nearestParkingIndex]++;



            }



        }



    });







    // 计算覆盖率（与后端保持一致）



    const coverage = demandPoints.length > 0 ? coveredCount / demandPoints.length : 0;







    // 计算平均步桌距离（只考虑在服务半径内的需求点）



    const coveredDistances = distances.filter(d => d <= serviceRadius);



    const avgDistance = coveredDistances.length > 0 ? coveredDistances.reduce((a, b) => a + b, 0) / coveredDistances.length : 0;







    // 计算均衡性（基于停车点分布的合理性，考虑服务半径）



    let balanceScore = 0;



    if (serviceCounts.length === 1) {



        // 只有一个停车点时，均衡性为 100



        balanceScore = 100;



    } else if (serviceCounts.length > 1) {



        // 1. 计算服务需求的均衡性（使用变异系数，只考虑服务半径内的需求点）



        const totalCoveredDemand = coveredDistances.length;



        const avgServiceCount = totalCoveredDemand > 0 ? totalCoveredDemand / serviceCounts.length : 0;



        const squaredDiffs = serviceCounts.map(count => Math.pow(count - avgServiceCount, 2));



        const variance = squaredDiffs.reduce((a, b) => a + b, 0) / (serviceCounts.length - 1);



        const stdServiceCount = Math.sqrt(variance);



        const coefficientOfVariation = avgServiceCount > 0 ? stdServiceCount / avgServiceCount : 0;



        



        // 2. 计算服务需求均衡性得分（变异系数越小，得分越高）



        const loadBalanceScore = Math.max(0, Math.min(100, 100 - (coefficientOfVariation * 40)));

        // 3. 综合均衡性得分（与后端 location_opt.py 保持一致，只考虑服务需求均衡性）
        balanceScore = loadBalanceScore;



        if (parkingPoints.length > 1) {



            // 计算所有停车点之间的距离


            const distances = [];



            for (let i = 0; i < parkingPoints.length; i++) {



                for (let j = i + 1; j < parkingPoints.length; j++) {



                    const distance = Math.sqrt(



                        Math.pow(parkingPoints[i].lng - parkingPoints[j].lng, 2) + 



                        Math.pow(parkingPoints[i].lat - parkingPoints[j].lat, 2)



                    ) * 111319; // 转换为米



                    distances.push(distance);



                }



            }



            



            // 计算平均距离



            if (distances.length > 0) {



                const avgDistance = distances.reduce((a, b) => a + b, 0) / distances.length;



                // 理想的平均距离（根据校园大小调整常


                const idealDistance = 300; // 理想平均距离常00常


                // 计算空间分布均衡性得分（距离越接濑理想值，得分越高常


                const distanceDeviation = Math.abs(avgDistance - idealDistance) / idealDistance;

            }



        }



        



        // 4. 综合均衡性得分



        // 增加服务需求均衡性的权重，使其随服务半径变化更加明显



        // 3. 综合均衡性得分（与后端 location_opt.py 保持一致，只考虑服务需求均衡性）
        balanceScore = loadBalanceScore;

        // 确保得分在0-100之间
        balanceScore = Math.max(0, Math.min(100, balanceScore));



    }







    // 计算总容量（与后端保持一致）


    const capacity = parkingPoints.length * 40;







    return {



        coverage: coverage,



        avg_distance: avgDistance,



        balance: balanceScore,



        capacity: capacity



    };



}







// 更新核心指标显示



function updateCoreMetrics() {



    const hasSmartPoints = smartMarkers.length > 0;
    const hasManualPoints = manualMarkers.length > 0;

    if (!hasSmartPoints && !hasManualPoints) {



        // 没有任何方案，重置指标


        document.getElementById('metric-coverage').textContent = '0%';



        document.getElementById('metric-distance').textContent = '0m';



        document.getElementById('metric-balance').textContent = '0';



        document.getElementById('metric-capacity').textContent = '0';



        generateSupplyDemandTable(getActiveSupplyTimeSlot(), selectedScheme);
        return;
    }

    const effectiveScheme = getEffectiveScheme();
    const displayMetrics = getSchemeMetricsByType(effectiveScheme);

    if (!displayMetrics) {
        document.getElementById('metric-coverage').textContent = '0%';
        document.getElementById('metric-distance').textContent = '0m';
        document.getElementById('metric-balance').textContent = '0';
        document.getElementById('metric-capacity').textContent = '0';
        generateSupplyDemandTable(getActiveSupplyTimeSlot(), selectedScheme);
        return;
    }

    document.getElementById('metric-coverage').textContent = (displayMetrics.coverage * 100).toFixed(1) + '%';
    document.getElementById('metric-distance').textContent = displayMetrics.avg_distance.toFixed(0) + 'm';
    document.getElementById('metric-balance').textContent = Math.round(displayMetrics.balance);
    document.getElementById('metric-capacity').textContent = displayMetrics.capacity;

    generateSupplyDemandTable(getActiveSupplyTimeSlot(), selectedScheme);



}




function updateSelectedScheme() {
    const selector = document.getElementById('selected-scheme');
    selectedScheme = selector ? selector.value : 'auto';

    updateCoreMetrics();
    generateSupplyDemandTable(getActiveSupplyTimeSlot(), selectedScheme);
    updateUsageChart();
    loadDemandPrediction();
    updateSchemeStatusDisplay();

    const analysis = getComparisonAnalysis();
    if (analysis.smartMetrics && analysis.manualMetrics) {
        renderComparisonAnalysisPanel();
    }
}

function loadDemandPrediction() {
    let rulePrediction;
    let lstmPrediction;

    if (!initialPredictionData) {
        const oldSmartMarkers = [...smartMarkers];
        const oldManualMarkers = [...manualMarkers];
        smartMarkers = [];
        manualMarkers = [];

        rulePrediction = generateMockPrediction('rule', 'next1h');
        lstmPrediction = generateMockPrediction('lstm', 'next1h');
        initialPredictionData = { rulePrediction, lstmPrediction };

        smartMarkers = oldSmartMarkers;
        manualMarkers = oldManualMarkers;
    } else {
        rulePrediction = initialPredictionData.rulePrediction;
        lstmPrediction = initialPredictionData.lstmPrediction;
    }

    savedPredictionData = { rulePrediction, lstmPrediction };
    updatePredictionTable(rulePrediction, lstmPrediction);
    updatePredictionChart();
}

function updatePredictionChart() {
    if (predictionChart && savedPredictionData) {
        updatePredictionTable(savedPredictionData.rulePrediction, savedPredictionData.lstmPrediction);
    }
}

function generateMockPrediction(model, time) {
    const timeSlots = ['morning', 'noon', 'evening'];
    const predictions = [];

    const effectiveScheme = getEffectiveScheme();
    const parkingPoints = effectiveScheme === 'smart'
        ? smartMarkers
        : (effectiveScheme === 'manual' ? manualMarkers : []);
    const parkingCount = parkingPoints.length;

    const zones = {
        dorm: [30.5310, 114.3545],
        teaching: [30.5288, 114.3557],
        canteen: [30.5307, 114.3537],
        library: [30.5314, 114.3556],
        south_gate: [30.5270, 114.3558],
        playground: [30.5295, 114.3530],
        info_south: [30.5275, 114.3550],
        info_west: [30.5270, 114.3570],
        info_east: [30.5280, 114.3535]
    };

    timeSlots.forEach(slot => {
        let baseDemand = {
            morning: 85,
            noon: 70,
            evening: 90
        }[slot];

        if (parkingCount > 0) {
            let totalServiceArea = 0;

            parkingPoints.forEach(marker => {
                let totalWeight = 0;

                for (const [, zoneCenter] of Object.entries(zones)) {
                    const [zoneLat, zoneLng] = zoneCenter;
                    const markerPos = getMarkerPositionBD09(marker);
                    if (!markerPos) {
                        continue;
                    }

                    let distance = Math.hypot(markerPos.lng - zoneLng, markerPos.lat - zoneLat) * 111000;
                    if (distance < 1) {
                        distance = 1;
                    }

                    const weight = 1.0 / distance;
                    totalWeight += weight;
                }

                totalServiceArea += totalWeight;
            });

            const avgServiceArea = totalServiceArea / parkingCount;
            const serviceFactor = Math.max(0.8, Math.min(1.8, avgServiceArea / 3));
            baseDemand = Math.round(baseDemand * serviceFactor);
        }

        let multiplier = 1;
        if (time === 'next1h') {
            multiplier = 1.1;
        } else if (time === 'next3h') {
            multiplier = 1.3;
        } else if (time === 'tomorrow') {
            multiplier = 0.9;
        }

        if (model === 'lstm') {
            multiplier *= (0.95 + Math.random() * 0.1);
        }

        const demandIndex = Math.round(baseDemand * multiplier);

        predictions.push({
            time_slot: slot,
            demand_index: demandIndex,
            confidence: Math.round(85 + Math.random() * 10),
            recommendation: `建议在${slot === 'morning' ? '早高峰前' : slot === 'noon' ? '午间' : '晚高峰前'}增加${Math.round(demandIndex * 0.2)}辆电单车`
        });
    });

    return {
        model: model === 'rule' ? '规则+权重模型' : '统计学模拟推演',
        predictions: predictions,
        timestamp: new Date().toLocaleString()
    };
}

function updatePredictionTable(rulePrediction, lstmPrediction) {
    const timeSlots = ['morning', 'noon', 'evening'];
    const mainData = [];
    const auxData = [];

    timeSlots.forEach(slot => {
        const ruleData = rulePrediction.predictions.find(p => p.time_slot === slot);
        const lstmData = lstmPrediction.predictions.find(p => p.time_slot === slot);

        if (ruleData && lstmData) {
            const mainCell = document.getElementById(`prediction-${slot}-main`);
            const auxCell = document.getElementById(`prediction-${slot}-aux`);
            if (mainCell) {
                mainCell.textContent = `${ruleData.demand_index} (${ruleData.confidence}%)`;
            }
            if (auxCell) {
                auxCell.textContent = `${lstmData.demand_index} (${lstmData.confidence}%)`;
            }

            mainData.push(ruleData.demand_index);
            auxData.push(lstmData.demand_index);
        } else {
            mainData.push(0);
            auxData.push(0);
        }
    });

    if (predictionChart) {
        predictionChart.data.datasets[0].data = mainData;
        predictionChart.data.datasets[1].data = auxData;
        predictionChart.update();
    }
}

function updateUsageChart() {
    if (!usageChart || isResetting) return;

    const effectiveScheme = getEffectiveScheme();
    const parkingPoints = effectiveScheme === 'smart'
        ? smartMarkers
        : (effectiveScheme === 'manual' ? manualMarkers : []);

    const zones = {
        dorm: [30.5310, 114.3545],
        teaching: [30.5288, 114.3557],
        canteen: [30.5307, 114.3537],
        library: [30.5314, 114.3556],
        south_gate: [30.5270, 114.3558],
        playground: [30.5295, 114.3530],
        info_south: [30.5275, 114.3550],
        info_west: [30.5270, 114.3570],
        info_east: [30.5280, 114.3535]
    };

    const rules = {
        morning: {
            dorm: 1.0,
            teaching: -0.8,
            canteen: -0.2,
            library: -0.3,
            south_gate: 0.0,
            playground: -0.1,
            info_south: -0.5,
            info_west: -0.4,
            info_east: -0.3
        },
        noon: {
            dorm: -0.3,
            teaching: 0.5,
            canteen: -0.7,
            library: 0.2,
            south_gate: 0.0,
            playground: 0.1,
            info_south: 0.3,
            info_west: 0.2,
            info_east: 0.1
        },
        evening: {
            dorm: -0.9,
            teaching: 0.6,
            canteen: 0.2,
            library: 0.1,
            south_gate: 0.0,
            playground: 0.3,
            info_south: 0.4,
            info_west: 0.3,
            info_east: 0.2
        }
    };

    if (parkingPoints.length === 0) {
        const defaultActual = initialUsageData?.actual || [65, 45, 80];
        const defaultPredicted = initialUsageData?.predicted || [75, 55, 90];
        usageChart.data.datasets[0].data = defaultActual;
        usageChart.data.datasets[1].data = defaultPredicted;
        usageChart.update();
        return;
    }

    const timeSlots = ['morning', 'noon', 'evening'];
    const actualUsage = [];
    const predictedDemand = [];

    timeSlots.forEach(timeSlot => {
        const rule = rules[timeSlot];
        let totalCurrent = 0;
        let totalDemand = 0;

        parkingPoints.forEach(marker => {
            let totalWeight = 0;
            let netFlow = 0;

            for (const [zoneName, zoneCenter] of Object.entries(zones)) {
                const [zoneLat, zoneLng] = zoneCenter;
                const markerPos = getMarkerPositionBD09(marker);
                if (!markerPos) {
                    continue;
                }

                let distance = Math.hypot(markerPos.lng - zoneLng, markerPos.lat - zoneLat) * 111000;
                if (distance < 1) {
                    distance = 1;
                }

                const weight = 1.0 / distance;
                totalWeight += weight;
                netFlow += weight * (rule[zoneName] || 0);
            }

            if (totalWeight > 0) {
                netFlow = netFlow / totalWeight;
            }

            const amount = Math.abs(Math.round(netFlow * 100));
            const type = netFlow > 0 ? 1 : -1;
            const baseCurrent = 15;

            let timeSlotMultiplier = 1;
            if (timeSlot === 'morning') timeSlotMultiplier = 0.9;
            else if (timeSlot === 'noon') timeSlotMultiplier = 0.8;
            else if (timeSlot === 'evening') timeSlotMultiplier = 1.2;

            let current;
            let demand;
            if (timeSlot === 'morning') {
                if (type === 1) {
                    current = Math.floor(baseCurrent + (amount * 0.7 * timeSlotMultiplier));
                    demand = Math.floor(baseCurrent + (amount * 0.3 * timeSlotMultiplier));
                } else {
                    current = Math.floor(baseCurrent - (amount * 0.1 * timeSlotMultiplier));
                    demand = Math.floor(baseCurrent + (amount * 0.4 * timeSlotMultiplier));
                }
            } else if (timeSlot === 'evening') {
                if (type === 1) {
                    current = Math.floor(baseCurrent + (amount * 0.5 * timeSlotMultiplier));
                    demand = Math.floor(baseCurrent + (amount * 0.5 * timeSlotMultiplier));
                } else {
                    current = Math.floor(baseCurrent - (amount * 0.3 * timeSlotMultiplier));
                    demand = Math.floor(baseCurrent + (amount * 0.8 * timeSlotMultiplier));
                }
            } else {
                if (type === 1) {
                    current = Math.floor(baseCurrent + (amount * 0.6 * timeSlotMultiplier));
                    demand = Math.floor(baseCurrent + (amount * 0.2 * timeSlotMultiplier));
                } else {
                    current = Math.floor(baseCurrent - (amount * 0.2 * timeSlotMultiplier));
                    demand = Math.floor(baseCurrent + (amount * 0.6 * timeSlotMultiplier));
                }
            }

            const currentValue = Math.max(0, Math.min(40, current));
            const demandValue = Math.max(0, Math.min(40, demand));
            totalCurrent += currentValue;
            totalDemand += demandValue;
        });

        actualUsage.push(totalCurrent);
        predictedDemand.push(totalDemand);
    });

    usageChart.data.datasets[0].data = actualUsage;
    usageChart.data.datasets[1].data = predictedDemand;
    usageChart.update();
}

function initCharts() {
    if (chartsInitialized) {
        return;
    }

    const usageChartElement = document.getElementById('usageChart');
    if (usageChartElement && !usageChart && typeof Chart !== 'undefined') {
        const usageCtx = usageChartElement.getContext('2d');
        usageChart = new Chart(usageCtx, {
            type: 'bar',
            data: {
                labels: ['早高峰', '午高峰', '晚高峰'],
                datasets: [
                    {
                        label: '实际使用量',
                        data: [65, 45, 80],
                        backgroundColor: 'rgba(26, 115, 232, 0.6)',
                        borderColor: 'rgba(26, 115, 232, 1)',
                        borderWidth: 1
                    },
                    {
                        label: '预测需求',
                        data: [75, 55, 90],
                        backgroundColor: 'rgba(234, 67, 53, 0.6)',
                        borderColor: 'rgba(234, 67, 53, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '数量（辆）'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + ' 辆';
                            }
                        }
                    }
                }
            }
        });
    }

    const predictionChartElement = document.getElementById('predictionChart');
    if (predictionChartElement && !predictionChart && typeof Chart !== 'undefined') {
        const predictionCtx = predictionChartElement.getContext('2d');
        predictionChart = new Chart(predictionCtx, {
            type: 'bar',
            data: {
                labels: ['早高峰', '午高峰', '晚高峰'],
                datasets: [
                    {
                        label: '规则+权重模型（主系统）',
                        data: [0, 0, 0],
                        backgroundColor: 'rgba(255, 152, 0, 0.6)',
                        borderColor: 'rgba(255, 152, 0, 1)',
                        borderWidth: 1
                    },
                    {
                        label: '统计学模拟推演（辅助）',
                        data: [0, 0, 0],
                        backgroundColor: 'rgba(76, 175, 80, 0.6)',
                        borderColor: 'rgba(76, 175, 80, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.raw + ' (需求指数)';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '需求指数'
                        }
                    }
                }
            }
        });
    }

    if (usageChart) {
        initialUsageData = {
            actual: [...usageChart.data.datasets[0].data],
            predicted: [...usageChart.data.datasets[1].data]
        };
    }

    chartsInitialized = true;
    loadDemandPrediction();
}







// 统一更新“方案状态”显示，避免用户切换“切换时常重新选址常


function updateSchemeStatusDisplay() {



    const smartEl = document.getElementById('scheme-smart-status');



    const manualEl = document.getElementById('scheme-manual-status');



    const dispatchEl = document.getElementById('scheme-dispatch-status');







    if (smartEl) {



        smartEl.textContent = smartMarkers.length > 0



            ? ('已生成（' + smartMarkers.length + '点）')



            : '未生成（0点）';



    }







    if (manualEl) {



        manualEl.textContent = manualMarkers.length > 0



            ? ('已编辑（' + manualMarkers.length + '点）')



            : '未编辑（0点）';



    }







    if (dispatchEl) {



        dispatchEl.textContent = currentDispatchScheme || '待选择';



    }



}

// 当用户选择方案时更新标记显示
function updateSelectedScheme() {
    // ⭐关键修复！如果正在显示调度结果，就不要显示旧标记！
    if (window.isDispatchingActive) {
        console.log('调度模式激活，跳过旧标记显示');
        return;
    }

    const selectEl = document.getElementById('selected-scheme');
    if (!selectEl) return;

    const newScheme = selectEl.value;
    selectedScheme = newScheme;

    // 根据方案显示相应的标记和覆盖范围
    const effectiveScheme = getEffectiveScheme();

    console.log('更新方案显示:', effectiveScheme, '智能标记数:', smartMarkers.length, '人工标记数:', manualMarkers.length);

    // 只显示当前方案需要的标记，不要隐藏任何标记
    // 标记的显示/隐藏只由图层控制和清除功能决定

    // 显示智能方案的标记（如果当前方案是智能方案）
    if (effectiveScheme === 'smart' && smartMarkers.length > 0) {
        smartMarkers.forEach(item => {
            if (item.marker) {
                console.log('显示智能标记');
                try {
                    // 如果标记不在地图上，就添加，并且重新绑定事件
                    if (!item.marker._isOnMap) {
                        map.addOverlay(item.marker);
                        item.marker._isOnMap = true;
                        
                        // 确保坐标位置正确
                        if (item.lat && item.lng) {
                            const point = new BMap.Point(item.lng, item.lat);
                            item.marker.setPosition(point);
                        }
                    }
                    // 确保点击事件绑定正确（使用闭包）
                    const savedInfoWindow = item.infoWindow;
                    const savedMarker = item.marker;
                    item.marker.addEventListener('click', function() {
                        console.log('智能标记被点击!');
                        map.openInfoWindow(savedInfoWindow, savedMarker.getPosition());
                    });
                } catch (e) {
                    console.warn('显示智能标记失败:', e);
                }
            }
        });
        smartCircles.forEach(circle => {
            try {
                if (!circle._isOnMap) {
                    map.addOverlay(circle);
                    circle._isOnMap = true;
                }
            } catch (e) {
                console.warn('显示智能圆失败:', e);
            }
        });
    }

    // 显示人工方案的标记（如果当前方案是人工方案）
    if (effectiveScheme === 'manual' && manualMarkers.length > 0) {
        manualMarkers.forEach(item => {
            if (item.marker) {
                console.log('显示人工标记');
                try {
                    if (!item.marker._isOnMap) {
                        map.addOverlay(item.marker);
                        item.marker._isOnMap = true;
                        
                        // 确保坐标位置正确
                        if (item.lat && item.lng) {
                            const point = new BMap.Point(item.lng, item.lat);
                            item.marker.setPosition(point);
                        }
                    }
                    // 确保点击事件绑定正确（使用闭包）
                    const savedInfoWindow = item.infoWindow;
                    const savedMarker = item.marker;
                    item.marker.addEventListener('click', function() {
                        console.log('人工标记被点击!');
                        map.openInfoWindow(savedInfoWindow, savedMarker.getPosition());
                    });
                } catch (e) {
                    console.warn('显示人工标记失败:', e);
                }
            }
        });
        manualCircles.forEach(circle => {
            try {
                if (!circle._isOnMap) {
                    map.addOverlay(circle);
                    circle._isOnMap = true;
                }
            } catch (e) {
                console.warn('显示人工圆失败:', e);
            }
        });
    }
    // 重要：不要在这里添加 else 分支来隐藏标记！
    // 标记的隐藏只由图层控制和清除功能决定，不要因为方案切换隐藏标记

    // 更新核心指标
    updateCoreMetrics();
}






// 运行动态氃常


async function runDispatch() {
    console.log('=== 运行调度 ===');

    // 只有管理员可以运行调度优化
    if (currentUserRole !== 'admin') {
        showToast('只有管理员可以运行调度优化');
        return;
    }

    const timeSlot = document.getElementById('dispatch-time')?.value || 'morning';
    const hasSmartPoints = smartMarkers.length > 0;
    const hasManualPoints = manualMarkers.length > 0;
    
    console.log('[DEBUG runDispatch] smartMarkers.length:', smartMarkers.length);
    console.log('[DEBUG runDispatch] manualMarkers.length:', manualMarkers.length);
    console.log('[DEBUG runDispatch] hasSmartPoints:', hasSmartPoints);
    console.log('[DEBUG runDispatch] hasManualPoints:', hasManualPoints);
    
    // 直接检查是否有任何选址点
    if (!hasSmartPoints && !hasManualPoints) {
        console.log('[DEBUG runDispatch] No parking points found, showing toast');
        showToast('请先运行智能选址或添加人工选址点');
        return;
    }

    let dispatchScheme = selectedScheme || 'auto';
    console.log('[DEBUG runDispatch] selectedScheme:', selectedScheme);
    console.log('[DEBUG runDispatch] initial dispatchScheme:', dispatchScheme);

    if (dispatchScheme === 'auto') {
        dispatchScheme = hasSmartPoints ? 'smart' : (hasManualPoints ? 'manual' : 'none');
        console.log('[DEBUG runDispatch] after auto selection dispatchScheme:', dispatchScheme);
        if (dispatchScheme === 'none') {
            currentDispatchScheme = '待选择';
            updateSchemeStatusDisplay();
            showToast('请先运行智能选址或添加人工选址点');
            return;
        }
        currentDispatchScheme = `自动选择（推荐${dispatchScheme === 'smart' ? '智能选址' : '人工选址'}）`;
    } else if (dispatchScheme === 'smart') {
        dispatchScheme = hasSmartPoints ? 'smart' : (hasManualPoints ? 'manual' : 'none');
        console.log('[DEBUG runDispatch] after smart selection dispatchScheme:', dispatchScheme);
        if (dispatchScheme === 'none') {
            currentDispatchScheme = '待选择';
            updateSchemeStatusDisplay();
            showToast('请先运行智能选址或添加人工选址点');
            return;
        }
        currentDispatchScheme = dispatchScheme === 'smart' ? '智能选址' : '人工选址（智能方案不可用）';
    } else {
        dispatchScheme = hasManualPoints ? 'manual' : (hasSmartPoints ? 'smart' : 'none');
        console.log('[DEBUG runDispatch] after manual selection dispatchScheme:', dispatchScheme);
        if (dispatchScheme === 'none') {
            currentDispatchScheme = '待选择';
            updateSchemeStatusDisplay();
            showToast('请先运行智能选址或添加人工选址点');
            return;
        }
        currentDispatchScheme = dispatchScheme === 'manual' ? '人工选址' : '智能选址（人工方案不可用）';
    }

    updateSchemeStatusDisplay();

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs.forEach(tab => {
        const tabTime = tab.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        if (tabTime === timeSlot) {
            tab.classList.add('active');
        }
    });

    // 使用回调机制，确保数据准备好后再执行调度
    generateSupplyDemandTable(timeSlot, dispatchScheme, function(parkingData) {
        console.log('=== 供需数据已准备好，开始调度 ===');

        const parkingPoints = [];
        if (Array.isArray(parkingData)) {
            parkingData.forEach((parking, index) => {
                const transferValue = Number(parking.transfer) || 0;
                const currentValue = Number(parking.current) || 0;
                const demandValue = Number(parking.demand) || 0;
                if (!Number.isFinite(transferValue) || !Number.isFinite(currentValue) || !Number.isFinite(demandValue)) {
                    return;
                }
                parkingPoints.push({
                    id: `${dispatchScheme}-${Date.now()}-${index}`,
                    lat: parking.lat,
                    lng: parking.lng,
                    type: dispatchScheme,
                    amount: Math.abs(transferValue),
                    demand_type: transferValue > 0 ? 1 : -1,
                    transfer: transferValue,
                    current: currentValue,
                    demand: demandValue,
                    name: parking.name
                });
            });
        }
        console.log('传递给后端的停车点数量:', parkingPoints.length);
        console.log('传递给后端的停车点:', parkingPoints);

        if (parkingPoints.length === 0) {
            clearDispatch();
            latestDispatchResult = null;
            showToast('当前方案下没有停车点');
            return;
        }

        showProgress('正在运行动态调度算法...');

        fetch(API_BASE + 'optimize-dispatch', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                time_slot: timeSlot,
                parking_points: parkingPoints,
                role: currentUserRole,
                dispatcher_count: 2
            })
        })
        .then(response => {
            return response.json().then(data => ({ ok: response.ok, data }));
        })
        .then(({ ok, data: dispatch }) => {
            if (!ok) {
                throw new Error(dispatch?.error || '调度接口返回失败');
            }

            if (!dispatch || !dispatch.geojson || !Array.isArray(dispatch.geojson.features)) {
                throw new Error('后端返回的调度数据格式不正确');
            }

            latestDispatchResult = dispatch.geojson;

            if (currentUserRole === 'dispatcher') {
                const dispatcherRoutes = getDispatcherRoutes();
                if (dispatcherRoutes.length > 0) {
                    const filteredFeatures = latestDispatchResult.features.filter(feature => {
                        if (feature.geometry && feature.geometry.type === 'LineString') {
                            const vehicleId = feature.properties?.vehicle_id;
                            return dispatcherRoutes.some(route => route.vehicle_id === vehicleId);
                        }
                        if (feature.geometry && feature.geometry.type === 'Point') {
                            const vehicleId = feature.properties?.vehicle_id;
                            return dispatcherRoutes.some(route => route.vehicle_id === vehicleId);
                        }
                        return false;
                    });

                    const filteredGeojson = {
                        type: 'FeatureCollection',
                        features: filteredFeatures
                    };

                    renderDispatch(filteredGeojson);
                    updateDispatchSummaryFromResult({ geojson: filteredGeojson, metrics: dispatch.metrics });
                    showToast(`已显示分配给您的 ${filteredFeatures.length} 条路线`);
                } else {
                    clearDispatch();
                    showToast('您还没有被分配调度路线');
                }
            } else {
                renderDispatch(dispatch.geojson);
                updateDispatchSummaryFromResult(dispatch);
                setDispatchAssignmentStatus('调度优化完成，请点击"提交分配"下发路线。', true);
                showToast('调度优化完成');
                // 更新系统概览数据
                updateSystemStatus();
            }
        })
        .catch(error => {
            console.error('调度优化失败:', error);
            setDispatchAssignmentStatus(`调度优化失败：${error.message || '未知错误'}`, false);
            showToast(`调度优化失败：${error.message || '未知错误'}`);
        })
        .finally(() => {
            hideProgress();
            const layerDispatch = document.getElementById('layer-dispatch');
            if (layerDispatch) {
                layerDispatch.checked = true;
            }
        });
    });
}







// 生成调度路线



function generateDispatchRoutes(parkingPoints, timeSlot) {



    if (!parkingPoints || parkingPoints.length === 0) {



        return { type: "FeatureCollection", features: [] };



    }



    



    // 分离供应点和需求点



    const supplyPoints = parkingPoints.filter(p => p.demand_type === -1); // 供应



    const demandPoints = parkingPoints.filter(p => p.demand_type === 1);  // 需常






    console.log('供应点数常', supplyPoints.length, supplyPoints);



    console.log('需求点数量:', demandPoints.length, demandPoints);



    



    // 如果没有供应点，添加一个默认供应点（校园中心点常


    if (supplyPoints.length === 0) {



        console.log('没有供应点，添加默认供应常');



        supplyPoints.push({

            id: 'default_supply',

            lat: 30.5330,

            lng: 114.3650,

            name: '默认供应点',

            demand_type: -1,

            transfer: -50 // 假设50辆可供应

        });



    }



    



    // 如果没有需求点，添加一个默认需求点



    if (demandPoints.length === 0) {



        console.log('没有需求点，添加默认需求点');



        demandPoints.push({

            id: 'default_demand',

            lat: 30.5310,

            lng: 114.3670,

            name: '默认需求点',

            demand_type: 1,

            transfer: 10 // 假设需要10辆

        });



    }



    



    const features = [];



    let routeId = 1;



    



    // 为每个需求点找到最近的供应点，确保所有需求点都被覆盖

    const demandPointsCopy = [...demandPoints];

    demandPointsCopy.forEach(demandPoint => {



        let closestSupply = null;



        let minDistance = Infinity;



        



        supplyPoints.forEach(supplyPoint => {



            const distance = Math.hypot(



                demandPoint.lng - supplyPoint.lng,



                demandPoint.lat - supplyPoint.lat



            ) * 111000; // 转换为米



            



            if (distance < minDistance) {



                minDistance = distance;



                closestSupply = supplyPoint;



            }



        });



        



        if (closestSupply) {



            // 创建路线



            const route = {



                type: "Feature",



                geometry: {



                    type: "LineString",



                    coordinates: [



                        [closestSupply.lng, closestSupply.lat],



                        [demandPoint.lng, demandPoint.lat]



                    ]



                },



                properties: {

                    id: "route" + routeId++,

                    vehicle_id: "vehicle_" + Math.ceil(routeId / 3), // 每3条路线分配一辆车

                    from: closestSupply.name,

                    to: demandPoint.name,

                    total_transfer: Math.min(Math.abs(closestSupply.transfer), Math.abs(demandPoint.transfer)),

                    total_distance: Math.round(minDistance)

                }



            };







            // 尝试使用百度地图API获取实际道路路线



            try {



                console.log('开始调用百度地图API获取路线:', closestSupply, demandPoint);



                const drivingRoute = new BMap.DrivingRoute(map, {



                    onSearchComplete: function(results) {



                        console.log('百度地图API返回结果:', results);



                        if (drivingRoute.getStatus() === BMAP_STATUS_SUCCESS) {



                            console.log('百度地图API调用成功');



                            const plan = results.getPlan(0);



                            if (plan) {



                                console.log('获取到路线规划:', plan);



                                const path = [];



                                for (let i = 0; i < plan.getNumRoutes(); i++) {



                                    const bmapRoute = plan.getRoute(i);



                                    console.log('路线', i, ':', bmapRoute);



                                    for (let j = 0; j < bmapRoute.getNumSteps(); j++) {



                                        const step = bmapRoute.getStep(j);



                                        const points = step.getPolyline().getPath();



                                        console.log('步骤', j, '点数:', points.length);



                                        for (let k = 0; k < points.length; k++) {



                                            path.push([points[k].lng, points[k].lat]);



                                        }



                                    }



                                }



                                console.log('计算得到的路径点数量:', path.length);



                                if (path.length > 0) {



                                    console.log('更新路线坐标:', path);



                                    route.geometry.coordinates = path;



                                    // 更新地图上的路线



                                    if (typeof updateRouteOnMap === 'function') {



                                        console.log('调用updateRouteOnMap更新路线');



                                        updateRouteOnMap(route);



                                    } else {



                                        console.warn('updateRouteOnMap函数不存在');



                                    }



                                } else {



                                    console.warn('路径点数量为0');



                                }



                            } else {



                                console.warn('未获取到路线规划');



                            }



                        } else {



                            console.warn('百度地图API调用失败，状态码:', drivingRoute.getStatus());



                        }



                    }



                });



                // 确保坐标使用BD09坐标系
                console.log('原始坐标 - 起点:', closestSupply.lng, closestSupply.lat, '终点:', demandPoint.lng, demandPoint.lat);
                const startCoord = normalizeBikeToBd09(closestSupply.lng, closestSupply.lat);
                const endCoord = normalizeBikeToBd09(demandPoint.lng, demandPoint.lat);
                console.log('转换后坐标 - 起点:', startCoord, '终点:', endCoord);
                
                if (startCoord && endCoord) {
                    const start = new BMap.Point(startCoord.lng, startCoord.lat);
                    const end = new BMap.Point(endCoord.lng, endCoord.lat);
                    console.log('调用百度地图API搜索路线:', start, end);
                    drivingRoute.search(start, end);
                } else {
                    console.warn('坐标转换失败，使用直线路线');
                }



            } catch (error) {



                console.warn('使用百度地图API获取路线失败:', error);



                // 如果API调用失败，使用直线路线



            }



            features.push(route);



            



            // 减少供应点的数量



            closestSupply.transfer += route.properties.total_transfer; // 供应点减少（因为transfer是负数）



            if (closestSupply.transfer >= 0) { // 供应耗尽

                const supplyIndex = supplyPoints.findIndex(s => s.id === closestSupply.id || s.name === closestSupply.name);

                if (supplyIndex >= 0) {

                    supplyPoints.splice(supplyIndex, 1);

                }

            }



            



            // 减少需求点的数量

            demandPoint.transfer -= route.properties.total_transfer; // 需求点减少



        }



    });



    



    return {



        type: "FeatureCollection",



        features: features



    };



}



// 路线颜色数组
const ROUTE_COLORS = [
    '#1a73e8', // 蓝色
    '#34a853', // 绿色
    '#fbbc05', // 黄色
    '#ea4335', // 红色
    '#9c27b0', // 紫色
    '#00bcd4', // 青色
    '#ff9800', // 橙色
    '#795548'  // 棕色
];

// 更新地图上的路线



function updateRouteOnMap(route) {



    if (!map || !route || !route.geometry || !route.geometry.coordinates) return;



    // 清除旧的路线



    dispatchLines = dispatchLines.filter(line => {



        if (line.routeId === route.properties.id) {



            map.removeOverlay(line);



            return false;



        }



        return true;



    });



    // 绘制新的路线



    const coordinates = route.geometry.coordinates;



    if (coordinates.length < 2) return;



    const points = coordinates.map(coord => {



        return new BMap.Point(coord[0], coord[1]);



    });



    // 使用完整路线渲染



    const vehicleIdNum = Number(route.properties.vehicle_id?.replace(/\D/g, '')) || 0;



    const colorIndex = vehicleIdNum % ROUTE_COLORS.length;



    const color = ROUTE_COLORS[colorIndex];



    const polyline = new BMap.Polyline(points, {



        strokeColor: color,



        strokeWeight: 4,



        strokeOpacity: 0.85,



        strokeStyle: 'solid',



        zIndex: 9999 // 设置较高的zIndex，确保在选址范围之上



    });



    polyline.routeId = route.properties.id;



    polyline.routeColor = color;



    polyline.routeIndex = Number(route.properties.id?.replace(/\D/g, '')) || 0;



    polyline.vehicleId = route.properties.vehicle_id;



    map.addOverlay(polyline);



    dispatchLines.push(polyline);



}







// 渲染调度路线



function renderDispatch(geoJson) {

    console.log('====== 进入 renderDispatch 函数 ======');
    console.log('接收到的 geoJson 数据:', geoJson);
    
    // 保存当前调度路线数据
    window.currentDispatchGeoJson = geoJson;

    // 清除旧的调度路线
    dispatchLines.forEach(line => map.removeOverlay(line));
    dispatchMarkers.forEach(marker => map.removeOverlay(marker));
    dispatchLines = [];
    dispatchMarkers = [];
    activeDispatchRouteIndex = null;
    if (window.currentInfoWindow && map) {
        map.closeInfoWindow(window.currentInfoWindow);
        window.currentInfoWindow = null;
    }
    
    // ⭐关键修复！隐藏所有旧的智能选址和人工选址标记，只显示调度标记！
    console.log('隐藏旧的智能和人工标记！');
    smartMarkers.forEach(item => {
        if (item.marker && item.marker._isOnMap) {
            try {
                map.removeOverlay(item.marker);
                item.marker._isOnMap = false;
            } catch (e) {}
        }
    });
    smartCircles.forEach(circle => {
        if (circle._isOnMap) {
            try {
                map.removeOverlay(circle);
                circle._isOnMap = false;
            } catch (e) {}
        }
    });
    manualMarkers.forEach(item => {
        if (item.marker && item.marker._isOnMap) {
            try {
                map.removeOverlay(item.marker);
                item.marker._isOnMap = false;
            } catch (e) {}
        }
    });
    manualCircles.forEach(circle => {
        if (circle._isOnMap) {
            try {
                map.removeOverlay(circle);
                circle._isOnMap = false;
            } catch (e) {}
        }
    });



    // 按调度车编号分配颜色



    if (!geoJson || !geoJson.features) {



        return;

    }



    // 分离LineString和Point要素，LineString是路线，Point是起终点标记
    const lineFeatures = geoJson.features.filter(f => f.geometry && f.geometry.type === 'LineString');
    const pointFeatures = geoJson.features.filter(f => f.geometry && f.geometry.type === 'Point');
    
    // 调试信息
    console.log('=== 渲染调度结果 ===');
    console.log('路线数量:', lineFeatures.length);
    console.log('选址点标记数量:', pointFeatures.length);
    console.log('选址点数据:', pointFeatures);

    // 首先渲染所有路线
    lineFeatures.forEach((feature, routeIndex) => {

        console.log('====== 处理路线', routeIndex, '======');
        console.log('路线 feature:', feature);

        if (!feature.geometry || !feature.geometry.coordinates) {
            console.log('路线', routeIndex, '缺少 geometry 或 coordinates');
            return;
        }

        const coordinates = feature.geometry.coordinates;
        console.log('路线', routeIndex, 'coordinates 数量:', coordinates.length);
        console.log('路线', routeIndex, 'coordinates:', coordinates);

        if (coordinates.length < 2) {
            console.log('路线', routeIndex, 'coordinates 不足 2 个点，跳过');
            return;
        }

        const vehicleIdRaw = feature.properties?.vehicle_id;
        const vehicleIdNum = parseInt(String(vehicleIdRaw || '').replace(/\D/g, ''), 10);
        const vehicleColorIndex = Number.isFinite(vehicleIdNum) && vehicleIdNum > 0 ? vehicleIdNum - 1 : routeIndex;
        const color = DISPATCH_COLORS[vehicleColorIndex % DISPATCH_COLORS.length];

        console.log('路线', routeIndex, '颜色:', color);

        // 检查是否有路段信息（segment_road_coords）
        const segmentRoadCoords = feature.properties?.segment_road_coords || [];

        if (segmentRoadCoords.length > 0) {
            // 如果有路段信息，为每个路段创建单独的polyline，这样可以点击查看每段信息
            console.log('路线', routeIndex, '使用分段渲染，段数:', segmentRoadCoords.length);
            
            segmentRoadCoords.forEach((segmentCoords, segmentIndex) => {
                if (!segmentCoords || segmentCoords.length < 2) return;

                // 转换坐标系：确保使用BD09格式
                const points = segmentCoords.map(coord => {
                    const normalized = normalizeBikeToBd09(coord[0], coord[1]);
                    return normalized ? new BMap.Point(normalized.lng, normalized.lat) : null;
                }).filter(Boolean);
                
                if (points.length < 2) return;

                // 转换为用于箭头计算的点格式
                const routePointsForArrows = segmentCoords.map(coord => {
                    const normalized = normalizeBikeToBd09(coord[0], coord[1]);
                    return normalized;
                }).filter(Boolean);

                // 创建箭头符号
                const arrowSymbol = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {
                    scale: 0.8,
                    strokeWeight: 1,
                    strokeColor: color,
                    fillColor: color,
                    fillOpacity: 0.9
                });

                // 创建折线
                const polyline = new BMap.Polyline(points, {
                    strokeColor: color,
                    strokeWeight: 5,
                    strokeOpacity: 0.8,
                    zIndex: 99999 // 设置非常高的zIndex，确保在所有图层之上
                });

                // 存储路线颜色和索引用于后续高亮
                polyline.routeColor = color;
                polyline.routeIndex = routeIndex;
                polyline.vehicleId = feature.properties?.vehicle_id || routeIndex + 1;
                polyline.routeId = feature.properties?.id;
                polyline.feature = feature;
                polyline.segmentIndex = segmentIndex;
                
                // 直接使用后端返回的路线数据，与换电路线的处理方式一致
                // 这样可以确保调度路线也能按照路网走
                console.log('使用后端返回的路线数据，段点数量:', segmentCoords.length);
                console.log('为分段路线添加点击事件监听器:', { routeIndex, segmentIndex });
                // 确保事件监听器正确绑定
                polyline.addEventListener('click', function (e) {
                    console.log('分段路线点击事件触发:', e);
                    console.log('路线索引:', routeIndex, '路段索引:', segmentIndex);
                    console.log('当前路线对象:', this);
                    // 确保feature对象存在
                    if (feature) {
                        console.log('Feature对象存在，调用highlightRouteSegment');
                        highlightRouteSegment(routeIndex, feature, segmentIndex);
                    } else {
                        console.log('Feature对象不存在，无法调用highlightRouteSegment');
                    }
                });

                map.addOverlay(polyline);
                dispatchLines.push(polyline);
            });
        } else {
            // 如果没有路段信息，创建单一的polyline表示整条路线
            console.log('路线', routeIndex, '使用完整路线渲染');
            
            const points = coordinates.map(coord => {
                const normalized = normalizeBikeToBd09(coord[0], coord[1]);
                return normalized ? new BMap.Point(normalized.lng, normalized.lat) : null;
            }).filter(Boolean);
            
            if (points.length < 2) return;

            // 转换为用于箭头计算的点格式
            const routePointsForArrows = coordinates.map(coord => {
                const normalized = normalizeBikeToBd09(coord[0], coord[1]);
                return normalized;
            }).filter(Boolean);

            // 创建箭头符号
            const arrowSymbol = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {
                scale: 0.8,
                strokeWeight: 1,
                strokeColor: color,
                fillColor: color,
                fillOpacity: 0.9
            });

            // 创建折线并添加箭头装饰（每个路段只在中间添加一个箭头）
            const polyline = new BMap.Polyline(points, {
                strokeColor: color,
                strokeWeight: 5,
                strokeOpacity: 0.8,
                zIndex: 99999, // 设置非常高的zIndex，确保在所有图层之上
                icons: [
                    {
                        icon: arrowSymbol,
                        offset: '50%',
                        repeat: 0
                    }
                ]
            });

            polyline.routeColor = color;
            polyline.routeIndex = routeIndex;
            polyline.vehicleId = feature.properties?.vehicle_id || routeIndex + 1;
            polyline.routeId = feature.properties?.id;
            polyline.feature = feature;
            polyline.segmentIndex = undefined;
            
            // 直接使用后端返回的路线数据，与换电路线的处理方式一致
            // 这样可以确保调度路线也能按照路网走
            console.log('使用后端返回的路线数据，点数量:', feature.geometry.coordinates.length);
            console.log('为完整路线添加点击事件监听器:', { routeIndex });
            // 确保事件监听器正确绑定
            polyline.addEventListener('click', function (e) {
                console.log('完整路线点击事件触发:', e);
                console.log('路线索引:', routeIndex);
                console.log('当前路线对象:', this);
                // 确保feature对象存在
                if (feature) {
                    console.log('Feature对象存在，调用highlightRouteSegment');
                    highlightRouteSegment(routeIndex, feature, undefined);
                } else {
                    console.log('Feature对象不存在，无法调用highlightRouteSegment');
                }
            });

            map.addOverlay(polyline);
            dispatchLines.push(polyline);
        }

    });


    // 渲染起终点标记（通过Point要素）
    console.log('开始渲染选址点标记，共', pointFeatures.length, '个');
    pointFeatures.forEach((feature, pointIndex) => {

        console.log('渲染选址点', pointIndex + 1, ':', feature.properties?.name);
        const [lng, lat] = feature.geometry.coordinates;
        console.log('原始坐标:', [lng, lat]);
        // 转换坐标系：确保使用BD09格式
        const normalized = normalizeBikeToBd09(lng, lat);
        console.log('转换后坐标:', normalized);
        if (!normalized) {
            console.log('坐标转换失败，跳过:', feature.properties?.name);
            return;
        }
        const point = new BMap.Point(normalized.lng, normalized.lat);
        console.log('创建标记位置:', point);
        const typeText = feature.properties?.type_text || '需求';
        const isSupply = typeText === '供应';
        const name = feature.properties?.name || '未知点';
        const transferAmount = feature.properties?.transfer_amount || 0;
        const vehicleId = feature.properties?.vehicle_id || '';
        const routeName = feature.properties?.route_name || '';
        
        console.log('选址点信息:', { name, typeText, vehicleId, routeName, transferAmount });

        // 使用最原始、最简单的方案：直接用 Label 作为标记，这样最稳定！
        const markerLabel = new BMap.Label(isSupply ? '供' : '需', {
            position: point,
            offset: new BMap.Size(-12, -12) // 精确居中对齐
        });
        
        markerLabel.setStyle({
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
            backgroundColor: isSupply ? '#34a853' : '#ea4335',
            border: '2px solid white',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            textAlign: 'center',
            lineHeight: '30px',
            padding: '0',
            cursor: 'pointer',
            zIndex: 1000 + pointIndex // 降低z-index，确保路段在上方
        });
        
        // 保存信息到标签上
        markerLabel.markerInfo = {
            name: name,
            typeText: typeText,
            vehicleId: vehicleId,
            routeName: routeName,
            transferAmount: transferAmount
        };
        
        // 直接给 Label 添加点击事件
        markerLabel.addEventListener('click', function(e) {
            console.log('点击了选址点!', e);
            // 阻止事件冒泡
            if (e && e.stopPropagation) {
                e.stopPropagation();
            }
            
            const info = this.markerInfo;
            const infoContent = `
                <div style="padding:10px;font-size:14px;">
                    <h4 style="margin:0 0 10px 0;color:#333;">选址点信息</h4>
                    <div style="margin:5px 0;"><strong>名称：</strong>${info.name}</div>
                    <div style="margin:5px 0;"><strong>类型：</strong>${info.typeText}</div>
                    <div style="margin:5px 0;"><strong>调度车辆：</strong>${info.vehicleId}</div>
                    <div style="margin:5px 0;"><strong>路线：</strong>${info.routeName}</div>
                    <div style="margin:5px 0;"><strong>转运数量：</strong>${info.transferAmount} 辆</div>
                </div>
            `;
            
            const infoWindow = new BMap.InfoWindow(infoContent, {
                width: 250,
                height: 180,
                title: '选址点详情'
            });
            
            // 在该点打开信息窗口
            map.openInfoWindow(infoWindow, point);
        });
        
        console.log('添加标记到地图:', name);
        map.addOverlay(markerLabel);
        dispatchMarkers.push(markerLabel);
        console.log('标记添加完成:', name);

    });
    console.log('选址点标记渲染完成，共添加', dispatchMarkers.length, '个标记');

    updateDispatchTable(lineFeatures);
    
    // 添加一个测试：遍历所有标记并打印它们的事件监听状态
    dispatchMarkers.forEach((marker, idx) => {
        console.log(`标记 ${idx} 检查:`, marker);
    });
    
    // ⭐修复：重新显示智能和人工选址标记！
    console.log('恢复显示智能和人工选址标记！');
    smartMarkers.forEach(item => {
        if (item.marker && !item.marker._isOnMap) {
            try {
                map.addOverlay(item.marker);
                item.marker._isOnMap = true;
            } catch (e) {}
        }
    });
    smartCircles.forEach(circle => {
        if (!circle._isOnMap) {
            try {
                map.addOverlay(circle);
                circle._isOnMap = true;
            } catch (e) {}
        }
    });
    manualMarkers.forEach(item => {
        if (item.marker && !item.marker._isOnMap) {
            try {
                map.addOverlay(item.marker);
                item.marker._isOnMap = true;
            } catch (e) {}
        }
    });
    manualCircles.forEach(circle => {
        if (!circle._isOnMap) {
            try {
                map.addOverlay(circle);
                circle._isOnMap = true;
            } catch (e) {}
        }
    });
    
    // ⭐修复：重新添加调度路线，确保它们在图层最上方
    console.log('重新添加调度路线到图层最上方！');
    dispatchLines.forEach(line => {
        try {
            map.removeOverlay(line);
            map.addOverlay(line);
        } catch (e) {}
    });
}

// 更新调度表格
function updateDispatchTable(lineFeatures) {
    const tableBody = document.getElementById('dispatch-table-body');
    if (!tableBody) return;

    if (lineFeatures.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" style="color:#999;padding:10px;text-align:center;">请运行调度优化</td></tr>';
        return;
    }

    let html = '';
    let segmentIndex = 1;

    // 遍历每个路线特征
    lineFeatures.forEach((feature, routeIndex) => {
        const vehicleIdRaw = feature.properties?.vehicle_id;
        const vehicleIdMatch = String(vehicleIdRaw ?? '').match(/(\d+)/);
        const vehicleId = vehicleIdMatch ? Number(vehicleIdMatch[1]) : (routeIndex + 1);
        
        // 检查是否有路段信息
        const segmentRoadCoords = feature.properties?.segment_road_coords || [];
        const segmentTransfers = feature.properties?.segment_transfers || [];
        const path = feature.properties?.path || [];
        
        // 如果有路段信息，显示每个路段
        if (segmentRoadCoords.length > 0 && path.length > 1) {
            for (let i = 0; i < segmentRoadCoords.length; i++) {
                const from = path[i] || '未知点';
                const to = path[i + 1] || '未知点';
                const transfer = segmentTransfers[i] || 0;
                
                // 显示所有路段，包括转运数量为0的路段
                // 计算路段距离
                const roadCoords = segmentRoadCoords[i];
                let distance = 0;
                for (let j = 0; j < roadCoords.length - 1; j++) {
                    const p1 = roadCoords[j];
                    const p2 = roadCoords[j + 1];
                    distance += Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)) * 111319;
                }
                
                html += `
                    <tr class="route-row" data-route-index="${routeIndex}" data-segment-index="${i}">
                        <td style="text-align:center;">${vehicleId}</td>
                        <td style="text-align:center;">${segmentIndex}</td>
                        <td style="text-align:center;">${from}</td>
                        <td style="text-align:center;">${to}</td>
                        <td style="text-align:center;">${transfer}</td>
                        <td style="text-align:center;">${(distance / 1000).toFixed(2)} km</td>
                        <td style="text-align:center;">${Math.round(distance / 1000 / 15 * 60)} 分钟</td>
                    </tr>
                `;
                segmentIndex++;
            }
        } else {
            // 如果没有路段信息，显示整条路线
            const load = feature.properties?.total_transfer || feature.properties?.load || 0;
            const from = feature.properties?.from_name || feature.properties?.from || '未知点';
            const to = feature.properties?.to_name || feature.properties?.to || '未知点';
            const distance = feature.properties?.total_distance || feature.properties?.distance || 0;
            
            html += `
                <tr class="route-row" data-route-index="${routeIndex}">
                    <td style="text-align:center;">${vehicleId}</td>
                    <td style="text-align:center;">${segmentIndex}</td>
                    <td style="text-align:center;">${from}</td>
                    <td style="text-align:center;">${to}</td>
                    <td style="text-align:center;">${load}</td>
                    <td style="text-align:center;">${(distance / 1000).toFixed(2)} km</td>
                    <td style="text-align:center;">${Math.round(distance / 1000 / 15 * 60)} 分钟</td>
                </tr>
            `;
            segmentIndex++;
        }
    });

    tableBody.innerHTML = html;

    // 添加点击事件以高亮路线
    document.querySelectorAll('.route-row').forEach(row => {
        row.addEventListener('click', function () {
            const routeIndex = parseInt(this.getAttribute('data-route-index'));
            const segmentIndex = parseInt(this.getAttribute('data-segment-index') || 0);
            highlightRouteSegment(routeIndex, null, segmentIndex);
        });
    });
}

// 高亮路线段并定位，显示路段信息
function resetDispatchRouteHighlight() {
    activeDispatchRouteIndex = null;
    activeSegmentIndex = null;
    dispatchLines.forEach(line => {
        // 只对有这些方法的对象调用，确保是路线对象
        if (line.setStrokeColor && line.setStrokeWeight) {
            line.setStrokeColor(line.routeColor);
            line.setStrokeWeight(5);
        }
    });
    // 删除临时路段高亮折线
    if (tempSegmentLine && map) {
        map.removeOverlay(tempSegmentLine);
        tempSegmentLine = null;
    }
    if (window.currentInfoWindow && map) {
        map.closeInfoWindow(window.currentInfoWindow);
        window.currentInfoWindow = null;
    }
}

function highlightRouteSegment(routeIndex, feature, segmentIndex) {
    console.log('进入 highlightRouteSegment 函数:', { routeIndex, segmentIndex, feature: !!feature });
    
    // 判断是否点击了同一个路段（同一个routeIndex和segmentIndex）
    if (activeDispatchRouteIndex === routeIndex && activeSegmentIndex === segmentIndex) {
        // 点击同一个路段，取消高亮
        console.log('点击同一个路段，取消高亮');
        resetDispatchRouteHighlight();
        return;
    }
    // 对于完整路线（segmentIndex为undefined），如果点击的是同一路线，也取消高亮
    if (activeDispatchRouteIndex === routeIndex && segmentIndex === undefined && activeSegmentIndex === undefined) {
        // 点击同一个完整路线，取消高亮
        console.log('点击同一个完整路线，取消高亮');
        resetDispatchRouteHighlight();
        return;
    }

    // 如果没有传入feature，从dispatchLines中获取
    if (!feature) {
        // 查找对应路线的第一个路段，获取其feature
        console.log('没有传入feature，从dispatchLines中查找');
        for (let i = 0; i < dispatchLines.length; i++) {
            if (dispatchLines[i].routeIndex === routeIndex) {
                feature = dispatchLines[i].feature;
                console.log('找到feature:', !!feature);
                break;
            }
        }
    }
    if (!feature) {
        console.log('没有找到feature，退出函数');
        return;
    }

    // 重置所有路线的高亮状态
    console.log('重置所有路线的高亮状态');
    dispatchLines.forEach((line, index) => {
        if (line.setStrokeColor && line.setStrokeWeight) {
            line.setStrokeColor(line.routeColor);
            line.setStrokeWeight(5);
        }
    });

    // 删除旧的临时路段高亮折线
    if (tempSegmentLine && map) {
        console.log('删除旧的临时路段高亮折线');
        map.removeOverlay(tempSegmentLine);
        tempSegmentLine = null;
    }

    // 关闭当前信息窗口
    if (window.currentInfoWindow && map) {
        console.log('关闭当前信息窗口');
        map.closeInfoWindow(window.currentInfoWindow);
        window.currentInfoWindow = null;
    }

    // 检查是否有路段信息
    const segmentRoadCoords = feature.properties?.segment_road_coords || [];
    console.log('路段信息:', { segmentRoadCoordsLength: segmentRoadCoords.length, segmentIndex });

    if (segmentRoadCoords.length > 0 && segmentIndex !== undefined) {
        // 如果有路段信息，只高亮显示指定的路段
        const roadCoords = segmentRoadCoords[segmentIndex];
        if (roadCoords) {
            console.log('有路段信息，高亮显示指定路段');
            // 转换坐标系：确保使用BD09格式
            const normalizedCoords = roadCoords.map(coord => {
                const normalized = normalizeBikeToBd09(coord[0], coord[1]);
                if (!normalized) {
                    return new BMap.Point(coord[0], coord[1]);
                }
                return new BMap.Point(normalized.lng, normalized.lat);
            });
            
            // 创建临时折线来高亮显示路段
            tempSegmentLine = new BMap.Polyline(
                normalizedCoords,
                {
                    strokeColor: DISPATCH_HIGHLIGHT_COLOR,
                    strokeWeight: 5,
                    strokeOpacity: 0.8,
                    zIndex: 10000 // 设置更高的zIndex，确保高亮路段在最上方
                }
            );
            // 为临时高亮折线添加点击事件，点击时取消高亮
            tempSegmentLine.addEventListener('click', function() {
                console.log('临时高亮折线点击事件触发');
                highlightRouteSegment(routeIndex, feature, segmentIndex);
            });
            console.log('添加临时高亮折线到地图');
            map.addOverlay(tempSegmentLine);

            // 定位到该路段（使用当前缩放级别，避免突然放大或缩小）
            if (roadCoords.length > 0) {
                const startCoord = normalizeBikeToBd09(roadCoords[0][0], roadCoords[0][1]);
                const endCoord = normalizeBikeToBd09(roadCoords[roadCoords.length - 1][0], roadCoords[roadCoords.length - 1][1]);
                
                if (startCoord && endCoord) {
                    const centerPoint = new BMap.Point(
                        (startCoord.lng + endCoord.lng) / 2,
                        (startCoord.lat + endCoord.lat) / 2
                    );
                    console.log('定位到路段中心:', centerPoint);
                    map.panTo(centerPoint);
                }
            }

            // 显示路段信息
            const segmentTransfers = feature.properties?.segment_transfers || [];
            const path = feature.properties?.path || [];
            const transfer = segmentTransfers[segmentIndex] || 0;
            const from = path[segmentIndex] || '未知点';
            const to = path[segmentIndex + 1] || '未知点';

            // 计算路段距离
            let distance = 0;
            for (let j = 0; j < roadCoords.length - 1; j++) {
                const p1 = roadCoords[j];
                const p2 = roadCoords[j + 1];
                distance += Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)) * 111319;
            }

            // 获取起点和终点的类型
            let fromType = '未知';
            let toType = '未知';
            
            // 尝试从原始数据中获取类型信息
            if (feature.properties?.path_types && feature.properties?.path_types.length > segmentIndex + 1) {
                fromType = feature.properties.path_types[segmentIndex] || '未知';
                toType = feature.properties.path_types[segmentIndex + 1] || '未知';
            }
            
            // 创建路段信息对象
            const segmentFeature = {
                properties: {
                    vehicle_id: feature.properties?.vehicle_id || '',
                    from: from,
                    to: to,
                    from_type: fromType,
                    to_type: toType,
                    total_transfer: transfer,
                    total_distance: distance
                }
            };

            console.log('显示路段信息:', segmentFeature);
            showSegmentInfo(segmentFeature, segmentIndex + 1);
        }
    } else {
        // 如果没有路段信息，高亮显示整条路线
        console.log('没有路段信息，高亮显示整条路线');
        // 查找所有属于该路线的路段
        const routeLines = dispatchLines.filter(line => line.routeIndex === routeIndex);
        if (routeLines.length > 0) {
            // 高亮显示所有属于该路线的路段
            routeLines.forEach(line => {
                if (line.setStrokeColor && line.setStrokeWeight) {
                    console.log('设置路线高亮颜色:', DISPATCH_HIGHLIGHT_COLOR);
                    line.setStrokeColor(DISPATCH_HIGHLIGHT_COLOR);
                    line.setStrokeWeight(5);
                }
                // 为路段添加点击事件监听器，以便取消高亮
                line.addEventListener('click', function() {
                    console.log('路段点击事件触发，取消高亮');
                    resetDispatchRouteHighlight();
                });
            });
            // 定位到该路线（使用当前缩放级别，避免突然放大或缩小）
            const firstLine = routeLines[0];
            if (firstLine && firstLine.getPath) {
                const points = firstLine.getPath();
                if (points.length > 0) {
                    const centerPoint = points[Math.floor(points.length / 2)];
                    console.log('定位到路线中心:', centerPoint);
                    map.panTo(centerPoint);
                }
            }
            // 显示路段信息
            console.log('显示整条路线信息:', feature);
            showSegmentInfo(feature, routeIndex + 1);
        } else {
            console.log('没有找到该路线的路段，无法高亮');
        }
    }

    // 更新当前高亮状态
    console.log('更新当前高亮状态:', { routeIndex, segmentIndex });
    activeDispatchRouteIndex = routeIndex;
    activeSegmentIndex = segmentIndex;
}

// 显示路段信息（弹窗）
function showSegmentInfo(feature, segmentIndex) {
    // 提取信息
    const vehicleIdRaw = feature.properties?.vehicle_id ?? feature.properties?.vehicle_name ?? '';
    const vehicleIdMatch = String(vehicleIdRaw).match(/(\d+)/);
    const vehicleId = vehicleIdMatch ? Number(vehicleIdMatch[1]) : '未知';
    const load = feature.properties?.total_transfer || feature.properties?.load || 0;
    const from = feature.properties?.from_name || feature.properties?.from || '未知点';
    const to = feature.properties?.to_name || feature.properties?.to || '未知点';
    const distance = feature.properties?.total_distance || feature.properties?.distance || 0;
    const fromType = feature.properties?.from_type || '未知';
    const toType = feature.properties?.to_type || '未知';

    const content = `
        <div style="padding:10px;font-size:14px;">
            <h4 style="margin:0 0 10px 0;color:#333;">路段信息</h4>
            <div style="margin:5px 0;"><strong>调度车序号：</strong>${vehicleId}</div>
            <div style="margin:5px 0;"><strong>路段序号：</strong>${segmentIndex}</div>
            <div style="margin:5px 0;"><strong>起点：</strong>${from} (${fromType})</div>
            <div style="margin:5px 0;"><strong>终点：</strong>${to} (${toType})</div>
            <div style="margin:5px 0;"><strong>转运数量：</strong>${load} 辆</div>
            <div style="margin:5px 0;"><strong>路程：</strong>${(distance / 1000).toFixed(2)} km</div>
            <div style="margin:5px 0;"><strong>预计时间：</strong>${Math.round(distance / 1000 / 15 * 60)} 分钟</div>
        </div>
    `;

    // 检查是否有geometry坐标信息
    if (feature.geometry && feature.geometry.coordinates && feature.geometry.coordinates.length > 0) {
        const points = feature.geometry.coordinates;
        const centerCoord = points[Math.floor(points.length / 2)];
        const normalized = normalizeBikeToBd09(centerCoord[0], centerCoord[1]);
        const centerPoint = normalized ? 
            new BMap.Point(normalized.lng, normalized.lat) : 
            new BMap.Point(centerCoord[0], centerCoord[1]);

        // 先关闭其他弹窗
        if (window.currentInfoWindow) {
            map.closeInfoWindow(window.currentInfoWindow);
        }

        const infoWindow = new BMap.InfoWindow(content, {
            width: 280,
            height: 200,
            title: '路段详情'
        });
        window.currentInfoWindow = infoWindow;
        map.openInfoWindow(infoWindow, centerPoint);
    } else if (tempSegmentLine) {
        // 如果没有几何坐标但有临时路段，使用临时路段的中心点
        const points = tempSegmentLine.getPath();
        if (points && points.length > 0) {
            const centerIndex = Math.floor(points.length / 2);
            const centerPoint = points[centerIndex];

            // 先关闭其他弹窗
            if (window.currentInfoWindow) {
                map.closeInfoWindow(window.currentInfoWindow);
            }

            const infoWindow = new BMap.InfoWindow(content, {
                width: 280,
                height: 200,
                title: '路段详情'
            });
            window.currentInfoWindow = infoWindow;
            map.openInfoWindow(infoWindow, centerPoint);
        }
    } else {
        // 如果都没有，使用默认点（地图中心）
        const centerPoint = map.getCenter();
        if (centerPoint) {
            // 先关闭其他弹窗
            if (window.currentInfoWindow) {
                map.closeInfoWindow(window.currentInfoWindow);
            }

            const infoWindow = new BMap.InfoWindow(content, {
                width: 280,
                height: 200,
                title: '路段详情'
            });
            window.currentInfoWindow = infoWindow;
            map.openInfoWindow(infoWindow, centerPoint);
        }
    }
}

// 计算方案得分



function calculateSchemeScore(pointCount) {



    if (typeof pointCount === 'number') {
        const baseScore = pointCount * 10;
        return Math.min(baseScore, 100);
    }

    const metrics = pointCount;
    if (!metrics || typeof metrics !== 'object') {
        return 0;
    }

    const coverage = Number(metrics.coverage) || 0;
    const avgDistance = Number(metrics.avg_distance ?? metrics.avgDistance) || 0;
    const balance = Number(metrics.balance) || 0;

    const coverageScore = Math.max(0, Math.min(coverage, 1)) * 40;
    const distanceScore = Math.max(0, 1 - Math.min(avgDistance, 500) / 500) * 30;
    const balanceScore = Math.max(0, Math.min(balance, 1)) * 30;

    return coverageScore + distanceScore + balanceScore;



}


// 设置提交分配状态提示
function setDispatchAssignmentStatus(message, success) {
    const statusEl = document.getElementById('dispatch-assignment-status');
    if (!statusEl) {
        return;
    }
    if (!message) {
        statusEl.textContent = '';
        statusEl.style.display = 'none';
        return;
    }
    statusEl.textContent = message;
    statusEl.style.display = 'block';
    statusEl.style.color = success ? '#155724' : '#721c24';
    statusEl.style.background = success ? '#e8f5e9' : '#fdecea';
    statusEl.style.border = success ? '1px solid #a5d6a7' : '1px solid #f5c6cb';
    statusEl.style.borderRadius = '6px';
    statusEl.style.padding = '8px 10px';
}

// 更新右侧数据面板按角色显示
function updateRightPanelForRole(activeModule) {
    const isAdmin = currentUserRole === 'admin';
    const rightPanel = document.querySelector('.right-panel');
    const dispatchResultCard = document.getElementById('dispatch-result-card');
    const dispatchSummaryInfo = document.getElementById('dispatch-summary-info');
    const dispatchResultTitle = document.getElementById('dispatch-result-title');
    const moduleKey = activeModule || document.querySelector('.menu-item.active')?.getAttribute('data-module') || 'dashboard';

    if (!rightPanel) {
        return;
    }

    if (isAdmin) {
        rightPanel.style.display = '';
        rightPanel.querySelectorAll('.data-card').forEach(card => {
            card.style.display = '';
        });
        if (dispatchSummaryInfo) {
            dispatchSummaryInfo.style.display = '';
        }
        if (dispatchResultTitle) {
            dispatchResultTitle.textContent = '调度优化结果';
        }
        return;
    }

    const showDispatcherDispatchTable = moduleKey === 'dispatch';
    rightPanel.style.display = showDispatcherDispatchTable ? '' : 'none';
    rightPanel.querySelectorAll('.data-card').forEach(card => {
        card.style.display = card === dispatchResultCard && showDispatcherDispatchTable ? '' : 'none';
    });
    if (dispatchSummaryInfo) {
        dispatchSummaryInfo.style.display = 'none';
    }
    if (dispatchResultTitle) {
        dispatchResultTitle.textContent = '调度车行驶路段';
    }
}

// 提交调度分配
function submitDispatchAssignment() {
    if (currentUserRole !== 'admin') {
        const message = '只有管理员可以提交分配';
        setDispatchAssignmentStatus(message, false);
        showToast(message);
        return;
    }

    if (!latestDispatchResult || !latestDispatchResult.features) {
        const message = '提交分配失败：请先运行调度优化';
        setDispatchAssignmentStatus(message, false);
        showToast(message);
        return;
    }

    // 获取调度路线
    const lineFeatures = latestDispatchResult.features.filter(f => f.geometry && f.geometry.type === 'LineString');
    if (lineFeatures.length === 0) {
        const message = '提交分配失败：没有可分配的调度路线';
        setDispatchAssignmentStatus(message, false);
        showToast(message);
        return;
    }

    // 初始化用户存储
    initUserStorage();

    // 从localStorage获取所有调度员
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    const dispatchers = users.filter(user => user.role === 'dispatcher');

    if (dispatchers.length < lineFeatures.length) {
        const message = `提交分配失败：调度员数量不足，需要至少${lineFeatures.length}个调度员（当前有${dispatchers.length}个）`;
        setDispatchAssignmentStatus(message, false);
        showToast(message);
        return;
    }

    // 获取已分配的电池运维调度员（避免重复分配）
    const storedBatteryAssignments = localStorage.getItem('batteryAssignments');
    const batteryAssignments = storedBatteryAssignments ? JSON.parse(storedBatteryAssignments) : [];
    const assignedDispatchers = new Set(batteryAssignments.map(a => a.dispatcher_id));

    // 过滤出未分配的调度员
    let availableDispatchers = dispatchers.filter(d => !assignedDispatchers.has(d.username));

    if (availableDispatchers.length === 0) {
        const message = '提交分配失败：所有调度员都已被分配到电池运维任务';
        setDispatchAssignmentStatus(message, false);
        showToast(message);
        return;
    }

    // 随机分配调度员给调度路线，确保不重复分配
    const assignments = [];
    lineFeatures.forEach((feature, index) => {
        const vehicleId = feature.properties?.vehicle_id || `vehicle_${index + 1}`;

        // 随机选择一个调度员
        const randomIndex = Math.floor(Math.random() * availableDispatchers.length);
        const dispatcher = availableDispatchers.splice(randomIndex, 1)[0];
        const dispatcherId = dispatcher.username;

        assignments.push({
            vehicle_id: vehicleId,
            route_id: feature.properties?.id || `route_${index + 1}`,
            dispatcher_id: dispatcherId,
            from: feature.properties?.from || '供应点',
            to: feature.properties?.to || '需求点',
            distance: feature.properties?.distance || 0
        });
    });

    // 保存分配结果到localStorage
    console.log('[DEBUG] 保存dispatchAssignments:', JSON.stringify(assignments));
    localStorage.setItem('dispatchAssignments', JSON.stringify(assignments));

    // 保存最新的调度结果到localStorage，以便调度员登录时能恢复
    if (latestDispatchResult) {
        localStorage.setItem('latestDispatchResult', JSON.stringify(latestDispatchResult));
    }

    // 获取分配的调度员列表
    const assignedDispatcherNames = assignments.map(a => a.dispatcher_id);
    const uniqueDispatchers = [...new Set(assignedDispatcherNames)];
    const dispatcherList = uniqueDispatchers.join('、');

    const message = `提交分配成功：已分配 ${assignments.length} 条调度车路线给：${dispatcherList}`;
    setDispatchAssignmentStatus(message, true);
    showToast(message);
}

// 提交电池运维分配
function submitBatteryAssignment() {
    if (currentUserRole !== 'admin') {
        const message = '只有管理员可以提交分配';
        showToast(message);
        return;
    }

    if (!batteryLastRouteResult || !batteryLastRouteResult.routes) {
        const message = '提交分配失败：请先生成换电路线';
        showToast(message);
        return;
    }

    // 初始化用户存储
    initUserStorage();

    // 从localStorage获取所有调度员
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    const dispatchers = users.filter(user => user.role === 'dispatcher');

    if (dispatchers.length < 1) {
        const message = `提交分配失败：调度员数量不足，至少需要1个调度员（当前有${dispatchers.length}个）`;
        showToast(message);
        return;
    }

    console.log('batteryLastRouteResult.routes 数量:', batteryLastRouteResult.routes.length);
    // 每次提交分配都重新分配所有路线（清除上一轮分配）
    const assignments = [];
    batteryLastRouteResult.routes.forEach((route, index) => {
        const vehicleId = route.vehicle_id || `battery_vehicle_${index + 1}`;
        
        // 轮询选择调度员（每条路线分配一个调度员）
        const dispatcherIndex = index % dispatchers.length;
        const dispatcher = dispatchers[dispatcherIndex];
        const dispatcherId = dispatcher.username;
        
        assignments.push({
            vehicle_id: vehicleId,
            route_id: route.route_id || `battery_route_${index + 1}`,
            dispatcher_id: dispatcherId,
            stations: route.stations || []
        });
    });
    
    if (assignments.length === 0) {
        const message = '提交分配失败：没有可分配的路线';
        showToast(message);
        return;
    }

    // 保存电池运维分配结果到localStorage
    localStorage.setItem('batteryAssignments', JSON.stringify(assignments));

    // 保存电池运维路线结果到localStorage，以便调度员登录时能恢复
    if (batteryLastRouteResult) {
        localStorage.setItem('batteryLastRouteResult', JSON.stringify(batteryLastRouteResult));
    }

    // 获取分配的调度员列表
    const assignedDispatcherNames = assignments.map(a => a.dispatcher_id);
    const uniqueDispatchers = [...new Set(assignedDispatcherNames)];
    const dispatcherList = uniqueDispatchers.join('、');

    const message = `提交分配成功：已分配 ${assignments.length} 条换电路线给：${dispatcherList}`;
    setBatteryAssignmentStatus(message, true);
    showToast(message);
}

// 设置电池运维分配状态
function setBatteryAssignmentStatus(message, isSuccess) {
    const statusEl = document.getElementById('battery-assignment-status');
    if (statusEl) {
        statusEl.textContent = message;
        statusEl.style.color = isSuccess ? '#27ae60' : '#e74c3c';
        statusEl.style.display = 'block';
    }
}

// 获取调度员的分配路线
function getDispatcherRoutes() {
    if (currentUserRole !== 'dispatcher') {
        console.log('[DEBUG getDispatcherRoutes] not a dispatcher, returning empty');
        return [];
    }

    // 从localStorage获取分配结果
    const storedAssignments = localStorage.getItem('dispatchAssignments');
    console.log('[DEBUG getDispatcherRoutes] localStorage.dispatchAssignments:', storedAssignments);
    
    const assignments = storedAssignments ? JSON.parse(storedAssignments) : [];
    console.log('[DEBUG getDispatcherRoutes] parsed assignments:', JSON.stringify(assignments));
    console.log('[DEBUG getDispatcherRoutes] currentUsername:', currentUsername);
    
    const filtered = assignments.filter(assignment => {
        const match = assignment.dispatcher_id === currentUsername;
        console.log('[DEBUG getDispatcherRoutes] checking assignment:', assignment.dispatcher_id, '===', currentUsername, '->', match);
        return match;
    });
    
    console.log('[DEBUG getDispatcherRoutes] filtered routes:', JSON.stringify(filtered));
    return filtered;
}

// 获取调度员的换电路线
function getDispatcherBatteryRoutes() {
    if (currentUserRole !== 'dispatcher') {
        return [];
    }

    // 从localStorage获取分配结果
    const storedAssignments = localStorage.getItem('batteryAssignments');
    const assignments = storedAssignments ? JSON.parse(storedAssignments) : [];
    
    // 获取分配给自己的路线
    const myAssignments = assignments.filter(assignment => assignment.dispatcher_id === currentUsername);
    
    if (myAssignments.length === 0) {
        return [];
    }
    
    // 从batteryLastRouteResult中获取完整的路线信息
    const storedBatteryResult = localStorage.getItem('batteryLastRouteResult');
    const batteryResult = storedBatteryResult ? JSON.parse(storedBatteryResult) : null;
    
    if (!batteryResult || !batteryResult.routes) {
        return [];
    }
    
    // 构建vehicle_id到路线的映射
    const routeMap = new Map();
    batteryResult.routes.forEach(route => {
        const vehicleId = route.vehicle_id;
        if (vehicleId) {
            routeMap.set(vehicleId, route);
        }
    });
    
    // 生成包含完整信息的路线列表
    const myRoutes = [];
    myAssignments.forEach(assignment => {
        const route = routeMap.get(assignment.vehicle_id);
        if (route) {
            myRoutes.push({
                name: route.route_name || route.name || `换电路线`,
                vehicle_name: route.vehicle_name || route.vehicle_id || `换电运维车`,
                start: route.start || route.from || '补给点',
                end: route.end || route.to || '补给点',
                service_count: route.ordered_bikes ? route.ordered_bikes.length : 0,
                distance_m: route.total_distance_m || route.distance_m || route.total_distance || 0,
                vehicle_id: route.vehicle_id,
                route_id: route.route_id
            });
        }
    });
    
    return myRoutes;
}




// ==================== 登录/注册功能 ====================







// 切换登录/注册桨单



function toggleAuthForm(formType) {



    const loginForm = document.getElementById('loginForm');



    const registerForm = document.getElementById('registerForm');



    



    if (formType === 'login') {



        loginForm.style.display = 'block';



        registerForm.style.display = 'none';



    } else if (formType === 'register') {



        loginForm.style.display = 'none';



        registerForm.style.display = 'block';



    }



}







// 处理登录



function handleLogin() {



    const username = document.getElementById('loginUsername').value;



    const password = document.getElementById('loginPassword').value;



    // 根据用户名确定角色，admin是管理员，其他是调度员
    const role = username === 'admin' ? 'admin' : 'dispatcher';



    



    // 简单的登录验证



    if ((username === 'admin' && password === 'admin') || (username !== 'admin' && password)) {
        // 登录成功



        document.getElementById('loginPage').style.display = 'none';



        document.getElementById('systemPage').style.display = 'flex';

        currentUserRole = role;
        currentUsername = (username || '').trim();



        document.getElementById('currentUser').textContent = role === 'admin' ? '管理员' : '调度员';
        if (role === 'admin') {
            resetOperationalStateForAdminLogin();
            clearBatteryOpsPersistedState();
            // 显示调度分配按钮
            const assignmentBtn = document.getElementById('dispatch-assignment-btn');
            if (assignmentBtn) {
                assignmentBtn.style.display = '';
            }
            // 显示运行调度优化按钮
            const runDispatchBtn = document.getElementById('run-dispatch-btn');
            if (runDispatchBtn) {
                runDispatchBtn.style.display = '';
            }
        } else {
            // 隐藏调度分配按钮
            const assignmentBtn = document.getElementById('dispatch-assignment-btn');
            if (assignmentBtn) {
                assignmentBtn.style.display = 'none';
            }
            // 隐藏运行调度优化按钮
            const runDispatchBtn = document.getElementById('run-dispatch-btn');
            if (runDispatchBtn) {
                runDispatchBtn.style.display = 'none';
            }


        }

        // 登录时重置电池运维页面内存状态，但保留已生成任务快照，供调度员按编号查看
        resetBatteryOpsStateForNewLogin();
        resetAIPanelStateForNewLogin();

        applyRolePermissions();
        refreshFeedbackList(true).catch(error => {
            console.error('预加载反馈列表失败:', error);
        });



        



        // 初始化地常


        initMap();



        



        // 加载系统数据



        loadSystemData();
        
        // 确保地图初始化完成后，显示相应的标记和调度员路线
        setTimeout(() => {
            updateSelectedScheme();
            
            // 如果是调度员角色，自动切换到调度模块并恢复调度结果
            if (currentUserRole === 'dispatcher') {
                // 自动切换到调度模块
                const dispatchMenuItem = document.querySelector('.menu-item[data-module="dispatch"]');
                if (dispatchMenuItem) {
                    dispatchMenuItem.click();
                }

                // 恢复调度结果（如果管理员已经运行过调度优化）
                // 先从localStorage恢复（如果内存中没有）
                if (!latestDispatchResult) {
                    const storedDispatch = localStorage.getItem('latestDispatchResult');
                    if (storedDispatch) {
                        latestDispatchResult = JSON.parse(storedDispatch);
                        console.log('已从localStorage恢复调度结果');
                    }
                }

                console.log('[DEBUG] latestDispatchResult:', latestDispatchResult ? '存在' : '不存在');
                console.log('[DEBUG] latestDispatchResult.features数量:', latestDispatchResult?.features?.length || 0);
                console.log('[DEBUG] currentUsername:', currentUsername);
                console.log('[DEBUG] currentUserRole:', currentUserRole);

                // 不使用缓存，直接处理调度结果
                const dispatchRouteCountEl = document.getElementById('dispatch-route-count');

                // 检查分配给当前调度员的路线
                const dispatcherRoutes = getDispatcherRoutes();
                console.log('[DEBUG] getDispatcherRoutes()返回:', JSON.stringify(dispatcherRoutes));
                console.log('[DEBUG] dispatcherRoutes.length:', dispatcherRoutes.length);

                // 检查localStorage中的dispatchAssignments
                const storedDispatchAssignments = localStorage.getItem('dispatchAssignments');
                console.log('[DEBUG] localStorage.dispatchAssignments:', storedDispatchAssignments);

                // 检查最新的调度结果中的vehicle_id
                if (latestDispatchResult && latestDispatchResult.features) {
                    const lineFeatures = latestDispatchResult.features.filter(f => f.geometry?.type === 'LineString');
                    console.log('[DEBUG] latestDispatchResult中的LineString数量:', lineFeatures.length);
                    if (lineFeatures.length > 0) {
                        console.log('[DEBUG] 最新路线中的vehicle_id示例:', lineFeatures[0].properties?.vehicle_id);
                    }
                }

                if (latestDispatchResult && dispatcherRoutes.length > 0) {
                    console.log('已从内存恢复调度结果');
                    
                    // 检查是否有分配给当前调度员的路线
                    const dispatcherRoutes = getDispatcherRoutes();
                    if (dispatcherRoutes.length > 0) {
                        // 过滤出分配给当前调度员的路线（包含LineString和Point要素）
                        const filteredFeatures = latestDispatchResult.features.filter(feature => {
                            if (feature.geometry && feature.geometry.type === 'LineString') {
                                const vehicleId = feature.properties?.vehicle_id;
                                return dispatcherRoutes.some(route => route.vehicle_id === vehicleId);
                            }
                            // 同时保留Point要素（供需点），这样调度员能看到起点和终点
                            if (feature.geometry && feature.geometry.type === 'Point') {
                                const vehicleId = feature.properties?.vehicle_id;
                                return dispatcherRoutes.some(route => route.vehicle_id === vehicleId);
                            }
                            return false;
                        });
                        
                        if (filteredFeatures.length > 0) {
                            // 创建新的GeoJSON对象
                            const filteredGeojson = {
                                type: 'FeatureCollection',
                                features: filteredFeatures
                            };
                            
                            // 显示分配给调度员的路线和供需点
                            setTimeout(() => {
                                renderDispatch(filteredGeojson);
                                updateDispatchSummaryFromResult({ geojson: filteredGeojson });
                                if (dispatchRouteCountEl) dispatchRouteCountEl.textContent = dispatcherRoutes.length;
                                setDispatchRouteDetailHint(`已分配 ${dispatcherRoutes.length} 条路线`);
                                showToast(`已显示分配给您的 ${dispatcherRoutes.length} 条路线及其供需点`);
                            }, 300);
                        }
                    } else {
                        setDispatchRouteDetailHint('当前未分配路线！');
                        if (dispatchRouteCountEl) dispatchRouteCountEl.textContent = '0';
                    }
                } else {
                    setDispatchRouteDetailHint('当前未分配路线！');
                    if (dispatchRouteCountEl) dispatchRouteCountEl.textContent = '0';
                }
                
                // 恢复电池运维结果（如果管理员已经生成过换电任务）
                // 先从localStorage恢复（如果内存中没有）
                if (!batteryLastRouteResult) {
                    const storedBattery = localStorage.getItem('batteryLastRouteResult');
                    if (storedBattery) {
                        batteryLastRouteResult = JSON.parse(storedBattery);
                    }
                }
                
                // 同时恢复batteryRouteAssignments
                const storedBatteryAssignments = localStorage.getItem('batteryAssignments');
                if (storedBatteryAssignments) {
                    try {
                        const parsedAssignments = JSON.parse(storedBatteryAssignments);
                        if (parsedAssignments && Array.isArray(parsedAssignments)) {
                            // 构建bike_assignments对象
                            const bikeAssignments = {};
                            parsedAssignments.forEach(a => {
                                if (a.vehicle_id) {
                                    bikeAssignments[a.vehicle_id] = {
                                        route_id: a.route_id,
                                        dispatcher_id: a.dispatcher_id,
                                        stations: a.stations || []
                                    };
                                }
                            });
                            // 合并到batteryRouteAssignments
                            Object.assign(batteryRouteAssignments, bikeAssignments);
                            console.log('已从localStorage恢复batteryRouteAssignments');
                        }
                    } catch (error) {
                        console.error('恢复batteryRouteAssignments失败:', error);
                    }
                }

                // 不使用缓存，直接处理电池运维结果
                if (batteryLastRouteResult) {
                    // 检查是否有分配给当前调度员的电池运维任务
                    const storedBatteryAssignments = localStorage.getItem('batteryAssignments');
                    const batteryAssignments = storedBatteryAssignments ? JSON.parse(storedBatteryAssignments) : [];
                    const myBatteryAssignments = batteryAssignments.filter(a => a.dispatcher_id === currentUsername);
                    
                    if (myBatteryAssignments.length > 0) {
                        // 获取分配给当前调度员的车辆ID列表
                        const myVehicleIds = myBatteryAssignments.map(a => a.vehicle_id);
                        setBatteryRouteDetailHint(`已分配 ${myBatteryAssignments.length} 条路线`);
                        
                        // 过滤出分配给该调度员的路线
                        const myRoutes = batteryLastRouteResult.routes.filter(route => 
                            myVehicleIds.some(vid => String(route.vehicle_id) === String(vid))
                        );
                        
                        if (myRoutes.length > 0) {
                            // 显示低电量车辆标记和路线
                            setTimeout(async () => {
                                try {
                                    // 先加载低电量车辆数据
                                    const threshold = Number(document.getElementById('battery-threshold')?.value) || 10;
                                    const lowBatteryData = await getLowBatteryCandidates(threshold);
                                    
                                    // 从路线中提取所有需要服务的低电量车辆ID
                                    const myBikeIds = new Set();
                                    myRoutes.forEach(route => {
                                        if (route.ordered_bikes) {
                                            route.ordered_bikes.forEach(bike => {
                                                if (bike.id) {
                                                    myBikeIds.add(bike.id);
                                                }
                                            });
                                        }
                                    });
                                    
                                    // 过滤出分配给自己的车辆
                                    let myLowBattery = [];
                                    if (lowBatteryData && lowBatteryData.bikes && lowBatteryData.bikes.length > 0) {
                                        myLowBattery = lowBatteryData.bikes.filter(b => myBikeIds.has(b.id));
                                    }
                                    
                                    // 如果从低电量数据中找不到车辆，尝试从路线的ordered_bikes中获取
                                    if (myLowBattery.length === 0) {
                                        myRoutes.forEach(route => {
                                            if (route.ordered_bikes) {
                                                route.ordered_bikes.forEach(bike => {
                                                    if (bike.id && !myLowBattery.some(b => b.id === bike.id)) {
                                                        myLowBattery.push(bike);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                    
                                    console.log('过滤后的低电量车辆:', {
                                        totalLowBattery: lowBatteryData?.bikes?.length || 0,
                                        myLowBattery: myLowBattery.length,
                                        myLowBatteryDetails: myLowBattery
                                    });
                                    
                                    renderLowBatteryMarkers(myLowBattery);
                                    
                                    // 构建完整的scopedResult对象，确保包含所有必要的信息
                                    const allScopedBikes = [];
                                    const allScopedAssignments = {};
                                    myRoutes.forEach(matchedRoute => {
                                        const scopedAssignments = buildScopedAssignmentsForRoute(matchedRoute, batteryLastRouteResult?.bike_assignments || {});
                                        const scopedBikes = getDispatcherScopedBikes(matchedRoute, scopedAssignments);
                                        allScopedBikes.push(...scopedBikes);
                                        Object.assign(allScopedAssignments, scopedAssignments);
                                    });
                                    
                                    const scopedResult = {
                                        routes: myRoutes,
                                        vehicle_count: myRoutes.length,
                                        route_count: myRoutes.length,
                                        bike_count: allScopedBikes.length,
                                        capacity_per_trip: batteryLastRouteResult?.capacity_per_trip || getBatteryCapacityValue(),
                                        bike_assignments: allScopedAssignments
                                    };
                                    
                                    drawBatteryRoute(
                                        scopedResult,
                                        allScopedBikes.length,
                                        { 
                                            silentToast: true, 
                                            tableBikes: allScopedBikes,
                                            updateGlobalState: true
                                        }
                                    );
                                    
                                    // 确保电池状态面板更新
                                    updateBatteryResultPanel({
                                        lowCount: allScopedBikes.length,
                                        vehicleCount: myRoutes.length,
                                        routeCount: myRoutes.length,
                                        capacityPerTrip: scopedResult.capacity_per_trip,
                                        routes: myRoutes
                                    });
                                    
                                    // 确保提示信息更新
                                    setBatteryRouteDetailHint(`已分配 ${myRoutes.length} 条路线`);
                                    
                                    showToast(`已显示 ${allScopedBikes.length} 辆低电量车辆和 ${myRoutes.length} 条路线`);
                                } catch (error) {
                                    console.error('加载低电量车辆数据失败:', error);
                                    // 即使低电量车辆数据获取失败，也要显示路线
                                    
                                    // 构建完整的scopedResult对象，确保包含所有必要的信息
                                    const allScopedBikes = [];
                                    const allScopedAssignments = {};
                                    myRoutes.forEach(matchedRoute => {
                                        const scopedAssignments = buildScopedAssignmentsForRoute(matchedRoute, batteryLastRouteResult?.bike_assignments || {});
                                        const scopedBikes = getDispatcherScopedBikes(matchedRoute, scopedAssignments);
                                        allScopedBikes.push(...scopedBikes);
                                        Object.assign(allScopedAssignments, scopedAssignments);
                                    });
                                    
                                    const scopedResult = {
                                        routes: myRoutes,
                                        vehicle_count: myRoutes.length,
                                        route_count: myRoutes.length,
                                        bike_count: allScopedBikes.length,
                                        capacity_per_trip: batteryLastRouteResult?.capacity_per_trip || getBatteryCapacityValue(),
                                        bike_assignments: allScopedAssignments
                                    };
                                    
                                    drawBatteryRoute(
                                        scopedResult,
                                        allScopedBikes.length,
                                        { 
                                            silentToast: true, 
                                            tableBikes: allScopedBikes,
                                            updateGlobalState: true
                                        }
                                    );
                                    
                                    // 确保电池状态面板更新
                                    updateBatteryResultPanel({
                                        lowCount: allScopedBikes.length,
                                        vehicleCount: myRoutes.length,
                                        routeCount: myRoutes.length,
                                        capacityPerTrip: scopedResult.capacity_per_trip,
                                        routes: myRoutes
                                    });
                                    
                                    setBatteryRouteDetailHint(`已分配 ${myRoutes.length} 条路线`);
                                    
                                    showToast(`已显示 ${myRoutes.length} 条路线，但无法加载低电量车辆数据`);
                                }
                            }, 500);
                        } else {
                            setBatteryRouteDetailHint('当前未分配路线！');
                        }
                    } else {
                        setBatteryRouteDetailHint('当前未分配路线！');
                    }
                } else {
                    setBatteryRouteDetailHint('当前未分配路线！');
                }
            }
        }, 500);


    } else {



        alert('用户名或密码错毯，请使用演示账号: admin / admin');



    }



}







// 处理注册



// 初始化用户存储
function initUserStorage() {
    // 从localStorage获取现有用户
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // 确保至少有10个调度员
    if (users.filter(u => u.role === 'dispatcher').length < 10) {
        const defaultDispatchers = [
            { username: '调度员1', password: '123456', role: 'dispatcher' },
            { username: '调度员2', password: '123456', role: 'dispatcher' },
            { username: '调度员3', password: '123456', role: 'dispatcher' },
            { username: '调度员4', password: '123456', role: 'dispatcher' },
            { username: '调度员5', password: '123456', role: 'dispatcher' },
            { username: '调度员6', password: '123456', role: 'dispatcher' },
            { username: '调度员7', password: '123456', role: 'dispatcher' },
            { username: '调度员8', password: '123456', role: 'dispatcher' },
            { username: '调度员9', password: '123456', role: 'dispatcher' },
            { username: '调度员10', password: '123456', role: 'dispatcher' }
        ];
        defaultDispatchers.forEach(dispatcher => {
            if (!users.some(user => user.username === dispatcher.username)) {
                users.push(dispatcher);
            }
        });
        // 保存到localStorage
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// 检查用户名是否已存在
function isUsernameExists(username) {
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    return users.some(user => user.username === username);
}

// 添加用户
function addUser(username, password, role) {
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    users.push({ username, password, role });
    localStorage.setItem('users', JSON.stringify(users));
}

// 获取用户
function getUser(username) {
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    return users.find(user => user.username === username);
}

function handleRegister() {

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const password2 = document.getElementById('regPassword2').value;
    const role = document.getElementById('regRole').value;

    if (!username || !password) {
        alert('请输入用户名和密码');
        return;
    }

    if (password !== password2) {
        alert('两次输入的密码不一致');
        return;
    }

    // 检查用户名是否已存在
    if (isUsernameExists(username)) {
        alert('用户名已存在，请选择其他用户名');
        return;
    }

    // 添加用户
    addUser(username, password, role);

    alert('注册成功，请使用新账号登录');
    toggleAuthForm('login');
}







// 处理退出登常



function handleLogout() {

    // 重置AI面板状态
    resetAIPanelStateForNewLogin();
    
    // 重置系统状态
    selectedScheme = 'auto';
    currentDispatchScheme = '待选择';
    latestSmartLocationResult = null;
    latestDispatchResult = null;
    savedPredictionData = null;
    initialPredictionData = null;
    initialUsageData = null;
    isResetting = false;
    chartsInitialized = false;
    currentPOIData = null;
    currentPoiSource = 'mock';
    dispatchFeatures = [];
    manualLocationMetrics = null;
    smartMetrics = { coverage: 0, avg_distance: 0, balance: 0, capacity: 0 };
    activeDispatchRouteIndex = null;
    window.currentParkingData = [];
    
    // 清除地图上的标记和图层
    clearSmartLocations(true);
    clearManualLocations(true);
    clearDispatch(true);
    clearEbikeSimulation(true);
    
    // 清除电池运维相关状态
    clearBatteryRouteLines();
    clearLowBatteryMarkers();
    batteryRouteAssignments = {};
    batteryLastRouteResult = null;
    currentLowBatteryList = [];
    dispatcherSelectedVehicleKey = '';
    
    // 清除热力图
    if (map && heatmapLayer) {
        try {
            map.removeOverlay(heatmapLayer);
        } catch (_) {
            // ignore
        }
    }
    heatmapLayer = null;
    
    if (map) {
        heatmapMarkers.forEach(marker => {
            try {
                map.removeOverlay(marker);
            } catch (_) {
                // ignore
            }
        });
    }
    heatmapMarkers = [];
    
    // 清除信息窗口
    if (window.currentInfoWindow && map) {
        try {
            map.closeInfoWindow(window.currentInfoWindow);
        } catch (_) {
            // ignore
        }
        window.currentInfoWindow = null;
    }
    
    // 重置表格内容
    const supplyBody = document.getElementById('supply-demand-body');
    if (supplyBody) {
        supplyBody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请先运行选址算法</td></tr>';
    }
    
    const dispatchBody = document.getElementById('dispatch-table-body');
    if (dispatchBody) {
        dispatchBody.innerHTML = '<tr><td colspan="7" style="color:#999;padding:10px;text-align:center;">请运行调度优化</td></tr>';
    }
    
    const batteryBody = document.getElementById('battery-table-body');
    if (batteryBody) {
        batteryBody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请点击筛选按钮查看低电量车辆</td></tr>';
    }
    
    // 重置指标显示
    const metricCoverage = document.getElementById('metric-coverage');
    const metricDistance = document.getElementById('metric-distance');
    const metricBalance = document.getElementById('metric-balance');
    const metricCapacity = document.getElementById('metric-capacity');
    if (metricCoverage) metricCoverage.textContent = '0%';
    if (metricDistance) metricDistance.textContent = '0m';
    if (metricBalance) metricBalance.textContent = '0';
    if (metricCapacity) metricCapacity.textContent = '0';
    
    // 重置图表
    if (comparisonChart && typeof comparisonChart.destroy === 'function') {
        comparisonChart.destroy();
        comparisonChart = null;
    }
    if (usageChart && typeof usageChart.destroy === 'function') {
        usageChart.destroy();
        usageChart = null;
    }
    if (predictionChart && typeof predictionChart.destroy === 'function') {
        predictionChart.destroy();
        predictionChart = null;
    }
    chartsInitialized = false;
    
    // 重置预测数据
    [
        'prediction-morning-main',
        'prediction-morning-aux',
        'prediction-noon-main',
        'prediction-noon-aux',
        'prediction-evening-main',
        'prediction-evening-aux'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = '-';
        }
    });
    
    // 重置状态显示
    const statusSmart = document.getElementById('status-smart');
    const statusManual = document.getElementById('status-manual');
    const statusDispatch = document.getElementById('status-dispatch');
    if (statusSmart) statusSmart.textContent = '0';
    if (statusManual) statusManual.textContent = '0';
    if (statusDispatch) statusDispatch.textContent = '0';
    
    // 重置下拉菜单
    const dispatchTime = document.getElementById('dispatch-time');
    if (dispatchTime) {
        dispatchTime.value = 'morning';
    }
    
    // 重置供需表格标签
    const supplyTabContainer = document.querySelector('#supply-demand-table')?.closest('.data-card');
    const supplyTabs = supplyTabContainer ? supplyTabContainer.querySelectorAll('.tabs .tab') : [];
    supplyTabs.forEach(tab => {
        const tabTime = tab.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        tab.classList.toggle('active', tabTime === 'morning');
    });
    
    // 更新方案状态显示
    updateSchemeStatusDisplay();

    // 切换到登录页面
    document.getElementById('systemPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';

}

function resetOperationalStateForAdminLogin() {
    selectedScheme = 'auto';
    currentDispatchScheme = '待选择';
    latestSmartLocationResult = null;
    latestDispatchResult = null;
    savedPredictionData = null;
    initialPredictionData = null;
    initialUsageData = null;
    isResetting = false;
    chartsInitialized = false;
    currentPOIData = null;
    currentPoiSource = 'mock';
    dispatchFeatures = [];
    manualLocationMetrics = null;
    smartMetrics = { coverage: 0, avg_distance: 0, balance: 0, capacity: 0 };
    activeDispatchRouteIndex = null;
    window.currentParkingData = [];

    clearSmartLocations(true);
    clearManualLocations(true);
    clearDispatch(true);
    clearEbikeSimulation(true);

    clearBatteryRouteLines();
    clearLowBatteryMarkers();
    batteryRouteAssignments = {};
    batteryLastRouteResult = null;
    currentLowBatteryList = [];
    dispatcherSelectedVehicleKey = '';

    if (map && heatmapLayer) {
        try {
            map.removeOverlay(heatmapLayer);
        } catch (_) {
            // ignore
        }
    }
    heatmapLayer = null;

    if (map) {
        heatmapMarkers.forEach(marker => {
            try {
                map.removeOverlay(marker);
            } catch (_) {
                // ignore
            }
        });
    }
    heatmapMarkers = [];

    if (window.currentInfoWindow && map) {
        try {
            map.closeInfoWindow(window.currentInfoWindow);
        } catch (_) {
            // ignore
        }
        window.currentInfoWindow = null;
    }

    const supplyBody = document.getElementById('supply-demand-body');
    if (supplyBody) {
        supplyBody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请先运行选址算法</td></tr>';
    }

    const dispatchBody = document.getElementById('dispatch-table-body');
    if (dispatchBody) {
        dispatchBody.innerHTML = '<tr><td colspan="7" style="color:#999;padding:10px;text-align:center;">请运行调度优化</td></tr>';
    }

    const batteryBody = document.getElementById('battery-table-body');
    if (batteryBody) {
        batteryBody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请点击筛选按钮查看低电量车辆</td></tr>';
    }

    const metricCoverage = document.getElementById('metric-coverage');
    const metricDistance = document.getElementById('metric-distance');
    const metricBalance = document.getElementById('metric-balance');
    const metricCapacity = document.getElementById('metric-capacity');
    if (metricCoverage) metricCoverage.textContent = '0%';
    if (metricDistance) metricDistance.textContent = '0m';
    if (metricBalance) metricBalance.textContent = '0';
    if (metricCapacity) metricCapacity.textContent = '0';

    if (comparisonChart && typeof comparisonChart.destroy === 'function') {
        comparisonChart.destroy();
        comparisonChart = null;
    }
    if (usageChart && typeof usageChart.destroy === 'function') {
        usageChart.destroy();
        usageChart = null;
    }
    if (predictionChart && typeof predictionChart.destroy === 'function') {
        predictionChart.destroy();
        predictionChart = null;
    }
    chartsInitialized = false;

    const comparisonPlaceholder = document.getElementById('comparison-placeholder');
    if (comparisonPlaceholder) {
        comparisonPlaceholder.removeAttribute('style');
        comparisonPlaceholder.textContent = '点击"智能 vs 人工 对比"按钮查看';
    }

    [
        'prediction-morning-main',
        'prediction-morning-aux',
        'prediction-noon-main',
        'prediction-noon-aux',
        'prediction-evening-main',
        'prediction-evening-aux'
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = '-';
        }
    });

    const statusSmart = document.getElementById('status-smart');
    const statusManual = document.getElementById('status-manual');
    const statusDispatch = document.getElementById('status-dispatch');
    if (statusSmart) statusSmart.textContent = '0';
    if (statusManual) statusManual.textContent = '0';
    if (statusDispatch) statusDispatch.textContent = '0';

    const dispatchTime = document.getElementById('dispatch-time');
    if (dispatchTime) {
        dispatchTime.value = 'morning';
    }

    const supplyTabContainer = document.querySelector('#supply-demand-table')?.closest('.data-card');
    const supplyTabs = supplyTabContainer ? supplyTabContainer.querySelectorAll('.tabs .tab') : [];
    supplyTabs.forEach(tab => {
        const tabTime = tab.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        tab.classList.toggle('active', tabTime === 'morning');
    });

    updateSchemeStatusDisplay();
}







// 热力图实常


let heatmapLayer = null;







// 热力图标记数常


let heatmapMarkers = [];







// 更新热力常


function updateHeatmap() {
    if (!map) {
        showToast('地图远未初姻化');
        return;
    }

    heatmapMarkers.forEach(marker => map.removeOverlay(marker));
    heatmapMarkers = [];

    if (heatmapLayer) {
        map.removeOverlay(heatmapLayer);
        heatmapLayer = null;
    }

    const timeSlot = document.getElementById('heatmap-time')?.value || 'morning';
    console.log('Selected time slot:', timeSlot);

    showProgress('正在生成热力图...');
    setTimeout(() => {
        try {
            const rawHeatmapData = (MOCK_HEATMAP_DATA[timeSlot] || []).map(point => {
                if (!Array.isArray(point) || point.length < 3) {
                    return point;
                }
                const wgsLat = Number(point[0]);
                const wgsLng = Number(point[1]);
                const weight = Number(point[2]);
                if (!Number.isFinite(wgsLat) || !Number.isFinite(wgsLng) || !Number.isFinite(weight)) {
                    return point;
                }
                const bd = wgs84ToBd09(wgsLng, wgsLat);
                return [bd.lng, bd.lat, weight];
            });

            const points = normalizeHeatmapData(rawHeatmapData);
            if (points.length === 0) {
                showToast('当前时段暂无热力图数据');
                return;
            }

            renderHeatmap(points);
            showToast('热力图更新完成');

            // 为不同时段使用固定的总需求值
            let totalDemandFromHeatmap = 0;
            switch(timeSlot) {
                case 'morning':
                    totalDemandFromHeatmap = 175; // 固定值
                    break;
                case 'noon':
                    totalDemandFromHeatmap = 160; // 固定值
                    break;
                case 'evening':
                    totalDemandFromHeatmap = 185; // 固定值
                    break;
                default:
                    totalDemandFromHeatmap = 175;
            }
            console.log('Heatmap update for timeSlot:', timeSlot, 'points count:', points.length, 'totalDemandFromHeatmap:', totalDemandFromHeatmap);
            console.log('MOCK_HEATMAP_DATA[timeSlot]:', MOCK_HEATMAP_DATA[timeSlot]);
            updateSystemStatus(null, totalDemandFromHeatmap);
        } catch (error) {
            console.error('更新热力图失败:', error);
            showToast('热力图渲染失败，请重试');
        } finally {
            hideProgress();
        }
    }, 800);
}

function renderHeatmap(points) {
    const showHeatmap = document.getElementById('layer-heatmap')?.checked || false;
    const maxCount = Math.max(100, points.reduce((max, p) => Math.max(max, p.count), 1));

    if (window.BMapLib && window.BMapLib.HeatmapOverlay) {
        if (!heatmapLayer) {
            heatmapLayer = new BMapLib.HeatmapOverlay({
                radius: 25,
                gradient: {
                    0.4: 'blue',
                    0.6: 'cyan',
                    0.7: 'lime',
                    0.8: 'yellow',
                    1.0: 'red'
                },
                enableClicking: false // 禁止点击，让点击事件传递到下面的调度路径
            });
            map.addOverlay(heatmapLayer);
            // 设置热力图的zIndex，确保在调度路径之下
            if (heatmapLayer.setZIndex) {
                heatmapLayer.setZIndex(9900);
            }
        }

        heatmapLayer.setDataSet({ data: points, max: maxCount });
        if (showHeatmap) {
            heatmapLayer.show();
        } else {
            heatmapLayer.hide();
        }
        return;
    }

    points.forEach(p => {
        const markerPoint = new BMap.Point(p.lng, p.lat);
        const normalized = Math.max(0, Math.min(1, p.count / maxCount));
        const size = 6 + normalized * 16;

        const icon = new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
            scale: size / 10,
            strokeWeight: 0,
            fillColor: getHeatmapColor(normalized),
            fillOpacity: 0.55
        });

        const marker = new BMap.Marker(markerPoint, { icon });
        marker.setVisible(showHeatmap);
        // 设置模拟热力图标记的zIndex，确保在调度路径之下
        marker.setZIndex(9900);
        map.addOverlay(marker);
        heatmapMarkers.push(marker);
    });
}

function normalizeHeatmapData(rawHeatmapData) {
    const result = [];

    (rawHeatmapData || []).forEach(point => {
        if (!Array.isArray(point) || point.length < 3) {
            return;
        }

        const first = Number(point[0]);
        const second = Number(point[1]);
        let intensity = Number(point[2]);

        if (!Number.isFinite(first) || !Number.isFinite(second) || !Number.isFinite(intensity)) {
            return;
        }

        let lat;
        let lng;

        const firstLooksLikeLat = first >= -90 && first <= 90;
        const secondLooksLikeLat = second >= -90 && second <= 90;

        if (firstLooksLikeLat && !secondLooksLikeLat) {
            lat = first;
            lng = second;
        } else if (!firstLooksLikeLat && secondLooksLikeLat) {
            lng = first;
            lat = second;
        } else {
            lat = first;
            lng = second;
        }

        if (intensity <= 1) {
            intensity = intensity * 100;
        }

        result.push({ lng, lat, count: Math.max(1, intensity) });
    });

    return result;
}







// 根据强度获取热力图颜常


function getHeatmapColor(intensity) {



    if (intensity < 0.4) return '#0000ff'; // blue



    if (intensity < 0.6) return '#00ffff'; // cyan



    if (intensity < 0.7) return '#00ff00'; // lime



    if (intensity < 0.8) return '#ffff00'; // yellow



    return '#ff0000'; // red



}







// 加载系统数据



function loadSystemData() {
    const isAdmin = currentUserRole === 'admin';


    // 从实际数据中加载系统数据


    setTimeout(() => {


        // 从电池运维数据中获取低电量车辆数
        let lowBatteryCount = currentLowBatteryList.length || 0;
        
        // 对于调度员，检查是否有分配的换电路线
        if (currentUserRole === 'dispatcher') {
            const myBatteryRoutes = getDispatcherBatteryRoutes();
            if (myBatteryRoutes.length > 0) {
                // 计算分配路线中的低电量车辆总数
                let assignedLowBatteryCount = 0;
                myBatteryRoutes.forEach(route => {
                    assignedLowBatteryCount += route.service_count || 0;
                });
                lowBatteryCount = assignedLowBatteryCount;
            } else {
                // 没有分配路线时不显示
                lowBatteryCount = 0;
            }
        }


        // 初始状态下总需求显示"-"
        let totalDemand = 0;
        let totalBikes = 200; // 默认总车辆数
        let availableBikes = 150; // 默认可用车辆数

        // 根据低电量车辆数调整可用车辆数
        availableBikes = Math.max(0, totalBikes - lowBatteryCount);

        // 不在初始化时调用updateSystemStatus，避免覆盖热力图数据
        // 只需要直接更新DOM元素
        document.getElementById('total-bikes').textContent = totalBikes;
        document.getElementById('available-bikes').textContent = availableBikes;
        // 管理员或有分配路线的调度员显示低电量车辆数
        if (isAdmin || (currentUserRole === 'dispatcher' && lowBatteryCount > 0)) {
            document.getElementById('low-battery-bikes').textContent = lowBatteryCount > 0 ? Math.min(lowBatteryCount, 100) : '-';
        } else if (currentUserRole === 'dispatcher') {
            // 没有分配路线的调度员不显示
            document.getElementById('low-battery-bikes').textContent = '-';
        }
        document.getElementById('total-demand').textContent = '-'

        initCharts();

        // 初始化热力图
        // 暂时不自动初始化热力图，让用户点击更新热力图按钮来显示
        // updateHeatmap();

    }, 500);

}

let lastHeatmapTotalDemand = null;

// 更新系统状态显示
function updateSystemStatus(lowBatteryCountOverride, totalDemandOverride) {
    const isAdmin = currentUserRole === 'admin';
    // 如果传入了热力图总需求，记录它
    if (totalDemandOverride !== null && totalDemandOverride !== undefined) {
        lastHeatmapTotalDemand = Math.min(totalDemandOverride, 200);
    }
    
    // 从电池运维数据中获取低电量车辆数
    let lowBatteryCount = currentLowBatteryList.length || 0;
    if (lowBatteryCountOverride !== null && lowBatteryCountOverride !== undefined) {
        lowBatteryCount = lowBatteryCountOverride;
    }
    
    // 对于调度员，检查是否有分配的换电路线
    if (currentUserRole === 'dispatcher') {
        const myBatteryRoutes = getDispatcherBatteryRoutes();
        if (myBatteryRoutes.length > 0) {
            // 计算分配路线中的低电量车辆总数
            let assignedLowBatteryCount = 0;
            myBatteryRoutes.forEach(route => {
                assignedLowBatteryCount += route.service_count || 0;
            });
            lowBatteryCount = assignedLowBatteryCount;
        } else {
            // 没有分配路线时不显示
            lowBatteryCount = 0;
        }
    }
    
    // 限制低电量车辆数，避免异常值
    lowBatteryCount = Math.min(lowBatteryCount, 100);
    // 确保低电量车辆数不为负数
    lowBatteryCount = Math.max(0, lowBatteryCount);
    console.log('updateSystemStatus called - lowBatteryCountOverride:', lowBatteryCountOverride, 'currentLowBatteryList.length:', currentLowBatteryList.length, 'lowBatteryCount after limit:', lowBatteryCount, 'totalDemandOverride:', totalDemandOverride);

    // 从停车点数据中获取总电动车数和总需求
    let totalBikes = 0;
    let totalDemand = 0;

    // 如果有从热力图传入的总需求，使用传入的值
    if (totalDemandOverride !== null && totalDemandOverride !== undefined) {
        totalDemand = totalDemandOverride;
        // 限制总需求，避免异常值
        totalDemand = Math.min(totalDemand, 200);
        console.log('Using heatmap totalDemand:', totalDemand);
    } else if (lastHeatmapTotalDemand !== null) {
        // 如果之前有热力图数据，保留它
        totalDemand = lastHeatmapTotalDemand;
        console.log('Keeping existing heatmap totalDemand:', totalDemand);
    } else if (window.currentParkingData && window.currentParkingData.length > 0) {
        // 否则使用停车点数据中的需求
        window.currentParkingData.forEach(parking => {
            totalBikes += parking.current || 0;
            totalDemand += parking.demand || 0;
        });
    } else {
        // 如果都没有，使用默认值
        totalBikes = 200;
        totalDemand = 0;
    }

    // 确保总车辆数不为0
    totalBikes = Math.max(totalBikes, 100);
    
    // 计算可用车辆：总车辆数 - 低电量车辆数
    const availableBikes = Math.max(0, totalBikes - lowBatteryCount);

    console.log('Updating DOM - totalBikes:', totalBikes, 'availableBikes:', availableBikes, 'lowBatteryCount:', lowBatteryCount, 'totalDemand:', totalDemand);
    
    // 更新系统状态
    document.getElementById('total-bikes').textContent = totalBikes;
    document.getElementById('available-bikes').textContent = availableBikes;
    // 管理员或有分配路线的调度员显示低电量车辆数
    if (isAdmin || (currentUserRole === 'dispatcher' && lowBatteryCount > 0)) {
        document.getElementById('low-battery-bikes').textContent = lowBatteryCount > 0 ? lowBatteryCount : '-';
    } else if (currentUserRole === 'dispatcher') {
        // 没有分配路线的调度员不显示
        document.getElementById('low-battery-bikes').textContent = '-';
    }
    document.getElementById('total-demand').textContent = totalDemand > 0 ? totalDemand : '-';
}







// 初始化登录页常


function initLoginPage() {



    // 殾置默认常


    document.getElementById('loginUsername').value = 'admin';



    document.getElementById('loginPassword').value = 'admin';



}







// 初始化菜单切换功能


function initMenuSwitch() {



    const menuItems = document.querySelectorAll('.menu-item');



    const modules = document.querySelectorAll('[id$="-module"]');



    



    menuItems.forEach(item => {



        item.addEventListener('click', function() {

            if (this.dataset.hiddenForRole === '1') {
                return;
            }



            // 移除所有菜单项的active类
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            // 添加当前菜单项的active类
            this.classList.add('active');
            // 获取当前模块ID
            const moduleId = this.getAttribute('data-module') + '-module';



            



            // 隐藏所有模块


            modules.forEach(module => {



                module.style.display = 'none';



            });



            



            // 显示当前模块



            const currentModule = document.getElementById(moduleId);



            if (currentModule) {


                currentModule.style.display = 'block';

                updateBatteryOperationButtons();
                if (moduleId === 'battery-module') {
                    hydrateBatteryOpsView();
                }
                if (moduleId === 'feedback-module') {
                    syncFeedbackRoleView();
                    refreshFeedbackList(true);
                }
                updateRightPanelForRole(this.getAttribute('data-module'));


            }



        });



    });



}

function applyRolePermissions() {
    const menuItems = document.querySelectorAll('.menu-item');
    const isAdmin = currentUserRole === 'admin';

    // 为调度员限制菜单访问权限
    menuItems.forEach(item => {
        const module = item.getAttribute('data-module');
        // 调度员只能访问：
        // - 系统概览（有限访问）
        // - 动态调度（仅查看任务）
        // - 电池运维（仅查看负责路线）
        // - 意见反馈（仅提交反馈）
        const allowedModules = ['dashboard', 'dispatch', 'battery', 'feedback'];
        
        if (!isAdmin && !allowedModules.includes(module)) {
            item.style.display = 'none';
            item.dataset.hiddenForRole = '1';
        } else {
            item.style.display = '';
            item.dataset.hiddenForRole = '0';
        }
    });

    // 为调度员限制系统概览模块的功能
    const panelSections = document.querySelectorAll('.panel-section');
    panelSections.forEach(section => {
        const sectionTitle = section.querySelector('.section-title');
        if (sectionTitle && sectionTitle.textContent.includes('方案导出')) {
            section.style.display = isAdmin ? '' : 'none';
        }
    });

    // 为调度员处理图层控制
    const layerControls = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    const checkboxItems = document.querySelectorAll('.checkbox-group .checkbox-item');
    
    // 图层控制配置
    const layersToRemoveForDispatcher = ['layer-smart-parking', 'layer-manual-parking', 'layer-smart-coverage', 'layer-manual-coverage'];
    const layersControllableByDispatcher = ['layer-heatmap', 'layer-boundary', 'layer-dispatch', 'layer-low-battery', 'layer-battery-route'];
    
    // 遍历所有图层控制
    for (let i = 0; i < layerControls.length; i++) {
        const control = layerControls[i];
        const checkboxItem = checkboxItems[i];
        const id = control.id;
        
        if (!isAdmin) {
            // 对于调度员
            if (layersToRemoveForDispatcher.includes(id)) {
                // 移除不需要的图层控制
                if (checkboxItem) {
                    checkboxItem.style.display = 'none';
                }
            } else if (layersControllableByDispatcher.includes(id)) {
                // 调度员可以控制的图层
                control.disabled = false;
            }
        } else {
            // 对于管理员
            // 显示所有图层控制
            if (checkboxItem) {
                checkboxItem.style.display = '';
            }
            // 管理员可以控制所有图层
            control.disabled = false;
        }
    }
    
    // 为调度员设置默认图层显示状态
    if (!isAdmin) {
        // 调度员默认显示的图层
        const defaultVisibleLayers = ['layer-heatmap', 'layer-boundary', 'layer-dispatch', 'layer-low-battery', 'layer-battery-route'];
        layerControls.forEach(control => {
            const id = control.id;
            if (defaultVisibleLayers.includes(id)) {
                control.checked = true;
            } else {
                control.checked = false;
            }
        });
        // 清除调度员在localStorage中的图层状态，使用默认值
        localStorage.removeItem('dispatcherLayers');
        
        // 控制图例显示，只显示调度员可控制的图层对应的图例
        const legendsToHideForDispatcher = ['legend-smart-parking', 'legend-manual-parking', 'legend-smart-coverage', 'legend-manual-coverage', 'legend-heatmap', 'legend-ebike', 'legend-ebike-status'];
        legendsToHideForDispatcher.forEach(legendId => {
            const legendItem = document.getElementById(legendId);
            if (legendItem) {
                legendItem.style.display = 'none';
            }
        });
        
        // 应用默认图层设置
        if (typeof updateLayerVisibility === 'function') {
            updateLayerVisibility();
        }
    } else {
        // 管理员默认显示的图层
        const defaultVisibleLayers = ['layer-smart-parking', 'layer-manual-parking', 'layer-smart-coverage', 'layer-manual-coverage', 'layer-heatmap', 'layer-boundary', 'layer-dispatch', 'layer-low-battery', 'layer-battery-route'];
        layerControls.forEach(control => {
            const id = control.id;
            if (defaultVisibleLayers.includes(id)) {
                control.checked = true;
            } else {
                control.checked = false;
            }
        });
        // 清除管理员在localStorage中的图层状态，使用默认值
        localStorage.removeItem('adminLayers');
        
        // 管理员显示图例，但不包括需求热力图
        const legendsToShowForAdmin = ['legend-smart-parking', 'legend-manual-parking', 'legend-smart-coverage', 'legend-manual-coverage'];
        legendsToShowForAdmin.forEach(legendId => {
            const legendItem = document.getElementById(legendId);
            if (legendItem) {
                legendItem.style.display = '';
            }
        });
        // 隐藏需求热力图图例
        const heatmapLegend = document.getElementById('legend-heatmap');
        if (heatmapLegend) {
            heatmapLegend.style.display = 'none';
        }
    }

    const roleTip = document.getElementById('battery-role-tip');
    if (roleTip) {
        roleTip.style.display = isAdmin ? 'none' : 'block';
    }

    const dispatchRoleTip = document.getElementById('dispatch-role-tip');
    if (dispatchRoleTip) {
        dispatchRoleTip.style.display = isAdmin ? 'none' : 'block';
    }

    const dispatchRouteCountRow = document.getElementById('dispatch-route-count-row');
    if (dispatchRouteCountRow) {
        dispatchRouteCountRow.style.display = isAdmin ? 'none' : '';
    }

    const dispatchRouteDetail = document.getElementById('dispatch-route-detail');
    if (dispatchRouteDetail) {
        dispatchRouteDetail.style.display = isAdmin ? 'none' : '';
    }

    // 为调度员限制动态调度模块的功能
    const runDispatchBtn = document.getElementById('run-dispatch-btn');
    const dispatchAssignmentBtn = document.getElementById('dispatch-assignment-btn');
    if (runDispatchBtn) {
        runDispatchBtn.style.display = isAdmin ? '' : 'none';
    }
    if (dispatchAssignmentBtn) {
        dispatchAssignmentBtn.style.display = isAdmin ? '' : 'none';
    }

    updateBatteryOperationButtons();
    updateDispatchOperationButtons();
    updateAIRoleView();
    updateAIPanelFocus();
    updateRightPanelForRole();
    syncFeedbackRoleView();

    // 调度员登录后默认显示动态调度模块（任务看板）
    if (!isAdmin) {
        const dispatchMenuItem = document.querySelector('[data-module="dispatch"]');
        if (dispatchMenuItem) {
            dispatchMenuItem.click();
        }
    }
}







// 绘制校园边界



function drawCampusBoundary() {



    // 清除旧的校园边界



    if (campusBoundaryLayer && campusBoundaryLayer.length > 0) {



        campusBoundaryLayer.forEach(layer => {



            map.removeOverlay(layer);



        });



        campusBoundaryLayer = [];



    } else {



        campusBoundaryLayer = [];



    }



    



    // 加载校园边界数据



    fetch('data/WHUInfo_Area.geojson')



        .then(response => response.json())



        .then(data => {



            if (data && data.features && data.features.length > 0) {



                // 濇滤出name值为WhuInfo的feature



                const boundaryFeature = data.features.find(feature => {



                    return feature.properties && feature.properties.name === 'WhuInfo';



                });



                



                if (boundaryFeature && boundaryFeature.geometry) {



                    if (boundaryFeature.geometry.type === 'Polygon') {



                        const coordinates = boundaryFeature.geometry.coordinates;



                        coordinates.forEach(ring => {



                            const points = ring.map(coord => {



                                const [lng, lat] = coord;



                                return new BMap.Point(lng, lat);



                            });



                            



                            // 创建边界线（不填充）



                            const polygon = new BMap.Polygon(points, {



                                strokeColor: '#3498db',



                                strokeWeight: 2,



                                strokeOpacity: 0.8,



                                fillColor: 'transparent',



                                fillOpacity: 0 // 不填常


                            });



                            



                            map.addOverlay(polygon);



                            campusBoundaryLayer.push(polygon);



                        });



                    } else if (boundaryFeature.geometry.type === 'MultiPolygon') {



                        const coordinates = boundaryFeature.geometry.coordinates;



                        coordinates.forEach(polygonCoords => {



                            polygonCoords.forEach(ring => {



                                const points = ring.map(coord => {



                                    const [lng, lat] = coord;



                                    return new BMap.Point(lng, lat);



                                });



                                



                                // 创建边界线（不填充）



                                const polygon = new BMap.Polygon(points, {



                                    strokeColor: '#3498db',



                                    strokeWeight: 2,



                                    strokeOpacity: 0.8,



                                    fillColor: 'transparent',



                                    fillOpacity: 0 // 不填常


                                });



                                



                                map.addOverlay(polygon);



                                campusBoundaryLayer.push(polygon);



                            });



                        });



                    }



                    console.log('校园边界绘制完成');



                } else {



                    console.warn('无法找到name为WhuInfo的边界特征');



                }



            } else {



                console.warn('校园边界数据为空');



            }



        })



        .catch(error => {



            console.error('加载校园边界数据失津:', error);



        });



}







// 加载地图数据（不加载POI数据常


function loadMapData() {



    // 只加载道路数据，不加载POI数据



    fetch('data/WHUInfo_Roads_Filtered.geojson')



        .then(response => response.json())



        .then(data => {



            if (data && data.features && data.features.length > 0) {



                data.features.forEach(feature => {



                    if (feature.geometry && feature.geometry.type === 'LineString') {



                        const coordinates = feature.geometry.coordinates;



                        const points = coordinates.map(coord => {



                            const [lng, lat] = coord;



                            return new BMap.Point(lng, lat);



                        });



                        



                        // 创建道路常


                        const polyline = new BMap.Polyline(points, {



                            strokeColor: '#999',



                            strokeWeight: 2,



                            strokeOpacity: 0.6



                        });



                        



                        map.addOverlay(polyline);



                    }



                });



                console.log('道路数据加载完成');



            }



        })



        .catch(error => {



            console.error('加载道路数据失津:', error);



        });



}







// 初始化图层控制


function initLayerControl() {



    // 为其他图层添加事件监听器
    const layerCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="layer-"]');
    layerCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            updateLayerVisibility();
        });
    });

    const dispatchTimeSelect = document.getElementById('dispatch-time');
    if (dispatchTimeSelect) {
        dispatchTimeSelect.addEventListener('change', function () {
            generateSupplyDemandTable(this.value, selectedScheme);
            const tabs = document.querySelectorAll('.tabs .tab');
            tabs.forEach(tab => {
                const tabTime = tab.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
                if (tabTime === this.value) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        });
    }

    updateLayerVisibility();
}







// 更新图层可见性
function setOverlayVisibility(overlay, visible) {
    if (!overlay) {
        return;
    }
    if (typeof overlay.setVisible === 'function') {
        overlay.setVisible(!!visible);
        return;
    }
    if (visible && typeof overlay.show === 'function') {
        overlay.show();
        return;
    }
    if (!visible && typeof overlay.hide === 'function') {
        overlay.hide();
    }
}


function updateLayerVisibility() {



    // 智能选址点和覆盖范围



    const showSmartParking = document.getElementById('layer-smart-parking')?.checked;



    const showSmartCoverage = document.getElementById('layer-smart-coverage')?.checked;



    



    smartMarkers.forEach(item => {



        setOverlayVisibility(item.marker, showSmartParking);



    });



    



    smartCircles.forEach(circle => {



        setOverlayVisibility(circle, showSmartCoverage);



    });



    



    // 人工选址点和覆盖范围



    const showManualParking = document.getElementById('layer-manual-parking')?.checked;



    const showManualCoverage = document.getElementById('layer-manual-coverage')?.checked;



    



    manualMarkers.forEach(item => {



        setOverlayVisibility(item.marker, showManualParking);



    });



    



    manualCircles.forEach(circle => {



        setOverlayVisibility(circle, showManualCoverage);



    });



    



    // 调度路线



    const showDispatch = document.getElementById('layer-dispatch')?.checked;



    dispatchLines.forEach(line => {



        setOverlayVisibility(line, showDispatch);



    });



    dispatchMarkers.forEach(marker => {



        setOverlayVisibility(marker, showDispatch);



    });



    // 低电量车辆
    const showLowBattery = document.getElementById('layer-low-battery')?.checked || false;
    lowBatteryMarkers.forEach(marker => {
        setOverlayVisibility(marker, showLowBattery);
    });

    // 换电路线（含校园中心补给点）
    const showBatteryRoute = document.getElementById('layer-battery-route')?.checked || false;
    batteryRouteLines.forEach(overlay => {
        setOverlayVisibility(overlay, showBatteryRoute);
    });

    // 需求热力图


    const showHeatmap = document.getElementById('layer-heatmap')?.checked || false;



    if (heatmapLayer && typeof heatmapLayer.show === 'function' && typeof heatmapLayer.hide === 'function') {



        if (showHeatmap) {



            heatmapLayer.show();



        } else {



            heatmapLayer.hide();



        }



    }



    heatmapMarkers.forEach(marker => {



        setOverlayVisibility(marker, !!showHeatmap);



    });



    



    // 校园边界



    const showBoundary = document.getElementById('layer-boundary')?.checked;



    if (campusBoundaryLayer && campusBoundaryLayer.length > 0) {





        campusBoundaryLayer.forEach(layer => {





            setOverlayVisibility(layer, showBoundary);





        });





    }





}







// 切换AI对话框显示/隐藏
function toggleAIDialog() {
    const content = document.getElementById('ai-dialog-content');
    if (content) {
        content.classList.toggle('hidden');
    }
}

function toCoveragePercent(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) {
        return 0;
    }
    return num <= 1 ? num * 100 : num;
}

function getCurrentModuleForAI() {
    const activeMenu = document.querySelector('.menu-item.active');
    return activeMenu?.getAttribute('data-module') || 'dashboard';
}

function getComparePayloadForAI() {
    const analysis = getComparisonAnalysis();
    const smart = analysis?.smartMetrics;
    const manual = analysis?.manualMetrics;
    if (!smart || !manual) {
        return null;
    }

    return {
        smart: {
            coverage: toCoveragePercent(smart.coverage),
            avg_distance: Number(smart.avg_distance) || 0,
            balance: Number(smart.balance) || 0,
            capacity: Number(smart.capacity) || 0
        },
        manual: {
            coverage: toCoveragePercent(manual.coverage),
            avg_distance: Number(manual.avg_distance) || 0,
            balance: Number(manual.balance) || 0,
            capacity: Number(manual.capacity) || 0
        },
        recommended_scheme: analysis.recommendedScheme || 'none'
    };
}

function getMetricsPayloadForAI() {
    const metrics = getSchemeMetricsByType(getEffectiveScheme()) || {};
    return {
        coverage: toCoveragePercent(metrics.coverage),
        avg_distance: Number(metrics.avg_distance) || 0,
        balance: Number(metrics.balance) || 0,
        low_battery_count: Array.isArray(currentLowBatteryList) ? currentLowBatteryList.length : 0
    };
}

function extractDispatchRoutesForAI() {
    const features = Array.isArray(latestDispatchResult?.features) ? latestDispatchResult.features : [];
    let lineFeatures = features.filter(f => f?.geometry?.type === 'LineString');

    if (currentUserRole === 'dispatcher') {
        console.log('[DEBUG extractDispatchRoutesForAI] currentUserRole is dispatcher');
        const dispatcherRoutes = getDispatcherRoutes();
        console.log('[DEBUG extractDispatchRoutesForAI] dispatcherRoutes:', JSON.stringify(dispatcherRoutes));
        
        if (dispatcherRoutes.length > 0) {
            // 直接使用dispatcherRoutes中的vehicle_id
            const dispatcherVehicleIds = dispatcherRoutes.map(r => r.vehicle_id).filter(Boolean);
            console.log('[DEBUG extractDispatchRoutesForAI] dispatcherVehicleIds:', dispatcherVehicleIds);
            
            if (dispatcherVehicleIds.length > 0) {
                // 过滤lineFeatures
                const filteredFeatures = [];
                lineFeatures.forEach((f, index) => {
                    const vehicleId = f.properties?.vehicle_id;
                    const match = dispatcherVehicleIds.includes(vehicleId);
                    console.log('[DEBUG extractDispatchRoutesForAI] Feature', index, 'vehicle_id:', vehicleId, 'match:', match);
                    if (match) {
                        filteredFeatures.push(f);
                    }
                });
                lineFeatures = filteredFeatures;
                console.log('[DEBUG extractDispatchRoutesForAI] filtered lineFeatures count:', lineFeatures.length);
            } else {
                // 如果没有有效的vehicle_id，清空路线
                lineFeatures = [];
                console.log('[DEBUG extractDispatchRoutesForAI] no valid vehicle_ids, clearing routes');
            }
        } else {
            // 如果没有分配的路线，清空路线
            lineFeatures = [];
            console.log('[DEBUG extractDispatchRoutesForAI] no assigned routes, clearing routes');
        }
    }

    // 转换为AI需要的格式
    const routes = lineFeatures.map((feature, idx) => {
        const props = feature.properties || {};
        return {
            name: props.route_name || `路线${idx + 1}`,
            vehicle_id: props.vehicle_id || `vehicle_${idx + 1}`,
            from: props.from || '供应点',
            to: props.to || '需求点',
            transfer: Number(props.amount || props.transfer || 0) || 0,
            shortage: Number(props.shortage || 0) || 0,
            distance_m: Number(props.total_distance_m || props.distance_m || props.distance || 0) || 0
        };
    });
    
    console.log('[DEBUG extractDispatchRoutesForAI] returning routes:', JSON.stringify(routes));
    return routes;
}

function estimateDispatchShortageCount() {
    const rows = document.querySelectorAll('#supply-demand-body tr');
    if (!rows.length) {
        return 0;
    }

    let shortageCount = 0;
    rows.forEach(row => {
        const statusCell = row.cells?.[3];
        if (statusCell && statusCell.textContent.includes('不足')) {
            shortageCount += 1;
        }
    });
    return shortageCount;
}

function getDispatchPayloadForAI() {
    const routes = extractDispatchRoutesForAI();
    const payload = {
        routes: routes
    };

    const totalDistance = routes.reduce((sum, route) => sum + (Number(route.distance_m) || 0), 0);
    if (totalDistance > 0) {
        payload.total_distance_m = totalDistance;
    }

    const shortageCount = estimateDispatchShortageCount();
    if (shortageCount > 0) {
        payload.shortage_count = shortageCount;
    }

    return payload;
}

function getBatteryPayloadForAI() {
    const lowBatteryCount = Array.isArray(currentLowBatteryList) ? currentLowBatteryList.length : 0;
    if (!lowBatteryCount && !batteryLastRouteResult) {
        return null;
    }

    // 构建换电路线详细信息
    const batteryRoutes = [];
    if (batteryLastRouteResult && batteryLastRouteResult.routes) {
        batteryLastRouteResult.routes.forEach((route, idx) => {
            const orderedBikes = Array.isArray(route.ordered_bikes) ? route.ordered_bikes : [];
            batteryRoutes.push({
                name: route.route_name || route.name || `换电路线${idx + 1}`,
                vehicle_name: route.vehicle_name || route.vehicle_id || `换电运维车${idx + 1}`,
                start: route.start || route.from || '补给点',
                end: route.end || route.to || '补给点',
                service_count: orderedBikes.length,
                distance_m: route.total_distance_m || route.distance_m || route.total_distance || 0,
                ordered_bikes: orderedBikes
            });
        });
    }

    return {
        low_battery_count: lowBatteryCount,
        route_count: Number(batteryLastRouteResult?.route_count || 0) || batteryRoutes.length || 0,
        capacity_per_trip: Number(batteryLastRouteResult?.capacity_per_trip || getBatteryCapacityValue()) || 0,
        total_distance_m: Number(batteryLastRouteResult?.total_distance_m || 0),
        routes: batteryRoutes
    };
}

function setTextResult(cardId, contentId, text) {
    const card = document.getElementById(cardId);
    const content = document.getElementById(contentId);
    if (card && content) {
        content.textContent = text;
        card.style.display = 'block';
    }
}

function escapeHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function getFeedbackReporterName() {
    return String(currentUsername || '').trim() || 'admin';
}

function getFeedbackReporterDisplay() {
    const username = getFeedbackReporterName();
    const roleText = currentUserRole === 'admin' ? '管理员' : '调度员';
    return `${roleText}（${username}）`;
}

function getFeedbackStatusClass(status) {
    return status === '已处理' ? 'done' : 'pending';
}

function getFeedbackPriorityClass(priority) {
    if (priority === '紧急') {
        return 'high';
    }
    if (priority === '较急') {
        return 'medium';
    }
    return 'normal';
}

function syncFeedbackRoleView() {
    const isAdmin = currentUserRole === 'admin';
    const createPanel = document.getElementById('feedback-create-panel');
    const adminPanel = document.getElementById('feedback-admin-panel');
    const statGrid = document.getElementById('feedback-stat-grid');
    const listTitle = document.getElementById('feedback-list-title');
    const moduleTitle = document.getElementById('feedback-module-title');
    const moduleSubtitle = document.getElementById('feedback-module-subtitle');
    const statusFilter = document.getElementById('feedback-status-filter');

    feedbackEditingId = null;

    if (createPanel) {
        createPanel.style.display = isAdmin ? 'none' : '';
    }
    if (adminPanel) {
        adminPanel.style.display = isAdmin ? '' : 'none';
    }
    if (statGrid) {
        statGrid.style.display = isAdmin ? 'grid' : 'none';
    }
    if (listTitle) {
        listTitle.textContent = isAdmin ? '全部反馈列表' : '我的反馈记录';
    }
    if (moduleTitle) {
        moduleTitle.textContent = isAdmin ? '反馈处理' : '意见反馈';
    }
    if (moduleSubtitle) {
        moduleSubtitle.textContent = isAdmin
            ? '查看全部反馈并完成处理闭环'
            : '提交执行过程中的问题与建议';
    }

    if (statusFilter && !isAdmin) {
        statusFilter.value = 'all';
    }

    renderFeedbackTableHead(isAdmin);
    renderFeedbackTable([]);
}

function renderFeedbackStats(items) {
    const totalEl = document.getElementById('feedback-stat-total');
    const pendingEl = document.getElementById('feedback-stat-pending');
    const doneEl = document.getElementById('feedback-stat-done');

    const list = Array.isArray(items) ? items : [];
    const total = list.length;
    const pending = list.filter(item => String(item?.status || '') !== '已处理').length;
    const done = list.filter(item => String(item?.status || '') === '已处理').length;

    if (totalEl) totalEl.textContent = String(total);
    if (pendingEl) pendingEl.textContent = String(pending);
    if (doneEl) doneEl.textContent = String(done);
}

function renderFeedbackTableHead(isAdmin) {
    const thead = document.getElementById('feedback-table-head');
    if (!thead) {
        return;
    }

    if (isAdmin) {
        thead.innerHTML = `
            <tr>
                <th class="feedback-col-id">编号</th>
                <th class="feedback-col-reporter">提交人</th>
                <th class="feedback-col-type">类型</th>
                <th class="feedback-col-related">关联任务/路线</th>
                <th class="feedback-col-description">描述</th>
                <th class="feedback-col-priority">紧急程度</th>
                <th class="feedback-col-time">提交时间</th>
                <th class="feedback-col-status">状态</th>
                <th class="feedback-col-note">处理备注</th>
                <th class="feedback-col-action">操作</th>
            </tr>
        `;
    } else {
        thead.innerHTML = `
            <tr>
                <th class="feedback-col-id">编号</th>
                <th class="feedback-col-type">类型</th>
                <th class="feedback-col-related">关联任务/路线</th>
                <th class="feedback-col-description">描述</th>
                <th class="feedback-col-priority">紧急程度</th>
                <th class="feedback-col-time">提交时间</th>
                <th class="feedback-col-status">状态</th>
                <th class="feedback-col-note">处理备注</th>
                <th class="feedback-col-action">操作</th>
            </tr>
        `;
    }
}

function getFeedbackReporterText(item) {
    const reporterDisplay = String(item?.reporter_display || '').trim();
    if (reporterDisplay) {
        return reporterDisplay;
    }

    const roleText = String(item?.role || '').toLowerCase() === 'admin' ? '管理员' : '调度员';
    const reporter = String(item?.reporter || '-').trim() || '-';
    return `${roleText}（${reporter}）`;
}

function getFeedbackTextCell(text, className) {
    const raw = String(text || '').trim();
    const normalized = raw || '-';
    const escaped = escapeHtml(normalized);
    return `<td class="${className}" title="${escaped}"><div class="feedback-text-cell">${escaped}</div></td>`;
}

function renderFeedbackTable(items) {
    const tbody = document.getElementById('feedback-table-body');
    if (!tbody) {
        return;
    }

    const isAdmin = currentUserRole === 'admin';
    const colspan = isAdmin ? 10 : 9;

    renderFeedbackTableHead(isAdmin);

    if (!Array.isArray(items) || items.length === 0) {
        const statusFilter = document.getElementById('feedback-status-filter')?.value || 'all';
        const emptyText = isAdmin
            ? (statusFilter === 'all' ? '暂无反馈记录' : '当前筛选条件下暂无反馈记录')
            : '暂无你提交的反馈记录';
        tbody.innerHTML = `<tr><td colspan="${colspan}" class="feedback-empty">${emptyText}</td></tr>`;
        return;
    }

    const rows = items.map(item => {
        const id = Number(item?.id) || '-';
        const reporter = escapeHtml(getFeedbackReporterText(item));
        const type = escapeHtml(String(item?.type || '其他').trim() || '其他');
        const relatedTask = String(item?.related_task || '').trim() || '-';
        const descriptionRaw = String(item?.description || '').trim() || '-';
        const priorityText = escapeHtml(item?.priority || '一般');
        const statusText = escapeHtml(item?.status || '待处理');
        const noteRaw = String(item?.admin_note || '').trim() || '-';
        const createdAt = escapeHtml(item?.created_at || '-');
        const statusClass = getFeedbackStatusClass(item?.status);
        const priorityClass = getFeedbackPriorityClass(item?.priority);
        const isEditing = isAdmin && feedbackEditingId === id;

        if (isAdmin) {
            const canClear = String(item?.status || '') === '已处理';
            const mainRow = `
                <tr>
                    <td class="feedback-col-id">${id}</td>
                    <td class="feedback-col-reporter">${reporter}</td>
                    <td class="feedback-col-type">${type}</td>
                    ${getFeedbackTextCell(relatedTask, 'feedback-col-related feedback-cell-related')}
                    ${getFeedbackTextCell(descriptionRaw, 'feedback-col-description feedback-cell-description')}
                    <td class="feedback-col-priority"><span class="feedback-priority ${priorityClass}">${priorityText}</span></td>
                    <td class="feedback-col-time">${createdAt}</td>
                    <td class="feedback-col-status"><span class="feedback-status ${statusClass}">${statusText}</span></td>
                    ${getFeedbackTextCell(noteRaw, 'feedback-col-note feedback-cell-note')}
                    <td class="feedback-col-action">
                        <div class="feedback-action-stack">
                            <button class="btn btn-secondary feedback-action-btn feedback-handle-btn" data-feedback-id="${id}">${isEditing ? '收起' : '处理'}</button>
                            ${canClear ? `<button class="btn btn-danger feedback-action-btn feedback-clear-btn" data-feedback-id="${id}">清除</button>` : ''}
                        </div>
                    </td>
                </tr>
            `;

            if (!isEditing) {
                return mainRow;
            }

            const editorRow = `
                <tr class="feedback-editor-row">
                    <td colspan="10">
                        <div class="feedback-editor-grid">
                            <select class="feedback-action-select" id="feedback-status-${id}">
                                <option value="待处理" ${item?.status === '待处理' ? 'selected' : ''}>待处理</option>
                                <option value="已处理" ${item?.status === '已处理' ? 'selected' : ''}>已处理</option>
                            </select>
                            <textarea class="feedback-note-input" id="feedback-note-${id}" rows="2" placeholder="填写处理备注">${escapeHtml(noteRaw === '-' ? '' : noteRaw)}</textarea>
                            <button class="btn btn-success feedback-action-btn feedback-save-btn" data-feedback-id="${id}">保存</button>
                            <button class="btn btn-secondary feedback-action-btn feedback-cancel-btn" data-feedback-id="${id}">取消</button>
                        </div>
                    </td>
                </tr>
            `;
            return mainRow + editorRow;
        }

        return `
            <tr>
                <td class="feedback-col-id">${id}</td>
                <td class="feedback-col-type">${type}</td>
                ${getFeedbackTextCell(relatedTask, 'feedback-col-related feedback-cell-related')}
                ${getFeedbackTextCell(descriptionRaw, 'feedback-col-description feedback-cell-description')}
                <td class="feedback-col-priority"><span class="feedback-priority ${priorityClass}">${priorityText}</span></td>
                <td class="feedback-col-time">${createdAt}</td>
                <td class="feedback-col-status"><span class="feedback-status ${statusClass}">${statusText}</span></td>
                ${getFeedbackTextCell(noteRaw, 'feedback-col-note feedback-cell-note')}
                <td class="feedback-col-action">
                    ${String(item?.status || '') === '待处理'
                        ? `<button class="btn btn-danger feedback-action-btn feedback-revoke-btn" data-feedback-id="${id}">撤销</button>`
                        : '-'}
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = rows.join('');

    if (!isAdmin) {
        document.querySelectorAll('.feedback-revoke-btn').forEach(btn => {
            if (btn.dataset.bound === '1') {
                return;
            }
            btn.dataset.bound = '1';
            btn.addEventListener('click', async function() {
                const feedbackId = Number(this.getAttribute('data-feedback-id'));
                await revokeFeedbackItem(feedbackId);
            });
        });
        return;
    }

    document.querySelectorAll('.feedback-handle-btn').forEach(btn => {
        if (btn.dataset.bound === '1') {
            return;
        }
        btn.dataset.bound = '1';
        btn.addEventListener('click', function() {
            const feedbackId = Number(this.getAttribute('data-feedback-id'));
            feedbackEditingId = feedbackEditingId === feedbackId ? null : feedbackId;
            renderFeedbackTable(applyFeedbackFilter(feedbackListCache));
        });
    });

    document.querySelectorAll('.feedback-save-btn').forEach(btn => {
        if (btn.dataset.bound === '1') {
            return;
        }
        btn.dataset.bound = '1';
        btn.addEventListener('click', async function() {
            const feedbackId = Number(this.getAttribute('data-feedback-id'));
            await updateFeedbackItem(feedbackId);
        });
    });

    document.querySelectorAll('.feedback-cancel-btn').forEach(btn => {
        if (btn.dataset.bound === '1') {
            return;
        }
        btn.dataset.bound = '1';
        btn.addEventListener('click', function() {
            feedbackEditingId = null;
            renderFeedbackTable(applyFeedbackFilter(feedbackListCache));
        });
    });

    document.querySelectorAll('.feedback-clear-btn').forEach(btn => {
        if (btn.dataset.bound === '1') {
            return;
        }
        btn.dataset.bound = '1';
        btn.addEventListener('click', async function() {
            const feedbackId = Number(this.getAttribute('data-feedback-id'));
            await clearFeedbackItem(feedbackId);
        });
    });
}

function applyFeedbackFilter(items) {
    if (currentUserRole !== 'admin') {
        return Array.isArray(items) ? items : [];
    }

    const statusFilter = document.getElementById('feedback-status-filter')?.value || 'all';
    if (statusFilter === 'all') {
        return Array.isArray(items) ? items : [];
    }

    return (Array.isArray(items) ? items : []).filter(item => String(item?.status || '') === statusFilter);
}

async function refreshFeedbackList(silent) {
    const isAdmin = currentUserRole === 'admin';
    const requestRole = currentUserRole;
    const requestSeq = ++feedbackRequestSeq;
    const params = new URLSearchParams({
        role: currentUserRole,
        reporter: getFeedbackReporterName(),
        _ts: String(Date.now())
    });

    try {
        const response = await fetch(`/api/feedback/list?${params.toString()}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();

        if (requestSeq !== feedbackRequestSeq || requestRole !== currentUserRole) {
            return;
        }

        feedbackListCache = Array.isArray(data?.items) ? data.items : [];

        if (isAdmin) {
            renderFeedbackStats(feedbackListCache);
        }

        const viewItems = applyFeedbackFilter(feedbackListCache);
        renderFeedbackTable(viewItems);
    } catch (error) {
        if (requestSeq !== feedbackRequestSeq || requestRole !== currentUserRole) {
            return;
        }
        console.error('获取反馈列表失败:', error);
        if (isAdmin) {
            renderFeedbackStats([]);
        }
        renderFeedbackTable([]);
        if (!silent) {
            showToast('反馈列表加载失败，请稍后重试');
        }
    }
}

async function submitFeedback() {
    if (currentUserRole === 'admin') {
        showToast('管理员账号不需要提交反馈');
        return;
    }

    const type = document.getElementById('feedback-type')?.value || '其他';
    const relatedTask = (document.getElementById('feedback-related-task')?.value || '').trim();
    const descriptionEl = document.getElementById('feedback-description');
    const description = (descriptionEl?.value || '').trim();
    const priority = document.getElementById('feedback-priority')?.value || '一般';

    if (!description) {
        showToast('请填写详细描述后再提交');
        return;
    }

    try {
        const response = await fetch('/api/feedback/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                reporter: getFeedbackReporterName(),
                reporter_display: getFeedbackReporterDisplay(),
                role: currentUserRole,
                type,
                related_task: relatedTask,
                description,
                priority
            })
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err?.message || `HTTP ${response.status}`);
        }

        if (descriptionEl) {
            descriptionEl.value = '';
        }
        const relatedTaskEl = document.getElementById('feedback-related-task');
        if (relatedTaskEl) {
            relatedTaskEl.value = '';
        }
        const priorityEl = document.getElementById('feedback-priority');
        if (priorityEl) {
            priorityEl.value = '一般';
        }
        const typeEl = document.getElementById('feedback-type');
        if (typeEl) {
            typeEl.value = '路线执行问题';
        }

        showToast('反馈提交成功');
        await refreshFeedbackList(true);
    } catch (error) {
        console.error('提交反馈失败:', error);
        showToast(`反馈提交失败：${error.message || '未知错误'}`);
    }
}

async function updateFeedbackItem(feedbackId) {
    if (currentUserRole !== 'admin') {
        showToast('当前角色无权限处理反馈');
        return;
    }

    const statusEl = document.getElementById(`feedback-status-${feedbackId}`);
    const noteEl = document.getElementById(`feedback-note-${feedbackId}`);
    const status = statusEl?.value || '待处理';
    const adminNote = (noteEl?.value || '').trim();

    try {
        const response = await fetch('/api/feedback/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: feedbackId,
                role: currentUserRole,
                status: status,
                admin_note: adminNote
            })
        });

        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error(payload?.message || `HTTP ${response.status}`);
        }

        const updatedItem = payload?.item;
        if (updatedItem && Number(updatedItem.id) === Number(feedbackId)) {
            feedbackListCache = (Array.isArray(feedbackListCache) ? feedbackListCache : []).map(item =>
                Number(item?.id) === Number(feedbackId) ? updatedItem : item
            );
        }

        showToast('反馈处理已保存');
        feedbackEditingId = null;
        if (currentUserRole === 'admin') {
            renderFeedbackStats(feedbackListCache);
        }
        renderFeedbackTable(applyFeedbackFilter(feedbackListCache));
        await refreshFeedbackList(true);
    } catch (error) {
        console.error('更新反馈失败:', error);
        showToast(`更新失败：${error.message || '未知错误'}`);
    }
}

async function revokeFeedbackItem(feedbackId) {
    if (currentUserRole === 'admin') {
        showToast('管理员账号不能撤销反馈');
        return;
    }

    if (!Number.isFinite(feedbackId) || feedbackId <= 0) {
        showToast('反馈编号无效');
        return;
    }

    if (!window.confirm('确认撤销该条待处理反馈吗？')) {
        return;
    }

    try {
        const response = await fetch('/api/feedback/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: feedbackId,
                role: currentUserRole,
                reporter: getFeedbackReporterName(),
                action: 'revoke'
            })
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err?.message || `HTTP ${response.status}`);
        }

        showToast('反馈已撤销');
        await refreshFeedbackList(true);
    } catch (error) {
        console.error('撤销反馈失败:', error);
        showToast(`撤销失败：${error.message || '未知错误'}`);
    }
}

async function clearFeedbackItem(feedbackId) {
    if (currentUserRole !== 'admin') {
        showToast('当前角色无权限清空反馈');
        return;
    }

    if (!Number.isFinite(feedbackId) || feedbackId <= 0) {
        showToast('反馈编号无效');
        return;
    }

    if (!window.confirm('确认清空该条已处理反馈吗？')) {
        return;
    }

    try {
        const response = await fetch('/api/feedback/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: feedbackId,
                role: currentUserRole,
                action: 'clear'
            })
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err?.message || `HTTP ${response.status}`);
        }

        showToast('已清空该条反馈');
        feedbackEditingId = null;
        await refreshFeedbackList(true);
    } catch (error) {
        console.error('清空反馈失败:', error);
        showToast(`清空失败：${error.message || '未知错误'}`);
    }
}

function initFeedbackModuleEvents() {
    const submitBtn = document.getElementById('feedback-submit-btn');
    const refreshBtn = document.getElementById('feedback-refresh-btn');
    const statusFilter = document.getElementById('feedback-status-filter');

    if (submitBtn && !submitBtn.dataset.bound) {
        submitBtn.dataset.bound = '1';
        submitBtn.addEventListener('click', function() {
            submitFeedback();
        });
    }

    if (refreshBtn && !refreshBtn.dataset.bound) {
        refreshBtn.dataset.bound = '1';
        refreshBtn.addEventListener('click', function() {
            refreshFeedbackList(false);
        });
    }

    if (statusFilter && !statusFilter.dataset.bound) {
        statusFilter.dataset.bound = '1';
        statusFilter.addEventListener('change', function() {
            if (currentUserRole === 'admin') {
                feedbackEditingId = null;
                renderFeedbackTable(applyFeedbackFilter(feedbackListCache));
            }
        });
    }

    syncFeedbackRoleView();
}

// function renderCompareReport(result) {
//     const card = document.getElementById('ai-report-card');
//     const content = document.getElementById('ai-report-content');
//     if (!card || !content) {
//         return;
//     }

//     const rawText = String(result?.text || AI_RESULT_FALLBACK_TEXT).trim();
//     const recommended = String(result?.recommended_scheme || '待评估').trim();
//     const sentences = rawText
//         .split(/[。！？!?]/)
//         .map(item => item.trim())
//         .filter(Boolean)
//         .slice(0, 6);

//     if (!sentences.length) {
//         content.textContent = AI_RESULT_FALLBACK_TEXT;
//         card.style.display = 'block';
//         return;
//     }

//     const summaryHtml = `<div class="ai-report-summary">推荐方案：<strong>${escapeHtml(recommended)}</strong></div>`;
//     const listHtml = `<ul class="ai-report-list">${sentences
//         .map(item => `<li>${escapeHtml(item)}。</li>`)
//         .join('')}</ul>`;

//     content.innerHTML = summaryHtml + listHtml;
//     card.style.display = 'block';
// }

function renderCompareReport(result) {
    const card = document.getElementById('ai-report-card');
    const content = document.getElementById('ai-report-content');
    if (!card || !content) {
        return;
    }

    const rawText = String(result?.text || AI_RESULT_FALLBACK_TEXT).trim();
    const sentences = rawText
        .split(/[。！？!?]/)
        .map(item => item.trim())
        .filter(Boolean)
        .slice(0, 6);

    if (!sentences.length) {
        content.textContent = AI_RESULT_FALLBACK_TEXT;
        card.style.display = 'block';
        return;
    }

    const listHtml = `<ul class="ai-report-list">${sentences
        .map(item => `<li>${escapeHtml(item)}。</li>`)
        .join('')}</ul>`;

    content.innerHTML = listHtml;
    card.style.display = 'block';
}

function renderAIList(cardId, listId, items) {
    const card = document.getElementById(cardId);
    const list = document.getElementById(listId);
    if (!card || !list) {
        return;
    }

    list.innerHTML = '';
    const bullets = Array.isArray(items) ? items : [];
    if (!bullets.length) {
        const emptyItem = document.createElement('li');
        emptyItem.textContent = AI_RESULT_FALLBACK_TEXT;
        list.appendChild(emptyItem);
    } else {
        bullets.forEach(item => {
            const li = document.createElement('li');
            li.textContent = String(item);
            list.appendChild(li);
        });
    }
    card.style.display = 'block';
}

async function postAIData(endpoint, payload) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
}

function updateAIPanelFocus() {
    const isAdmin = currentUserRole === 'admin';
    const sections = {
        'ai-compare-section': isAdmin,
        'ai-priority-section': true,
        'ai-risk-section': true,
        'ai-decision-section': isAdmin,
        'ai-chat-section': true
    };

    Object.entries(sections).forEach(([id, visible]) => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = visible ? '' : 'none';
        }
    });
}

function updateAIRoleView() {
    const roleFocus = document.getElementById('ai-role-focus');
    const compareInstruction = document.getElementById('ai-compare-instruction');
    const isAdmin = currentUserRole === 'admin';

    if (roleFocus) {
        roleFocus.textContent = isAdmin
            ? '当前重点：方案解释、调度待办、风险预警、决策问答。'
            : '当前重点：调度待办、风险提示、受限问答。';
    }

    if (compareInstruction) {
        compareInstruction.textContent = isAdmin
            ? '对比智能选址与人工选址指标，生成当前推荐方案解释。'
            : '仅供查看当前推荐方案解释。';
    }
}

function isAIPanelSessionStale(requestToken) {
    return requestToken !== aiPanelSessionToken;
}

async function generateAIReport() {
    const requestToken = aiPanelSessionToken;
    const compare = getComparePayloadForAI();
    if (!compare) {
        showToast('请先运行智能选址和人工选址后再生成方案解释');
        setTextResult('ai-report-card', 'ai-report-content', AI_RESULT_FALLBACK_TEXT);
        return;
    }

    try {
        const result = await postAIData('/api/ai/compare-report', {
            role: currentUserRole,
            compare: compare
        });
        if (isAIPanelSessionStale(requestToken)) {
            return;
        }
        renderCompareReport(result);
    } catch (error) {
        if (isAIPanelSessionStale(requestToken)) {
            return;
        }
        console.error('生成方案解释失败:', error);
        setTextResult('ai-report-card', 'ai-report-content', AI_RESULT_FALLBACK_TEXT);
    }
}

async function generateAIPriority() {
    const requestToken = aiPanelSessionToken;
    const dispatch = getDispatchPayloadForAI();
    const battery = getBatteryPayloadForAI();
    
    // For dispatchers, check if they have assigned routes
    if (currentUserRole === 'dispatcher') {
        const myRoutes = getDispatcherRoutes();
        const myBatteryRoutes = getDispatcherBatteryRoutes();
        
        if (myRoutes.length === 0 && myBatteryRoutes.length === 0) {
            showToast('当前未分配任何任务，请联系管理员分配后再试');
            renderAIList('ai-priority-card', 'ai-priority-list', ['当前未分配任何任务，请联系管理员分配后再试']);
            return;
        }
        
        // 转换调度员分配的路线为AI后端需要的格式
        if (myRoutes.length > 0) {
            const allRoutes = extractDispatchRoutesForAI();
            console.log('[DEBUG generateAIPriority] filtered dispatch routes:', JSON.stringify(allRoutes));
            dispatch.routes = allRoutes;
        } else {
            // 如果没有分配的调度路线，清空调度路线列表
            dispatch.routes = [];
            console.log('[DEBUG generateAIPriority] no assigned dispatch routes, clearing routes');
        }
        
        // 处理换电路线：只显示分配给自己的
        if (battery) {
            if (myBatteryRoutes.length > 0) {
                battery.routes = myBatteryRoutes;
                battery.route_count = myBatteryRoutes.length;
                console.log('[DEBUG generateAIPriority] using assigned battery routes:', JSON.stringify(myBatteryRoutes));
            } else {
                // 如果没有分配的换电路线，清空换电路线列表
                battery.routes = [];
                battery.route_count = 0;
                console.log('[DEBUG generateAIPriority] no assigned battery routes, clearing routes');
            }
        } else {
            // 如果没有battery对象，创建一个空的
            console.log('[DEBUG generateAIPriority] no battery object, creating empty');
        }
    } else if (!Array.isArray(dispatch.routes) || dispatch.routes.length === 0) {
        if (!battery || !battery.routes || battery.routes.length === 0) {
            showToast('请先运行调度优化或电池运维后再生成调度待办');
            renderAIList('ai-priority-card', 'ai-priority-list', [AI_RESULT_FALLBACK_TEXT]);
            return;
        }
    }

    try {
        console.log('[DEBUG generateAIPriority] sending to backend:', JSON.stringify({
            role: currentUserRole,
            dispatch: dispatch,
            battery: battery || undefined
        }));
        const result = await postAIData('/api/ai/priority', {
            role: currentUserRole,
            dispatch: dispatch,
            battery: battery || undefined
        });
        if (isAIPanelSessionStale(requestToken)) {
            return;
        }
        renderAIList('ai-priority-card', 'ai-priority-list', result.bullets || []);
    } catch (error) {
        if (isAIPanelSessionStale(requestToken)) {
            return;
        }
        console.error('生成调度待办失败:', error);
        renderAIList('ai-priority-card', 'ai-priority-list', [AI_RESULT_FALLBACK_TEXT]);
    }
}

async function generateAIRisk() {
    const requestToken = aiPanelSessionToken;
    const metrics = getMetricsPayloadForAI();
    const dispatch = getDispatchPayloadForAI();
    const battery = getBatteryPayloadForAI();
    const compare = getComparePayloadForAI();

    // For dispatchers, check if they have assigned routes
    if (currentUserRole === 'dispatcher') {
        const myRoutes = getDispatcherRoutes();
        const myBatteryRoutes = getDispatcherBatteryRoutes();
        
        if (myRoutes.length === 0 && myBatteryRoutes.length === 0) {
            showToast('当前未分配任何任务，请联系管理员分配后再试');
            renderAIList('ai-risk-card', 'ai-risk-list', ['当前未分配任何任务，请联系管理员分配后再试']);
            return;
        }
        
        // 转换调度员分配的路线为AI后端需要的格式
        if (myRoutes.length > 0) {
            const allRoutes = extractDispatchRoutesForAI();
            dispatch.routes = allRoutes;
        } else {
            // 如果没有分配调度路线，清空调度路线数据
            dispatch.routes = [];
        }
        
        // 处理换电路线
        if (myBatteryRoutes.length > 0 && battery) {
            battery.routes = myBatteryRoutes;
            battery.route_count = myBatteryRoutes.length;
        } else if (battery) {
            battery.routes = [];
            battery.route_count = 0;
        }
    }

    const hasMetrics = Number(metrics.coverage) > 0 || Number(metrics.avg_distance) > 0 || Number(metrics.balance) > 0;
    const hasDispatch = Array.isArray(dispatch.routes) && dispatch.routes.length > 0;
    const hasBattery = battery && (Number(battery.low_battery_count) > 0 || (Array.isArray(battery.routes) && battery.routes.length > 0));

    if (!hasMetrics && !hasDispatch && !hasBattery) {
        showToast('\xe8��先运行选址或调度模块后再生成风险提示');
        renderAIList('ai-risk-card', 'ai-risk-list', [AI_RESULT_FALLBACK_TEXT]);
        return;
    }

    try {
        const result = await postAIData('/api/ai/risk', {
            role: currentUserRole,
            metrics: metrics,
            dispatch: dispatch,
            compare: compare || undefined,
            battery: battery || undefined
        });
        if (isAIPanelSessionStale(requestToken)) {
            return;
        }
        renderAIList('ai-risk-card', 'ai-risk-list', result.bullets || []);
    } catch (error) {
        if (isAIPanelSessionStale(requestToken)) {
            return;
        }
        console.error('生成风险预警失败:', error);
        renderAIList('ai-risk-card', 'ai-risk-list', [AI_RESULT_FALLBACK_TEXT]);
    }
}

async function generateAIDecision() {
    const requestToken = aiPanelSessionToken;
    const preference = document.getElementById('ai-preference-select')?.value || 'coverage';
    const compare = getComparePayloadForAI();
    const dispatch = getDispatchPayloadForAI();
    const battery = getBatteryPayloadForAI();

    // For dispatchers, check if they have assigned routes
    if (currentUserRole === 'dispatcher') {
        const myRoutes = getDispatcherRoutes();
        const myBatteryRoutes = getDispatcherBatteryRoutes();
        
        if (myRoutes.length === 0 && myBatteryRoutes.length === 0) {
            showToast('当前未分配任何任务，请联系管理员分配后再试');
            setTextResult('ai-decision-card', 'ai-decision-content', '当前未分配任何任务，请联系管理员分配后再试');
            return;
        }
        
        // 转换调度员分配的路线为AI后端需要的格式
            if (myRoutes.length > 0) {
                const myVehicleIds = new Set(myRoutes.map(r => r.vehicle_id || r.route_id));
                console.log('[DEBUG generateAIPriority] myVehicleIds:', Array.from(myVehicleIds));
                const allRoutes = extractDispatchRoutesForAI();
                console.log('[DEBUG generateAIPriority] allRoutes:', JSON.stringify(allRoutes));
                const filteredRoutes = allRoutes.filter(route => {
                    // 直接基于vehicle_id匹配
                    const match = myVehicleIds.has(route.vehicle_id) || 
                        myVehicleIds.has(route.name) ||
                        myVehicleIds.has(route.route_id);
                    console.log('[DEBUG generateAIPriority] route:', route, 'match:', match);
                    return match;
                });
                console.log('[DEBUG generateAIPriority] filteredRoutes:', JSON.stringify(filteredRoutes));
                dispatch.routes = filteredRoutes;
            }
        
        // 如果有分配给自己的换电路线，也传递给后端
        if (myBatteryRoutes.length > 0 && battery) {
            battery.routes = myBatteryRoutes;
            battery.route_count = myBatteryRoutes.length;
        }
    } else if (!compare && (!Array.isArray(dispatch.routes) || dispatch.routes.length === 0)) {
        showToast('请先运行相关模块后再生成决策建议');
        setTextResult('ai-decision-card', 'ai-decision-content', AI_RESULT_FALLBACK_TEXT);
        return;
    }

    try {
        const result = await postAIData('/api/ai/decision', {
            role: currentUserRole,
            preference: preference,
            compare: compare || undefined,
            dispatch: dispatch,
            battery: battery || undefined
        });
        if (isAIPanelSessionStale(requestToken)) {
            return;
        }
        setTextResult('ai-decision-card', 'ai-decision-content', result.text || AI_RESULT_FALLBACK_TEXT);
    } catch (error) {
        if (isAIPanelSessionStale(requestToken)) {
            return;
        }
        console.error('生成决策建议失败:', error);
        setTextResult('ai-decision-card', 'ai-decision-content', AI_RESULT_FALLBACK_TEXT);
    }
}

async function submitAIChat() {
    const requestToken = aiPanelSessionToken;
    const input = document.getElementById('ai-chat-question');
    const question = String(input?.value || '').trim();
    if (!question) {
        showToast('请输入业务问题后再发送');
        return;
    }

    const preference = document.getElementById('ai-preference-select')?.value || 'coverage';
    const compare = getComparePayloadForAI();
    const dispatch = getDispatchPayloadForAI();
    const battery = getBatteryPayloadForAI();
    const metrics = getMetricsPayloadForAI();

    try {
        const result = await postAIData('/api/ai/chat', {
            role: currentUserRole,
            question: question,
            context: {
                page: getCurrentModuleForAI(),
                compare: compare || undefined,
                dispatch: dispatch,
                battery: battery || undefined,
                metrics: metrics,
                preference: preference
            }
        });

        if (isAIPanelSessionStale(requestToken)) {
            return;
        }

        const wrapper = document.getElementById('ai-chat-last');
        const qEl = document.getElementById('ai-chat-last-q');
        const aEl = document.getElementById('ai-chat-last-a');
        if (wrapper && qEl && aEl) {
            qEl.textContent = `问：${question}`;
            aEl.textContent = `答：${result.answer || AI_RESULT_FALLBACK_TEXT}`;
            wrapper.style.display = 'block';
        }
        if (input) {
            input.value = '';
        }
    } catch (error) {
        if (isAIPanelSessionStale(requestToken)) {
            return;
        }
        console.error('受限问答失败:', error);
        const wrapper = document.getElementById('ai-chat-last');
        const qEl = document.getElementById('ai-chat-last-q');
        const aEl = document.getElementById('ai-chat-last-a');
        if (wrapper && qEl && aEl) {
            qEl.textContent = `问：${question}`;
            aEl.textContent = `答：${AI_RESULT_FALLBACK_TEXT}`;
            wrapper.style.display = 'block';
        }
    }
}

function initAIPanelEvents() {
    const input = document.getElementById('ai-chat-question');
    if (!input || input.dataset.boundEnter === '1') {
        return;
    }

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            submitAIChat();
        }
    });
    input.dataset.boundEnter = '1';
}

// 开始自定义截图（QQ/微信式区域截图）
function waitForNextPaint() {
    return new Promise(resolve => {
        requestAnimationFrame(() => requestAnimationFrame(resolve));
    });
}

function getLayoutViewportSize() {
    const width = Math.round(
        window.innerWidth ||
        document.documentElement.clientWidth ||
        0
    );
    const height = Math.round(
        window.innerHeight ||
        document.documentElement.clientHeight ||
        0
    );
    return {
        width: Math.max(1, width),
        height: Math.max(1, height)
    };
}

function getViewportSize() {
    const vv = window.visualViewport;
    const width = Math.round(
        (vv && vv.width) ||
        window.innerWidth ||
        document.documentElement.clientWidth ||
        0
    );
    const height = Math.round(
        (vv && vv.height) ||
        window.innerHeight ||
        document.documentElement.clientHeight ||
        0
    );
    return {
        width: Math.max(1, width),
        height: Math.max(1, height)
    };
}

function prepareSelectMirrorsForScreenshot() {
    const records = [];
    const selects = Array.from(document.querySelectorAll('select'));

    selects.forEach(select => {
        const rect = select.getBoundingClientRect();
        if (rect.width < 2 || rect.height < 2) {
            return;
        }

        const style = window.getComputedStyle(select);
        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
            return;
        }

        const selectedText = select.options[select.selectedIndex]
            ? select.options[select.selectedIndex].text
            : (select.value || '');

        const mirror = document.createElement('div');
        mirror.textContent = selectedText;
        Object.assign(mirror.style, {
            position: 'fixed',
            left: rect.left + 'px',
            top: rect.top + 'px',
            width: rect.width + 'px',
            height: rect.height + 'px',
            boxSizing: 'border-box',
            border: style.border,
            borderRadius: style.borderRadius,
            background: style.background,
            backgroundColor: style.backgroundColor,
            color: style.color,
            font: style.font,
            lineHeight: style.lineHeight,
            paddingTop: style.paddingTop,
            paddingRight: style.paddingRight,
            paddingBottom: style.paddingBottom,
            paddingLeft: style.paddingLeft,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            zIndex: '999998',
            pointerEvents: 'none'
        });

        document.body.appendChild(mirror);
        records.push({
            select,
            mirror,
            prevVisibility: select.style.visibility
        });

        // 原生 select 在 html2canvas 中常丢文字，临时隐藏并用镜像占位
        select.style.visibility = 'hidden';
    });

    return function restoreSelectMirrors() {
        records.forEach(record => {
            record.select.style.visibility = record.prevVisibility;
            record.mirror.remove();
        });
    };
}

function normalizeBaiduMapForScreenshot() {
    // 注意：不再对百度地图子节点做 transform/left/top 归一化——那样会把依赖
    // translate 的瓦片和覆盖物（热力、marker 等）立刻推到错位/不可见的位置，
    // 造成"一点击截图图层就消失"的 Bug。主链路改用 getDisplayMedia 捕获真实像素。
    return function noop() {};
}

async function captureViewportViaDisplayMedia() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        throw new Error('当前浏览器不支持屏幕捕获 API');
    }
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: 'browser', frameRate: 30 },
        audio: false,
        preferCurrentTab: true,
        selfBrowserSurface: 'include',
        surfaceSwitching: 'exclude',
        systemAudio: 'exclude'
    });

    let canvas = null;
    try {
        const video = document.createElement('video');
        video.muted = true;
        video.playsInline = true;
        video.srcObject = stream;
        await new Promise((resolve, reject) => {
            video.onloadedmetadata = resolve;
            video.onerror = () => reject(new Error('视频帧加载失败'));
        });
        await video.play();
        await new Promise(r => setTimeout(r, 150));

        const sw = video.videoWidth;
        const sh = video.videoHeight;
        if (!sw || !sh) throw new Error('未获取到捕获帧');

        // 不做宽高比裁剪——把完整捕获帧交给叠加层按视口尺寸做拉伸显示。
        // 原先的中心裁剪在浏览器"正在共享"栏出现/收回导致视口瞬时变化时，
        // 会让目标尺寸偏离实际视口，叠加层渲染后底部留出一条空隙。
        canvas = document.createElement('canvas');
        canvas.width = sw;
        canvas.height = sh;
        canvas.getContext('2d').drawImage(video, 0, 0, sw, sh, 0, 0, sw, sh);
    } finally {
        stream.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
    }

    // 等 Chrome 的"正在共享"栏收回、视口尺寸稳定，再返回
    await new Promise(r => setTimeout(r, 120));
    await waitForNextPaint();
    return canvas;
}

async function capturePageViaHtml2Canvas() {
    if (typeof html2canvas !== 'function') {
        throw new Error('html2canvas 组件未加载');
    }

    const docEl = document.documentElement;
    const body = document.body;
    const viewport = getLayoutViewportSize();

    // 仅按可视宽度捕获，避免出现横向滚动条导致截图层底部/右侧出现缝隙
    const pageWidth = Math.max(
        viewport.width,
        docEl ? docEl.clientWidth : 0,
        body ? body.clientWidth : 0
    );
    const pageHeight = Math.max(
        viewport.height,
        docEl ? docEl.scrollHeight : 0,
        docEl ? docEl.clientHeight : 0,
        body ? body.scrollHeight : 0,
        body ? body.clientHeight : 0
    );

    const restoreSelectMirrors = prepareSelectMirrorsForScreenshot();
    await waitForNextPaint();
    try {
        const canvas = await html2canvas(document.body, {
            useCORS: true, allowTaint: true, logging: false,
            backgroundColor: null,
            scale: window.devicePixelRatio || 1,
            windowWidth: pageWidth,
            windowHeight: pageHeight,
            x: 0,
            y: 0,
            scrollX: 0,
            scrollY: 0,
            width: pageWidth,
            height: pageHeight,
            ignoreElements: (el) => {
                if (el.dataset && el.dataset.screenshotIgnore === '1') return true;
                if (el.id === 'progress-overlay') return true;
                if (el.classList && (el.classList.contains('fixed-screenshot-btn') || el.classList.contains('toast'))) return true;
                return false;
            }
        });
        return {
            canvas,
            displayWidth: pageWidth,
            displayHeight: pageHeight
        };
    } finally {
        restoreSelectMirrors();
    }
}

async function startCustomScreenshot() {
    const btn = document.querySelector('.fixed-screenshot-btn');
    const prevBtnDisplay = btn ? btn.style.display : '';
    if (btn) btn.style.display = 'none';
    const restoreBtn = () => { if (btn) btn.style.display = prevBtnDisplay; };

    const tip = document.createElement('div');
    tip.dataset.screenshotIgnore = '1';
    tip.textContent = '正在准备截图…';
    Object.assign(tip.style, {
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '10px 18px',
        borderRadius: '6px', zIndex: 1000000, fontSize: '14px', pointerEvents: 'none'
    });
    document.body.appendChild(tip);

    const supportsDisplayMedia = !!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia)
        && (window.isSecureContext || location.hostname === 'localhost' || location.hostname === '127.0.0.1');

    let captureResult = null;
    let lastErr = null;

    const viewport = getLayoutViewportSize();
    const docEl = document.documentElement;
    const body = document.body;
    const pageHeight = Math.max(
        viewport.height,
        docEl ? docEl.scrollHeight : 0,
        docEl ? docEl.clientHeight : 0,
        body ? body.scrollHeight : 0,
        body ? body.clientHeight : 0
    );
    const viewportHeight = viewport.height;
    const needFullPageSelection = pageHeight > viewportHeight + 4;

    if (supportsDisplayMedia && !needFullPageSelection) {
        try {
            tip.remove();
            const canvas = await captureViewportViaDisplayMedia();
            // 捕获后（"正在共享"栏收回）重新量测视口，保证叠加层尺寸与实际视口一致
            const vpAfter = getLayoutViewportSize();
            captureResult = {
                canvas,
                displayWidth: vpAfter.width,
                displayHeight: vpAfter.height
            };
        } catch (err) {
            lastErr = err;
            // 用户取消则直接退出
            if (err && (err.name === 'NotAllowedError' || err.name === 'AbortError')) {
                restoreBtn();
                return;
            }
        }
    } else {
        tip.remove();
    }

    if (!captureResult) {
        const tip2 = document.createElement('div');
        tip2.dataset.screenshotIgnore = '1';
        tip2.textContent = '正在生成截图…';
        Object.assign(tip2.style, {
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '10px 18px',
            borderRadius: '6px', zIndex: 1000000, fontSize: '14px', pointerEvents: 'none'
        });
        document.body.appendChild(tip2);
        try {
            captureResult = await capturePageViaHtml2Canvas();
        } catch (err) {
            lastErr = err;
        } finally {
            tip2.remove();
        }
    }

    if (!captureResult || !captureResult.canvas) {
        restoreBtn();
        alert('截图失败：' + (lastErr && lastErr.message ? lastErr.message : '未知错误'));
        return;
    }

    openScreenshotOverlay(captureResult, restoreBtn);
}

function openScreenshotOverlay(captureResult, onClose) {
    const srcCanvas = captureResult.canvas;
    const viewportSize = getLayoutViewportSize();
    const vw = viewportSize.width;
    const vh = viewportSize.height;
    let displayWidth = Number(captureResult.displayWidth) || vw;
    let displayHeight = Number(captureResult.displayHeight) || vh;

    // 对于“仅截取当前视口”的场景，displayWidth/Height 应严格等于布局视口尺寸。
    // 若误用 visualViewport 导致 displayHeight 偏小，会出现叠加层内容整体上移、底部露黑边。
    if (displayWidth <= vw + 1 && displayHeight <= vh + 1) {
        displayWidth = vw;
        displayHeight = vh;
    }
    let scaleX = srcCanvas.width / displayWidth;
    let scaleY = srcCanvas.height / displayHeight;

    const overlay = document.createElement('div');
    overlay.dataset.screenshotIgnore = '1';
    Object.assign(overlay.style, {
        position: 'fixed', left: 0, top: 0, right: 0, bottom: 0,
        width: 'auto', height: 'auto',
        zIndex: 999999, userSelect: 'none',
        background: 'rgba(0,0,0,0.5)'
    });

    const needScroll = displayHeight > vh + 1 || displayWidth > vw + 1;

    const viewport = document.createElement('div');
    Object.assign(viewport.style, {
        position: 'absolute',
        inset: '0',
        overflowY: needScroll ? 'auto' : 'hidden',
        overflowX: 'hidden',
        cursor: 'crosshair'
    });
    overlay.appendChild(viewport);

    const stage = document.createElement('div');
    Object.assign(stage.style, {
        position: 'relative',
        width: needScroll ? displayWidth + 'px' : '100%',
        height: needScroll ? displayHeight + 'px' : '100%',
        minWidth: '100%',
        minHeight: '100%'
    });
    viewport.appendChild(stage);

    const bg = document.createElement('canvas');
    bg.width = Math.round(displayWidth);
    bg.height = Math.round(displayHeight);
    Object.assign(bg.style, {
        position: 'absolute', left: 0, top: 0,
        width: needScroll ? (displayWidth + 'px') : '100%',
        height: needScroll ? (displayHeight + 'px') : '100%',
        pointerEvents: 'none'
    });
    const bgCtx = bg.getContext('2d');
    bgCtx.drawImage(srcCanvas, 0, 0, srcCanvas.width, srcCanvas.height, 0, 0, bg.width, bg.height);
    stage.appendChild(bg);

    const mask = document.createElement('div');
    Object.assign(mask.style, { position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', pointerEvents: 'none' });
    stage.appendChild(mask);

    const sel = document.createElement('div');
    Object.assign(sel.style, {
        position: 'absolute', border: '1px dashed #1e90ff', boxSizing: 'border-box',
        display: 'none', overflow: 'hidden', pointerEvents: 'none'
    });
    const selCanvas = document.createElement('canvas');
    Object.assign(selCanvas.style, { display: 'block', position: 'absolute' });
    sel.appendChild(selCanvas);

    const sizeLabel = document.createElement('div');
    Object.assign(sizeLabel.style, {
        position: 'absolute', top: '-22px', left: '0', background: 'rgba(0,0,0,0.6)',
        color: '#fff', fontSize: '12px', padding: '2px 6px', borderRadius: '3px', whiteSpace: 'nowrap'
    });
    sel.appendChild(sizeLabel);
    stage.appendChild(sel);

    const toolbar = document.createElement('div');
    Object.assign(toolbar.style, {
        position: 'absolute', display: 'none', background: '#2c2c2c', borderRadius: '6px',
        padding: '6px 8px', boxShadow: '0 2px 8px rgba(0,0,0,0.4)', zIndex: 2,
        display: 'none'
    });
    const mkBtn = (text, color) => {
        const b = document.createElement('button');
        b.textContent = text;
        Object.assign(b.style, {
            margin: '0 4px', padding: '5px 12px', border: 'none', borderRadius: '4px',
            background: color || '#444', color: '#fff', cursor: 'pointer', fontSize: '13px'
        });
        return b;
    };
    const btnCopy = mkBtn('复制', '#1e90ff');
    const btnSave = mkBtn('保存', '#28a745');
    const btnCancel = mkBtn('取消', '#6c757d');
    toolbar.appendChild(btnCopy);
    toolbar.appendChild(btnSave);
    toolbar.appendChild(btnCancel);
    stage.appendChild(toolbar);

    document.body.appendChild(overlay);

    let startX = 0, startY = 0, curX = 0, curY = 0, dragging = false, hasSelection = false;
    let renderSelection = null;
    let positionToolbar = null;

    // 叠加层挂载后：对“仅截取当前视口”的模式做持续校准。
    // Chrome 在 getDisplayMedia 期间可能短暂出现/收回“正在共享”栏，导致 innerHeight 变化；
    // 若只初始化一次，会出现内容整体上移、底部露黑边。
    const syncStageToViewport = () => {
        if (needScroll) {
            return;
        }
        const rect = stage.getBoundingClientRect();
        const measuredW = Math.max(1, Math.round(rect.width));
        const measuredH = Math.max(1, Math.round(rect.height));
        if (!measuredW || !measuredH) {
            return;
        }

        if (measuredW !== displayWidth || measuredH !== displayHeight) {
            displayWidth = measuredW;
            displayHeight = measuredH;
            scaleX = srcCanvas.width / displayWidth;
            scaleY = srcCanvas.height / displayHeight;

            // 背景画布内部尺寸跟随 stage，CSS 用 100% 铺满。
            bg.width = measuredW;
            bg.height = measuredH;
            bgCtx.setTransform(1, 0, 0, 1, 0, 0);
            bgCtx.clearRect(0, 0, measuredW, measuredH);
            bgCtx.drawImage(srcCanvas, 0, 0, srcCanvas.width, srcCanvas.height, 0, 0, measuredW, measuredH);
        }
    };

    // 先同步一次，再监听 resize。
    syncStageToViewport();
    const onResize = () => {
        syncStageToViewport();
        // 若已有选区，尺寸变化后需要重绘一次避免错位
        if (hasSelection) {
            renderSelection();
            positionToolbar();
        }
    };
    window.addEventListener('resize', onResize);
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', onResize);
        window.visualViewport.addEventListener('scroll', onResize);
    }

    // 稳定期校准：覆盖某些浏览器未触发 resize 的视口变化。
    if (!needScroll) {
        let syncFrames = 0;
        const maxFrames = 40; // 约 0.6s@60fps
        const tick = () => {
            syncStageToViewport();
            syncFrames++;
            if (syncFrames < maxFrames) {
                requestAnimationFrame(tick);
            }
        };
        requestAnimationFrame(tick);
    }

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
    const toStagePos = (evt) => {
        const rect = stage.getBoundingClientRect();
        const x = clamp(evt.clientX - rect.left, 0, displayWidth);
        const y = clamp(evt.clientY - rect.top, 0, displayHeight);
        return { x, y };
    };

    const getRect = () => {
        const x = Math.min(startX, curX), y = Math.min(startY, curY);
        const w = Math.abs(curX - startX), h = Math.abs(curY - startY);
        return { x, y, w, h };
    };

    renderSelection = () => {
        const r = getRect();
        if (r.w < 2 || r.h < 2) { sel.style.display = 'none'; return; }
        sel.style.display = 'block';
        sel.style.left = r.x + 'px';
        sel.style.top = r.y + 'px';
        sel.style.width = r.w + 'px';
        sel.style.height = r.h + 'px';
        selCanvas.width = Math.max(1, Math.round(r.w * scaleX));
        selCanvas.height = Math.max(1, Math.round(r.h * scaleY));
        selCanvas.style.width = r.w + 'px';
        selCanvas.style.height = r.h + 'px';
        const sctx = selCanvas.getContext('2d');
        sctx.drawImage(srcCanvas,
            r.x * scaleX, r.y * scaleY,
            r.w * scaleX, r.h * scaleY,
            0, 0, selCanvas.width, selCanvas.height);
        sizeLabel.textContent = `${Math.round(r.w)} × ${Math.round(r.h)}`;
    };

    positionToolbar = () => {
        const r = getRect();
        toolbar.style.display = 'block';
        const tw = toolbar.offsetWidth, th = toolbar.offsetHeight;
        let tx = r.x + r.w - tw;
        let ty = r.y + r.h + 8;
        if (ty + th > displayHeight - 4) ty = r.y - th - 8;
        if (ty < 4) ty = Math.max(4, r.y + 4);
        if (tx < 4) tx = 4;
        if (tx + tw > displayWidth - 4) tx = displayWidth - tw - 4;
        toolbar.style.left = tx + 'px';
        toolbar.style.top = ty + 'px';

        const viewLeft = viewport.scrollLeft;
        const viewTop = viewport.scrollTop;
        const viewRight = viewLeft + viewport.clientWidth;
        const viewBottom = viewTop + viewport.clientHeight;
        const pad = 24;

        if (tx < viewLeft + pad) {
            viewport.scrollLeft = Math.max(0, tx - pad);
        } else if (tx + tw > viewRight - pad) {
            viewport.scrollLeft = Math.min(displayWidth - viewport.clientWidth, tx + tw - viewport.clientWidth + pad);
        }
        if (ty < viewTop + pad) {
            viewport.scrollTop = Math.max(0, ty - pad);
        } else if (ty + th > viewBottom - pad) {
            viewport.scrollTop = Math.min(displayHeight - viewport.clientHeight, ty + th - viewport.clientHeight + pad);
        }
    };

    const close = () => {
        overlay.remove();
        document.removeEventListener('keydown', onKey);
        window.removeEventListener('resize', onResize);
        if (window.visualViewport) {
            window.visualViewport.removeEventListener('resize', onResize);
            window.visualViewport.removeEventListener('scroll', onResize);
        }
        if (typeof onClose === 'function') onClose();
    };

    const finalize = (action) => {
        const r = getRect();
        if (r.w < 2 || r.h < 2) return;
        const out = document.createElement('canvas');
        out.width = Math.max(1, Math.round(r.w * scaleX));
        out.height = Math.max(1, Math.round(r.h * scaleY));
        out.getContext('2d').drawImage(srcCanvas,
            r.x * scaleX, r.y * scaleY,
            r.w * scaleX, r.h * scaleY,
            0, 0, out.width, out.height);
        if (action === 'save') {
            out.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `screenshot_${Date.now()}.png`;
                document.body.appendChild(a); a.click(); a.remove();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
                close();
            }, 'image/png');
        } else if (action === 'copy') {
            out.toBlob(async (blob) => {
                try {
                    if (navigator.clipboard && window.ClipboardItem) {
                        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
                        showToast && showToast('已复制到剪贴板');
                        close();
                    } else { throw new Error('剪贴板不可用'); }
                } catch (e) {
                    console.warn('复制失败，降级为下载', e);
                    alert('当前环境不支持复制图片到剪贴板（需 HTTPS 或较新浏览器），将改为下载。');
                    finalize('save');
                }
            }, 'image/png');
        }
    };

    const autoScrollWhileDragging = (evt) => {
        const vpNow = getLayoutViewportSize();
        const vwNow = vpNow.width;
        const vhNow = vpNow.height;
        const edge = 36;
        const step = 24;
        if (evt.clientY > vhNow - edge) {
            viewport.scrollTop = Math.min(displayHeight - viewport.clientHeight, viewport.scrollTop + step);
        } else if (evt.clientY < edge) {
            viewport.scrollTop = Math.max(0, viewport.scrollTop - step);
        }

        if (evt.clientX > vwNow - edge) {
            viewport.scrollLeft = Math.min(displayWidth - viewport.clientWidth, viewport.scrollLeft + step);
        } else if (evt.clientX < edge) {
            viewport.scrollLeft = Math.max(0, viewport.scrollLeft - step);
        }
    };

    viewport.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        if (!stage.contains(e.target)) return;
        if (hasSelection) return;
        dragging = true;
        const p = toStagePos(e);
        startX = p.x; startY = p.y; curX = p.x; curY = p.y;
        toolbar.style.display = 'none';
        e.preventDefault();
    });
    viewport.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        autoScrollWhileDragging(e);
        const p = toStagePos(e);
        curX = p.x;
        curY = p.y;
        renderSelection();
    });
    viewport.addEventListener('mouseup', (e) => {
        if (!dragging) return;
        dragging = false;
        const r = getRect();
        if (r.w >= 2 && r.h >= 2) {
            hasSelection = true;
            overlay.style.cursor = 'default';
            positionToolbar();
        } else {
            sel.style.display = 'none';
        }
    });

    btnCancel.addEventListener('click', close);
    btnSave.addEventListener('click', () => finalize('save'));
    btnCopy.addEventListener('click', () => finalize('copy'));

    const onKey = (e) => {
        if (e.key === 'Escape') close();
        else if (e.key === 'Enter' && hasSelection) finalize('save');
    };
    document.addEventListener('keydown', onKey);
}

// 导出方案
function exportScheme() {
    alert('方案导出功能开发中');
}

// 显示智能与人工方案对比
function showComparison() {
    const rendered = renderComparisonAnalysisPanel();
    if (!rendered) {
        showToast('请先运行智能选址和人工选址方案');
        return;
    }

    updateCoreMetrics();
    generateSupplyDemandTable(getActiveSupplyTimeSlot(), selectedScheme);

    const analysis = getComparisonAnalysis();
    const recommendedText = analysis.recommendedScheme === 'smart' ? '智能选址方案' : '人工选址方案';
    showToast(`方案对比分析已更新，推荐：${recommendedText}`);
}




function renderComparisonAnalysisPanel() {
    const analysis = getComparisonAnalysis();
    if (!analysis.smartMetrics || !analysis.manualMetrics) {
        return false;
    }

    const canvas = document.getElementById('comparisonChart');
    const placeholder = document.getElementById('comparison-placeholder');
    if (!canvas || typeof Chart === 'undefined') {
        return false;
    }

    const smartDistanceScore = Math.max(0, 100 - Math.min(analysis.smartMetrics.avg_distance, 500) / 5);
    const manualDistanceScore = Math.max(0, 100 - Math.min(analysis.manualMetrics.avg_distance, 500) / 5);

    if (comparisonChart) {
        comparisonChart.destroy();
    }

    const ctx = canvas.getContext('2d');
    comparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['覆盖率(%)', '步行距离得分', '均衡性指数', '综合得分'],
            datasets: [
                {
                    label: '智能选址',
                    data: [
                        analysis.smartMetrics.coverage * 100,
                        smartDistanceScore,
                        analysis.smartMetrics.balance,
                        analysis.smartScore
                    ],
                    backgroundColor: 'rgba(26, 115, 232, 0.6)',
                    borderColor: 'rgba(26, 115, 232, 1)',
                    borderWidth: 1
                },
                {
                    label: '人工选址',
                    data: [
                        analysis.manualMetrics.coverage * 100,
                        manualDistanceScore,
                        analysis.manualMetrics.balance,
                        analysis.manualScore
                    ],
                    backgroundColor: 'rgba(234, 67, 53, 0.6)',
                    borderColor: 'rgba(234, 67, 53, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        afterBody: function() {
                            return '步行距离得分越高表示距离越短';
                        }
                    }
                }
            }
        }
    });

    const recommendedText = analysis.recommendedScheme === 'smart' ? '推荐方案：智能选址方案' : '推荐方案：人工选址方案';
    const scoreText = `综合得分 智能 ${analysis.smartScore.toFixed(1)} / 人工 ${analysis.manualScore.toFixed(1)}`;

    if (placeholder) {
        placeholder.style.display = 'flex';
        placeholder.style.position = 'absolute';
        placeholder.style.alignItems = 'flex-end';
        placeholder.style.justifyContent = 'center';
        placeholder.style.pointerEvents = 'none';
        placeholder.style.background = 'transparent';
        placeholder.style.color = '#555';
        placeholder.style.fontSize = '12px';
        placeholder.innerHTML = `<div style="background: rgba(255,255,255,0.88); border-radius: 6px; padding: 6px 10px; margin-bottom: 4px;">${recommendedText}，${scoreText}</div>`;
    }

    return true;
}

function isCoordInBounds(lng, lat, bounds) {
    return lng >= bounds.minLng && lng <= bounds.maxLng && lat >= bounds.minLat && lat <= bounds.maxLat;
}

function normalizeBikeToBd09(rawLng, rawLat) {
    let lng = Number(rawLng);
    let lat = Number(rawLat);

    if (!Number.isFinite(lng) || !Number.isFinite(lat)) {
        return null;
    }

    // 坐标疑似写反时自动纠正
    if (lat > 90 || lat < -90) {
        const tmp = lng;
        lng = lat;
        lat = tmp;
    }

    if (isCoordInBounds(lng, lat, EBIKE_BD09_BOUNDS)) {
        return { lng, lat };
    }

    // 若落在 WGS84 典型范围，转成 BD09 再绘制
    if (isCoordInBounds(lng, lat, EBIKE_WGS84_BOUNDS)) {
        const converted = wgs84ToBd09(lng, lat);
        if (Number.isFinite(converted?.lng) && Number.isFinite(converted?.lat)) {
            return { lng: converted.lng, lat: converted.lat };
        }
    }

    return { lng, lat };
}

function syncSimulationButtons() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    const startBtn = document.getElementById('start-simulation');
    const stopBtn = document.getElementById('stop-simulation');

    if (playPauseBtn) {
        playPauseBtn.textContent = ebikeAnimationRunning ? '暂停动画' : '播放动画';
    }
    if (startBtn) {
        startBtn.disabled = ebikeAnimationRunning;
    }
    if (stopBtn) {
        stopBtn.disabled = !ebikeAnimationRunning;
    }

    updateBatteryOperationButtons();
}

function updateBatteryOperationButtons() {
    const filterBtn = document.getElementById('battery-filter-btn');
    const routeBtn = document.getElementById('battery-route-btn');
    const thresholdSelect = document.getElementById('battery-threshold');
    const capacityInput = document.getElementById('battery-capacity');
    const roleTip = document.getElementById('battery-role-tip');
    const adminControls = document.getElementById('battery-admin-controls');
    const dispatcherControls = document.getElementById('battery-dispatcher-controls');
    const tableTitle = document.getElementById('battery-table-title');
    const isAdmin = currentUserRole === 'admin';
    const disabled = !isAdmin;

    if (adminControls) {
        adminControls.style.display = isAdmin ? '' : 'none';
    }
    if (dispatcherControls) {
        dispatcherControls.style.display = isAdmin ? 'none' : '';
    }
    if (tableTitle) {
        tableTitle.textContent = isAdmin ? '低电量车辆列表' : '负责路线服务车辆列表';
    }

    if (filterBtn) {
        filterBtn.disabled = disabled;
        filterBtn.title = isAdmin ? '' : '当前角色仅可查看管理员已生成的换电任务';
    }
    if (routeBtn) {
        routeBtn.disabled = disabled;
        routeBtn.title = isAdmin ? '' : '当前角色仅可查看管理员已生成的换电任务';
    }
    if (thresholdSelect) {
        thresholdSelect.disabled = disabled;
        thresholdSelect.title = isAdmin ? '' : '调度员视图为只读';
    }
    if (capacityInput) {
        capacityInput.disabled = disabled;
        capacityInput.title = isAdmin ? '' : '调度员视图为只读';
    }
    if (roleTip) {
        roleTip.style.display = isAdmin ? 'none' : 'block';
    }
}

function updateDispatchOperationButtons() {
    const runDispatchBtn = document.getElementById('run-dispatch-btn');
    const dispatchAssignmentBtn = document.getElementById('dispatch-assignment-btn');
    const clearDispatchBtn = document.querySelector('button[onclick="clearDispatch()"]');
    const roleTip = document.getElementById('dispatch-role-tip');
    const isAdmin = currentUserRole === 'admin';

    if (runDispatchBtn) {
        runDispatchBtn.style.display = isAdmin ? '' : 'none';
    }
    if (dispatchAssignmentBtn) {
        dispatchAssignmentBtn.style.display = isAdmin ? '' : 'none';
    }
    if (clearDispatchBtn) {
        clearDispatchBtn.style.display = isAdmin ? '' : 'none';
    }
    if (roleTip) {
        roleTip.style.display = isAdmin ? 'none' : 'block';
    }
}

function getBatteryCapacityValue() {
    const input = document.getElementById('battery-capacity');
    const value = Number(input?.value);
    const minValue = currentUserRole === 'admin' ? 10 : 0;
    const fallback = currentUserRole === 'admin' ? BATTERY_DEFAULT_CAPACITY : 0;
    const normalized = Number.isFinite(value) ? Math.max(minValue, Math.floor(value)) : fallback;
    if (input) {
        input.value = String(normalized);
    }
    return normalized;
}

function setBatteryCapacityValue(value) {
    const input = document.getElementById('battery-capacity');
    if (!input) {
        return;
    }
    const minValue = currentUserRole === 'admin' ? 10 : 0;
    const fallback = currentUserRole === 'admin' ? BATTERY_DEFAULT_CAPACITY : 0;
    const normalized = Number.isFinite(Number(value)) ? Math.max(minValue, Math.floor(Number(value))) : fallback;
    input.value = String(normalized);
}

function loadBatteryOpsState() {
    try {
        const raw = localStorage.getItem('batteryOpsState');
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (_) {
        return null;
    }
}

function saveBatteryOpsState(state) {
    try {
        localStorage.setItem('batteryOpsState', JSON.stringify(state));
    } catch (_) {
        // ignore storage failure
    }
}

function clearBatteryOpsPersistedState() {
    try {
        localStorage.removeItem('batteryOpsState');
    } catch (_) {
        // ignore storage failure
    }
}

function resetAIPanelStateForNewLogin() {
    aiPanelSessionToken += 1;
    // 先尝试从localStorage恢复调度结果（如果有的话）
    if (!latestDispatchResult) {
        const storedDispatch = localStorage.getItem('latestDispatchResult');
        if (storedDispatch) {
            try {
                latestDispatchResult = JSON.parse(storedDispatch);
                console.log('[DEBUG] resetAIPanelStateForNewLogin: 已从localStorage恢复调度结果');
            } catch (e) {
                console.error('恢复调度结果失败:', e);
                latestDispatchResult = null;
            }
        }
    }

    const reportCard = document.getElementById('ai-report-card');
    const priorityCard = document.getElementById('ai-priority-card');
    const riskCard = document.getElementById('ai-risk-card');
    const decisionCard = document.getElementById('ai-decision-card');
    const reportContent = document.getElementById('ai-report-content');
    const priorityList = document.getElementById('ai-priority-list');
    const riskList = document.getElementById('ai-risk-list');
    const decisionContent = document.getElementById('ai-decision-content');
    const chatInput = document.getElementById('ai-chat-question');
    const chatLast = document.getElementById('ai-chat-last');
    const chatLastQ = document.getElementById('ai-chat-last-q');
    const chatLastA = document.getElementById('ai-chat-last-a');
    const preferenceSelect = document.getElementById('ai-preference-select');
    const dialogContent = document.getElementById('ai-dialog-content');

    [reportCard, priorityCard, riskCard, decisionCard].forEach(card => {
        if (card) {
            card.style.display = 'none';
        }
    });

    if (reportContent) {
        reportContent.textContent = '';
    }
    if (decisionContent) {
        decisionContent.textContent = '';
    }
    if (priorityList) {
        priorityList.innerHTML = '';
    }
    if (riskList) {
        riskList.innerHTML = '';
    }

    if (chatInput) {
        chatInput.value = '';
    }
    if (chatLastQ) {
        chatLastQ.textContent = '';
    }
    if (chatLastA) {
        chatLastA.textContent = '';
    }
    if (chatLast) {
        chatLast.style.display = 'none';
    }

    if (preferenceSelect) {
        preferenceSelect.value = 'coverage';
    }

    if (dialogContent) {
        dialogContent.classList.remove('hidden');
        dialogContent.scrollTop = 0;
    }
}

function resetBatteryOpsStateForNewLogin() {
    const isAdmin = currentUserRole === 'admin';
    batteryRouteAssignments = {};
    batteryLastRouteResult = null;
    currentLowBatteryList = [];
    dispatcherSelectedVehicleKey = '';

    batteryRouteLines = [];
    lowBatteryMarkers = [];

    const thresholdSelect = document.getElementById('battery-threshold');
    const capacityInput = document.getElementById('battery-capacity');
    const dispatchInput = document.getElementById('battery-dispatch-vehicle-id');
    const tbody = document.getElementById('battery-table-body');

    if (thresholdSelect) {
        thresholdSelect.value = '30';
    }
    if (capacityInput) {
        capacityInput.value = String(isAdmin ? BATTERY_DEFAULT_CAPACITY : 0);
    }
    if (dispatchInput) {
        dispatchInput.value = '';
    }
    if (tbody) {
        tbody.innerHTML = isAdmin
            ? '<tr><td colspan="5" style="color:#999;padding:20px;">请点击筛选按钮查看低电量车辆</td></tr>'
            : '<tr><td colspan="5" style="color:#999;padding:20px;">请输入负责运维车编号后查看</td></tr>';
    }

    updateLowBatteryMetric(0);
    updateBatteryResultPanel({
        lowCount: 0,
        vehicleCount: 0,
        routeCount: 0,
        capacityPerTrip: isAdmin ? BATTERY_DEFAULT_CAPACITY : 0,
        routes: []
    });
    setBatteryRouteDetailHint(isAdmin ? '尚未生成换电路线' : '请输入负责运维车编号后查看路线明细');
}

function persistBatteryOpsSnapshot() {
    const threshold = Number(document.getElementById('battery-threshold')?.value) || 30;
    const capacity = getBatteryCapacityValue();
    const dispatchInput = document.getElementById('battery-dispatch-vehicle-id');
    dispatcherSelectedVehicleKey = String(dispatchInput?.value || dispatcherSelectedVehicleKey || '').trim();
    saveBatteryOpsState({
        updatedAt: Date.now(),
        threshold,
        capacity_per_trip: capacity,
        low_bikes: currentLowBatteryList,
        route_result: batteryLastRouteResult,
        assignments: batteryRouteAssignments,
        dispatcher_vehicle_key: dispatcherSelectedVehicleKey
    });
}

function hydrateBatteryOpsView() {
    const thresholdSelect = document.getElementById('battery-threshold');
    const tbody = document.getElementById('battery-table-body');
    const dispatchInput = document.getElementById('battery-dispatch-vehicle-id');
    const state = loadBatteryOpsState();
    const isAdmin = currentUserRole === 'admin';

    if (state) {
        if (thresholdSelect && Number.isFinite(Number(state.threshold))) {
            thresholdSelect.value = String(Number(state.threshold));
        }
        setBatteryCapacityValue(isAdmin ? state.capacity_per_trip : 0);

        if (dispatchInput) {
            const vehicleKey = String(state.dispatcher_vehicle_key || '').trim();
            dispatchInput.value = vehicleKey;
            dispatcherSelectedVehicleKey = vehicleKey;
        }

        if (Array.isArray(state.low_bikes)) {
            currentLowBatteryList = state.low_bikes.map((b, idx) => normalizeBatteryBikeRecord(b, idx)).filter(Boolean);
            if (currentUserRole === 'admin') {
                renderLowBatteryMarkers(currentLowBatteryList);
                updateLowBatteryMetric(currentLowBatteryList.length);
            } else {
                clearLowBatteryMarkers();
                updateLowBatteryMetric(0);
            }
        }

        if (state.assignments && typeof state.assignments === 'object') {
            batteryRouteAssignments = state.assignments;
        }

        if (state.route_result && typeof state.route_result === 'object') {
            batteryLastRouteResult = state.route_result;
            clearBatteryRouteLines();
            if (isAdmin) {
                drawBatteryRoute(state.route_result, state.route_result?.bike_count || currentLowBatteryList.length, {
                    silentToast: true,
                    skipPersist: true
                });
            } else {
                // 对于调度员，直接自动显示分配的路线
                setTimeout(() => {
                    applyDispatcherVehicleFilter({
                        skipBootstrap: true,
                        silent: true,
                        skipPersist: true
                    });
                }, 100);
            }
        } else {
            batteryLastRouteResult = null;
            updateBatteryResultPanel({
                lowCount: isAdmin ? currentLowBatteryList.length : 0,
                vehicleCount: 0,
                routeCount: 0,
                capacityPerTrip: isAdmin ? getBatteryCapacityValue() : 0,
                routes: []
            });
            if (!isAdmin) {
                setBatteryRouteDetailHint('当前未分配路线！');
            }
        }
    } else {
        setBatteryCapacityValue(isAdmin ? BATTERY_DEFAULT_CAPACITY : 0);
        updateBatteryResultPanel({
            lowCount: isAdmin ? currentLowBatteryList.length : 0,
            vehicleCount: isAdmin ? (batteryLastRouteResult?.vehicle_count || 0) : 0,
            routeCount: isAdmin ? (batteryLastRouteResult?.route_count || 0) : 0,
            capacityPerTrip: isAdmin ? getBatteryCapacityValue() : 0,
            routes: isAdmin ? (batteryLastRouteResult?.routes || []) : []
        });
        if (!isAdmin) {
            setBatteryRouteDetailHint('当前未分配路线！');
        }
    }

    if (tbody && isAdmin) {
        renderBatteryTableRows(currentLowBatteryList, tbody);
    } else if (tbody) {
        tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">当前未分配路线！</td></tr>';
    }

    updateBatteryOperationButtons();
}

function bindSimulationModuleButtons() {
    const startBtn = document.getElementById('start-simulation');
    const stopBtn = document.getElementById('stop-simulation');

    if (startBtn && !startBtn.dataset.bound) {
        startBtn.dataset.bound = '1';
        startBtn.addEventListener('click', function() {
            const levelSelect = document.getElementById('simulation-level');
            const timeSelect = document.getElementById('simulation-time');
            const level = levelSelect ? levelSelect.value : 'medium';
            const timeSlot = timeSelect ? timeSelect.value : 'morning';

            const mainLevel = document.getElementById('sim-data-level');
            const mainTime = document.getElementById('sim-time-slot');
            if (mainLevel) mainLevel.value = level;
            if (mainTime) mainTime.value = timeSlot;

            generateEbikeSimulation();
        });
    }

    if (stopBtn && !stopBtn.dataset.bound) {
        stopBtn.dataset.bound = '1';
        stopBtn.addEventListener('click', function() {
            stopEbikeAnimation();
            showToast('动画已停止');
        });
    }

    syncSimulationButtons();
    updateBatteryOperationButtons();
}

function bindBatteryDispatcherControls() {
    const input = document.getElementById('battery-dispatch-vehicle-id');
    if (input && !input.dataset.bound) {
        input.dataset.bound = '1';
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                applyDispatcherVehicleFilter();
            }
        });
    }
}

function clearBatteryRouteLines() {
    batteryRouteLines.forEach(line => {
        try {
            map.removeOverlay(line);
        } catch (_) {
            // ignore
        }
    });
    batteryRouteLines = [];
}

function clearLowBatteryMarkers() {
    if (!map) { lowBatteryMarkers = []; return; }
    lowBatteryMarkers.forEach(m => { try { map.removeOverlay(m); } catch (_) {} });
    lowBatteryMarkers = [];
}

function makeLowBatteryIcon(level) {
    // 简单 SVG 低电量图标（红/橙根据电量）
    const color = level <= 15 ? '#e53935' : (level <= 25 ? '#fb8c00' : '#ffb300');
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
        <circle cx='16' cy='16' r='14' fill='${color}' stroke='white' stroke-width='2'/>
        <rect x='9' y='10' width='12' height='10' rx='1.5' fill='none' stroke='white' stroke-width='1.8'/>
        <rect x='21' y='13' width='2.5' height='4' rx='0.5' fill='white'/>
        <rect x='10.5' y='11.5' width='${Math.max(1, (level/100) * 9)}' height='7' fill='white'/>
        </svg>`;
    return new BMap.Icon('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg),
        new BMap.Size(32, 32), { anchor: new BMap.Size(16, 16) });
}

// 使用最近邻规则生成换电任务访问顺序（前端仅作兜底展示）
function orderBikesByNearestNeighbor(bikes, start) {
    const remain = bikes.slice();
    const path = [];
    let cur = start;
    while (remain.length > 0) {
        let bestIdx = 0;
        let bestDist = Infinity;
        for (let i = 0; i < remain.length; i++) {
            const d = calcDistanceMeters(cur.lat, cur.lng, remain[i].lat, remain[i].lng);
            if (d < bestDist) { bestDist = d; bestIdx = i; }
        }
        const next = remain.splice(bestIdx, 1)[0];
        path.push(next);
        cur = next;
    }
    return path;
}

function normalizeBatteryBikeRecord(raw, index) {
    const lngRaw = Number(raw?.lng);
    const latRaw = Number(raw?.lat);
    const batteryVal = Number(raw?.battery);
    const idRaw = raw?.id != null ? String(raw.id) : String(index + 1);

    // 使用默认值处理无效的经纬度
    const lng = Number.isFinite(lngRaw) ? lngRaw : 116.3;
    const lat = Number.isFinite(latRaw) ? latRaw : 39.9;
    const normalized = normalizeBikeToBd09(lng, lat);

    return {
        id: idRaw.startsWith('ebike_') ? idRaw : ('ebike_' + idRaw),
        lng: normalized ? normalized.lng : lng,
        lat: normalized ? normalized.lat : lat,
        battery: Number.isFinite(batteryVal) ? batteryVal : 100,
        last_used: raw?.last_used || raw?.lastUsed || raw?.time_slot || '-',
        status: raw?.status || 'idle',
        speed: Number(raw?.speed) || 0
    };
}

function updateLowBatteryMetric(count) {
    // 限制低电量车辆数，避免异常值
    const limitedCount = Math.min(count, 100);
    // 调用updateSystemStatus来更新系统状态
    updateSystemStatus(limitedCount, null);
}

function updateBatteryResultPanel(result) {
    const lowEl = document.getElementById('battery-low-count');
    const vehicleEl = document.getElementById('battery-vehicle-count');
    const routeEl = document.getElementById('battery-route-count');
    const capacityEl = document.getElementById('battery-capacity-show');
    const detailEl = document.getElementById('battery-route-detail');

    if (!result) {
        if (lowEl) lowEl.textContent = '0';
        if (vehicleEl) vehicleEl.textContent = '0';
        if (routeEl) routeEl.textContent = '0';
        if (capacityEl) capacityEl.textContent = String(getBatteryCapacityValue());
        if (detailEl) detailEl.textContent = '尚未生成换电路线';
        return;
    }

    if (lowEl) lowEl.textContent = String(result.lowCount || 0);
    if (vehicleEl) vehicleEl.textContent = String(result.vehicleCount || 0);
    if (routeEl) routeEl.textContent = String(result.routeCount || 0);
    if (capacityEl) capacityEl.textContent = String(result.capacityPerTrip || result.capacity_per_trip || getBatteryCapacityValue());

    if (detailEl) {
        const routes = Array.isArray(result.routes) ? result.routes : [];
        if (!routes.length) {
            detailEl.textContent = '尚未生成换电路线';
        } else {
            detailEl.innerHTML = routes.map(route => {
                const name = route.vehicle_name || route.vehicleName || route.route_name || '-';
                const cnt = Number(route.service_count || route.serviceCount || 0);
                const start = route.start_point;
                const end = route.end_point;
                const startText = start ? `${Number(start.lng).toFixed(5)}, ${Number(start.lat).toFixed(5)}` : '-';
                const endText = end ? `${Number(end.lng).toFixed(5)}, ${Number(end.lat).toFixed(5)}` : '-';
                const depot = route.service_point_name || route.route_depot_name || '-';
                const dist = Number(route.total_distance_m || 0);
                return `<div style="padding:6px 0;border-bottom:1px dashed #e0e0e0;">
                    <div class="dispatch-row" style="border-bottom:0;padding:0;">
                        <span class="dispatch-label">${name}</span>
                        <span class="dispatch-value">服务 ${cnt} 辆 / ${dist.toFixed(1)} m</span>
                    </div>
                    <div style="font-size:12px;color:#666;line-height:1.5;">补给点：${depot}</div>
                    <div style="font-size:12px;color:#666;line-height:1.5;">起点：${startText}</div>
                    <div style="font-size:12px;color:#666;line-height:1.5;">终点：${endText}</div>
                </div>`;
            }).join('');
        }
    }
}

function renderBatteryTableRows(lowBattery, tbody) {
    if (!tbody) {
        return;
    }

    if (!Array.isArray(lowBattery) || lowBattery.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">当前无低电量车辆</td></tr>';
        return;
    }

    const rows = lowBattery.slice().sort((a, b) => {
        const assignA = batteryRouteAssignments[a.id] || {};
        const assignB = batteryRouteAssignments[b.id] || {};
        const orderA = Number(assignA.service_order);
        const orderB = Number(assignB.service_order);
        const hasA = Number.isFinite(orderA);
        const hasB = Number.isFinite(orderB);

        if (hasA && hasB && orderA !== orderB) {
            return orderA - orderB;
        }
        if (hasA && !hasB) {
            return -1;
        }
        if (!hasA && hasB) {
            return 1;
        }

        return Number(a.battery) - Number(b.battery);
    });

    tbody.innerHTML = rows.map(bike => {
        const levelColor = bike.battery <= 15 ? '#e53935' : '#fb8c00';
        const assignObj = batteryRouteAssignments[bike.id] || {};
        const assign = assignObj.route_name || assignObj.vehicle_name || '-';
        const order = Number.isFinite(Number(assignObj.service_order)) ? Number(assignObj.service_order) : '-';
        return `<tr>
            <td>${bike.id}</td>
            <td>${bike.lng.toFixed(5)}, ${bike.lat.toFixed(5)}</td>
            <td style="color:${levelColor};font-weight:600;">${Math.round(bike.battery)}%</td>
            <td>${assign}</td>
            <td>${order}</td>
        </tr>`;
    }).join('');
}

function renderLowBatteryMarkers(lowBattery) {
    if (!map || typeof BMap === 'undefined') {
        return;
    }

    clearLowBatteryMarkers();
    lowBattery.forEach(bike => {
        try {
            const marker = new BMap.Marker(new BMap.Point(bike.lng, bike.lat), {
                icon: makeLowBatteryIcon(Number(bike.battery) || 0)
            });
            marker.setTitle(`${bike.id} 电量 ${Math.round(bike.battery)}%`);
            marker.setZIndex(10000); // 设置高zIndex，确保在最上方
            map.addOverlay(marker);
            lowBatteryMarkers.push(marker);
        } catch (_) {
            // ignore individual marker errors
        }
    });
    updateLayerVisibility();
}

async function fetchLowBatteryFromApi(threshold) {
    const url = `/api/battery/low?threshold=${encodeURIComponent(threshold)}`;
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('HTTP ' + response.status);
    }

    const data = await response.json();
    const bikes = Array.isArray(data?.bikes) ? data.bikes : [];
    return bikes
        .map((b, idx) => normalizeBatteryBikeRecord(b, idx))
        .filter(Boolean)
        .sort((a, b) => Number(a.battery) - Number(b.battery));
}

async function getLowBatteryCandidates(threshold) {
    // 尝试加载路网，但即使失败也继续执行
    try {
        const roadReady = await ensureEbikeRoadNetwork();
        console.log('路网加载状态:', roadReady, '节点数:', Object.keys(realRoadNetwork.nodes).length);
    } catch (error) {
        console.warn('路网加载失败，使用原始位置:', error);
    }
    
    console.log('开始筛选低电量车辆，路网节点数:', Object.keys(realRoadNetwork.nodes).length);
    
    const fromApi = await fetchLowBatteryFromApi(threshold);
    console.log('从API获取到的低电量车辆数:', fromApi.length);
    
    // 只保留校园边界内的低电量车辆
    const filteredBikes = fromApi
        .filter(bike => {
            const inside = isInsideBoundary(bike.lat, bike.lng);
            if (!inside) {
                console.log('车辆不在校园边界内:', bike.id, bike.lat, bike.lng);
            }
            return inside;
        })
        .map(bike => {
            try {
                // 尝试吸附到最近的路网节点
                if (Object.keys(realRoadNetwork.nodes).length > 0) {
                    const snapped = snapToNearestRoad(bike.lat, bike.lng);
                    // 确保吸附后的位置仍然在校园边界内
                    if (isInsideBoundary(snapped.lat, snapped.lng)) {
                        return {
                            ...bike,
                            lat: snapped.lat,
                            lng: snapped.lng
                        };
                    }
                }
            } catch (error) {
                console.warn('吸附到路网失败，使用原始位置:', error, bike.id);
            }
            return bike;
        });
    
    console.log('筛选后的低电量车辆数:', filteredBikes.length);
    return { bikes: filteredBikes, source: 'api' };
}

function buildRoadNetworkFromGeoJSON(geojson) {
    const newNetwork = { nodes: {}, edges: [] };

    if (geojson && Array.isArray(geojson.features)) {
        geojson.features.forEach(feature => {
            if (!feature || !feature.geometry) {
                return;
            }

            let lines = [];
            if (feature.geometry.type === 'MultiLineString') {
                lines = feature.geometry.coordinates || [];
            } else if (feature.geometry.type === 'LineString') {
                lines = [feature.geometry.coordinates || []];
            }

            lines.forEach(line => {
                if (!Array.isArray(line) || line.length < 2) {
                    return;
                }

                for (let i = 0; i < line.length - 1; i++) {
                    const p1 = normalizeBikeToBd09(line[i][0], line[i][1]);
                    const p2 = normalizeBikeToBd09(line[i + 1][0], line[i + 1][1]);
                    if (!p1 || !p2) {
                        continue;
                    }

                    const node1Key = `${p1.lat.toFixed(6)},${p1.lng.toFixed(6)}`;
                    const node2Key = `${p2.lat.toFixed(6)},${p2.lng.toFixed(6)}`;

                    if (!newNetwork.nodes[node1Key]) {
                        newNetwork.nodes[node1Key] = {
                            id: node1Key,
                            lat: p1.lat,
                            lng: p1.lng,
                            neighbors: []
                        };
                    }

                    if (!newNetwork.nodes[node2Key]) {
                        newNetwork.nodes[node2Key] = {
                            id: node2Key,
                            lat: p2.lat,
                            lng: p2.lng,
                            neighbors: []
                        };
                    }

                    const distance = calcDistanceMeters(p1.lat, p1.lng, p2.lat, p2.lng);
                    newNetwork.edges.push({
                        from: node1Key,
                        to: node2Key,
                        distance
                    });

                    newNetwork.nodes[node1Key].neighbors.push({ node: node2Key, distance });
                    newNetwork.nodes[node2Key].neighbors.push({ node: node1Key, distance });
                }
            });
        });
    }

    if (Object.keys(newNetwork.nodes).length > 0) {
        realRoadNetwork.nodes = newNetwork.nodes;
        realRoadNetwork.edges = newNetwork.edges;
        ebikeRoadReady = true;
        return true;
    }

    return false;
}

function initMockRoadNetwork() {
    const ok = buildRoadNetworkFromGeoJSON(mockRoadNetwork);
    if (ok) {
        console.info('已加载内置模拟路网，节点数:', Object.keys(realRoadNetwork.nodes).length);
    }
    return ok;
}

function loadRealRoadNetwork() {
    return fetch('data/WHUInfo_Roads_Filtered.geojson', { cache: 'no-store' })
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }
            return response.json();
        })
        .then(geojson => {
            const ok = buildRoadNetworkFromGeoJSON(geojson);
            if (!ok) {
                throw new Error('真实路网为空，回退模拟路网');
            }
            console.info('真实路网数据加载完成，节点数:', Object.keys(realRoadNetwork.nodes).length);
            return true;
        })
        .catch(error => {
            console.warn('加载真实路网数据失败，回退到模拟路网:', error);
            initMockRoadNetwork();
            return false;
        });
}

function ensureEbikeRoadNetwork() {
    if (ebikeRoadReady && Object.keys(realRoadNetwork.nodes).length > 0) {
        return Promise.resolve(true);
    }

    if (ebikeRoadLoadingPromise) {
        return ebikeRoadLoadingPromise;
    }

    ebikeRoadLoadingPromise = loadRealRoadNetwork().finally(() => {
        ebikeRoadLoadingPromise = null;
    });

    return ebikeRoadLoadingPromise;
}

function findNearestRoadNode(lat, lng) {
    let nearestNode = null;
    let minDistance = Infinity;

    Object.entries(realRoadNetwork.nodes).forEach(([nodeId, node]) => {
        const distance = calcDistanceMeters(lat, lng, node.lat, node.lng);
        if (distance < minDistance) {
            minDistance = distance;
            nearestNode = nodeId;
        }
    });

    if (!nearestNode) {
        const nodeIds = Object.keys(realRoadNetwork.nodes);
        nearestNode = nodeIds.length > 0 ? nodeIds[0] : null;
    }

    return nearestNode;
}

function getRandomRoadNode() {
    const nodeIds = Object.keys(realRoadNetwork.nodes);
    if (nodeIds.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * nodeIds.length);
    const nodeId = nodeIds[randomIndex];
    return realRoadNetwork.nodes[nodeId];
}

// 将点吸附到最近的路网节点（如果距离在阈值内），否则略微偏移
function snapToNearestRoad(lat, lng, maxSnapDistance = 50) {
    // 检查路网节点数量
    const nodeCount = Object.keys(realRoadNetwork.nodes).length;
    if (nodeCount === 0) {
        console.warn('路网节点为空，使用默认位置');
        // 使用校园中心点作为默认位置
        return {
            lat: CAMPUS_CENTER_BD09[1],
            lng: CAMPUS_CENTER_BD09[0],
            snapped: false
        };
    }
    
    // 找到最近的有邻居的路网节点
    let nearestNodeId = null;
    let minDistance = Infinity;
    let nearestNode = null;
    
    Object.entries(realRoadNetwork.nodes).forEach(([nodeId, node]) => {
        // 只考虑有邻居的节点
        if (node.neighbors && node.neighbors.length > 0) {
            const distance = calcDistanceMeters(lat, lng, node.lat, node.lng);
            if (distance < minDistance) {
                minDistance = distance;
                nearestNodeId = nodeId;
                nearestNode = node;
            }
        }
    });
    
    if (!nearestNodeId || !nearestNode) {
        console.warn('未找到有邻居的路网节点，使用默认位置');
        // 使用校园中心点作为默认位置
        return {
            lat: CAMPUS_CENTER_BD09[1],
            lng: CAMPUS_CENTER_BD09[0],
            snapped: false
        };
    }
    
    console.log(`车辆位置 (${lat}, ${lng}) 最近的有邻居的路网节点 (${nearestNode.lat}, ${nearestNode.lng}) 距离: ${minDistance.toFixed(2)}米`);
    
    // 直接吸附到有邻居的路网节点
    console.log(`吸附到有邻居的路网节点，距离: ${minDistance.toFixed(2)}米`);
    return {
        lat: nearestNode.lat,
        lng: nearestNode.lng,
        snapped: true
    };
}

function findPathBFS(startNode, endNode) {
    if (!startNode || !endNode || !realRoadNetwork.nodes[startNode] || !realRoadNetwork.nodes[endNode]) {
        return [];
    }

    const queue = [[startNode]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];

        if (current === endNode) {
            return path;
        }

        if (visited.has(current)) {
            continue;
        }
        visited.add(current);

        const neighbors = realRoadNetwork.nodes[current].neighbors || [];
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.node)) {
                queue.push([...path, neighbor.node]);
            }
        });
    }

    return [];
}

function findPathOnRoads(startLat, startLng, endLat, endLng) {
    const startNode = findNearestRoadNode(startLat, startLng);
    const endNode = findNearestRoadNode(endLat, endLng);

    if (!startNode || !endNode) {
        return null;
    }

    const path = findPathBFS(startNode, endNode);
    if (!path || path.length === 0) {
        return null;
    }

    return path
        .map(nodeId => {
            const node = realRoadNetwork.nodes[nodeId];
            if (!node) return null;
            return [node.lng, node.lat];
        })
        .filter(Boolean);
}

function buildEbikeInfoHtml(ebike) {
    return `
        <div class="popup-content">
            <div class="popup-title">电动车 ${ebike.id}</div>
            <div class="popup-row"><span class="popup-label">状态</span><span class="popup-value">${ebike.status === 'idle' ? '空闲' : '移动'}</span></div>
            <div class="popup-row"><span class="popup-label">电量</span><span class="popup-value">${Math.max(0, Math.round(ebike.battery))}%</span></div>
            <div class="popup-row"><span class="popup-label">速度</span><span class="popup-value">${Math.round(ebike.speed || 0)} km/h</span></div>
        </div>
    `;
}

// 生成电动车模拟
function generateEbikeSimulation() {
    if (!map) {
        showToast('地图尚未初始化，请先登录系统');
        return;
    }

    const timeSlot = document.getElementById('sim-time-slot')?.value
        || document.getElementById('simulation-time')?.value
        || 'morning';
    const dataLevel = document.getElementById('sim-data-level')?.value
        || document.getElementById('simulation-level')?.value
        || 'medium';

    showProgress('正在生成电动车模拟数据...');

    ensureEbikeRoadNetwork()
        .then(() => fetch(`${API_BASE}bike-simulation?time=${timeSlot}&level=${dataLevel}`, { cache: 'no-store' }))
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const bikes = Array.isArray(data?.bikes) ? data.bikes : [];
            const ebikeData = bikes
                .map((bike, idx) => {
                    const normalized = normalizeBikeToBd09(bike.lng, bike.lat);
                    if (!normalized) return null;
                    // 检查是否在信息学部边界内
                    if (!isInsideBoundary(normalized.lat, normalized.lng)) return null;
                    // 吸附到最近的路网节点
                    const snapped = snapToNearestRoad(normalized.lat, normalized.lng);
                    return {
                        id: 'ebike_' + (bike.id || (idx + 1)),
                        lat: snapped.lat,
                        lng: snapped.lng,
                        status: bike.status || (Math.random() > 0.3 ? 'idle' : 'moving'),
                        speed: Number(bike.speed) || (bike.status === 'moving' ? 15 : 0),
                        battery: Number(bike.battery) || 100,
                        time_slot: timeSlot,
                        path: null,
                        pathIndex: 0,
                        progress: 0
                    };
                })
                .filter(Boolean);

            renderEbikeSimulation(ebikeData, timeSlot, dataLevel, Number(data?.count) || ebikeData.length);
            hideProgress();
            showToast(`电动车模拟数据生成完成，共 ${ebikeData.length} 辆`);

            setTimeout(() => {
                toggleEbikeAnimation();
            }, 300);
        })
        .catch(error => {
            console.error('读取电动车模拟数据失败:', error);
            const counts = { low: 50, medium: 100, high: 150 };
            const count = counts[dataLevel] || 100;
            const ebikeData = generateMockEbikeData(count, timeSlot);
            renderEbikeSimulation(ebikeData, timeSlot, dataLevel, count);
            hideProgress();
            showToast(`已使用本地模拟数据，共 ${count} 辆`);
            setTimeout(() => {
                toggleEbikeAnimation();
            }, 300);
        });
}

function generateMockEbikeData(count, timeSlot) {
    const data = [];
    const heatZones = MOCK_HEATMAP_DATA[timeSlot] || MOCK_HEATMAP_DATA.morning || [];

    let attempts = 0;
    const maxAttempts = count * 5; // 最多尝试5倍次数

    while (data.length < count && attempts < maxAttempts) {
        attempts++;
        const zone = heatZones.length ? heatZones[Math.floor(Math.random() * heatZones.length)] : [30.533, 114.365, 60];
        const latRaw = zone[0] + (Math.random() - 0.5) * 0.001;
        const lngRaw = zone[1] + (Math.random() - 0.5) * 0.001;
        const normalized = normalizeBikeToBd09(lngRaw, latRaw);
        if (!normalized) continue;
        
        // 检查是否在信息学部边界内
        if (!isInsideBoundary(normalized.lat, normalized.lng)) continue;
        
        // 吸附到最近的路网节点
        const snapped = snapToNearestRoad(normalized.lat, normalized.lng);

        const moving = Math.random() > 0.35;
        const minutesAgo = Math.floor(Math.random() * 180);
        const lastUsedAt = new Date(Date.now() - minutesAgo * 60000);
        const pad = n => String(n).padStart(2, '0');
        data.push({
            id: 'ebike_' + (data.length + 1),
            lat: snapped.lat,
            lng: snapped.lng,
            status: moving ? 'moving' : 'idle',
            battery: Math.floor(35 + Math.random() * 65),
            speed: moving ? Math.floor(12 + Math.random() * 14) : 0,
            last_used: `${pad(lastUsedAt.getHours())}:${pad(lastUsedAt.getMinutes())}`,
            path: null,
            pathIndex: 0,
            progress: 0
        });
    }

    return data;
}

function renderEbikeSimulation(ebikeData, timeSlot, dataLevel, count) {
    clearEbikeSimulation(true);

    ebikeData.forEach((ebike, idx) => {
        const color = ebike.status === 'idle' ? '#1a73e8' : '#34a853';
        const point = new BMap.Point(ebike.lng, ebike.lat);
        let marker = null;

        try {
            const symbol = new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
                scale: 4,
                fillColor: color,
                fillOpacity: 0.9,
                strokeColor: '#ffffff',
                strokeWeight: 1.5
            });
            marker = new BMap.Marker(point, { icon: symbol });
        } catch (_) {
            marker = new BMap.Marker(point);
        }

        marker.setTitle('电动车 ' + ebike.id);
        marker.addEventListener('click', function() {
            const infoWindow = new BMap.InfoWindow(buildEbikeInfoHtml(ebike), {
                width: 220,
                enableMessage: false
            });
            marker.openInfoWindow(infoWindow);
        });

        map.addOverlay(marker);
        ebikeSimMarkers.push({ marker, id: ebike.id });
        ebikeSimData.push(ebike);

        if (ebike.status === 'moving') {
            const targetNode = getRandomRoadNode();
            if (targetNode) {
                const pathCoords = findPathOnRoads(ebike.lat, ebike.lng, targetNode.lat, targetNode.lng);
                if (pathCoords && pathCoords.length > 1) {
                    ebike.path = pathCoords.map(coord => ({ lat: coord[1], lng: coord[0] }));
                    ebike.pathIndex = 0;
                    ebike.progress = 0;
                }
            }
        }
    });

    const simStatsCard = document.getElementById('ebike-sim-stats-card');
    if (simStatsCard) {
        simStatsCard.style.display = 'block';
    }

    const countEl = document.getElementById('sim-ebike-count');
    const timeEl = document.getElementById('sim-time-display');
    const levelEl = document.getElementById('sim-level-display');
    const statusEl = document.getElementById('sim-anim-status');

    if (countEl) countEl.textContent = (count || ebikeData.length) + ' 辆';
    if (timeEl) {
        timeEl.textContent = {
            morning: '早高峰 (7:00-9:00)',
            noon: '午高峰 (11:00-13:00)',
            evening: '晚高峰 (17:00-19:00)'
        }[timeSlot] || timeSlot;
    }
    if (levelEl) {
        levelEl.textContent = {
            low: '低 (50辆)',
            medium: '中 (100辆)',
            high: '高 (150辆)'
        }[dataLevel] || dataLevel;
    }
    if (statusEl) statusEl.textContent = '未播放';

    // 动态更新系统概览中的系统状态
    const totalCount = count || ebikeData.length;
    const availableCount = ebikeData.filter(b => b.status === 'idle' && b.battery >= 50).length;
    let lowBatteryCount = ebikeData.filter(b => b.battery < 50).length;
    let demandCount = Math.floor(totalCount * 0.45);
    
    // 限制数值范围，避免异常值
    lowBatteryCount = Math.min(lowBatteryCount, 100);
    demandCount = Math.min(demandCount, 500);
    
    // 调用统一的更新函数
    updateSystemStatus(lowBatteryCount, demandCount);

    syncSimulationButtons();
}

// 切换电动车动画
function toggleEbikeAnimation() {
    if (ebikeSimData.length === 0) {
        showToast('请先生成电动车模拟数据');
        return;
    }

    if (ebikeAnimationRunning) {
        stopEbikeAnimation();
        showToast('动画已暂停');
    } else {
        startEbikeAnimation();
        showToast('电动车动画已开始');
    }
}

function startEbikeAnimation() {
    if (ebikeAnimationRunning || ebikeSimData.length === 0) {
        syncSimulationButtons();
        return;
    }

    ebikeAnimationRunning = true;
    const statusEl = document.getElementById('sim-anim-status');
    if (statusEl) statusEl.textContent = '播放中';

    // 开播前按参考逻辑为移动车辆生成基于路网的路径
    ebikeSimData.forEach(ebike => {
        if (ebike.status === undefined) {
            ebike.status = Math.random() > 0.3 ? 'idle' : 'moving';
        }

        if (ebike.status === 'moving') {
            ebike.speed = Math.max(15, Number(ebike.speed) || 30);
            const startNode = findNearestRoadNode(ebike.lat, ebike.lng);
            if (startNode) {
                let pathCoords = null;
                let attempts = 0;
                const maxAttempts = 5;

                while (!pathCoords && attempts < maxAttempts) {
                    const targetNode = getRandomRoadNode();
                    if (targetNode) {
                        pathCoords = findPathOnRoads(ebike.lat, ebike.lng, targetNode.lat, targetNode.lng);
                    }
                    attempts++;
                }

                if (pathCoords && pathCoords.length > 1) {
                    ebike.path = pathCoords.map(coord => ({ lat: coord[1], lng: coord[0] }));
                    ebike.pathIndex = 0;
                    ebike.progress = 0;
                } else {
                    ebike.status = 'idle';
                    ebike.speed = 0;
                }
            } else {
                ebike.status = 'idle';
                ebike.speed = 0;
            }
        }
    });

    ebikeAnimationTimer = setInterval(() => {
        ebikeSimData.forEach((ebike, idx) => {
            if (ebike.status === undefined) {
                ebike.status = 'idle';
            }
            if (ebike.speed === undefined) {
                ebike.speed = 30;
            }
            if (ebike.pathIndex === undefined) {
                ebike.pathIndex = 0;
            }
            if (ebike.progress === undefined) {
                ebike.progress = 0;
            }

            if (ebike.status === 'moving' && ebike.path && ebike.path.length > 1) {
                const path = ebike.path;

                if (ebike.pathIndex < path.length - 1) {
                    const currentPoint = path[ebike.pathIndex];
                    const nextPoint = path[ebike.pathIndex + 1];

                    const distance = calcDistanceMeters(
                        currentPoint.lat,
                        currentPoint.lng,
                        nextPoint.lat,
                        nextPoint.lng
                    );

                    const speed = (Number(ebike.speed) || 30) / 3600 * 1000;
                    const timeStep = 0.05;
                    const moveDistance = speed * timeStep;

                    ebike.progress += moveDistance;

                    if (ebike.progress >= distance) {
                        ebike.lat = nextPoint.lat;
                        ebike.lng = nextPoint.lng;
                        ebike.pathIndex++;
                        ebike.progress = 0;

                        if (ebike.pathIndex >= path.length - 1) {
                            const newTargetNode = getRandomRoadNode();
                            if (newTargetNode) {
                                const newPathCoords = findPathOnRoads(ebike.lat, ebike.lng, newTargetNode.lat, newTargetNode.lng);
                                if (newPathCoords && newPathCoords.length > 1) {
                                    ebike.path = newPathCoords.map(coord => ({ lat: coord[1], lng: coord[0] }));
                                    ebike.pathIndex = 0;
                                } else {
                                    ebike.status = 'idle';
                                    ebike.speed = 0;
                                }
                            } else {
                                ebike.status = 'idle';
                                ebike.speed = 0;
                            }
                        }
                    } else if (distance > 0) {
                        const ratio = ebike.progress / distance;
                        ebike.lat = currentPoint.lat + (nextPoint.lat - currentPoint.lat) * ratio;
                        ebike.lng = currentPoint.lng + (nextPoint.lng - currentPoint.lng) * ratio;
                    }

                    ebike.battery = Math.max(0, (Number(ebike.battery) || 0) - 0.01);
                }
            }

            const markerWrap = ebikeSimMarkers[idx];
            if (markerWrap && markerWrap.marker) {
                markerWrap.marker.setPosition(new BMap.Point(ebike.lng, ebike.lat));
            }
        });
    }, 50);

    syncSimulationButtons();
}

function playEbikeAnimation() {
    toggleEbikeAnimation();
}

function stopEbikeAnimation() {
    if (ebikeAnimationTimer) {
        clearInterval(ebikeAnimationTimer);
        ebikeAnimationTimer = null;
    }
    ebikeAnimationRunning = false;
    const statusEl = document.getElementById('sim-anim-status');
    if (statusEl) statusEl.textContent = '已停止';
    syncSimulationButtons();
}

// 清除电动车模拟
function clearEbikeSimulation(silent) {
    stopEbikeAnimation();

    ebikeSimMarkers.forEach(item => {
        const marker = item?.marker || item;
        if (marker) {
            try {
                map.removeOverlay(marker);
            } catch (_) {
                // ignore
            }
        }
    });

    ebikeSimMarkers = [];
    ebikeSimData = [];

    const simStatsCard = document.getElementById('ebike-sim-stats-card');
    if (simStatsCard) {
        simStatsCard.style.display = 'none';
    }

    const countEl = document.getElementById('sim-ebike-count');
    const timeEl = document.getElementById('sim-time-display');
    const levelEl = document.getElementById('sim-level-display');
    const statusEl = document.getElementById('sim-anim-status');

    if (countEl) countEl.textContent = '0 辆';
    if (timeEl) timeEl.textContent = '-';
    if (levelEl) levelEl.textContent = '-';
    if (statusEl) statusEl.textContent = '未播放';

    syncSimulationButtons();

    if (!silent) {
        showToast('电动车模拟已清除');
    }
}

// 筛选低电量车辆（独立于电动车模拟模块）
async function filterLowBattery() {
    if (currentUserRole !== 'admin') {
        showToast('当前角色无权限执行电池运维操作');
        return;
    }

    const threshold = Number(document.getElementById('battery-threshold')?.value) || 30;
    const capacity = getBatteryCapacityValue();
    const tbody = document.getElementById('battery-table-body');

    if (!tbody) {
        showToast('未找到低电量列表面板');
        return;
    }

    let lowBattery = [];
    let source = 'api';
    try {
        const result = await getLowBatteryCandidates(threshold);
        lowBattery = result.bikes;
        source = result.source;
    } catch (err) {
        console.error('读取低电量数据失败:', err);
        tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">低电量数据读取失败</td></tr>';
        clearLowBatteryMarkers();
        updateLowBatteryMetric(0);
        updateBatteryResultPanel({ lowCount: 0, vehicleCount: 0, routeCount: 0, capacityPerTrip: capacity, routes: [] });
        showToast('低电量数据读取失败');
        return;
    }

    clearBatteryRouteLines();
    batteryRouteAssignments = {};
    batteryLastRouteResult = null;
    // 限制低电量车辆数，避免异常值
currentLowBatteryList = lowBattery.slice(0, 100);
    updateLowBatteryMetric(lowBattery.length);
    updateBatteryResultPanel({
        lowCount: lowBattery.length,
        vehicleCount: 0,
        routeCount: 0,
        capacityPerTrip: capacity,
        routes: []
    });
    persistBatteryOpsSnapshot();

    if (lowBattery.length === 0) {
        renderBatteryTableRows([], tbody);
        clearLowBatteryMarkers();
        showToast('当前无低电量车辆');
        return;
    }

    renderBatteryTableRows(lowBattery, tbody);
    renderLowBatteryMarkers(lowBattery);
    if (source === 'api') {
        showToast(`已从后端读取并筛选 ${lowBattery.length} 辆低电量车辆`);
    } else {
        showToast(`已筛选出 ${lowBattery.length} 辆低电量车辆`);
    }

    // 更新系统状态
    if (typeof updateSystemStatus === 'function') {
        updateSystemStatus();
    }
}

// 生成换电任务路线（后端负责核心分组与路网规划）
async function generateBatteryRoute() {
    if (!map) {
        showToast('地图尚未初始化');
        return;
    }

    // 如果是调度员，只显示分配给自己的路线
    if (currentUserRole === 'dispatcher') {
        const dispatcherBatteryRoutes = getDispatcherBatteryRoutes();
        if (dispatcherBatteryRoutes.length > 0) {
            // 从batteryLastRouteResult中过滤出分配给自己的路线
            if (batteryLastRouteResult && batteryLastRouteResult.routes) {
                const myRouteNames = dispatcherBatteryRoutes.map(r => r.route_id);
                const filteredRoutes = batteryLastRouteResult.routes.filter(route => {
                    return myRouteNames.includes(route.route_id);
                });
                if (filteredRoutes.length > 0) {
                    clearBatteryRouteLines();
                    drawBatteryRoute({ ...batteryLastRouteResult, routes: filteredRoutes }, currentLowBatteryList.length, { silentToast: true });
                    showToast(`已显示分配给您的 ${filteredRoutes.length} 条换电路线`);
                } else {
                    showToast('您还没有被分配换电路线');
                }
            } else {
                showToast('尚无换电路线数据，请等待管理员生成');
            }
        } else {
            showToast('您还没有被分配换电路线');
        }
        return;
    }

    if (currentUserRole !== 'admin') {
        showToast('当前角色无权限执行电池运维操作');
        return;
    }

    const threshold = Number(document.getElementById('battery-threshold')?.value) || 30;
    const capacity = getBatteryCapacityValue();
    
    // 每次生成路线时都重新获取低电量车辆数据并吸附到路网，确保使用最新的路网吸附数据
    let lowBattery;
    try {
        console.log('开始获取低电量车辆数据，阈值:', threshold);
        const result = await getLowBatteryCandidates(threshold);
        console.log('获取低电量车辆数据成功，结果:', result);
        lowBattery = result.bikes;
        console.log('低电量车辆数据:', {
            length: lowBattery.length,
            sample: lowBattery[0]
        });
    } catch (err) {
        console.error('读取低电量数据失败:', err);
        showToast('读取低电量数据失败，无法生成路线');
        return;
    }

    try {
        // 限制低电量车辆数，避免异常值
currentLowBatteryList = lowBattery.slice(0, 100);
        console.log('设置当前低电量车辆列表成功');
    } catch (err) {
        console.error('设置当前低电量车辆列表失败:', err);
        showToast('设置低电量车辆列表失败，无法生成路线');
        return;
    }

    if (lowBattery.length === 0) {
        showToast('无低电量车辆可生成路线');
        return;
    }

    try {
        clearBatteryRouteLines();
        console.log('清除换电路线路线成功');
    } catch (err) {
        console.error('清除换电路线路线失败:', err);
        showToast('清除换电路线路线失败，无法生成路线');
        return;
    }

    // 按新规则：所有换电运维车统一从校园中心补给点出发并回到同一终点
    const servicePoints = [
        { lng: CAMPUS_CENTER_BD09[0], lat: CAMPUS_CENTER_BD09[1], name: '校园中心补给点' }
    ];
    console.log('服务点:', servicePoints);

    try {
        const requestData = {
            bikes: lowBattery.map(b => ({ id: b.id, lng: b.lng, lat: b.lat, battery: b.battery, last_used: b.last_used })),
            service_points: servicePoints,
            threshold,
            capacity_per_trip: capacity
        };
        console.log('发送换电路线请求:', {
            bikeCount: requestData.bikes.length,
            servicePointCount: requestData.service_points.length,
            threshold: requestData.threshold,
            capacity: requestData.capacity_per_trip,
            sampleBike: requestData.bikes[0]
        });
        
        const response = await fetch('/api/battery/route', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });
        
        console.log('换电路线响应状态:', response.status);
        
        if (!response.ok) {
            // 尝试获取错误信息
            try {
                const errorData = await response.json();
                console.error('换电路线错误响应:', errorData);
                throw new Error(`HTTP ${response.status}: ${errorData.error || 'Unknown error'}`);
            } catch (e) {
                console.error('无法解析错误响应:', e);
                throw new Error(`HTTP ${response.status}`);
            }
        }
        
        const data = await response.json();
        console.log('换电路线响应数据:', {
            routeCount: data.routes?.length || 0,
            vehicleCount: data.vehicle_count || 0,
            bikeCount: data.bike_count || 0
        });
        
        drawBatteryRoute(data, lowBattery.length);
    } catch (err) {
        console.error('生成换电路线失败:', err);
        showToast(`生成换电路线失败: ${err.message}`);
    }
}

function normalizeRoutePoint(p) {
    const lng = Number(p?.lng);
    const lat = Number(p?.lat);
    if (!Number.isFinite(lng) || !Number.isFinite(lat)) {
        return null;
    }
    return { lng, lat };
}

function calcDirectionAngle(fromPoint, toPoint) {
    const dx = Number(toPoint.lng) - Number(fromPoint.lng);
    const dy = Number(toPoint.lat) - Number(fromPoint.lat);
    const rad = Math.atan2(dy, dx);
    return rad * 180 / Math.PI;
}

function offsetPointByMeters(basePoint, eastMeters, northMeters) {
    const lat = Number(basePoint?.lat);
    const lng = Number(basePoint?.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
        return basePoint;
    }

    const latRad = lat * Math.PI / 180;
    const dLat = northMeters / 110540;
    const dLng = eastMeters / (111320 * Math.max(Math.cos(latRad), 0.00001));
    return {
        lng: lng + dLng,
        lat: lat + dLat
    };
}

function getRouteMarkerDisplayPoint(basePoint, routeIndex, routeCount, markerType) {
    const total = Math.max(1, Number(routeCount) || 1);
    const idx = Math.max(0, Number(routeIndex) || 0);
    const baseAngle = (360 / total) * idx;
    const isEnd = markerType === 'end';
    const angleDeg = baseAngle + (isEnd ? 170 : 20);
    const radius = isEnd ? 18 : 12;
    const rad = angleDeg * Math.PI / 180;
    const east = radius * Math.cos(rad);
    const north = radius * Math.sin(rad);
    return offsetPointByMeters(basePoint, east, north);
}

function addBatteryRouteArrows(routePoints, color, polyline) {
    if (!Array.isArray(routePoints) || routePoints.length < 2 || typeof BMap === 'undefined') {
        return;
    }

    const step = Math.max(1, Math.floor(routePoints.length / 6));
    for (let i = step; i < routePoints.length; i += step) {
        const prev = routePoints[i - 1];
        const curr = routePoints[i];
        if (!prev || !curr) continue;

        try {
            const angle = calcDirectionAngle(prev, curr);
            const arrowSymbol = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {
                scale: 0.8,
                strokeWeight: 1,
                strokeColor: color,
                fillColor: color,
                fillOpacity: 0.9,
                rotation: angle + BATTERY_ARROW_ROTATION_OFFSET
            });
            const arrowMarker = new BMap.Marker(new BMap.Point(curr.lng, curr.lat), { icon: arrowSymbol });
            arrowMarker.setZIndex(9900); // 设置较低的zIndex，确保在路线下方、车辆上方
            arrowMarker.parentPolyline = polyline; // 保存父路线引用，便于联动
            map.addOverlay(arrowMarker);
            batteryRouteLines.push(arrowMarker);
        } catch (_) {
            // ignore single arrow render failure
        }
    }
}

function getRouteIndexToken(text) {
    const match = String(text || '').match(/(\d+)/);
    return match ? Number(match[1]) : null;
}

function routeMatchesVehicleKey(route, vehicleKey) {
    const key = String(vehicleKey || '').trim();
    if (!key) {
        return false;
    }

    const loweredKey = key.toLowerCase();
    const candidates = [
        String(route?.vehicle_id || ''),
        String(route?.vehicle_name || ''),
        String(route?.route_name || '')
    ].map(v => v.trim()).filter(Boolean);

    if (candidates.some(v => v.toLowerCase() === loweredKey)) {
        return true;
    }

    const keyIndex = getRouteIndexToken(key);
    if (!Number.isFinite(keyIndex)) {
        return false;
    }

    return candidates.some(v => getRouteIndexToken(v) === keyIndex);
}

function buildScopedAssignmentsForRoute(route, allAssignments) {
    const scoped = {};
    const ordered = Array.isArray(route?.ordered_bikes) ? route.ordered_bikes : [];
    ordered.forEach((bike, idx) => {
        if (!bike?.id) return;
        const fromAll = (allAssignments && allAssignments[bike.id]) || {};
        scoped[bike.id] = {
            route_name: fromAll.route_name || route?.route_name || '-',
            vehicle_name: fromAll.vehicle_name || route?.vehicle_name || '-',
            service_order: Number(fromAll.service_order) || Number(bike.service_order) || (idx + 1)
        };
    });
    return scoped;
}

function getDispatcherScopedBikes(route, scopedAssignments) {
    const ordered = Array.isArray(route?.ordered_bikes) ? route.ordered_bikes : [];
    if (ordered.length > 0) {
        return ordered.map((bike, idx) => {
            const normalized = normalizeBatteryBikeRecord(bike, idx);
            if (!normalized) return null;
            const assignment = scopedAssignments[normalized.id] || {};
            return {
                ...normalized,
                service_order: Number(assignment.service_order) || Number(bike.service_order) || (idx + 1)
            };
        }).filter(Boolean);
    }

    const routeName = String(route?.route_name || '').trim();
    return (currentLowBatteryList || []).filter(bike => {
        const assignment = batteryRouteAssignments[bike.id] || {};
        return String(assignment.route_name || '').trim() === routeName;
    });
}

function setBatteryRouteDetailHint(text) {
    const detailEl = document.getElementById('battery-route-detail');
    if (detailEl) {
        if (currentUserRole === 'admin' && (text.includes('当前未分配路线') || text.includes('未分配'))) {
            detailEl.textContent = '';
        } else if (text.includes('当前未分配路线') || text.includes('未分配')) {
            detailEl.innerHTML = '<span style="color:#dc3545;font-weight:bold;font-size:14px;background:#fff0f0;padding:8px 12px;border-radius:6px;border:2px solid #dc3545;display:inline-block;">' + text + '</span>';
        } else {
            detailEl.textContent = text;
        }
    }
}

function setDispatchRouteDetailHint(text) {
    const detailEl = document.getElementById('dispatch-route-detail');
    if (detailEl) {
        if (currentUserRole === 'admin' && (text.includes('请先运行调度优化') || text.includes('当前未分配路线') || text.includes('未分配'))) {
            detailEl.textContent = '';
            detailEl.className = 'dispatch-info';
        } else if (text.includes('当前未分配路线') || text.includes('未分配')) {
            detailEl.innerHTML = '<span style="color:#dc3545;font-weight:bold;font-size:14px;background:#fff0f0;padding:8px 12px;border-radius:6px;border:2px solid #dc3545;display:inline-block;">' + text + '</span>';
            detailEl.className = 'dispatch-info';
        } else {
            detailEl.textContent = text;
            detailEl.className = 'dispatch-info';
        }
    }
}

async function tryBootstrapDispatcherBatteryTasks() {
    // 先尝试从localStorage加载之前保存的路线结果
    const storedBatteryResult = localStorage.getItem('batteryLastRouteResult');
    if (storedBatteryResult) {
        try {
            const routeData = JSON.parse(storedBatteryResult);
            if (Array.isArray(routeData?.routes) && routeData.routes.length > 0) {
                batteryLastRouteResult = routeData;
                batteryRouteAssignments = routeData?.bike_assignments && typeof routeData.bike_assignments === 'object'
                    ? routeData.bike_assignments
                    : {};
                persistBatteryOpsSnapshot();
                return true;
            }
        } catch (error) {
            console.error('从localStorage加载电池路线失败:', error);
        }
    }

    // 如果localStorage中没有数据，再从后端获取
    const threshold = Number(document.getElementById('battery-threshold')?.value) || 30;
    const capacity = Math.max(1, getBatteryCapacityValue());
    const servicePoints = [
        { lng: CAMPUS_CENTER_BD09[0], lat: CAMPUS_CENTER_BD09[1], name: '校园中心补给点' }
    ];

    try {
        const lowResult = await getLowBatteryCandidates(threshold);
        const lowBattery = Array.isArray(lowResult?.bikes) ? lowResult.bikes : [];
        // 限制低电量车辆数，避免异常值
currentLowBatteryList = lowBattery.slice(0, 100);

        if (!lowBattery.length) {
            batteryLastRouteResult = null;
            batteryRouteAssignments = {};
            persistBatteryOpsSnapshot();
            return false;
        }

        const response = await fetch('/api/battery/route', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                bikes: lowBattery.map(b => ({
                    id: b.id,
                    lng: b.lng,
                    lat: b.lat,
                    battery: b.battery,
                    last_used: b.last_used
                })),
                service_points: servicePoints,
                threshold,
                capacity_per_trip: capacity
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const routeData = await response.json();
        if (!Array.isArray(routeData?.routes) || routeData.routes.length === 0) {
            batteryLastRouteResult = null;
            batteryRouteAssignments = {};
            persistBatteryOpsSnapshot();
            return false;
        }

        batteryLastRouteResult = routeData;
        batteryRouteAssignments = routeData?.bike_assignments && typeof routeData.bike_assignments === 'object'
            ? routeData.bike_assignments
            : {};
        persistBatteryOpsSnapshot();
        return true;
    } catch (error) {
        console.error('调度员兜底加载换电任务失败:', error);
        return false;
    }
}

async function applyDispatcherVehicleFilter(options) {
    const opts = options || {};
    if (currentUserRole === 'admin') {
        return;
    }

    const tbody = document.getElementById('battery-table-body');
    const allRoutes = Array.isArray(batteryLastRouteResult?.routes) ? batteryLastRouteResult.routes : [];
    const allAssignments = batteryLastRouteResult?.bike_assignments && typeof batteryLastRouteResult.bike_assignments === 'object'
        ? batteryLastRouteResult.bike_assignments
        : {};

    if (!allRoutes.length) {
        if (!opts.skipBootstrap) {
            const bootstrapped = await tryBootstrapDispatcherBatteryTasks();
            if (bootstrapped) {
                await applyDispatcherVehicleFilter({
                    ...opts,
                    skipBootstrap: true,
                    silent: true,
                    noInputToast: opts.noInputToast
                });
                return;
            }
        }

        clearBatteryRouteLines();
        clearLowBatteryMarkers();
        updateLowBatteryMetric(0);
        batteryRouteAssignments = {};
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">当前未分配路线！</td></tr>';
        }
        updateBatteryResultPanel({
            lowCount: 0,
            vehicleCount: 0,
            routeCount: 0,
            capacityPerTrip: 0,
            routes: []
        });
        setBatteryRouteDetailHint('当前未分配路线！');
        if (!opts.silent) {
            showToast('当前未分配路线！');
        }
        return;
    }

    // 获取分配给当前调度员的电池运维任务
    const storedBatteryAssignments = localStorage.getItem('batteryAssignments');
    const batteryAssignments = storedBatteryAssignments ? JSON.parse(storedBatteryAssignments) : [];
    const myBatteryAssignments = batteryAssignments.filter(a => a.dispatcher_id === currentUsername);

    if (myBatteryAssignments.length === 0) {
        clearBatteryRouteLines();
        clearLowBatteryMarkers();
        updateLowBatteryMetric(0);
        batteryRouteAssignments = {};
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">当前未分配路线！</td></tr>';
        }
        updateBatteryResultPanel({
            lowCount: 0,
            vehicleCount: 0,
            routeCount: 0,
            capacityPerTrip: 0,
            routes: []
        });
        setBatteryRouteDetailHint('当前未分配路线！');
        if (!opts.silent) {
            showToast('当前未分配路线！');
        }
        if (!opts.skipPersist) {
            persistBatteryOpsSnapshot();
        }
        return;
    }

    // 过滤出分配给当前调度员的路线
    const myVehicleIds = myBatteryAssignments.map(a => a.vehicle_id);
    
    const matchedRoutes = allRoutes.filter(route => 
        myVehicleIds.some(vid => String(route.vehicle_id) === String(vid))
    );

    if (matchedRoutes.length === 0) {
        clearBatteryRouteLines();
        clearLowBatteryMarkers();
        updateLowBatteryMetric(0);
        batteryRouteAssignments = {};
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">当前未分配路线！</td></tr>';
        }
        updateBatteryResultPanel({
            lowCount: 0,
            vehicleCount: 0,
            routeCount: 0,
            capacityPerTrip: 0,
            routes: []
        });
        setBatteryRouteDetailHint('当前未分配路线！');
        if (!opts.silent) {
            showToast('当前未分配路线！');
        }
        if (!opts.skipPersist) {
            persistBatteryOpsSnapshot();
        }
        return;
    }

    // 获取所有相关的车辆和分配
    const allScopedBikes = [];
    const allScopedAssignments = {};
    matchedRoutes.forEach(matchedRoute => {
        const scopedAssignments = buildScopedAssignmentsForRoute(matchedRoute, allAssignments);
        const scopedBikes = getDispatcherScopedBikes(matchedRoute, scopedAssignments);
        allScopedBikes.push(...scopedBikes);
        Object.assign(allScopedAssignments, scopedAssignments);
    });

    const scopedResult = {
        routes: matchedRoutes,
        vehicle_count: matchedRoutes.length,
        route_count: matchedRoutes.length,
        bike_count: allScopedBikes.length,
        capacity_per_trip: batteryLastRouteResult?.capacity_per_trip || matchedRoutes[0]?.capacity_per_trip || getBatteryCapacityValue(),
        bike_assignments: allScopedAssignments
    };
    setBatteryCapacityValue(scopedResult.capacity_per_trip);

    clearBatteryRouteLines();
    clearLowBatteryMarkers(); // 清除所有低电量车辆标记
    updateLowBatteryMetric(allScopedBikes.length);
    drawBatteryRoute(scopedResult, allScopedBikes.length, {
        silentToast: true,
        skipPersist: true,
        updateGlobalState: false,
        tableBikes: allScopedBikes
    });

    updateBatteryResultPanel({
        lowCount: allScopedBikes.length,
        vehicleCount: matchedRoutes.length,
        routeCount: matchedRoutes.length,
        capacityPerTrip: scopedResult.capacity_per_trip,
        routes: matchedRoutes
    });
    setBatteryRouteDetailHint(`已分配 ${matchedRoutes.length} 条路线`);

    if (!opts.silent) {
        showToast(`已显示分配给您的 ${matchedRoutes.length} 条路线`);
    }
    if (!opts.skipPersist) {
        persistBatteryOpsSnapshot();
    }
}



function drawBatteryRoute(routeResult, totalBikes, options) {
    if (!map) return;

    const drawOptions = options || {};
    const routes = Array.isArray(routeResult) ? routeResult : (routeResult?.routes || []);
    const routeCount = routes.length;
    const assignments = routeResult?.bike_assignments && typeof routeResult.bike_assignments === 'object'
        ? routeResult.bike_assignments
        : {};
    batteryRouteAssignments = assignments;

    routes.forEach((route, idx) => {
        const pts = Array.isArray(route?.points) ? route.points.map(normalizeRoutePoint).filter(Boolean) : route;
        if (!pts || pts.length < 2) {
            return;
        }

        const color = BATTERY_ROUTE_COLORS[idx % BATTERY_ROUTE_COLORS.length] || '#1a73e8';
        const routeName = route?.route_name || `换电任务路线${idx + 1}`;
        const vehicleName = route?.vehicle_name || `换电运维车${idx + 1}`;

        // 创建箭头符号
        const arrowSymbol = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {
            scale: 0.8,
            strokeWeight: 1,
            strokeColor: color,
            fillColor: color,
            fillOpacity: 0.9
        });

        // 创建折线
            const polyline = new BMap.Polyline(pts.map(p => new BMap.Point(p.lng, p.lat)), {
                strokeColor: color,
                strokeWeight: 4,
                strokeOpacity: 0.85,
                strokeStyle: 'solid'
            });
        map.addOverlay(polyline);
        batteryRouteLines.push(polyline);

        const ordered = Array.isArray(route?.ordered_bikes) ? route.ordered_bikes : [];
        ordered.forEach((b, orderIdx) => {
            if (!b?.id) return;
            batteryRouteAssignments[b.id] = {
                route_name: routeName,
                vehicle_name: vehicleName,
                service_order: Number(b?.service_order) || (orderIdx + 1)
            };
            
            // 添加低电量车辆标记
            const lng = parseFloat(b.lng);
            const lat = parseFloat(b.lat);
            const batteryLevel = Number(b.battery) || 0;
            
            if (Number.isFinite(lng) && Number.isFinite(lat)) {
                try {
                    const bikePoint = new BMap.Point(lng, lat);
                    // 使用与图例一致的SVG图标
                    const bikeIcon = makeLowBatteryIcon(batteryLevel);
                    const bikeMarker = new BMap.Marker(bikePoint, { icon: bikeIcon });
                    
                    bikeMarker.setZIndex(9990);
                    map.addOverlay(bikeMarker);
                    lowBatteryMarkers.push(bikeMarker);
                } catch (error) {
                    console.error('创建低电量车辆标记失败:', error);
                }
            }
        });
    });

    if (routes.length > 0) {
        // 使用第一条路线的服务点坐标作为起终点标记位置（与后端返回的service_point一致）
        const firstRoute = routes[0];
        const depotCoord = firstRoute?.service_point || firstRoute?.start_point || {
            lng: CAMPUS_CENTER_BD09[0],
            lat: CAMPUS_CENTER_BD09[1]
        };
        let depotMarker;
        try {
            const depotIcon = new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
                scale: 2.8,
                strokeWeight: 4,
                strokeColor: '#8a5a00',
                fillColor: '#ffb300',
                fillOpacity: 1
            });
            depotMarker = new BMap.Marker(new BMap.Point(depotCoord.lng, depotCoord.lat), { icon: depotIcon });
        } catch (_) {
            depotMarker = new BMap.Marker(new BMap.Point(depotCoord.lng, depotCoord.lat));
        }
        try {
            const depotLabel = new BMap.Label('换电路线起终点', { offset: new BMap.Size(14, -18) });
            depotLabel.setStyle({ borderColor: '#ffb300', color: '#1f1f1f', backgroundColor: '#fff8e1' });
            depotMarker.setLabel(depotLabel);
        } catch (_) {}
        depotMarker.setZIndex(9980);
        map.addOverlay(depotMarker);
        batteryRouteLines.push(depotMarker);

        // 为每条路线也绘制起终点标记
        routes.forEach((route, idx) => {
            const routeDepotCoord = route?.service_point || route?.start_point;
            if (!routeDepotCoord) return;

            const routeColor = BATTERY_ROUTE_COLORS[idx % BATTERY_ROUTE_COLORS.length] || '#1a73e8';
            let routeDepotMarker;
            try {
                const routeDepotIcon = new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
                    scale: 2.2,
                    strokeWeight: 3,
                    strokeColor: routeColor,
                    fillColor: routeColor,
                    fillOpacity: 0.9
                });
                routeDepotMarker = new BMap.Marker(new BMap.Point(routeDepotCoord.lng, routeDepotCoord.lat), { icon: routeDepotIcon });
            } catch (_) {
                routeDepotMarker = new BMap.Marker(new BMap.Point(routeDepotCoord.lng, routeDepotCoord.lat));
            }
            routeDepotMarker.setZIndex(9980);
            map.addOverlay(routeDepotMarker);
            batteryRouteLines.push(routeDepotMarker);
        });
    }

    const tableBikes = Array.isArray(drawOptions.tableBikes) ? drawOptions.tableBikes : currentLowBatteryList;
    const tbody = document.getElementById('battery-table-body');
    if (tbody) {
        renderBatteryTableRows(tableBikes, tbody);
    }

    updateBatteryResultPanel({
        lowCount: routeResult?.bike_count || totalBikes || tableBikes.length,
        vehicleCount: routeResult?.vehicle_count || routes.length,
        routeCount: routeResult?.route_count || routes.length,
        capacityPerTrip: routeResult?.capacity_per_trip || getBatteryCapacityValue(),
        routes: routes
    });

    const updateGlobalState = drawOptions.updateGlobalState !== false;
    if (updateGlobalState) {
        batteryLastRouteResult = routeResult;
    }
    if (!drawOptions.skipPersist && updateGlobalState) {
        persistBatteryOpsSnapshot();
    }

    updateLayerVisibility();

    if (!drawOptions.silentToast) {
        showToast(`已为 ${totalBikes} 辆低电量车辆生成换电任务路线`);
    }
}

// 清除模拟
function clearSimulation() {
    clearEbikeSimulation(true);
    showToast('模拟数据已清除');
}

// 页面加载完成后初始化



window.onload = function() {



    initLoginPage();



    // 初始化菜单切换功能


    setTimeout(() => {



        initMenuSwitch();



        // 初始化图层控制


        initLayerControl();


        // 绑定电动车模拟模块按钮


        bindSimulationModuleButtons();
        bindBatteryDispatcherControls();
        initFeedbackModuleEvents();
        initAIPanelEvents();



    }, 100);



};



















