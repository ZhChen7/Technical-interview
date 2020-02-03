// console.log(Object.prototype.toString.call([1,2,3,4]))
// let isType = type => obj => {
//     return Object.prototype.toString.call( obj ) === '[object ' + type + ']';
// }
//
//
// let isType=function (type) {
//     return function (obj) {
//         return Object.prototype.toString.call( obj ) === '[object ' + type + ']';
//     }
// }


function add() {
    console.log(arguments)
    var args=Array.prototype.slice.call(arguments)

    var fn = function () {
        var arg_fn=Array.prototype.slice.call(arguments)
        return add.apply(null,args.concat(arg_fn))
    }

    fn.valueOf =function () {
        return args.reduce((a,b)=>{
            return a+b
        })
    }
    return fn
}

add(1)(2)






// function add () {
//     console.log('进入add');
//     var args = Array.prototype.slice.call(arguments);
//
//     var fn = function () {
//         var arg_fn = Array.prototype.slice.call(arguments);
//         console.log('调用fn');
//         return add.apply(null, args.concat(arg_fn));
//     }
//
//     fn.valueOf = function () {
//         console.log('调用valueOf');
//         return args.reduce(function(a, b) {
//             return a + b;
//         })
//     }
//
//     return fn;
// }