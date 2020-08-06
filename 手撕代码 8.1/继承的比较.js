function object(obj){
    function f(){}
    f.prototype = obj
    return new f()
}

function inheraitPrototype(subType, superType) {
    let prototype = object(superType.prototype)
    prototype.constructor = subType
    subType.prototype = prototype

}