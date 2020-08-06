function bubbleSort(arr) {
    if (arr.length < 2) {
        return
    }

    let len = arr.length

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}



function selectSort(arr) {
    if (arr.length < 2) {
        return
    }

    let len = arr.length
    let minIndex, temp

    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}




function insertSort(arr) {
    if (arr.length < 2) {
        return
    }
    let len = arr.length
    let preIndex, current

    for (let i = 1; i < len; i++) {
        preIndex = i - 1
        current = arr[i]

        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }

    return arr


}