Function.prototype.myCall = function (context = window) {
    context.fn = this;

    var args = [...arguments].slice(1);

    var result = context.fn(...args);
    // 执行完后干掉
    delete context.fn;
    return result;
}

function a() {
    console.log(this.b)
}

var obj={
    b:'zc'
}

a.myCall(obj)