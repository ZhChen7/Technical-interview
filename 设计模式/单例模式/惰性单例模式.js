// let getSingle = function (fn) {
//     let result= null
//     return function () {
//        return result || (result = fn.call(this,...arguments))
//     }
// }

// 通用的单例验证方法
const getSingle = function (fn){
    let result;
    return function (){
        return result || (result = fn.apply(this, arguments));
    };
};

function a(name) {
    this.name = name
}

var b =  getSingle(a)

var d = b('bbb','xxx','yyyyy')
var c = b('aaa')

console.log(d)
console.log(c)

