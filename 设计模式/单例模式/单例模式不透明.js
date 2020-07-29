// function singleTon(name) {
//     this.name = name
//     this.instance = null
// }


// singleTon.prototype.getName = function () {
//     console.log(this.name)
// }

// singleTon.getInstance = function (name) {
//     if (!this.instance) {
//         this.instance = new singleTon(name)
//     }
//     return this.instance
// }

// var b = singleTon.getInstance('bbbbb')
// var a = singleTon.getInstance('a')

// console.log(a)
// console.log(b)



function singleTon(name) {
    this.name = name
    this.instance = null
}
singleTon.prototype.sayHi = function () {
    console.log('hello world!');
}

singleTon.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new singleTon(name)
    }
    return this.instance
}
var b = singleTon.getInstance('bbbbb')
var a = singleTon.getInstance('a')

console.log(a)
console.log(b)