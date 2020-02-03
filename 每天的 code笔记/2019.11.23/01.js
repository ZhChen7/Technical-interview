function Getarr(num,target) {
    var pre=0, cur=num.length-1
    if(num.length<2){
        return '至少提供2个数字'
    }
    while(pre<cur){
        result= num[pre] + num[cur]
        if (result>target){
            cur--
        }else if(result<target){
            pre++
        }else{
            return [pre,cur]
        }
    }
}

console.log(Getarr( [1],22))

