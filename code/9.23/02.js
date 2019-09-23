//
// function caseConvert(str){
//     return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
//         console.log(m)        return `${s1.toUpperCase()}${s2.toLowerCase()}`
//     })
// }
// console.log(caseConvert('aFasdfsaFD'))
//

let str = 'aBcDeFgH'
let arr = []
for(let item of str) {
    if (item === item.toUpperCase()) {
        item = item.toLowerCase()
    } else {
        item = item.toUpperCase()
    }
    arr.push(item)
}
let newStr = arr.join('')
console.log(newStr)
