
// 通用的单例验证方法
// const getSingle = function (Fn) {
//     let result;
//     return function () {
//         return result || (result = new Fn(...arguments));
//     };
// };


const getSingle = function(Fn){
    let result = null 
    return function(){
        return result || (result = new Fn(...arguments))
    }
}


function a(name) {
    this.name = name
}

var b = getSingle(a)

var c = b('aaa')
var d = b('bbb')

console.log(d)
console.log(c)