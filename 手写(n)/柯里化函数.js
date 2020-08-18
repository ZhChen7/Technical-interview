// function curring(fn, ...args) {
//   if (args.length < fn.length) {
//     return function () {
//       return curring(fn, ...args, ...arguments)
//     }
//   } else {
//     return fn(...args)
//   }
// }


// function currying(fn, ...args) {
//   if (args.length < fn.length) {
//     return function () {
//       return curring(fn, ...args, ...arguments)
//     }
//   } else {
//     return fn(...args)
//   }
// }


function currying(fn, ...args) {
  if (args.length < fn.length) {
    return function () {
      return currying(fn, ...arg, ...arguments)
    }
  } else {
    return fn(...arg)
  }
}