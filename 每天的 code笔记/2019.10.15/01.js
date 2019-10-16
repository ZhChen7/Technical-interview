var f=(function () {
    var i=1
    return function () {
        return i*=2
    }
})()

console.log(f())

