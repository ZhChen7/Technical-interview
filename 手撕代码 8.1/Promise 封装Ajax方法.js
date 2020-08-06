function getAjax(url, methods, callback) {
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest()
        xhr.open(methods, url, 'true');
        xhr.send()

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 4) {
                resolve(callback(xhr.responseText))
            } else {
                reject(xhr.status)
            }
        }


    })

}