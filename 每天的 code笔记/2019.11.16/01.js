let data = {
    list: []
}

Object.keys(data).forEach(function (key) {
    let value = data[key];
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            return value;
        },
        set(newValue) {
            console.log(`Setting`);
            value = newValue;
            return true;
        }
    })
})

data.list.push(1);                 //--->  A
// data.list = [1, 2, 3];                //--->  B
console.log(data.list);