function _new(fn,...arg) {
    let obj = {}
    obj.__proto__ = fn.prototype
    let ret = fn.apply(obj,arg)
    console.log(ret)
    console.log(obj)
    return ret instanceof Object? ret:obj
}

function f(name,age) {
    this.name = name
    this.age = age
    return {
        name:'xxxx'
    }
}

let a = _new(f,'zc',123)