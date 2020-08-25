let obj = {
    name: 'zc',
    age: 19
}

let vm = {}


for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        Object.defineProperty(vm, key, {
            get: function () {
                return obj[key]
            },
            set: function (newVlaue) {
                obj[key] = newVlaue
            }
        })
    }
}











