/*
* 请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，
* 合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
* */


// function MergeArray(arr1, arr2) {
//     var a2 = arr2.map((item) => {
//         return item + 3
//     })
//     var arr = [...arr1, ...a2].sort()
//     return arr.map((item) => {
//         if (item.includes(3)) {
//             return item.split('')[0]
//         }
//         return item
//     })
// }
//
// console.log(MergeArray(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], ['A', 'B', 'C', 'D']))
//

