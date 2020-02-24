
// let a={
//     [Symbol.toPrimitive]:(function (hint) {
//         let i =1
//         return function () {
//             return i++
//         }
//     })()
// }

// let a ={
//     valueOf:(function () {
//         let i=1
//         return function () {
//             return i++
//         }
//     })()
// }

// let a ={
//     toString:(function () {
//         let i=1
//         return function () {
//             return i++
//         }
//     })()
// }

// let i=1
// Object.defineProperty(global,'a',{
//     get:function () {
//         return i++
//     }
// })


// let a =new Proxy({},{
//    i:1,
//    get:function () {
//        return ()=> this.i++
//
//    }
// })

let a= [1,2,3]
a.join = a.shift

if(a==1&&a==2&&a==3){
  console.log('hello world!')
}
