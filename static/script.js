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

let dispatchCache = {};

let supplyDemandCalcCache = {};

let pointsV2Cache = null;

let pointsV2LoadingPromise = null;

let pointsV2LoadFailed = false;

let selectedScheme = 'auto';

let currentDispatchScheme = '待选择';

let latestSmartLocationResult = null;

let latestDispatchResult = null;

let savedPredictionData = null;

let currentPOIData = null;

let currentPoiSource = 'mock';

let currentUserRole = 'admin';

// 电单车模拟全局状态
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

const BATTERY_ROUTE_COLORS = ['#28a745', '#1a73e8', '#fb8c00', '#8e24aa', '#00acc1', '#d81b60'];
const BATTERY_DEFAULT_CAPACITY = 6;
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

function isPointInPolygon(lat, lng, polygon) {

    let inside = false;

    const n = polygon.length;

    for (let i = 0, j = n - 1; i < n; j = i++) {

        const xi = polygon[i][0], yi = polygon[i][1];

        const xj = polygon[j][0], yj = polygon[j][1];

        if (((yi > lat) !== (yj > lat)) &&

            (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) {

            inside = !inside;

        }

    }

    return inside;

}



// 检查点是否在校园边界内（使用真正的多边形边界）

function isInsideBoundary(lat, lng) {

    return isPointInPolygon(lat, lng, CAMPUS_BOUNDARY_POLYGON);

}







// 显示 Toast 消息



function showToast(message) {



    // 简单的 toast 实现



    const toast = document.createElement('div');



    toast.className = 'toast';



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



        map.centerAndZoom(centerPoint, 16);



        map.enableScrollWheelZoom(true);







        console.info('百度地图 JS API 加载成功');






        // 初始化菜单切换功能


        initMenuSwitch('');







        // 初始化校园切换功能


        // initCampusSwitch(); // 暂时注释，毥函数未定常






        // 地图点击事件



        map.addEventListener('click', onMapClick);







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



        const lat = point.lat;



        const lng = point.lng;







        // 检查是否在校园边界常


        if (!isInsideBoundary(lat, lng)) {



            showToast('请在校园边界内添加选址点');



            return;



        }







        // 使用 BMap.Symbol 创建三三角形标记（红扲常


        const icon = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {



            scale: 0.8,



            strokeWeight: 1,



            strokeColor: '#ea4335',



            fillColor: '#ea4335',



            fillOpacity: 0.9



        });







        const marker = new BMap.Marker(point, { icon, enableDragging: true });







        // 拽结束事件



        marker.addEventListener('dragend', function(e) {



            const newPoint = e.point;



            const idx = manualMarkers.findIndex(m => m.marker === this);



            if (idx >= 0) {



                manualMarkers[idx].lat = newPoint.lat;



                manualMarkers[idx].lng = newPoint.lng;



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



                            fillOpacity: 0.15



                        }



                    );



                    map.addOverlay(manualCircles[idx]);



                }



                // 重新计算指标



                const points = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));



                manualLocationMetrics = calculateCoreMetrics(points);



                updateCoreMetrics();



                updateManualCoverage();



            }



        });







        // 右键删除



        marker.addEventListener('rightclick', function(e) {



            const idx = manualMarkers.findIndex(m => m.marker === this);



            if (idx >= 0) {



                map.removeOverlay(this);



                if (manualCircles[idx]) {



                    map.removeOverlay(manualCircles[idx]);



                }



                manualMarkers.splice(idx, 1);



                manualCircles.splice(idx, 1);



                updateManualCoverage();



                document.getElementById('status-manual').textContent = manualMarkers.length;



            }



        });







        // 弹出信息



        const popupContent = `



            <div class="popup-content">



                <div class="popup-title">人工选址</div>



                <div class="popup-row"><span class="popup-label">坐标</span><span class="popup-value">${lat.toFixed(5)}, ${lng.toFixed(5)}</span></div>



                <div class="popup-row"><span class="popup-label">操作</span><span class="popup-value"><a href="javascript:void(0)" onclick="deleteManualMarker(this)">删除</a></span></div>



            </div>



        `;







        const infoWindow = new BMap.InfoWindow(popupContent, {



            width: 250



        });



        marker.openInfoWindow(infoWindow);







        map.addOverlay(marker);



        manualMarkers.push({ marker, lat, lng, type: 'manual' });







        // 覆盖范围常


        const circle = new BMap.Circle(



            point,



            currentServiceRadius,



            {



                strokeColor: '#ea4335',



                strokeWeight: 1,



                fillColor: '#ea4335',



                fillOpacity: 0.15



            }



        );



        map.addOverlay(circle);



        manualCircles.push(circle);







        document.getElementById('status-manual').textContent = manualMarkers.length;



        updateManualCoverage();



    }



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



}







// 保存人工选址方案



function saveManualLocation() {



    currentMode = 'view';



    document.getElementById('mode-start').disabled = false;



    document.getElementById('mode-save').disabled = true;



    document.getElementById('manual-location-instruction').textContent = '点击"开始人工选址"按钮后，鼠标左键添加选址，右键删除选址，支持拖拽调整';



    showToast('人工选址方案已保存');



    updateSchemeStatusDisplay();



}







// 清空人工选址



function clearManualLocations() {



    manualMarkers.forEach(item => map.removeOverlay(item.marker));



    manualCircles.forEach(circle => map.removeOverlay(circle));



    manualMarkers = [];



    manualCircles = [];



    manualLocationMetrics = null;



    document.getElementById('status-manual').textContent = '0';



    document.getElementById('manual-coverage').textContent = '0%';



    document.getElementById('manual-coverage-bar').style.width = '0%';



    updateSchemeStatusDisplay();



    showToast('人工选址点已清空');



}







// 运行智能选址



function runSmartLocation() {

    showProgress('正在运行智能选址算法...');

    const count = parseInt(document.getElementById('smart-count')?.value) || 10;
    const serviceRadius = parseInt(document.getElementById('service-radius')?.value) || currentServiceRadius || 100;
    const objCoverage = !!document.getElementById('obj-coverage')?.checked;
    const objDistance = !!document.getElementById('obj-distance')?.checked;
    const objBalance = !!document.getElementById('obj-balance')?.checked;

    currentServiceRadius = serviceRadius;

    setTimeout(() => {
        try {
            const result = generateMockLocations(count, objCoverage, objDistance, objBalance);
            renderSmartLocations(result);
            updateSchemeStatusDisplay();
            showToast('智能选址完成，共生成 ' + result.features.length + ' 个选址点');
        } catch (error) {
            console.error('智能选址执行失败:', error);
            showToast('智能选址失败，请重试');
        } finally {
            hideProgress();
        }
    }, 200);
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







    // 保存后端返回的指标数常


    if (geoJson.metadata) {



        smartMetrics = {



            coverage: geoJson.metadata.coverage || 0,



            avg_distance: geoJson.metadata.avg_distance || 0,



            balance: geoJson.metadata.balance || 0,



            capacity: geoJson.metadata.K ? geoJson.metadata.K * 20 : 0



        };



    }







    geoJson.features.forEach((feature, idx) => {



        if (!feature.geometry || !feature.geometry.coordinates) return;



        const [rawLng, rawLat] = feature.geometry.coordinates;



        const props = feature.properties || {};







        // 检查点是否在边界内



        let lng = Number(rawLng);
        let lat = Number(rawLat);
        if (!Number.isFinite(lng) || !Number.isFinite(lat)) {
            console.warn('智能选址点坐标无效:', feature.geometry.coordinates);
            return;
        }

        if (!isInsideBoundary(lat, lng)) {
            const converted = wgs84ToBd09(lng, lat);
            if (Number.isFinite(converted.lng) && Number.isFinite(converted.lat) && isInsideBoundary(converted.lat, converted.lng)) {
                lng = converted.lng;
                lat = converted.lat;
            } else {
                console.warn('智能选址点不在边界内:', { rawLat, rawLng });
                return;
            }
        }







        // 直接使用 BD09 坐标，不需要转换


        const point = new BMap.Point(lng, lat);







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



        marker.addEventListener('click', function() {



            this.openInfoWindow(infoWindow);



        });







        map.addOverlay(marker);



        smartMarkers.push({ marker, lat, lng, data: props, type: 'smart' });







        // 覆盖范围常


        const circle = new BMap.Circle(



            point,



            currentServiceRadius,



            {



                strokeColor: '#1a73e8',



                strokeWeight: 1,



                fillColor: '#1a73e8',



                fillOpacity: 0.15



            }



        );



        map.addOverlay(circle);



        smartCircles.push(circle);



    });







    document.getElementById('status-smart').textContent = smartMarkers.length;



    // 计算核心指标
    const smartPoints = smartMarkers.map(m => ({ lat: m.lat, lng: m.lng }));
    const calculatedMetrics = calculateCoreMetrics(smartPoints);
    smartMetrics = calculatedMetrics;



    updateSmartCoverage();

    updateSchemeStatusDisplay();



    updateCoreMetrics();



}







