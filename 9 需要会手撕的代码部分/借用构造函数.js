function SuperType(name) {
    this.name = name
    this.color = ['red']
}

SuperType.prototype.say=function () {
    console.log('异步编程的6种解决方案')
}

function SubType(name) {
    SuperType.call(this,name)
}

let a =new SubType('异步编程的6种解决方案')
let b =new SubType('yyyyy')

b.color.push('pink')


for (let item in a){
    console.log(item + ' '+a[item])
}


