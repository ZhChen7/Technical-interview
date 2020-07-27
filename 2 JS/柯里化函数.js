const currying = function (fn, ...args) {
    if (args.length < fn.length) {
        return function () {
            return currying(fn, ...args, ...arguments)
        }
    } else {
        return fn(...args)
    }
}