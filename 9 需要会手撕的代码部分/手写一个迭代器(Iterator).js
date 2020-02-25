var it = makeIterator(["a", "b"]);
console.log(it.next())
console.log(it.next())
console.log(it.next())

function makeIterator(array) {
    let nextindex=0
    return{
        next:function () {
            if(nextindex<array.length){
                return {value:array[nextindex++],done:false}
            }else{
                return {value: undefined,done: true}
            }
        }
    }
}

// let iterable = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3,
//     [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable) {
//     console.log(item); // 'a', 'b', 'c'
// }

