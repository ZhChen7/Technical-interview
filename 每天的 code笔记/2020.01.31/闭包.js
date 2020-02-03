
var fn =(function () {
    let i=0
    return function () {
        return i++
    }
})()
console.log(fn()) //0
console.log(fn()) //1
console.log(fn()) //2
console.log(fn()) //3


