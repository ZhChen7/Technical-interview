function binarySearch(arr, target, l, r) {
    let left = l || 0
    let right = r || arr.length - 1

    while (left <= right) {
        let middleIndex = Math.floor(left + (right - left) / 2)
        let middleValue = arr[middleIndex]
        if (target > middleValue) {
            left = middleIndex + 1
        } else if (target < middleValue) {
            right = middleIndex - 1
        } else {
            return middleIndex
        }
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 4))
