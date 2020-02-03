//
//
// // let a=1
//
// // let a={
// //     toString:(function (hint) {
// //         let i=1
// //         return function () {
// //             return i++
// //         }
// //     })()
// // }
// //
// // console.log(a == 1 && a == 2 && a == 3); //true
//
//
// let a = {
//     reg: /\d/g,
//     valueOf () {
//         return this.reg.exec(123)[0]
//     }
// }
// console.log(a == 1 && a == 2 && a == 3); //true


// let a= {
//     [Symbol.toPrimitive]:(function (hint) {
//         let i=1
//         return function () {
//             return i++
//         }
//     })()
// }
let i=1
Object.defineProperty(window,'a',{
    get: function () {
        return i++
    }
})

console.log(a == 1 && a == 2 && a == 3); //true