// 清除智能选址
function clearSmartLocations() {
    smartMarkers.forEach(item => map.removeOverlay(item.marker));
    smartCircles.forEach(circle => map.removeOverlay(circle));
    smartMarkers = [];
    smartCircles = [];
    document.getElementById('status-smart').textContent = '0';
    document.getElementById('smart-coverage').textContent = '0%';
    document.getElementById('smart-coverage-bar').style.width = '0%';
    updateSchemeStatusDisplay();
    showToast('智能选址点已清空');
}

// 更新服务半径显示
function updateRadiusValue() {
    const radius = document.getElementById('service-radius').value;
    document.getElementById('radius-value').textContent = radius;
    currentServiceRadius = parseInt(radius);

    // 更新已有的覆盖范围圆圈
    updateCoverageCircles();
}

// 更新覆盖范围圆圈
function updateCoverageCircles() {
    // 更新智能选址的覆盖范围
    smartCircles.forEach((circle, idx) => {
        if (smartMarkers[idx] && smartMarkers[idx].marker) {
            const pos = smartMarkers[idx].marker.getPosition();
            map.removeOverlay(circle);
            const newCircle = new BMap.Circle(
                pos,
                currentServiceRadius,
                {
                    strokeColor: '#1a73e8',
                    strokeWeight: 1,
                    fillColor: '#1a73e8',
                    fillOpacity: 0.15
                }
            );
            map.addOverlay(newCircle);
            smartCircles[idx] = newCircle;
        }
    });

    // 更新人工选址的覆盖范围
    manualCircles.forEach((circle, idx) => {
        if (manualMarkers[idx] && manualMarkers[idx].marker) {
            const pos = manualMarkers[idx].marker.getPosition();
            map.removeOverlay(circle);
            const newCircle = new BMap.Circle(
                pos,
                currentServiceRadius,
                {
                    strokeColor: '#ea4335',
                    strokeWeight: 1,
                    fillColor: '#ea4335',
                    fillOpacity: 0.15
                }
            );
            map.addOverlay(newCircle);
            manualCircles[idx] = newCircle;
        }
    });
}







// 复制智能方案到人常


function copySmartToManual() {



    if (smartMarkers.length === 0) {



        showToast('请先运行智能选址算法');



        return;



    }







    clearManualLocations();



    smartMarkers.forEach((smart, idx) => {



        const lat = smart.lat;



        const lng = smart.lng;







        // 直接使用BD09坐标，不需要转换



        const point = new BMap.Point(lng, lat);







        // 使用 BMap.Symbol 创建三三角形标记（红扲常


        const icon = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {



            scale: 0.8,



            strokeWeight: 1,



            strokeColor: '#ea4335',



            fillColor: '#ea4335',



            fillOpacity: 0.9



        });







        const marker = new BMap.Marker(point, { icon, enableDragging: true });







        // 拽结束事件



        marker.addEventListener('dragend', function(e) {



            const newPoint = e.point;



            const idx = manualMarkers.findIndex(m => m.marker === this);



            if (idx >= 0) {



                manualMarkers[idx].lat = newPoint.lat;



                manualMarkers[idx].lng = newPoint.lng;



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



                            fillOpacity: 0.15



                        }



                    );



                    map.addOverlay(manualCircles[idx]);



                }



                // 重新计算指标



                const points = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));



                manualLocationMetrics = calculateCoreMetrics(points);



                updateCoreMetrics();



                updateManualCoverage();



            }



        });







        // 右键删除



        marker.addEventListener('rightclick', function(e) {



            // 只有在人工选址模式下才允殸删除



            if (currentMode !== 'add') {



                showToast('请先进入人工选址模式再删除选址常');



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



                updateManualCoverage();



                document.getElementById('status-manual').textContent = manualMarkers.length;



            }



        });







        // 弹出信息



        const deleteButton = currentMode === 'add' ? `<a href="javascript:void(0)" onclick="deleteManualMarker(this)">删除</a>` : '';



        const popupContent = `



            <div class="popup-content">



                <div class="popup-title">人工选址</div>



                <div class="popup-row"><span class="popup-label">坐标</span><span class="popup-value">${lat.toFixed(5)}, ${lng.toFixed(5)}</span></div>



                ${currentMode === 'add' ? `<div class="popup-row"><span class="popup-label">操作</span><span class="popup-value">${deleteButton}</span></div>` : ''}



            </div>



        `;







        const infoWindow = new BMap.InfoWindow(popupContent, {



            width: 250



        });



        marker.openInfoWindow(infoWindow);







        map.addOverlay(marker);



        manualMarkers.push({ marker, lat, lng, type: 'manual' });







        // 覆盖范围常


        const circle = new BMap.Circle(



            point,



            currentServiceRadius,



            {



                strokeColor: '#ea4335',



                strokeWeight: 1,



                fillColor: '#ea4335',



                fillOpacity: 0.15



            }



        );



        map.addOverlay(circle);



        manualCircles.push(circle);



    });







    document.getElementById('status-manual').textContent = manualMarkers.length;



    



    // 保存人工方案的真实指标数常


    const points = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));



    manualLocationMetrics = calculateCoreMetrics(points);



    



    // 强制切换到人工方案显示


    selectedScheme = 'manual';



    document.getElementById('selected-scheme').value = 'manual';







    updateManualCoverage();



    updateCoreMetrics();



    updateUsageChart();



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







    const points = smartMarkers.map(m => ({ lat: m.lat, lng: m.lng }));



    const metrics = calculateCoreMetrics(points);



    const coverage = metrics.coverage * 100;



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







    const points = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));



    const metrics = calculateCoreMetrics(points);



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

        const smartPoints = smartMarkers.map(m => ({ lat: m.lat, lng: m.lng }));
        const fallback = calculateCoreMetrics(smartPoints);

        return {
            coverage: smartMetrics.coverage > 0 ? smartMetrics.coverage : fallback.coverage,
            avg_distance: smartMetrics.avg_distance > 0 ? smartMetrics.avg_distance : fallback.avg_distance,
            balance: smartMetrics.balance > 0 ? smartMetrics.balance : fallback.balance,
            capacity: smartMetrics.capacity > 0 ? smartMetrics.capacity : fallback.capacity
        };
    }

    if (type === 'manual') {
        if (manualMarkers.length === 0) {
            return null;
        }

        if (manualLocationMetrics) {
            return manualLocationMetrics;
        }

        const manualPoints = manualMarkers.map(m => ({ lat: m.lat, lng: m.lng }));
        return calculateCoreMetrics(manualPoints);
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

    const analysis = getComparisonAnalysis();
    if (analysis.recommendedScheme !== 'none') {
        return analysis.recommendedScheme;
    }

    if (smartMarkers.length > 0) {
        return 'smart';
    }

    if (manualMarkers.length > 0) {
        return 'manual';
    }

    return 'smart';
}







// 生成供需状态桨常


