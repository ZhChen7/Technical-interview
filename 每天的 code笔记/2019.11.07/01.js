//如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。
/*
*
    'a'.charCodeAt()
    97
    'A'.charCodeAt()
    65
    'z'.charCodeAt()
    122
    'Z'.charCodeAt()
90
* */

function Getstr(str) {
    return str.split('').map(item => {
        return item === item.toUpperCase()? item.toLowerCase():item.toUpperCase()
    }).join('')
}

console.log(Getstr('AbCa'))
// // console.log('a'.charCodeAt())



// function processString (s) {
//     var arr = s.split('');
//     var new_arr = arr.map((item) => {
//         return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
// });
//     return new_arr.join('');
// }
// console.log(processString('AbC'));