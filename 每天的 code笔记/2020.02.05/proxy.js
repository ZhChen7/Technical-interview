let obj = {
    a: 1,
    b: 2,
}
const p = new Proxy(obj, {
    get(target, key, receiver) {
        if (key === 'c') {
            return  receiver;
        } else {
            return target[key];
        }
    },
    set(target, key, value,receiver) {
        if (value === 4) {
            target[key] = '我是自定义的一个结果';
        } else {
            target[key] = value;
        }
    }
})

console.log(p.c)
