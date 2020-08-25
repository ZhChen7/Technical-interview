function superType() {
    this.name = 'zc'
}


function subType() {
    this.age = '123'
}

subType.prototype = new superType()

