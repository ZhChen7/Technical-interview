let vm = {}
let obj = {
    name: 'zc',
    age: '123'
}

for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        Object.defineProperty(vm, key, {
            get: function () {
                return obj[key]
            },
            set: function (newvalue) {
                obj[key] = newvalue
            }
        })
    }
}

obj.age ='111'
vm.age ='112221'

console.log(vm.age)
console.log(obj.age)




