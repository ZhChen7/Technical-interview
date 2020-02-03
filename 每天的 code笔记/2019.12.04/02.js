function fun1() {
    return new Promise(resolve,reject) =>{
        setTimeout(()=>{
            resolve()
        })
    }
}


fun1().then(()=>{
    ccc
})

