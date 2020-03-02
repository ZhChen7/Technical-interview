function swap(m, n) {
    let temp = arr[m]
    arr[m] = arr[n]
    arr[n] = temp
}

// function shellSort(arr) {
//     if (arr == null || arr.length < 2) {
//         return arr
//     }
//     let length = arr.length
//     let gap = Math.floor(length / 2)
//     while (gap > 1) {
//         for (let i = gap; i < length; i++) {
//             let temp = arr[i]
//             let j = i
//             while (temp < arr[j - gap] && j >= gap) {
//                 arr[j] = arr[j - gap]
//                 j -= gap
//             }
//             arr[j] = temp
//
//         }
//         gap = Math.floor(gap / 2)
//     }
//     return arr
// }
//
// function findpivot(left, right) {
//     let center = Math.floor(left + (right - left) / 2)
//
//     if (arr[left] > arr[center]) {
//         swap(left, center)
//     }
//     if (arr[center] > arr[right]) {
//         swap(center, right)
//     }
//
//     if (arr[left] > arr[right]) {
//         swap(left, right)
//     }
//
//     swap(center, right - 1)
//     return arr[right - 1]
// }
//
//
// function quickSort(arr) {
//     quick(0, arr.length - 1)
// }
//
// function quick(left, right) {
//     if (left >= right) return
//     let pivot = findpivot(left, right)
//
//     let i = left
//     let j = right - 1
//
//     while (true) {
//         while (arr[++i] < pivot) {
//         }
//         while (arr[--j] > pivot && j > left) {
//         }
//         if (i < j) {
//             swap(i, j)
//         } else {
//             break
//         }
//     }
//
//     if (i < right) {
//         swap(i, right - 1)
//     }
//
//     quick(left, i - 1)
//     quick(i + 1, right)
//
// }

// function quickSort(arr){
//     if (arr == null || arr.length < 2) {
//         return arr
//     }
//     let length = arr.length
//     let left =[],
//         right=[],
//         dot=Math.floor(arr.length/2)
//         dotvalue= arr.splice(dot,1)[0]
//
//     for (let i = 0; i <length; i++) {
//         if(arr[i]<dotvalue){
//             left.push(arr[i])
//         }else{
//
//         }
//     }
// }


let arr = [1, 2, 123, 3, 6, 22, 123123, 111]
quickSort(arr)
console.log(arr)

