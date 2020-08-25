Array.prototype.apply = function (obj, ...args) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }

    obj.fn = this
    let result


    if (args === undefined || args === null) {
        result = obj.fn()
    } else {
        result = obj.fn(...args)
    }

    Reflect.deleteProperty(obj, fn)
    return result

}

Array.prototype.bind = function (obj, ...arg) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }

    let self = this
    let args = arg

    function f() {}
    f.prototype = this.prototype

    let bound = - function () {
        let res = [...args, ...arguments]
        let _this = this instanceof f ? this : obj
        return self.apply(_this, res)
    }

    bound.prototype = new f()
    return bound
}