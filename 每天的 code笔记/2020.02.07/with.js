var obj = {
    name: '张三',
    age: 20,
    getAddress: function () {
        console.log('beijing')
    }
}

// 使用 with
function fn1() {
    with (obj) {
        console.log(name)
        console.log(age)
        getAddress()
    }
}
fn1()
