// 原型链继承
// function SuperType() {
//     this.name = 'zc'
//     this.color = ['red', 'blue']
// }

// function SubType() {
//     this.age = 12312
// }
// SubType.prototype = new SuperType()


// 借用构造函数

// function SuperType() {
//     this.name = 'zc'
//     this.color = ['red', 'blue']
// }

// function SubType() {
//     SuperType.call(this)
// }

// 组合继承
// function SuperType() {
//     this.name = 'zc'
//     this.color = ['red', 'blue']
// }

// function SubType() {
//     SuperType.call(this)
// }

// SubType.prototype = new SuperType()
// SubType.prototype.constructor = SubType



// 原型式继承
// function onject(o) {
//     function f() {}
//     f.prototype = o 
//     return new f()
// }


// 寄生式继承

// function object(o) {
//     function f() {}
//     f.prototype = o 
//     return new f()
// }

// function createAnother(obj) {
//     let clone = object(obj)
//     clone.sayHi = function () {
//         console.log('111');
//     }
//     return clone
// }


// 寄生组合式继承
// function object(o) {
//     function f() {}
//     f.prototype = o 
//     return new f()
// }

// function inheritPrototy(subType,superType) {
//     let prototype = object(superType.prototype)
//     prototype.constructor = subType
//     subType.prototype = prototype
// }

// class
class SuperType {
    constructor(age) {
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
}
class SubType extends SuperType {
    constructor(age, name) {
        super(age); // 调用父类的constructor(x, y)
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

















