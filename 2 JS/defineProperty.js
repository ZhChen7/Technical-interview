let a = 1
let bValue = 'zhouchen1111'
let obj = {

}


Object.defineProperty(obj, 'a', {
    get() {
        return bValue;
    },
    set(newValue) {
        bValue = newValue;
    },
    enumerable : true,
    configurable : true
})



console.log(obj.a)