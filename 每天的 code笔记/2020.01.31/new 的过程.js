var _new = function() {
    let constructor = Array.prototype.shift.call(arguments)
    let args = arguments
    const obj = new Object()
    obj.__proto__ = constructor.prototype
    constructor.call(obj, ...args)
    return obj
}
var simao = _new(Dog, 'simao')
simao.bark()
simao.sayName()
console.log(simao instanceof Dog) // true
