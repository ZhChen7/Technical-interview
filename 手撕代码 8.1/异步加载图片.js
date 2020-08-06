function loadImg(url) {
    return new Promise((resolve, reject) => {
        let img = new Image()

        img.onload = function () {
            resolve(img)
        }

        img.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        }

        img.src = url

    })
}