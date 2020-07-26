const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
copy.a = 2
console.log(obj)
console.log(copy)