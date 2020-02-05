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
async function gen() {
    try{
        const f1=await readfile('./01.txt')
        const f2=await readfile('./02.txt')
        const f3 = await readfile('./03.txt')
        console.log(f1)
        console.log(f2)
        console.log(f3)
    }catch (e) {
        console.log(e)
    }
}
gen()






