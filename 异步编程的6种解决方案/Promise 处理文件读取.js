const fs = require('fs')
const path = require('path');

const readfile = function (filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, filename), 'utf-8', function (error, data) {
            if (error) return reject(error)
            resolve(data)
        })
    })
}

readfile('./01.txt')
    .then(value => {
        console.log(value)
        return readfile('./02.txt')
    })
    .then(value => {
        console.log(value)
        return readfile('./03.txt')
    })
    .then(value => {
        console.log(value)
    }).catch(reason => {
    console.log(reason)
})
