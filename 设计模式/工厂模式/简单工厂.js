//JS_factory-simple.js
//这是一个简单工厂模式
var XMLHttpFactory = function(){

}
XMLHttpFactory.createXMLHttp =function(){
    var XMLHttp =null;
    //XMLHttpFactory.createXMLHttp () 这个方法根据当前环境的具体情况返回一个XHR对象。
    if (window.XMLHttpRequest) {
        XMLHttp = new XMLHttpRequest()
    }
    elseif(window.ActiveXObject){
        XMLHttp = new ActiveXObject("Microsoft.XMLHttp")
    }
    return XMLHttp;
};
var AjaxHander = function(){
    var XMLHttp =XMLHttpFactory.createXMLHttp();  /*..具体的操作..*/
}
//只关心得到的东西是什么