class SuperType {
    constructor(name) {
        this.name = name
        this.color = ['red']
    }
    say() {
        console.log('xxxx')
    }
}

class SubType {
    constructor(name) {
        this.age = '16'
    }
}

SubType.prototype = new SuperType()

let a=new SubType('大傻子')
let b=new SubType()

console.log(a.__proto__)


// for(let item in a){
//         console.log(item +'---'+b[item])
// }



