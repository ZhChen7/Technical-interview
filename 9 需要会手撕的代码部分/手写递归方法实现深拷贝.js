// 手写实现深拷贝
function checkedType(target) {
    return Object.prototype.toString.call(target).slice(8, -1)
}

function clone(target) {
    let targrtType = checkedType(target)
    let result = null
    if (targrtType === "Object") {
        result = {}
    } else if (targrtType === "Array") {
        result = []
    } else {
        return target
    }
    for (let item in target) {
        let value = target[item]
        if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
            result[item] = clone(value)
        } else {
            result[item] = value
        }
    }
    return result
}





