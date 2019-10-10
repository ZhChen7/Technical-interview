
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
console.log()


Array.from(new Set(arr.toString().split(','))).sort((a,b)=>{return a-b}).map(Number)

