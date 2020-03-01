// const currying = function (fn,...args) {
//     if(args.length < fn.length){
//         return function () {
//             return currying(fn, ...args, ...arguments)
//         }
//     }else{
//         return fn(...args)
//     }
// }

// const currying =(fn,...args)=>
//     args.length < fn.length?(...argments)=> currying(fn,...args,...argments):fn(...args)
//
//

function currying(fn,...args) {
    if(args.length < fn.length){
        return function () {
            return currying(fn,...args,...arguments)
        }
    }else{
        return fn(...args)
    }
}

function sumFn(a, b, c) {
    return a + b + c;
}

var sum = currying(sumFn);

console.log(sum(2)(3)(5));//10
console.log(sum(2, 3, 5));//10
console.log(sum(2)(3, 5));//10
console.log(sum(2, 3)(5));//10


