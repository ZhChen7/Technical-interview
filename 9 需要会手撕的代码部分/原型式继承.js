function object(obj) {
    function f() {}
    f.prototype = obj
    return new f()
}
