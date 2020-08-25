function object(obj) {
    function f() {}
    f.prototype = obj
    return new f()
}

function inheritPrototype(subType, superType) {
    let prototype = object(superType.prototype)
    prototype.constructor = subType
    subType.prototype = prototype
}