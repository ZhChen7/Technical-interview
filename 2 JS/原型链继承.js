function SuperType(name){
    this.name = name
    this.color = ['red','blue']
}

function SubType(){
    this.age = 22
    this.color1 = ['red','blue']
}


SubType.prototype = new SuperType()


let a = new SubType('zc')
console.log(a.name)

