var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a) //{ n: 2 }
console.log(b) //{ n: 1, x: { n: 2 } }
