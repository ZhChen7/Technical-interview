// 实现一个new
var Dog = function(name) {
    this.name = name
}

Dog.prototype.bark = function() {
    console.log('wangwang')
}

Dog.prototype.sayName = function() {
    console.log('my name is ' + this.name)
}

// let sanmao = new Dog('三毛')
// // sanmao.sayName()
// // sanmao.bark()

// new 的作用
// 创建一个新对象obj
// 把obj的__proto__指向Dog.prototype 实现继承
// 执行构造函数，传递参数，改变this指向 Dog.call(obj, ...args)
// 最后把obj赋值给sanmao
var _new = function() {
    let constructor = Array.prototype.shift.call(arguments)
    let args = arguments
    const obj = new Object()
    obj.__proto__ = constructor.prototype
    constructor.call(obj, ...args)
    return obj
}
// var simao = _new(Dog, 'simao')
// simao.bark()
// simao.sayName()
// console.log(simao instanceof Dog) // true


var obj = {};
obj.__proto__ = Dog.prototype; // 此时便建立了obj对象的原型链：

// obj->Dog.prototype->Object.prototype->null
var result = Dog.call(obj,"John"); // 相当于obj.Dog("John")


return typeof result === 'object' ? result : obj; // 如果无返回值或者返回一个非对象值，则将obj返回作为新对象

console.log(obj.sayName())
