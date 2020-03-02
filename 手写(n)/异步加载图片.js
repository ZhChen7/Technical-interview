function loadImg(url) {
    return new Promise((resolve, reject) => {
        let img = new Image()


        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(img)
        }

        img.url = url
    })

}
