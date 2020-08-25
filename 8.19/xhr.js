function getXHR(url, methods, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(methods, url, true)
        xhr.send(data)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText())
            } else {
                reject(xhr.status)
            }
        }

    })
}