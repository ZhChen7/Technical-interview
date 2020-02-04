// 自定义apply函数
Function.prototype.apply1 = function (obj, arg) {
    console.log(obj)
    //context为null或者是undefined时,设置默认值
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }
    obj.fn = this
    let result = null
    //undefined 或者 是 null 不是 Iterator 对象，不能被 ...
    if (arg === undefined || arg === null) {
        result = obj.fn(arg)
    } else {
        result = obj.fn(...arg)
    }
    delete obj.fn
    return result
}


// 自定义 call 函数
Function.prototype.call1 = function (obj, ...arg) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }
    obj.fn = this
    let result = null
    result = obj.fn(...arg)
    delete obj.fn
    return result
}

// 自定义 bind 函数
Function.prototype.bind = function (obj,...arg) {
    if(!obj){
        obj = typeof window === 'undefined'? global : window
    }
    let self = this
    let args = arg
    function f() {}
    f.prototype = this.prototype

    let bound = function () {
        let res = [...args,...arguments]
        let obj = this instanceof f?this: obj||this
        return self.apply(obj,res)
    }

    bound.prototype = new f()
    return bound
}







