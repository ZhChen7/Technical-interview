function checkType(target) {
    return Object.prototype.toString.call(target).slice(8, -1)
}

function clone(target) {
    let targetType = checkType(target)
    let result = null
    if (targetType === 'Object') {
        result = {}
    } else if (targetType === 'Array') {
        result = []
    } else {
        return target
    }

    for (let item in target) {
        let value = target[item]

        if (checkType(value) === 'Object' || checkType(value) === 'Array') {
            result[item] = clone(value)
        } else {
            result[item] = value
        }
    }
    return result
}