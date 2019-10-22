var f=(function () {
    var i=0
    return function () {
      console.log(i++)
    }
})()


console.log(f)