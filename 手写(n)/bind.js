// Function.prototype.bind = function (obj, ...args) {
//     if (!obj) {
//         obj = typeof window === 'undefined' ? global : window
//     }
//     let self = this
//     let arg = args
//     function f() {}
//     f.prototype = this.prototype

//     let bound = function () {
//         let rest = [...arg, ...arguments]
//         let _this = this instanceof f ? this : obj
//         return self.apply(_this, rest)
//     }
//     bound.prototype = new f()
//     return bound
// }


Function.prototype.bind1 = function (obj, ...arg) {
    if (!obj) {
        obj = typeof window === 'undefined' ? global : window
    }

    let self = this
    let args = arg

    function f() {}
    f.prototype = this.prototype


    let bound = function () {
        let res = [...args, ...arguments]
        let obj1 = this instanceof f ? this : obj
        return self.apply(obj1, res)
    }

    bound.prototype = new f()

    return bound

}