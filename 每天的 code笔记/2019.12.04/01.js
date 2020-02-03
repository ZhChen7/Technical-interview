function fun1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}


fun1().then(()=>{
    console.log('10')
    return fun1()
}).then(()=>{
    console.log('20')
    return fun1()
}).then(()=>{
    console.log('30')
    return fun1()
}).then(()=>{
    console.log('40')
    return fun1()
}).then(()=>{
    console.log('50')
    return fun1()
})
