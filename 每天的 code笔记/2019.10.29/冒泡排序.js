// 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？


let arr=[1,2,3,2,1,2,3,1,22,2,1,44,2,12,4]



// 改进冒泡排序
function bubbleSort1(arr) {
    let i = arr.length - 1;

    while (i > 0) {
        let pos = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i = pos;
    }
    console.log(arr);
}


bubbleSort1(arr)


// function f(arr) {
//
//     len=arr.length
//
//     for (var i = 0; i < len; i++) {
//         let isSorted = true;
//         for (let j = 0; j < len-1-i; j++) {
//             if (arr[j]>arr[j+1]){
//                 [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
//                 isSorted = false
//             }
//             if(isSorted){
//                 return   // <== 数组已经有序, 停止函数的执行
//             }
//
//         }
//     }
//
//
//  return arr
//
//
// }
//
// console.log(f(arr))