/*
const value = '112'
const fn = (value) => {
...
}
fn(value) // 输出 [1， 11， 112]
 */

const value = '112'
const fn = (value) => {
    let arr=[]
    for (var i = 0; i < value.length; i++) {
       arr.push(value.slice(0,i+1))
    }

   return arr.map(Number)
}
// 输出 [1， 11， 112]

console.log(fn(value) )