
//
// function inheritPrototype(subType,superType) {
//     let prototype = superType.prototype
//     prototype.constructor = subType
//     subType.prototype = prototype
// }


function inheritPrototype(subType,superType) {
    let prototype=superType.prototype
    prototype.constructor = subType
    subType.prototype = prototype
}


function SuperType(name) {
    this.name = name
    this.colors=['red']
}

function SubType(name) {
    SuperType.call(this,name)
}

inheritPrototype(SubType,SuperType)
