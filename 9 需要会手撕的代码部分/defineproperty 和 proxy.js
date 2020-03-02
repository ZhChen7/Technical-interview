
let data={
    name:'zc',
    age:'123'
}

// for (let key in data){
//     if(data.hasOwnProperty(key)){
//         Object.defineProperty(vm,key,{
//             get:function () {
//                 return data[key]
//             },
//             set:function (newvalue) {
//                 console.log('改变了')
//                 data[key] = newvalue
//             }
//         })
//     }
// }

let vm = new Proxy(data,{
    get: function (target, propKey, receiver) {
        console.log(`getting ${propKey}!`);
        return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
        console.log(`setting ${propKey}!`);
        return Reflect.set(target, propKey, value, receiver);
    }
})


data.name='1232131'
console.log(vm.name)



