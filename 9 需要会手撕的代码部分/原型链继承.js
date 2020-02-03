function SuperType(name) {
    this.name =name
    this.color = ['red']
}
SuperType.prototype.say=function () {
    console.log('xxxx')
}

function SubType(name) {
    this.age ='16'
}

SubType.prototype = new SuperType()

let a=new SubType('大傻子')
let b=new SubType()

console.log(a.__proto__)


// for(let item in a){
//         console.log(item +'---'+b[item])
// }



