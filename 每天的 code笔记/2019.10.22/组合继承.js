function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}
// console.log(SuperType)

function SuberType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

SuberType.prototype = new SuperType();
SuberType.prototype.constructor = SuberType;
SuberType.prototype.sayAge = function () {
    console.log(this.age);
}
let instance1 = new SuberType('Yvette', 20);
instance1.colors.push('yellow');
console.log(instance1.colors); //[ 'pink', 'blue', 'green', 'yellow' ]
instance1.sayName(); //Yvette

let instance2 = new SuberType('Jack', 22);
console.log(instance2.colors); //[ 'pink', 'blue', 'green' ]
instance2.sayName();//Jack


// function Super(name) {
//     this.name=name
//     this.color=['red','blue']
// }
//
// function Sub(name) {
//     Super.call(this,name)
//     this.name= name
// }
//
// Sub.prototype= new Super()
// Sub.prototype.constructor = Sub
//
// var sub= new Sub('zc')
// var b=new Super('xxx')
// console.log(b)
//
//
//
// console.log(sub)















