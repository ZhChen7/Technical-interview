
function _new(fn,...arg) {
    let obj ={}
    obj. _proto_ = fn.prototype
    let ret = fn.apply(obj,arg)
    return ret instanceof Object?ret:obj
}
