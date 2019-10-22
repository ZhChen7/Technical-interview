function SuperType() {
    this.type = 'animal'
}
SuperType.prototype.getType = function() {
    console.log(this.type);
}
function SubType() {

}
SubType.prototype = new SuperType();
SubType.prototype.sayHello = function() {
    console.log('hello');
}
function SimType(name) {
    this.name = name;
}
SimType.prototype = new SubType();
SimType.prototype.sayHi = function() {
    console.log('hi');
}
var instance = new SimType('刘小夕');
instance.getType();

