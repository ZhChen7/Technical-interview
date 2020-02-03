function binarySearch(target, arr, start, end) {
    let left = start || 0
    let right = end || arr.length - 1

    while (left <= right) {
        let middleIndex = Math.floor((left + right) / 2)

        if (target < arr[middleIndex]) {
            right = middleIndex - 1
        } else if (target > arr[middleIndex]) {
            left = middleIndex + 1
        } else {
            return middleIndex
        }
    }
    return -1
}
binarySearch(1, [4, 2, 1, 1, 2, 3, 4, 5], 0)
