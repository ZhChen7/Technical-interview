// 如何快速让一个数组乱序，写出来

var arr= [1,2,3,4,5]
arr.sort(()=> Math.random()>0.5?1:-1)
console.log(arr);// 乱序
