let initArr = Array.from({ length: 10 }, (v) => { return getRandomIntInclusive(0, 20) })

// 得到一个两数之间的随机整数，包括两个数在内
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}



function GetArr(arr) {
   var  newarr = Array.from(new Set(arr)).sort((a, b) => a - b
)
    var pre = 0, cur = 1
    var count = 1
    var xarr = [newarr[0]]
    var Finllyarr = []
    while (cur <= newarr.length) {
        if (newarr[cur] - newarr[pre] === count) {
            xarr.push(newarr[cur])
        } else {
            pre = cur
            count = 0
            Finllyarr.push(xarr)
            xarr = [newarr[pre]]
        }
        cur++
        count++
    }
    return Finllyarr
}
console.log(GetArr(initArr))