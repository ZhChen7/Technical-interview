function object(obj) {
    function f() {}
    f.prototype = obj
    return new f()
}


function CerateAnother(original) {
    let clone = object(original)
    clone.say= function () {
        console.log('hi')
    }
    return clone
}
