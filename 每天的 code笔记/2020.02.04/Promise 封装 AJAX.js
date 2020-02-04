function Ajax(method,url,data) {
    let xhr = new XMLHttpRequest()
    xhr.open(method,url)
    return new Promise((resolve, reject) => {
        if(xhr.readystate === 4 &&xhr.status === 200){
            resolve(xhr.responseText)
        }else{
            reject(xhr.status)
        }
    })

    xhr.send(data)
}
var p = Ajax('GET','/api/xxxx')
p.then(value => {
    console.log(value)
}).catch(reason=>{
    console.log('error'+reason)
})
