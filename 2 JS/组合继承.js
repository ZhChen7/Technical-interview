// function SuperType() {
//     this.name = 'zc'
//     this.colors = ['pink', 'blue', 'green'];
// }

// function SubType() {
//     SuperType.call(this)
// }
// SubType.prototype = new SuperType
// SubType.prototype.constructor = SubType
// let a = new SubType()
// let b = new SubType()

// a.colors.push('red')
// console.log(a.colors) //[ 'pink', 'blue', 'green', 'red' ]
// console.log(b.colors) //[ 'pink', 'blue', 'green' ]


function SuperType(){
    this.name = 'zc'
    this.colors = ['pink', 'blue', 'green'];
}

function SubType(){
    SuperType.call(this)
}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType



