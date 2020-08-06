// function bubbleSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len - 1; i++) {
//         for (var j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) { // 相邻元素两两对比   
//                 var temp = arr[j + 1]; // 元素交换   
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// 冒泡
function bubbleSort(arr) {
    if (arr == null || arr.length < 2) return

    let len = arr.length

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = temp
                arr[j] = temp
            }
        }
    }
    return arr
}

// 选择排序
function selectionSort(arr) {   
    var len = arr.length;   
    var minIndex, temp;   
    for (var i = 0; i < len - 1; i++) {   
        minIndex = i;   
        for (var j = i + 1; j < len; j++) {   
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数   
                minIndex = j;                 // 将最小数的索引保存   
            }   
        }   
        temp = arr[i];   
        arr[i] = arr[minIndex];   
        arr[minIndex] = temp;   
    }   
    return arr;   
}


// 插入排序
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}