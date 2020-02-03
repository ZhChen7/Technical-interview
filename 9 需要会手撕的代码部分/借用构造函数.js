function SuperType(name) {
    this.name = name
    this.color = ['red']
}

SuperType.prototype.say=function () {
    console.log('xxxxx')
}

function SubType(name) {
    SuperType.call(this,name)
}

let a =new SubType('xxxxx')
let b =new SubType('yyyyy')

b.color.push('pink')


for (let item in a){
    console.log(item + ' '+a[item])
}