function generateSupplyDemandTable(timeSlot) {



    console.log('generateSupplyDemandTable called with timeSlot:', timeSlot);

    const _v2Tbody = document.getElementById('supply-demand-body');
    if (!_v2Tbody) {
        return;
    }

    const _v2HasSmartPoints = smartMarkers.length > 0;
    const _v2HasManualPoints = manualMarkers.length > 0;
    if (!_v2HasSmartPoints && !_v2HasManualPoints) {
        _v2Tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请先运行选址算法</td></tr>';
        return;
    }

    let _v2ActiveScheme = selectedScheme || 'auto';
    if (_v2ActiveScheme === 'auto') {
        _v2ActiveScheme = getEffectiveScheme();
    } else if (_v2ActiveScheme === 'smart' && !_v2HasSmartPoints) {
        _v2ActiveScheme = _v2HasManualPoints ? 'manual' : 'none';
    } else if (_v2ActiveScheme === 'manual' && !_v2HasManualPoints) {
        _v2ActiveScheme = _v2HasSmartPoints ? 'smart' : 'none';
    }

    const _v2Markers = _v2ActiveScheme === 'smart' ? smartMarkers : (_v2ActiveScheme === 'manual' ? manualMarkers : []);
    if (!_v2Markers || _v2Markers.length === 0) {
        _v2Tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请先运行选址算法</td></tr>';
        return;
    }

    const _v2MarkerCoords = _v2Markers.map((item, idx) => {
        if (item && item.marker && typeof item.marker.getPosition === 'function') {
            const pos = item.marker.getPosition();
            if (pos && Number.isFinite(pos.lat) && Number.isFinite(pos.lng)) {
                return { idx, lat: pos.lat, lng: pos.lng };
            }
        }
        if (item && item.lat != null && item.lng != null) {
            return { idx, lat: item.lat, lng: item.lng };
        }
        return { idx, lat: NaN, lng: NaN };
    });

    const _v2CoordsSig = _v2MarkerCoords
        .map(m => Number.isFinite(m.lat) && Number.isFinite(m.lng)
            ? `${m.idx}:${m.lat.toFixed(6)},${m.lng.toFixed(6)}`
            : `${m.idx}:na`)
        .join('|');
    const _v2CacheKey = `${timeSlot}|${_v2ActiveScheme}|${_v2CoordsSig}`;

    const _v2RenderRows = (rows) => {
        _v2Tbody.innerHTML = rows.map(item => {
            const status = item.status === 'surplus'
                ? '<span style="color:#27ae60">过剩</span>'
                : (item.status === 'shortage'
                    ? '<span style="color:#e74c3c">不足</span>'
                    : '<span style="color:#999">平衡</span>');
            const transferStr = item.transfer !== 0 ? Math.abs(item.transfer) + '辆' : '-';
            return `<tr>
                <td>${item.name}</td>
                <td>${item.current}</td>
                <td>${item.demand}</td>
                <td>${status}</td>
                <td>${transferStr}</td>
            </tr>`;
        }).join('');
    };

    if (supplyDemandCalcCache[_v2CacheKey]) {
        _v2RenderRows(supplyDemandCalcCache[_v2CacheKey]);
        return;
    }

    const _v2Rules = {
        morning: { '宿舍': -1.2, '教学楼': 1.0, '食堂': 0.3, '校门': 0.3, '图书馆': 0.2, '其他': 0.1 },
        noon: { '食堂': 0.8, '教学楼': -0.6, '宿舍': 0.4, '图书馆': 0.2, '其他': 0.2 },
        evening: { '宿舍': -1.0, '教学楼': 0.8, '食堂': 0.3, '图书馆': 0.3, '其他': 0.4 }
    };
    const _v2Rule = _v2Rules[timeSlot] || _v2Rules.morning;

    const _v2FallbackPoiSamples = [
        { lat: 30.5339, lng: 114.3658, category: '宿舍', weight: 1.0 },
        { lat: 30.5338, lng: 114.3637, category: '宿舍', weight: 0.8 },
        { lat: 30.5331, lng: 114.3654, category: '宿舍', weight: 0.7 },
        { lat: 30.5317, lng: 114.3660, category: '教学楼', weight: 0.9 },
        { lat: 30.5313, lng: 114.3679, category: '教学楼', weight: 0.6 },
        { lat: 30.5312, lng: 114.3658, category: '教学楼', weight: 0.5 },
        { lat: 30.5336, lng: 114.3648, category: '食堂', weight: 0.9 },
        { lat: 30.5325, lng: 114.3648, category: '食堂', weight: 0.7 },
        { lat: 30.5357, lng: 114.3662, category: '食堂', weight: 0.6 },
        { lat: 30.5341, lng: 114.3668, category: '图书馆', weight: 0.5 },
        { lat: 30.5299, lng: 114.3670, category: '校门', weight: 0.5 },
        { lat: 30.5320, lng: 114.3665, category: '其他', weight: 0.3 }
    ];

    if (!pointsV2Cache && !pointsV2LoadFailed) {
        if (!pointsV2LoadingPromise) {
            pointsV2LoadingPromise = fetch('./pointsV2.geojson', { cache: 'no-store' })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('HTTP ' + res.status);
                    }
                    return res.json();
                })
                .then(data => {
                    const features = Array.isArray(data?.features) ? data.features : [];
                    pointsV2Cache = features
                        .map(feature => {
                            const coords = feature?.geometry?.coordinates;
                            if (!Array.isArray(coords) || coords.length < 2) {
                                return null;
                            }
                            const lng = Number(coords[0]);
                            const lat = Number(coords[1]);
                            if (!Number.isFinite(lng) || !Number.isFinite(lat)) {
                                return null;
                            }
                            return {
                                lng,
                                lat,
                                category: feature?.properties?.category || '其他',
                                weight: Number(feature?.properties?.weight) || 1.0
                            };
                        })
                        .filter(Boolean);

                    if (!pointsV2Cache.length) {
                        throw new Error('pointsV2.geojson 无可用点位');
                    }
                })
                .catch(err => {
                    pointsV2LoadFailed = true;
                    console.warn('pointsV2.geojson 加载失败，回退到内置POI样本:', err);
                })
                .finally(() => {
                    pointsV2LoadingPromise = null;
                });
        }

        _v2Tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">正在加载供需POI数据...</td></tr>';
        pointsV2LoadingPromise?.then(() => generateSupplyDemandTable(timeSlot));
        return;
    }

    const _v2PoiSamples = (Array.isArray(pointsV2Cache) && pointsV2Cache.length > 0)
        ? pointsV2Cache
        : _v2FallbackPoiSamples;

    let _v2TotalDemand = 0;
    const _v2Drafts = [];

    _v2MarkerCoords.forEach(({ idx, lat, lng }) => {
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
            return;
        }

        let _v2Score = 0;
        _v2PoiSamples.forEach(poi => {
            const directDist = Math.hypot(lng - poi.lng, lat - poi.lat) * 111000;
            let dist = directDist;

            if (typeof wgs84ToBd09 === 'function') {
                const converted = wgs84ToBd09(poi.lng, poi.lat);
                if (Number.isFinite(converted?.lng) && Number.isFinite(converted?.lat)) {
                    const convertedDist = Math.hypot(lng - converted.lng, lat - converted.lat) * 111000;
                    dist = Math.min(directDist, convertedDist);
                }
            }

            if (dist < 300) {
                const weight = (poi.weight || 1.0) / Math.max(15, dist);
                _v2Score += weight * (_v2Rule[poi.category] || 0);
            }
        });

        const _v2Demand = 15 + ((idx * 3) % 20);
        _v2TotalDemand += _v2Demand;

        _v2Drafts.push({
            name: `${_v2ActiveScheme === 'smart' ? '智能点' : '人工点'}${idx + 1}`,
            demand: _v2Demand,
            rawSupply: _v2Demand + _v2Score * 120
        });
    });

    if (_v2Drafts.length === 0) {
        _v2Tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请先运行选址算法</td></tr>';
        return;
    }

    const _v2TargetTotalSupply = _v2TotalDemand * 1.05;
    const _v2CurrentTotalSupply = _v2Drafts.reduce((sum, s) => sum + s.rawSupply, 0);
    const _v2SafeTotalSupply = Math.abs(_v2CurrentTotalSupply) < 1e-6 ? 1 : _v2CurrentTotalSupply;
    const _v2GlobalScale = _v2TargetTotalSupply / _v2SafeTotalSupply;

    const _v2Rows = _v2Drafts.map(s => {
        const current = Math.max(2, Math.round(s.rawSupply * _v2GlobalScale));
        const transfer = s.demand - current;

        let status = 'balanced';
        if (transfer < -2) {
            status = 'surplus';
        } else if (transfer > 2) {
            status = 'shortage';
        }

        return {
            name: s.name,
            current,
            demand: s.demand,
            status,
            transfer
        };
    });

    supplyDemandCalcCache[_v2CacheKey] = _v2Rows;
    _v2RenderRows(_v2Rows);
    return;







    const effectiveScheme = getEffectiveScheme();
    const markers = effectiveScheme === 'smart' ? smartMarkers : manualMarkers;



    // 需求模拟规则（早高峰、午高峰、晚高峰）
    // 早高峰：宿舍 → 教学楼（权重 0.7），宿舍 → 食堂（0.1），宿舍 → 其他（0.2）
    // 午高峰：教学楼 → 食堂（0.6），教学楼 → 宿舍（0.2），其他 → 食堂（0.2）
    // 晚高峰：教学楼 → 宿舍（0.7），食堂 → 宿舍（0.2），其他 → 宿舍（0.1）
    
    const zoneRules = {
        'morning': {
            'dorm_main': 1.0, 'dorm_secondary': 0.8, 'teaching_main': -0.7,
            'teaching_secondary': -0.5, 'canteen': -0.1, 'library': -0.3, 'other': -0.2
        },
        'noon': {
            'dorm_main': -0.2, 'dorm_secondary': -0.1, 'teaching_main': 0.5,
            'teaching_secondary': 0.3, 'canteen': -0.6, 'library': 0.2, 'other': -0.2
        },
        'evening': {
            'dorm_main': -0.9, 'dorm_secondary': -0.7, 'teaching_main': 0.6,
            'teaching_secondary': 0.4, 'canteen': -0.2, 'library': -0.1, 'other': -0.1
        }
    };

    // POI类别中心坐标（基于武汉大学信息学部实际POI分布）
    const zones = {
        'dorm_main': { coords: [114.3658, 30.5339], category: '宿舍', weight: 1.0 },
        'dorm_secondary': { coords: [114.3637, 30.5338], category: '宿舍', weight: 0.8 },
        'dorm_third': { coords: [114.3654, 30.5331], category: '宿舍', weight: 0.7 },
        'teaching_main': { coords: [114.3660, 30.5317], category: '教学楼', weight: 0.9 },
        'teaching_secondary': { coords: [114.3679, 30.5313], category: '教学楼', weight: 0.6 },
        'teaching_third': { coords: [114.3658, 30.5312], category: '教学楼', weight: 0.5 },
        'canteen_main': { coords: [114.3648, 30.5336], category: '食堂', weight: 0.9 },
        'canteen_secondary': { coords: [114.3648, 30.5325], category: '食堂', weight: 0.7 },
        'canteen_third': { coords: [114.3662, 30.5357], category: '食堂', weight: 0.6 },
        'library': { coords: [114.3668, 30.5341], category: '图书馆', weight: 0.5 },
        'other': { coords: [114.3665, 30.5320], category: '其他', weight: 0.2 }
    };
    
    const rule = zoneRules[timeSlot] || zoneRules['morning'];

    const tbody = document.getElementById('supply-demand-body');



    if (!tbody) return;







    if (markers.length === 0) {



        tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请先运行选址算法</td></tr>';



        return;



    }







    let tableHTML = '';



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







        let totalWeight = 0;
        let netFlow = 0;

        for (const [zoneName, zoneData] of Object.entries(zones)) {
            const [zoneLng, zoneLat] = zoneData.coords;
            const zoneWeight = zoneData.weight || 1.0;
            const distance = Math.max(1, Math.hypot(lng - zoneLng, lat - zoneLat) * 111000);
            const weight = (1.0 / distance) * zoneWeight;
            totalWeight += weight;
            netFlow += weight * (rule[zoneName] || 0);
        }



        netFlow = totalWeight > 0 ? netFlow / totalWeight : 0;







        const amount = Math.abs(Math.round(netFlow * 100));



        const type = netFlow > 0 ? 1 : -1;



        const baseCurrent = 15;



        const current = Math.floor(baseCurrent + (type * amount * 0.5));



        const demand = Math.floor(baseCurrent + ((type === 1) ? -amount * 0.5 : amount * 0.5));



        const currentValue = Math.max(0, Math.min(30, current));



        const demandValue = Math.max(0, Math.min(30, demand));







        let transfer = 0;



        if (currentValue > demandValue + 5) {



            transfer = -Math.floor((currentValue - demandValue) * 0.6);



        } else if (currentValue < demandValue - 5) {



            transfer = Math.floor((demandValue - currentValue) * 0.6);



        }







        const status = transfer > 0 ? '<span style="color:#e74c3c">不足</span>' :



                      transfer < 0 ? '<span style="color:#27ae60">过剩</span>' :



                      '<span style="color:#999">平衡</span>';



        const transferStr = transfer !== 0 ? Math.abs(transfer) + '辆' : '-';



        // 根据方案类型显示不同的站点名称



        const zoneName = effectiveScheme === 'smart' ? `智能点${idx + 1}` : `人工点${idx + 1}`;







        tableHTML += `<tr>



            <td>${zoneName}</td>



            <td>${currentValue}</td>



            <td>${demandValue}</td>



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



    generateSupplyDemandTable(timeSlot);



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



        const loadBalanceScore = Math.max(70, 100 - (coefficientOfVariation * 50));



        



        // 3. 计算空间分布均衡性（使用停车点之间的平均距离）


        let spatialBalanceScore = 0;



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



                spatialBalanceScore = Math.max(70, 100 - (distanceDeviation * 60));



            }



        }



        



        // 4. 综合均衡性得分



        // 增加服务需求均衡性的权重，使其随服务半径变化更加明显



        balanceScore = loadBalanceScore * 0.9 + spatialBalanceScore * 0.1;



        



        // 确保得分常-100之间



        balanceScore = Math.max(0, Math.min(100, balanceScore));



    }







    // 计算总容量（与后端保持一致）



    const capacity = parkingPoints.length * 20;







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



        generateSupplyDemandTable(getActiveSupplyTimeSlot());
        return;
    }

    const effectiveScheme = getEffectiveScheme();
    const displayMetrics = getSchemeMetricsByType(effectiveScheme);

    if (!displayMetrics) {
        document.getElementById('metric-coverage').textContent = '0%';
        document.getElementById('metric-distance').textContent = '0m';
        document.getElementById('metric-balance').textContent = '0';
        document.getElementById('metric-capacity').textContent = '0';
        generateSupplyDemandTable(getActiveSupplyTimeSlot());
        return;
    }

    document.getElementById('metric-coverage').textContent = (displayMetrics.coverage * 100).toFixed(1) + '%';
    document.getElementById('metric-distance').textContent = displayMetrics.avg_distance.toFixed(0) + 'm';
    document.getElementById('metric-balance').textContent = Math.round(displayMetrics.balance);
    document.getElementById('metric-capacity').textContent = displayMetrics.capacity;

    generateSupplyDemandTable(getActiveSupplyTimeSlot());



}




function updateSelectedScheme() {
    const selector = document.getElementById('selected-scheme');
    selectedScheme = selector ? selector.value : 'auto';

    updateCoreMetrics();
    updateSchemeStatusDisplay();

    const analysis = getComparisonAnalysis();
    if (analysis.smartMetrics && analysis.manualMetrics) {
        renderComparisonAnalysisPanel();
    }
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







// 运行动态氃常


function runDispatch() {



    console.log('=== 运行调度 ===');



    console.log('smartMarkers数量:', smartMarkers.length);



    console.log('manualMarkers数量:', manualMarkers.length);



    



    const timeSlot = document.getElementById('dispatch-time').value || 'morning';



    



    // 检查是否有智能或人工选址常


    const hasSmartPoints = smartMarkers.length > 0;



    const hasManualPoints = manualMarkers.length > 0;



    



    console.log('hasSmartPoints:', hasSmartPoints);



    console.log('hasManualPoints:', hasManualPoints);



    console.log('当前timeSlot:', timeSlot);



    



    if (!hasSmartPoints && !hasManualPoints) {



        showToast('请先运行智能选址或添加人工选址常');



        return;



    }



    



    // 选择使用哪种方案



    if (hasSmartPoints && hasManualPoints) {



        // 两种方案都存在，根据对比结果选择最优方常


        // 计算两种方案的综合得分


        const smartScore = calculateSchemeScore(smartMarkers.length);



        const manualScore = calculateSchemeScore(manualMarkers.length);



        



        if (smartScore > manualScore) {



            selectedScheme = 'smart';



            currentDispatchScheme = '智能选址（推荐）';



        } else {



            selectedScheme = 'manual';



            currentDispatchScheme = '人工选址（推荐）';



        }



        



        showToast(`基于方案对比分析，选择${selectedScheme === 'smart' ? '智能选址' : '人工选址'}方案濛桌调度优化`);



    } else if (hasSmartPoints) {



        // 只有智能选址方案



        selectedScheme = 'smart';



        currentDispatchScheme = '智能选址';



        showToast('使用智能选址方案濛桌调度优化');



    } else if (hasManualPoints) {



        // 只有人工选址方案



        selectedScheme = 'manual';



        currentDispatchScheme = '人工选址';



        showToast('使用人工选址方案濛桌调度优化');



    } else {



        // 没有任何方案



        selectedScheme = 'smart';



        currentDispatchScheme = '待选择';



        showToast('请先运行智能选址或添加人工选址常');



        return;



    }



    



    // 更新方案状态显示


    updateSchemeStatusDisplay();



    



    // 更新停车点供需状态表格，显示当前选择方案的供需状态


    // 同时更新标签的激活状常


    const tabs = document.querySelectorAll('.tab');



    tabs.forEach(tab => tab.classList.remove('active'));



    // 找到对应的标签并激常


    tabs.forEach(tab => {



        const tabTime = tab.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];



        if (tabTime === timeSlot) {



            tab.classList.add('active');



        }



    });



    generateSupplyDemandTable(timeSlot);



    



    // 获取当前时段的需求预测数常


    let demandData = null;



    if (savedPredictionData) {



        const ruleData = savedPredictionData.rulePrediction.predictions.find(p => p.time_slot === timeSlot);



        if (ruleData) {



            demandData = ruleData.demand_index;



        }



    }



    



    // 确保需求数据存在，如果不存在则基于时段生成默认常


    if (!demandData) {



        // 基于时段生成默认需求指标


        const baseDemand = {



            morning: 85,



            noon: 70,



            evening: 90



        }[timeSlot] || 70;



        demandData = Math.round(baseDemand * 1.1); // 模拟 next1h 预测



    }



    



    // 生成缓存键，基于时段、方案和需求数常


    const cacheKey = `${timeSlot}_${selectedScheme}_${demandData}`;



    



    showProgress('正在运行动态调度算常..');







    // 收集选中的选址点及其供需状常


    let parkingPoints = [];



    



    // 功能区中心（与后端一致）- 使用 BD09 坐标



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



    



    // 时段需求规则（与后端一致）



    const rules = {



        'morning': {



            'dorm': 1.0,      // 宿舍区大量供给


            'teaching': -0.8, // 教学区需常


            'canteen': -0.2,  // 食堂少量需常


            'library': -0.3,  // 图书馆少量需常


            'south_gate': 0.0, // 校门中常


            'playground': -0.1, // 操场少量需常


            'info_south': -0.5, // 信息学部南区需常


            'info_west': -0.4,  // 信息学部楿区需常


            'info_east': -0.3   // 信息学部东区需常


        },



        'noon': {



            'dorm': -0.3,



            'teaching': 0.5,



            'canteen': -0.7,



            'library': 0.2,



            'south_gate': 0.0,



            'playground': 0.1,



            'info_south': 0.3,



            'info_west': 0.2,



            'info_east': 0.1



        },



        'evening': {



            'dorm': -0.9,



            'teaching': 0.6,



            'canteen': 0.2,



            'library': 0.1,



            'south_gate': 0.0,



            'playground': 0.3,



            'info_south': 0.4,



            'info_west': 0.3,



            'info_east': 0.2



        }



    };



    



    const rule = rules[timeSlot] || rules['morning'];







    console.log('=== runDispatch 开常===');



    console.log('timeSlot:', timeSlot);



    console.log('selectedScheme:', selectedScheme);



    console.log('smartMarkers数量:', smartMarkers.length);



    console.log('manualMarkers数量:', manualMarkers.length);



    console.log('selectedScheme value:', selectedScheme);







    if (selectedScheme === 'smart') {



        smartMarkers.forEach((item, index) => {



            try {



                let lat, lng;



                if (item && item.marker && typeof item.marker.getPosition === 'function') {



                    const pos = item.marker.getPosition();



                    lat = pos.lat;



                    lng = pos.lng;



                } else if (item && item.lat && item.lng) {



                    // 直接使用存储的坐标（已经是BD09常


                    lat = item.lat;



                    lng = item.lng;



                } else {



                    return;



                }



                



                // 计算该点的供需状态（与后端一致）



                let totalWeight = 0;



                let netFlow = 0;



                



                for (const [zoneName, zoneCenter] of Object.entries(zones)) {



                    const [zoneLng, zoneLat] = zoneCenter;  // zones 常[lng, lat] 格式



                    



                    // 计算距离（米常


                    const distance = Math.hypot(lng - zoneLng, lat - zoneLat) * 111000;



                    if (distance < 1) distance = 1;



                    



                    const weight = 1.0 / distance;



                    totalWeight += weight;



                    netFlow += weight * (rule[zoneName] || 0);



                }



                



                if (totalWeight > 0) {



                    netFlow = netFlow / totalWeight; // 加权平均倾向，指标-1..1



                }



                



                // 计算与表格相同的 current 和 demand


                const amount = Math.abs(Math.round(netFlow * 100));



                const type = netFlow > 0 ? 1 : -1;



                



                // 生成当前数量和需求数量（与表格一致）



                const baseCurrent = 15; // 基础数量



                const current = Math.floor(baseCurrent + (type * amount * 0.5));



                const demand = Math.floor(baseCurrent + ((type === 1) ? -amount * 0.5 : amount * 0.5));



                



                // 确保当前数量和需求在合理范围常


                const currentValue = Math.max(0, Math.min(30, current));



                const demandValue = Math.max(0, Math.min(30, demand));



                



                // 计算调拨量（与表格一致）



                let transfer;



                if (currentValue > demandValue + 5) {



                    transfer = -Math.floor((currentValue - demandValue) * 0.6);



                } else if (currentValue < demandValue - 5) {



                    transfer = Math.floor((demandValue - currentValue) * 0.6);



                } else {



                    transfer = 0;



                }



                



                // 只添加需要调拨的点


                console.log(`智能选址点${index}: lat=${lat}, lng=${lng}, netFlow=${netFlow.toFixed(4)}, amount=${amount}, current=${currentValue}, demand=${demandValue}, transfer=${transfer || 'N/A'}`);



                if (transfer !== 0) {



                    // 使用与智能选址点相同的名称



                    const smartPointName = item.data?.name || `P${index + 1}`;



                    parkingPoints.push({



                        id: `smart-${item.marker?._leaflet_id || Date.now()}`,



                        lat: lat,



                        lng: lng,



                        type: 'smart',



                        amount: Math.abs(transfer),



                        demand_type: transfer > 0 ? 1 : -1, // 正数桨示需求，负数桨示供应



                        transfer: transfer, // 添加transfer字段，与前端表格一致


                        name: smartPointName // 添加name字段，与智能选址点名称一致


                    });



                }



            } catch (error) {



                console.warn('Error processing smart marker:', error);



            }



        });



    } else {



        manualMarkers.forEach((item, index) => {



            const name = `人工常{index + 1}`;



            try {



                let lat, lng;



                if (item && item.marker && typeof item.marker.getPosition === 'function') {



                    const pos = item.marker.getPosition();



                    lat = pos.lat;



                    lng = pos.lng;



                } else if (item && item.lat && item.lng) {



                    // 直接使用存储的坐标（已经是BD09常


                    lat = item.lat;



                    lng = item.lng;



                } else {



                    return;



                }



                



                // 计算该点的供需状态（与后端一致）



                let totalWeight = 0;



                let netFlow = 0;



                



                for (const [zoneName, zoneCenter] of Object.entries(zones)) {



                    const [zoneLng, zoneLat] = zoneCenter;  // zones 常[lng, lat] 格式



                    



                    // 计算距离（米常


                    const distance = Math.hypot(lng - zoneLng, lat - zoneLat) * 111000;



                    if (distance < 1) distance = 1;



                    



                    const weight = 1.0 / distance;



                    totalWeight += weight;



                    netFlow += weight * (rule[zoneName] || 0);



                }



                



                if (totalWeight > 0) {



                    netFlow = netFlow / totalWeight; // 加权平均倾向，指标-1..1



                }



                



                // 计算与表格相同的 current 和 demand


                const amount = Math.abs(Math.round(netFlow * 100));



                const type = netFlow > 0 ? 1 : -1;



                



                // 生成当前数量和需求数量（与表格一致）



                const baseCurrent = 15; // 基础数量



                const current = Math.floor(baseCurrent + (type * amount * 0.5));



                const demand = Math.floor(baseCurrent + ((type === 1) ? -amount * 0.5 : amount * 0.5));



                



                // 确保当前数量和需求在合理范围常


                const currentValue = Math.max(0, Math.min(30, current));



                const demandValue = Math.max(0, Math.min(30, demand));



                



                // 计算调拨量（与表格一致）



                let transfer;



                if (currentValue > demandValue + 5) {



                    transfer = -Math.floor((currentValue - demandValue) * 0.6);



                } else if (currentValue < demandValue - 5) {



                    transfer = Math.floor((demandValue - currentValue) * 0.6);



                } else {



                    transfer = 0;



                }



                



                // 只添加需要调拨的点


                if (transfer !== 0) {



                    parkingPoints.push({



                        id: `manual-${item.marker?._leaflet_id || Date.now()}`,



                        lat: lat,



                        lng: lng,



                        type: 'manual',



                        amount: Math.abs(transfer),



                        demand_type: transfer > 0 ? 1 : -1, // 正数桨示需求，负数桨示供应



                        transfer: transfer, // 添加transfer字段，与前端表格一致


                        name: name // 添加name字段，与人工选址点名称一致


                    });



                }



            } catch (error) {



                console.warn('Error processing manual marker:', error);



            }



        });



    }



    



    console.log('收集到的停车点', parkingPoints);



    



    // 生成调度路线



    const dispatchResult = generateDispatchRoutes(parkingPoints, timeSlot);

    latestDispatchResult = dispatchResult;



    



    // 渲染调度路线



    renderDispatch(dispatchResult);



    



    // 隐藏进度常


    hideProgress();



    



    showToast('动态调度优化完成，共生常' + (dispatchResult?.features?.length || 0) + ' 条调度淯常');



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



            lat: 30.5330,



            lng: 114.3650,



            name: '默认供应常',



            demand_type: -1,



            transfer: -50 // 假殾常0澆可供应



        });



    }



    



    // 如果没有需求点，添加一个默认需求点



    if (demandPoints.length === 0) {



        console.log('没有需求点，添加默认需求点');



        demandPoints.push({



            lat: 30.5310,



            lng: 114.3670,



            name: '默认需求点',



            demand_type: 1,



            transfer: 10 // 假殾常0澆需常


        });



    }



    



    const features = [];



    let routeId = 1;



    



    // 简单的匹配算法：为每个需求点找到最近的供应点


    demandPoints.forEach(demandPoint => {



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



                    from: closestSupply.name,



                    to: demandPoint.name,



                    amount: Math.min(Math.abs(closestSupply.transfer), Math.abs(demandPoint.transfer)),



                    distance: Math.round(minDistance)



                }



            };



            



            features.push(route);



            



            // 减少供应点的数量



            closestSupply.transfer += route.properties.amount; // 供应点减少（因为transfer是负数）



            if (closestSupply.transfer >= 0) { // 供应耗尽



                const supplyIndex = supplyPoints.findIndex(s => s.id === closestSupply.id);



                if (supplyIndex >= 0) {



                    supplyPoints.splice(supplyIndex, 1);



                }



            }



            



            // 减少需求点的数常


            demandPoint.transfer -= route.properties.amount; // 需求点减少



            if (demandPoint.transfer <= 0) { // 需求满足


                const demandIndex = demandPoints.findIndex(d => d.id === demandPoint.id);



                if (demandIndex >= 0) {



                    demandPoints.splice(demandIndex, 1);



                }



            }



        }



    });



    



    return {



        type: "FeatureCollection",



        features: features



    };



}







// 渲染调度路线



function renderDispatch(geoJson) {



    // 清除旧的调度路线



    dispatchLines.forEach(line => map.removeOverlay(line));



    dispatchMarkers.forEach(marker => map.removeOverlay(marker));



    dispatchLines = [];



    dispatchMarkers = [];



    // 动态颜色数组，为不同车辆分配不同颜色
    const colorPalette = ['#9c27b0', '#2196f3', '#ff9800', '#4caf50', '#f44336', '#00bcd4', '#e91e63', '#795548'];
    let routeIndex = 0;



    if (!geoJson || !geoJson.features) {



        return;

    }



    // 分离LineString和Point要素，LineString是路线，Point是起终点标记
    const lineFeatures = geoJson.features.filter(f => f.geometry && f.geometry.type === 'LineString');
    const pointFeatures = geoJson.features.filter(f => f.geometry && f.geometry.type === 'Point');

    // 首先渲染所有路线
    lineFeatures.forEach((feature, idx) => {



        if (!feature.geometry || !feature.geometry.coordinates) return;



        const coordinates = feature.geometry.coordinates;



        if (coordinates.length < 2) return;



        // 创建百度地图点数
        const points = coordinates.map(coord => {

            const [lng, lat] = coord;

            return new BMap.Point(lng, lat);

        });



        // 使用动态颜色
        const color = colorPalette[routeIndex % colorPalette.length];



        // 创建路线
        const polyline = new BMap.Polyline(points, {

            strokeColor: color,

            strokeWeight: 3,

            strokeOpacity: 0.8

        });



        // 存储路线颜色和索引用于后续高亮
        polyline.routeColor = color;
        polyline.routeIndex = routeIndex;
        polyline.vehicleId = feature.properties?.vehicle_id || routeIndex + 1;



        map.addOverlay(polyline);

        dispatchLines.push(polyline);

        routeIndex++;

    });


    // 渲染起终点标记（通过Point要素）
    pointFeatures.forEach(feature => {

        const [lng, lat] = feature.geometry.coordinates;
        const point = new BMap.Point(lng, lat);
        const typeText = feature.properties?.type_text || '需求';
        const isSupply = typeText === '供应';

        const marker = new BMap.Marker(point, {
            icon: new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
                scale: 1.2,
                strokeWeight: 1,
                strokeColor: isSupply ? "#27ae60" : "#e74c3c",
                fillColor: isSupply ? "#27ae60" : "#e74c3c",
                fillOpacity: 0.9
            })
        });

        map.addOverlay(marker);
        dispatchMarkers.push(marker);

    });



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
    const balanceScore = Math.max(0, Math.min(balance, 100)) * 0.3;

    return coverageScore + distanceScore + balanceScore;



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



    const role = document.getElementById('role-select').value;



    



    // 简单的登录验证



    if (username === 'admin' && password === 'admin') {



        // 登录成功



        document.getElementById('loginPage').style.display = 'none';



        document.getElementById('systemPage').style.display = 'flex';

        currentUserRole = role;



        document.getElementById('currentUser').textContent = role === 'admin' ? '管理员' : '调度员';

        // 每次新登录都清空上一次电池运维遗留状态，避免页面残留
        resetBatteryOpsStateForNewLogin();
        resetAIPanelStateForNewLogin();

        applyRolePermissions();



        



        // 初始化地常


        initMap();



        



        // 加载系统数据



        loadSystemData();



    } else {



        alert('用户名或密码错毯，请使用演示账号: admin / admin');



    }



}







// 处理注册



function handleRegister() {



    const username = document.getElementById('regUsername').value;



    const password = document.getElementById('regPassword').value;



    const password2 = document.getElementById('regPassword2').value;



    



    if (!username || !password) {



        alert('请输入用户名和密常');



        return;



    }



    



    if (password !== password2) {



        alert('两次输入的密码不一致');



        return;



    }



    



    // 简单的注册逻编辑



    alert('注册成功，请使用新账号登常');



    toggleAuthForm('login');



}







// 处理退出登常


function handleLogout() {

    resetAIPanelStateForNewLogin();



    document.getElementById('systemPage').style.display = 'none';



    document.getElementById('loginPage').style.display = 'flex';



}







// 热力图实常


let heatmapLayer = null;







// 热力图标记数常


let heatmapMarkers = [];







// 更新热力常


function updateHeatmap() {



function renderHeatmap(points) {
    const showHeatmap = document.getElementById('layer-heatmap')?.checked !== false;
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
                }
            });
            map.addOverlay(heatmapLayer);
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
        map.addOverlay(marker);
        heatmapMarkers.push(marker);
    });
}


    if (!map) {
        showToast('地图尚未初始化');
        return;
    }

    heatmapMarkers.forEach(marker => map.removeOverlay(marker));
    heatmapMarkers = [];

    if (heatmapLayer) {
        map.removeOverlay(heatmapLayer);
        heatmapLayer = null;
    }

    const timeSlot = document.getElementById('heatmap-time')?.value || 'morning';

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
        } catch (error) {
            console.error('更新热力图失败:', error);
            showToast('热力图渲染失败，请重试');
        } finally {
            hideProgress();
        }
    }, 800);
    return;

    fetch(`/api/heatmap-data?time=${timeSlot}`)
        .then(response => response.json())
        .then(data => {
            const rawHeatmapData = (data && data.points && data.points.length > 0)
                ? data.points
                : (MOCK_HEATMAP_DATA[timeSlot] || []);

            const points = normalizeHeatmapData(rawHeatmapData);
            if (points.length === 0) {
                showToast('当前时段暂无热力图数据');
                return;
            }

            const showHeatmap = document.getElementById('layer-heatmap')?.checked !== false;
            const maxCount = points.reduce((max, p) => Math.max(max, p.count), 1);

            if (window.BMapLib && window.BMapLib.HeatmapOverlay) {
                heatmapLayer = new BMapLib.HeatmapOverlay({
                    radius: 28,
                    gradient: {
                        0.2: '#2d7cff',
                        0.45: '#00c2ff',
                        0.65: '#39d98a',
                        0.8: '#ffd166',
                        1.0: '#ff5a5f'
                    }
                });

                map.addOverlay(heatmapLayer);
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
                map.addOverlay(marker);
                heatmapMarkers.push(marker);
            });
        })
        .catch(error => {
            console.error('加载热力图数据失败', error);
            showToast('热力图数据加载失败');
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



    // 模拟加载系统数据



    setTimeout(() => {



        // 更新系统状常


        document.getElementById('total-bikes').textContent = '200';



        document.getElementById('available-bikes').textContent = '150';



        document.getElementById('low-battery-bikes').textContent = '25';



        document.getElementById('total-demand').textContent = '85';



        



        // 初始化热力图



        // 暂时不自动初始化热力图，让用户点击更新热力图按钮来显示


        // updateHeatmap();



    }, 500);



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



            }



        });



    });



}

function applyRolePermissions() {
    const batteryMenu = document.getElementById('battery-menu-item');
    const roleTip = document.getElementById('battery-role-tip');
    const isAdmin = currentUserRole === 'admin';

    if (batteryMenu) {
        batteryMenu.style.display = '';
        batteryMenu.dataset.hiddenForRole = '0';
    }

    if (roleTip) {
        roleTip.style.display = isAdmin ? 'none' : 'block';
    }

    updateBatteryOperationButtons();
    updateAIRoleView();
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



    fetch('data_bd09/WHUInfo_Area.geojson')



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



    fetch('data_bd09/WHUInfo_Roads.geojson')



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



        checkbox.addEventListener('change', function() {



            updateLayerVisibility();



        });



    });



}







// 更新图层可见性


function updateLayerVisibility() {



    // 智能选址点和覆盖范围



    const showSmartParking = document.getElementById('layer-smart-parking')?.checked;



    const showSmartCoverage = document.getElementById('layer-smart-coverage')?.checked;



    



    smartMarkers.forEach(item => {



        item.marker.setVisible(showSmartParking);



    });



    



    smartCircles.forEach(circle => {



        circle.setVisible(showSmartCoverage);



    });



    



    // 人工选址点和覆盖范围



    const showManualParking = document.getElementById('layer-manual-parking')?.checked;



    const showManualCoverage = document.getElementById('layer-manual-coverage')?.checked;



    



    manualMarkers.forEach(item => {



        item.marker.setVisible(showManualParking);



    });



    



    manualCircles.forEach(circle => {



        circle.setVisible(showManualCoverage);



    });



    



    // 调度路线



    const showDispatch = document.getElementById('layer-dispatch')?.checked;



    dispatchLines.forEach(line => {



        line.setVisible(showDispatch);



    });



    dispatchMarkers.forEach(marker => {



        marker.setVisible(showDispatch);



    });



    // 需求热力图


    const showHeatmap = document.getElementById('layer-heatmap')?.checked !== false;



    if (heatmapLayer && typeof heatmapLayer.show === 'function' && typeof heatmapLayer.hide === 'function') {



        if (showHeatmap) {



            heatmapLayer.show();



        } else {



            heatmapLayer.hide();



        }



    }



    heatmapMarkers.forEach(marker => {



        marker.setVisible(!!showHeatmap);



    });



    



    // 校园边界



    const showBoundary = document.getElementById('layer-boundary')?.checked;



    if (campusBoundaryLayer && campusBoundaryLayer.length > 0) {



        campusBoundaryLayer.forEach(layer => {



            if (layer.setVisible) {



                layer.setVisible(showBoundary);



            }



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
    return features
        .filter(f => f?.geometry?.type === 'LineString')
        .map((feature, idx) => {
            const props = feature.properties || {};
            return {
                name: props.route_name || `路线${idx + 1}`,
                from: props.from || '供应点',
                to: props.to || '需求点',
                transfer: Number(props.amount || props.transfer || 0) || 0,
                shortage: Number(props.shortage || 0) || 0,
                distance_m: Number(props.total_distance_m || props.distance_m || props.distance || 0) || 0
            };
        });
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

    return {
        low_battery_count: lowBatteryCount,
        route_count: Number(batteryLastRouteResult?.route_count || 0) || 0,
        capacity_per_trip: Number(batteryLastRouteResult?.capacity_per_trip || getBatteryCapacityValue()) || 0
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

function renderCompareReport(result) {
    const card = document.getElementById('ai-report-card');
    const content = document.getElementById('ai-report-content');
    if (!card || !content) {
        return;
    }

    const rawText = String(result?.text || AI_RESULT_FALLBACK_TEXT).trim();
    const recommended = String(result?.recommended_scheme || '待评估').trim();
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

    const summaryHtml = `<div class="ai-report-summary">推荐方案：<strong>${escapeHtml(recommended)}</strong></div>`;
    const listHtml = `<ul class="ai-report-list">${sentences
        .map(item => `<li>${escapeHtml(item)}。</li>`)
        .join('')}</ul>`;

    content.innerHTML = summaryHtml + listHtml;
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
    if (!Array.isArray(dispatch.routes) || dispatch.routes.length === 0) {
        showToast('请先运行调度优化后再生成调度待办');
        renderAIList('ai-priority-card', 'ai-priority-list', [AI_RESULT_FALLBACK_TEXT]);
        return;
    }

    try {
        const result = await postAIData('/api/ai/priority', {
            role: currentUserRole,
            dispatch: dispatch
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

    const hasMetrics = Number(metrics.coverage) > 0 || Number(metrics.avg_distance) > 0 || Number(metrics.balance) > 0;
    const hasDispatch = Array.isArray(dispatch.routes) && dispatch.routes.length > 0;
    const hasBattery = Number(metrics.low_battery_count) > 0;

    if (!hasMetrics && !hasDispatch && !hasBattery) {
        showToast('请先运行选址或调度模块后再生成风险提示');
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

    if (!compare && (!Array.isArray(dispatch.routes) || dispatch.routes.length === 0)) {
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
    const viewport = getViewportSize();

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

    const viewport = getViewportSize();
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
            const vpAfter = getViewportSize();
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
    const viewportSize = getViewportSize();
    const vw = viewportSize.width;
    const vh = viewportSize.height;
    const displayWidth = Number(captureResult.displayWidth) || vw;
    const displayHeight = Number(captureResult.displayHeight) || vh;
    const scaleX = srcCanvas.width / displayWidth;
    const scaleY = srcCanvas.height / displayHeight;

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
        width: displayWidth + 'px',
        height: displayHeight + 'px',
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

    const renderSelection = () => {
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

    const positionToolbar = () => {
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
        const edge = 36;
        const step = 24;
        if (evt.clientY > vh - edge) {
            viewport.scrollTop = Math.min(displayHeight - viewport.clientHeight, viewport.scrollTop + step);
        } else if (evt.clientY < edge) {
            viewport.scrollTop = Math.max(0, viewport.scrollTop - step);
        }

        if (evt.clientX > vw - edge) {
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
    generateSupplyDemandTable(getActiveSupplyTimeSlot());

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

function getBatteryCapacityValue() {
    const input = document.getElementById('battery-capacity');
    const value = Number(input?.value);
    const normalized = Number.isFinite(value) ? Math.max(1, Math.floor(value)) : BATTERY_DEFAULT_CAPACITY;
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
    const normalized = Number.isFinite(Number(value)) ? Math.max(1, Math.floor(Number(value))) : BATTERY_DEFAULT_CAPACITY;
    input.value = String(normalized);
}

function loadBatteryOpsState() {
    try {
        const raw = localStorage.getItem(BATTERY_STATE_STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (_) {
        return null;
    }
}

function saveBatteryOpsState(state) {
    try {
        localStorage.setItem(BATTERY_STATE_STORAGE_KEY, JSON.stringify(state || {}));
    } catch (_) {
        // ignore storage failure
    }
}

function clearBatteryOpsPersistedState() {
    try {
        localStorage.removeItem(BATTERY_STATE_STORAGE_KEY);
    } catch (_) {
        // ignore storage failure
    }
}

function resetAIPanelStateForNewLogin() {
    aiPanelSessionToken += 1;
    latestDispatchResult = null;

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
    clearBatteryOpsPersistedState();

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
        capacityInput.value = String(BATTERY_DEFAULT_CAPACITY);
    }
    if (dispatchInput) {
        dispatchInput.value = '';
    }
    if (tbody) {
        tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请点击筛选按钮查看低电量车辆</td></tr>';
    }

    updateLowBatteryMetric(0);
    updateBatteryResultPanel({
        lowCount: 0,
        vehicleCount: 0,
        routeCount: 0,
        capacityPerTrip: BATTERY_DEFAULT_CAPACITY,
        routes: []
    });
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

    if (state) {
        if (thresholdSelect && Number.isFinite(Number(state.threshold))) {
            thresholdSelect.value = String(Number(state.threshold));
        }
        setBatteryCapacityValue(state.capacity_per_trip);

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
            if (currentUserRole === 'admin') {
                drawBatteryRoute(state.route_result, state.route_result?.bike_count || currentLowBatteryList.length, {
                    silentToast: true,
                    skipPersist: true
                });
            } else {
                applyDispatcherVehicleFilter({
                    silent: true,
                    skipPersist: true,
                    noInputToast: true,
                    autoHydrate: true
                });
            }
        } else {
            batteryLastRouteResult = null;
            updateBatteryResultPanel({
                lowCount: currentLowBatteryList.length,
                vehicleCount: 0,
                routeCount: 0,
                capacityPerTrip: getBatteryCapacityValue(),
                routes: []
            });
        }
    } else {
        setBatteryCapacityValue(BATTERY_DEFAULT_CAPACITY);
        updateBatteryResultPanel({
            lowCount: currentLowBatteryList.length,
            vehicleCount: batteryLastRouteResult?.vehicle_count || 0,
            routeCount: batteryLastRouteResult?.route_count || 0,
            capacityPerTrip: getBatteryCapacityValue(),
            routes: batteryLastRouteResult?.routes || []
        });
    }

    if (tbody && currentUserRole === 'admin') {
        renderBatteryTableRows(currentLowBatteryList, tbody);
    }

    if (currentUserRole !== 'admin') {
        applyDispatcherVehicleFilter({
            silent: true,
            skipPersist: true,
            noInputToast: true,
            autoHydrate: true
        });
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
    if (!Number.isFinite(lngRaw) || !Number.isFinite(latRaw)) {
        return null;
    }

    const normalized = normalizeBikeToBd09(lngRaw, latRaw);
    const batteryVal = Number(raw?.battery);
    const idRaw = raw?.id != null ? String(raw.id) : String(index + 1);

    return {
        id: idRaw.startsWith('ebike_') ? idRaw : ('ebike_' + idRaw),
        lng: normalized ? normalized.lng : lngRaw,
        lat: normalized ? normalized.lat : latRaw,
        battery: Number.isFinite(batteryVal) ? batteryVal : 100,
        last_used: raw?.last_used || raw?.lastUsed || raw?.time_slot || '-',
        status: raw?.status || 'idle',
        speed: Number(raw?.speed) || 0
    };
}

function updateLowBatteryMetric(count) {
    const el = document.getElementById('low-battery-bikes');
    if (el) {
        el.textContent = String(count);
    }
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
            map.addOverlay(marker);
            lowBatteryMarkers.push(marker);
        } catch (_) {
            // ignore individual marker errors
        }
    });
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
    const fromApi = await fetchLowBatteryFromApi(threshold);
    return { bikes: fromApi, source: 'api' };
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
    return fetch(API_BASE + 'roads', { cache: 'no-store' })
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
            <div class="popup-title">电单车 ${ebike.id}</div>
            <div class="popup-row"><span class="popup-label">状态</span><span class="popup-value">${ebike.status === 'idle' ? '空闲' : '移动'}</span></div>
            <div class="popup-row"><span class="popup-label">电量</span><span class="popup-value">${Math.max(0, Math.round(ebike.battery))}%</span></div>
            <div class="popup-row"><span class="popup-label">速度</span><span class="popup-value">${Math.round(ebike.speed || 0)} km/h</span></div>
        </div>
    `;
}

