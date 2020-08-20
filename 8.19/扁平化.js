function getFlat(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? getFlat(item) : item)
    })
}