let arr=[1,2,3,4,3,2,1]
const p=arr.reduce((a,b)=>{
    return a^b
})
console.log(p)