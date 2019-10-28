// var json = '{"name":"小姐姐", "age":20}';
// var obj = eval("(" + json + ")");  // obj 就是 json 反序列化之后得到的对象
// console.log(obj)


var json = '{"name":"小姐姐", "age":20}';
var obj = (new Function('return ' + json))();

console.log(obj)