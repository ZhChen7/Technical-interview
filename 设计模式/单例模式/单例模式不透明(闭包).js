function singleTon(name) {
    this.name = name
}

singleTon.prototype.getName=function () {
    console.log(this.name)
}

singleTon.getInstance = (function () {
    let instance = null
    return function (name) {
        return instance || (instance = new singleTon(name))
    }
})()

var a = singleTon.getInstance('a')
var b = singleTon.getInstance('bbbbb')
var c = singleTon.getInstance('cccccc')

console.log(a)
console.log(b)
console.log(c)
