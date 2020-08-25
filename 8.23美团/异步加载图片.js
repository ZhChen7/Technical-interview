const asyncImg = (url) => {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = function () {
            resolve(img)
        }

        img.onerror = function (e) {
            reject(new Error('could not load imgs'))
        }

        img.src = url
    });
}