

function bar(){
    console.log(this.name)
}

let obj={
    name:'zc'
}

//
// Function.prototype.bind = function(context) {
//     if(typeof this !== "function"){
//         throw new TypeError("not a function");
//     }
//
//     let self = this;
//     let args = [...arguments].slice(1); //一开始传入的
//     function Fn() {};
//     Fn.prototype = this.prototype;
//     let bound = function() {
//         let res = [...args, ...arguments]; //bind传递的参数和函数调用时传递的参数拼接
//         context = this instanceof Fn ? this : context || this;
//         return self.apply(context, res);
//     }
//     //原型链
//     bound.prototype = new Fn();
//     return bound;
// }



Function.prototype.bind = function (content) {

    let  self = this
    let args=[...arguments].slice(1)

    function fn() {}
    fn.prototype = this.prototype

    let bound = function () {
        let res =[...args,...arguments]
        return self.apply(content,res)
    }
    bound.prototype = new fn()
    return bound
}


var bindFoo = bar.bind(obj, 'daisy');
bindFoo()


// Function.prototype.apply = function (context, rest) {
//     if (!context) {
//         //context为null或者是undefined时,设置默认值；这是一种惯用的检查，以查看脚本是否正在Web浏览器内的网页中运行。
//         context = typeof window === 'undefined' ? global : window;
//     }
//     context.fn = this;
//     let result;
//     if(rest === undefined || rest === null) {
//         //undefined 或者 是 null 不是 Iterator 对象，不能被 ...
//         result = context.fn(rest);
//     }else if(typeof rest === 'object') {
//         result = context.fn(...rest);
//     }
//     delete context.fn;
//     return result;
// }


// Function.prototype.call2 = function (context) {
//     if (!context) {
//         context = typeof window === 'undefined' ? global : window;
//     }
//     context.fn = this;
//
//     let rest = [...arguments].slice(1);// 空数组slice后返回的仍然是空数组
//
//     let result = context.fn(...rest);
//     delete context.fn;
//     return result;
// }
//
// // 测试
//
// bar.call2(obj, 'kevin', 18)
