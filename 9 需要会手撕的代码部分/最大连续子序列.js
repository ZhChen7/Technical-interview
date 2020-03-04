let arr = [1, -5, 8, 3, -4, 15, -8]


// function getNum(arr) {
//     let length = arr.length
//     let maxmun=0
//     for (let i = 0; i <length ; i++) {
//         let sum=arr[i]
//         for (let j = i+1; j < length; j++) {
//             sum+=arr[j]
//             if(sum>maxmun){
//                 maxmun = sum
//             }
//
//         }
//     }
//     return maxmun
// }

function getNum(arr) {
    let max = 0
    let sum = 0
    for (let num of arr) {
        if (sum < 0) {
            sum = 0
        }
        sum += num
        max = Math.max(max, sum)
    }
    return max
}

console.log(getNum(arr))
