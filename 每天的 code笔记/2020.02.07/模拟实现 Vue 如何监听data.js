/*
模拟实现 Vue 如何监听data
let vm = new Vue({
    el:'app',
    data:{
        name:'zc',
        age:'12'
    }
})
 */


let vm={}
let data={
    name:'zc',
    age:'12'
}
for(let key in data){
    if(data.hasOwnProperty(key)){
        Object.defineProperty(vm,key,{
            get:function () {
                console.log(key+'--vm')
                return data[key]
            },
            set:function (newValue) {
                console.log(newValue+'-----vm')
                data[key] = newValue
            }
        })
    }
}

console.log(data.name)
data.name='wyp'
console.log(vm.name)
vm.age = '20'
console.log(vm.age)
