Function.prototype.apply1 = function (obj, arg) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }
    obj.fn = this
    console.log(obj.fn);
    let result = null
    if (arg === undefined || arg === null) {
        result = obj.fn(arg)
    } else {
        result = obj.fn(...arg)
    }

    delete obj.fn
    return result
}



let obj = {
    name: 'zc',
    age: 123
}

function f() {
    console.log(this.name)
    console.log(this.age)
}

f.apply1(obj)

