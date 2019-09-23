function changeStr(str){
    if(str.split('_').length==1)return;
    console.log(str)
    str.split('_').reduce((a,b)=>{
        console.log(b)
        return a+b.substr(0,1).toUpperCase() + b.substr(1)
    })
}

let a=changeStr('ac_def')
console.log(a)
