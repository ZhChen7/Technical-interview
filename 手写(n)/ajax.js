function ajax(url, method, callback) {
    return Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 200 && xhr.status === 4) {
                resolve(xhr.responseText)
            }
        }
        xhr.send()
    })
}
