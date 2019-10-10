// String.prototype.reverse = function () {
//     return this.split('').reverse().join('')
// }
//
// String.prototype.removeFirstChar = function (m) {
//     return this.replace(m, '')
// }
//
// const string = 'emamam, your string'
// const removedChar = 'm'
// string.reverse().removeFirstChar(removedChar).reverse()



// function GetLaststr(s,target) {
//     if (typeof s!= 'string') return false
//     let index = s.lastIndexOf(target);
//     return s.substring(0,index ) + s.substring(index+1,s.length);
// }

function delLast(str, target) {
    return str.split('').reverse().join('').replace(target, '').split('').reverse().join('');
}

console.log(delLast('emamam, your string','m'))

let str='12331231231'
console.log(str.replace(1,9))
