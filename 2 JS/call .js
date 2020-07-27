Function.prototype.call1 = function (obj, ...arg) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window;
    }
    obj.fn = this
    let result = null
    console.log(arg);
    result = obj.fn(...arg)
    delete obj.fn
    return result
}

let obj = {
    name: 'zc',
    age: 123
}

function f(...arg) {
    console.log(this.name)
    console.log(this.age)
    console.log(...arg);
}

f.call1(obj,'xxxx','yyyyy')