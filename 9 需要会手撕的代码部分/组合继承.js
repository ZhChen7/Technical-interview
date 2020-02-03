function SuperType(name) {
    this.name = name
    this.colors =['red']
}

SuperType.prototype.say=function () {
    console.log('hello world!')
}

function SubType(name) {
     SuperType.call(this,name)
}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType






