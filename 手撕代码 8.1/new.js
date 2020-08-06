function _new(fn,...arg){
    let obj ={}
    obj.__proto__ = fn.prototype
    let ret = fn.apply(obj,arg)
    return ret instanceof 'object'? ret : obj
}