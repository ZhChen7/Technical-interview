function currying(fn, ...arg) {
    if (arg.length > fn.length) {
        return function () {
            return currying(fn, ...arg, ...arguments)
        }
    } else {
        fn(...arg)
    }
}