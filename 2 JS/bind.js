// Function.prototype.bind1 = function (obj,...arg) {
//     if(!obj){
//         obj = typeof window === 'undefined'? global : window
//     }
//     let self = this
//     let args = arg
//     function f() {}
//     f.prototype = this.prototype
//     let bound = function () {
//         let res = [...args, ...arguments]
//         let _this = this instanceof f ? this : obj
//         return self.apply(_this, res)
//     }
//     bound.prototype = new f()
//     return bound
// }


Function.prototype.bind1 = function(obj,...arg){
    if(!obj){
        obj = typeof window === 'undefined'? global : window
    }

    let self = this
    let args = arg

    function f(){}
    f.prototype = this.prototype

    let bound = function(){
        let res = [...args,...arguments]
        let _this = this instanceof f? this: obj
        return self.apply(_this,res)
    }

    bound.prototype = new f()
    return bound
}
let obj = {
    name: 'zc',
    age: 123
}

function f(...arg) {
    console.log(this.name)
    console.log(this.age)
    console.log(arg);
}

let f1 = f.bind1(obj)
f1('xxx','yyyy')

