let fn = (function(){
    let i = 0 
    return function(){
        return i++
    }
})()


console.log(fn())
console.log(fn())
console.log(fn())
console.log(fn())
