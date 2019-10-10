const typeCheck = (obj) => {
    const typeStr = Object.prototype.toString.call(obj);
    console.log(typeStr)
    return typeStr.toLowerCase().slice(8, typeStr.length - 1);
};

console.log(typeCheck("str"));
console.log(typeCheck(1));
console.log(typeCheck(() => null));
console.log(typeCheck({a: 1}));
console.log(typeCheck([1, 2, 3]));
console.log(typeCheck(new Set([1,2,3])));
