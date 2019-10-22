function SuperType(name) {
    this.name = name
    this.colors = ['pink', 'blue', 'green']
}

function SubType(name) {
    SuperType.call(this, name)
}

let intance1 = new SubType('zc')
console.log(intance1.name)

