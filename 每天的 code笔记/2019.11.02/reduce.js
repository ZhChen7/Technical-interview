arr=[1,2,3,4,5]


console.log(arr.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue * currentValue
}))