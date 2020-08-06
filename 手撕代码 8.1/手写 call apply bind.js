Array.prototype.apply = function (obj, arg) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }

    obj.fn = this
    let result = null

    if (arg === null || arg === undefined) {
        result = obj.fn(arg)
    } else {
        result = obj.fn(...arg)
    }

    Reflect.deleteProperty(obj, fn)
    return result
}


Array.prototype.bind1 = function (obj, ...arg) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }

    let self = this
    let args = arg

    function f() {}
    f.prototype = this.prototype

    let bound = function () {
        let res = [...arg, ...arguments]
        let obj1 = this instanceof f ? this : obj
        self.apply(obj1, res)
    }

    bound.prototype = new f()
    return bound
}