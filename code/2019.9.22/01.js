// let mySet =new Set()
// console.log(mySet)
// mySet.add(1)
// mySet.add("some text")
// mySet.add({a: 1, b: 2})
// console.log(mySet)
//
// console.log(mySet.has(1))
// console.log(mySet.has(3))
// console.log(mySet.has(5))
// console.log(mySet.size)
// console.log(mySet.keys())
// console.log(mySet.values())
// console.log(mySet.entries())


// for (let item of mySet) console.log(item)

// var string1 = "123123213";
//
// for (let i in string1){
//     console.log(string1[i])
// }


const set = new Set([
    ['foo', 1],
    ['bar', 2]
]);

console.log(set)

const m1 = new Map(set);
console.log(m1)
m1.get('foo') // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
m3.get('baz') // 3










