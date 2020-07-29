// let vm = {}
// let data = {
//     name: 'zc',
//     age: '12'
// }


// for (const key in data) {
//     if (data.hasOwnProperty(key)) {
//         Object.defineProperty(vm, key, {
//             get: function () {
//                 return data[key]
//             },
//             set: function (newValue) {
//                 data[key] = newValue
//             }
//         })

//     }
// }




// for (let key in data) {
//     if (data.hasOwnProperty(key)) {
//         Object.defineProperty(vm, key, {
//             get: function () {
//                 return data[key]
//             },
//             set: function (newValue) {
//                 data[key] = newValue
//             }
//         })
//     }
// }


// // let vm = new Proxy(data,{
// //     get: function (target, propKey, receiver) {
// //         console.log(`getting ${propKey}!`);
// //         return Reflect.get(target, propKey, receiver);
// //     },
// //     set: function (target, propKey, value, receiver) {
// //         console.log(`setting ${propKey}!`);
// //         return Reflect.set(target, propKey, value, receiver);
// //     }
// // })


// data.name='1232131'
// console.log(vm.name)





let vm = {}
let data = {
    name: 'zc',
    age: 132
}

for (let key in data) {
    if (data.hasOwnProperty(key)) {
        Object.defineProperties(vm, key, {
            get: function () {
                return data[key]
            },
            set: function (newValue) {
                data[key] = newValue
            }
        })
    }
}