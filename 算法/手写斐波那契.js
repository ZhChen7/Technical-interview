// function getnum(num) {
//     if(num<=1) return 1
//     return getnum(num-1)+getnum(num-2)
// }

console.log(getnum(2))

function getnum(n) {
  let temp=[]
    if(n==1||n==2){
        return 1
    }else{
        temp[1]=1
        temp[2]=2
        for (let i = 3; i <n ; i++) {
            temp[i] = temp[i-1] + temp[i-2]
        }
        return temp[i-1]
    }
}

