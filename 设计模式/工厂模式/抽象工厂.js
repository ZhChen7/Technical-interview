//JS_factory-abstract.js
//这是一个抽象工厂模式
var XMLHttpFactory = function(){

}
XMLHttpFactory.prototype ={
    //如果真的要调用这个方法会抛出一个错误，它不能被实例化，只能用来派生子类
    createFactory:function(){
        throw new Error('This is an abstract class');
    }
}    //派生子类

var XHRHandler =function(){
    XMLHttpFactory.call(this);
};

XHRHandler.prototype=new XMLHttpFactory();
XHRHandler.prototype.constructor=XHRHandler; //重新定义createFactory 方法

XHRHandler.prototype.createFactory=function(){
    var XMLHttp =null;
    //XMLHttpFactory.createXMLHttp () 这个方法根据当前环境的具体情况返回一个XHR对象。
    if (window.XMLHttpRequest) {
        XMLHttp = new XMLHttpRequest()
    }
    elseif(window.ActiveXObject){
        XMLHttp = new ActiveXObject("Microsoft.XMLHttp")
    }
    return XMLHttp;
}