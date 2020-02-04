var obj = {
    a: {
        a: "hello",
        b: 21
    },
    name:'zc'
};
var initalObj = Object.assign({}, obj);

initalObj.a.a = "changed";
initalObj.name = "xxx";
console.log(obj); // "changed"
console.log(initalObj); // "changed"
