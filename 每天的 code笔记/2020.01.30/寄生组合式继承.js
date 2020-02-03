function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype); //创建对象
    prototype.constructor = subType;//增强对象
    subType.prototype = prototype;//指定对象
}
function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
//...code
function SuberType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SuberType, SuperType);
//...code
