function Person(name) {
    this.name = name;
}
function SuperType() { }
var Yvette = new Person('刘小夕');
console.log(Yvette.constructor); //[Function: Person]
Yvette.constructor = SuperType;
console.log(Yvette.constructor); //[Function: SuperType]