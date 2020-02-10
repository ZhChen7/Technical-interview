// 适配器实现地图SDK统一渲染
var googleMap = {
    show: function(){
        console.log('开始渲染谷歌地图');
    }
};
var baiduMap = {
    display: function(){
        console.log('开始渲染百度地图');
    }
};

// 外部实际调用的适配器对象
var baiduMapAdapter = {
    show: function() {
        return baiduMap.display();
    }
};

// 外部调用者
var renderMap = function(map) {
    map.show();   // 统一接口调用
}；

renderMap(googleMap);
renderMap(baiduMapAdapter);
