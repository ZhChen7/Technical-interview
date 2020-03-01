function SuperType(name,age) {
    this.name =name
    this.age =age
    this.color = ['red']
    // return this
}
SuperType.prototype.say=function () {
    console.log('xxxx')
}

function SubType(name) {
    this.age ='16'
}
SubType.prototype = new SuperType()

let a=_new(SuperType,'大傻子','18')

// console.log(a)

function _new(fn,...arg) {
    let obj = {}
    obj.__proto__= fn.prototype
    let ret= fn.apply(obj,arg)
    return  ret instanceof Object ? ret:obj
}





