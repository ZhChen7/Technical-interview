const fs = require('fs')
const path = require('path');

const readfile = function (filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, filename), 'utf8', function (error, data) {
            if (error) return reject(error)
            resolve(data)
        })
    })
}
function* gen() {
    yield readfile('./01.txt')
    yield readfile('./02.txt')
    yield readfile('./03.txt')
}
const result = gen()

result.next().value.then(value=>{
    console.log(value)
    return result.next().value
}).then(value => {
    console.log(value)
    return result.next().value
}).then(value => {
    console.log(value)
}).catch(reason => {
    console.log(reason)
})
