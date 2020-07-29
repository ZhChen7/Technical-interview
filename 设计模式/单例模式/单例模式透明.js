// let getInstance = (function () {
//     let instance = null
//     return function (name) {
//         if (!instance){
//             this.name = name
//             return instance=this
//         }
//         return instance
//     }
// })()

// let a= new getInstance('aa')
// let b= new getInstance('bbbb')
// console.log(a)
// console.log(b)


// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
// }

function Person(name) {
    this.name = name
}

const Singleton = (function () {
    let instance
    return function (name) {
        return instance || (instance = new Person(name))
    }
})()


// 获取对象1
let a = new Singleton('a')
let b = new Singleton('b')
console.info(a === b) // true