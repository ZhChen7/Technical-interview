function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1)
}
function clone(target) {
    let targetType = getType(target)
    let result = null

    if (targetType === 'Object') {
        result = {}
    } else if (targetType === 'Array') {
        result = []
    } else {
        return target
    }
    for (let key in target) {
        let value = target[key]

        if (getType(value) === 'Object' || getType(value) === 'Array') {
            result[key] = clone(value)
        } else {
            return [key] = value
        }
    }
    return result
}
