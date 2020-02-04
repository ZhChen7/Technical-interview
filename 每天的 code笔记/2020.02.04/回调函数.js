function f(num,callback) {
    callback(num*2)
}


f(3,function (result) {
    console.log(result)
})
