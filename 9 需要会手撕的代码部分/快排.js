function median(arr, left, right) {
    let center = Math.floor(left + (right - left) / 2)
    if (arr[left] > arr[center]) {
        swap(arr, left, center)
    }
    if (arr[center] > arr[right]) {
        swap(arr, center, right)
    }
    if (arr[left] > arr[right]) {
        swap(arr, left, right)
    }
    swap(arr, center, right - 1)
    return arr[right - 1]
}

function swap(arr, m, n) {
    let temp = arr[m]
    arr[m] = arr[n]
    arr[n] = temp
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    return quickSortFun(arr, 0, arr.length - 1)
}

function quickSortFun(arr, left, right) {
    if (left < right) {
        let pivot = median(arr, left, right)
        let i = 0
        let j = right - 1
        while (true) {
            while (arr[++i] < pivot) {}
            while (arr[--j] > pivot && j > left) {}
            if (i < j) {
                swap(arr, i, j)
            } else {
                break
            }
        }
        if (i < right) {
            swap(arr, i, right - 1)
        }
        quickSortFun(arr, left, i - 1)
        quickSortFun(arr, i + 1, right)
    }
    return arr
}
console.log(quickSort([1, 4, 2, 3, 1]))