// 生成电单车模拟
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

    showProgress('正在生成电单车模拟数据...');

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
                    return {
                        id: 'ebike_' + (bike.id || (idx + 1)),
                        lat: normalized.lat,
                        lng: normalized.lng,
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
            showToast(`电单车模拟数据生成完成，共 ${ebikeData.length} 辆`);

            setTimeout(() => {
                toggleEbikeAnimation();
            }, 300);
        })
        .catch(error => {
            console.error('读取电单车模拟数据失败:', error);
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

    for (let i = 0; i < count; i++) {
        const zone = heatZones.length ? heatZones[Math.floor(Math.random() * heatZones.length)] : [30.533, 114.365, 60];
        const latRaw = zone[0] + (Math.random() - 0.5) * 0.001;
        const lngRaw = zone[1] + (Math.random() - 0.5) * 0.001;
        const normalized = normalizeBikeToBd09(lngRaw, latRaw);
        if (!normalized) continue;

        const moving = Math.random() > 0.35;
        const minutesAgo = Math.floor(Math.random() * 180);
        const lastUsedAt = new Date(Date.now() - minutesAgo * 60000);
        const pad = n => String(n).padStart(2, '0');
        data.push({
            id: 'ebike_' + (i + 1),
            lat: normalized.lat,
            lng: normalized.lng,
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

        marker.setTitle('电单车 ' + ebike.id);
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

    syncSimulationButtons();
}

// 切换电单车动画
function toggleEbikeAnimation() {
    if (ebikeSimData.length === 0) {
        showToast('请先生成电单车模拟数据');
        return;
    }

    if (ebikeAnimationRunning) {
        stopEbikeAnimation();
        showToast('动画已暂停');
    } else {
        startEbikeAnimation();
        showToast('电单车动画已开始');
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

// 清除电单车模拟
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
        showToast('电单车模拟已清除');
    }
}

// 筛选低电量车辆（独立于电单车模拟模块）
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
    currentLowBatteryList = lowBattery.slice();
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
}

// 生成换电任务路线（后端负责核心分组与路网规划）
async function generateBatteryRoute() {
    if (currentUserRole !== 'admin') {
        showToast('当前角色无权限执行电池运维操作');
        return;
    }

    if (!map) {
        showToast('地图尚未初始化');
        return;
    }

    const threshold = Number(document.getElementById('battery-threshold')?.value) || 30;
    const capacity = getBatteryCapacityValue();
    let lowBattery = currentLowBatteryList.slice();

    if (lowBattery.length === 0) {
        try {
            const result = await getLowBatteryCandidates(threshold);
            lowBattery = result.bikes;
        } catch (err) {
            console.error('读取低电量数据失败:', err);
            showToast('读取低电量数据失败，无法生成路线');
            return;
        }
    }

    currentLowBatteryList = lowBattery.slice();

    if (lowBattery.length === 0) {
        showToast('无低电量车辆可生成路线');
        return;
    }

    clearBatteryRouteLines();

    // 按新规则：所有换电运维车统一从校园中心补给点出发并回到同一终点
    const servicePoints = [
        { lng: CAMPUS_CENTER_BD09[0], lat: CAMPUS_CENTER_BD09[1], name: '校园中心补给点' }
    ];

    try {
        const response = await fetch('/api/battery/route', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                bikes: lowBattery.map(b => ({ id: b.id, lng: b.lng, lat: b.lat, battery: b.battery, last_used: b.last_used })),
                service_points: servicePoints,
                threshold,
                capacity_per_trip: capacity
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        drawBatteryRoute(data, lowBattery.length);
    } catch (err) {
        console.error('生成换电路线失败:', err);
        showToast('生成换电路线失败，请稍后重试');
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

function addBatteryRouteArrows(routePoints, color) {
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
                scale: 0.65,
                strokeWeight: 1,
                strokeColor: color,
                fillColor: color,
                fillOpacity: 0.9,
                rotation: angle + BATTERY_ARROW_ROTATION_OFFSET
            });
            const arrowMarker = new BMap.Marker(new BMap.Point(curr.lng, curr.lat), { icon: arrowSymbol });
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
        detailEl.textContent = text;
    }
}

function applyDispatcherVehicleFilter(options) {
    const opts = options || {};
    if (currentUserRole === 'admin') {
        return;
    }

    const input = document.getElementById('battery-dispatch-vehicle-id');
    const tbody = document.getElementById('battery-table-body');
    const allRoutes = Array.isArray(batteryLastRouteResult?.routes) ? batteryLastRouteResult.routes : [];
    const allAssignments = batteryLastRouteResult?.bike_assignments && typeof batteryLastRouteResult.bike_assignments === 'object'
        ? batteryLastRouteResult.bike_assignments
        : {};

    const vehicleKey = String(opts.vehicleKey != null ? opts.vehicleKey : (input?.value || '')).trim();
    dispatcherSelectedVehicleKey = vehicleKey;
    if (input && opts.vehicleKey != null) {
        input.value = vehicleKey;
    }

    if (!allRoutes.length) {
        clearBatteryRouteLines();
        clearLowBatteryMarkers();
        updateLowBatteryMetric(0);
        batteryRouteAssignments = {};
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">暂无可查看的换电任务</td></tr>';
        }
        updateBatteryResultPanel({
            lowCount: 0,
            vehicleCount: 0,
            routeCount: 0,
            capacityPerTrip: batteryLastRouteResult?.capacity_per_trip || getBatteryCapacityValue(),
            routes: []
        });
        setBatteryRouteDetailHint('管理员尚未下发可查看的换电任务');
        return;
    }

    if (!vehicleKey) {
        clearBatteryRouteLines();
        clearLowBatteryMarkers();
        updateLowBatteryMetric(0);
        batteryRouteAssignments = {};
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">请输入负责运维车编号后查看</td></tr>';
        }
        updateBatteryResultPanel({
            lowCount: 0,
            vehicleCount: 0,
            routeCount: 0,
            capacityPerTrip: batteryLastRouteResult?.capacity_per_trip || getBatteryCapacityValue(),
            routes: []
        });
        setBatteryRouteDetailHint('请输入负责运维车编号后查看路线明细');
        if (!opts.noInputToast && !opts.silent) {
            showToast('请输入负责运维车编号');
        }
        if (!opts.skipPersist) {
            persistBatteryOpsSnapshot();
        }
        return;
    }

    const matchedRoute = allRoutes.find(route => routeMatchesVehicleKey(route, vehicleKey));
    if (!matchedRoute) {
        clearBatteryRouteLines();
        clearLowBatteryMarkers();
        updateLowBatteryMetric(0);
        batteryRouteAssignments = {};
        if (tbody) {
            tbody.innerHTML = '<tr><td colspan="5" style="color:#999;padding:20px;">未找到该运维车对应路线，请检查编号</td></tr>';
        }
        updateBatteryResultPanel({
            lowCount: 0,
            vehicleCount: 0,
            routeCount: 0,
            capacityPerTrip: batteryLastRouteResult?.capacity_per_trip || getBatteryCapacityValue(),
            routes: []
        });
        setBatteryRouteDetailHint('未匹配到负责路线，请确认运维车编号');
        if (!opts.silent) {
            showToast('未找到该运维车对应路线');
        }
        if (!opts.skipPersist) {
            persistBatteryOpsSnapshot();
        }
        return;
    }

    const scopedAssignments = buildScopedAssignmentsForRoute(matchedRoute, allAssignments);
    const scopedBikes = getDispatcherScopedBikes(matchedRoute, scopedAssignments);
    const scopedResult = {
        routes: [matchedRoute],
        vehicle_count: 1,
        route_count: 1,
        bike_count: scopedBikes.length,
        capacity_per_trip: batteryLastRouteResult?.capacity_per_trip || matchedRoute?.capacity_per_trip || getBatteryCapacityValue(),
        bike_assignments: scopedAssignments
    };

    clearBatteryRouteLines();
    renderLowBatteryMarkers(scopedBikes);
    updateLowBatteryMetric(scopedBikes.length);
    drawBatteryRoute(scopedResult, scopedBikes.length, {
        silentToast: true,
        skipPersist: true,
        updateGlobalState: false,
        tableBikes: scopedBikes
    });

    if (!opts.silent) {
        const vehicleName = matchedRoute?.vehicle_name || matchedRoute?.vehicle_id || vehicleKey;
        showToast(`已切换到 ${vehicleName} 的负责路线`);
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
        if (!pts || pts.length < 2) return;

        const color = route?.route_color || BATTERY_ROUTE_COLORS[idx % BATTERY_ROUTE_COLORS.length] || '#28a745';
        const routeName = route?.route_name || `换电任务路线${idx + 1}`;
        const vehicleName = route?.vehicle_name || `换电运维车${idx + 1}`;

        const polyline = new BMap.Polyline(pts.map(p => new BMap.Point(p.lng, p.lat)), {
            strokeColor: color,
            strokeWeight: 4,
            strokeOpacity: 0.85,
            strokeStyle: 'solid'
        });
        map.addOverlay(polyline);
        batteryRouteLines.push(polyline);
        addBatteryRouteArrows(pts, color);

        const ordered = Array.isArray(route?.ordered_bikes) ? route.ordered_bikes : [];
        ordered.forEach((b, orderIdx) => {
            if (!b?.id) return;
            batteryRouteAssignments[b.id] = {
                route_name: routeName,
                vehicle_name: vehicleName,
                service_order: Number(b?.service_order) || (orderIdx + 1)
            };
        });
    });

    if (routes.length > 0) {
        const sharedDepot = {
            lng: CAMPUS_CENTER_BD09[0],
            lat: CAMPUS_CENTER_BD09[1]
        };
        const depotMarker = new BMap.Marker(new BMap.Point(sharedDepot.lng, sharedDepot.lat));
        try {
            const depotLabel = new BMap.Label('换电路线起终点', { offset: new BMap.Size(12, -16) });
            depotLabel.setStyle({ borderColor: '#28a745', color: '#1f1f1f', backgroundColor: '#f3fff3' });
            depotMarker.setLabel(depotLabel);
        } catch (_) {}
        map.addOverlay(depotMarker);
        batteryRouteLines.push(depotMarker);
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


        // 绑定电单车模拟模块按钮


        bindSimulationModuleButtons();
        bindBatteryDispatcherControls();
        initAIPanelEvents();



    }, 100);



};



















