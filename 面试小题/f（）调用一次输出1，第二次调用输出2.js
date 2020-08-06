let f = (function(){
    let i = 1;
    return function(){
        return i++
    }
})()

console.log(f())
console.log(f())
console.log(f())
console.log(f())