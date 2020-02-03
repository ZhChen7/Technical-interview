function test2(){
    console.log(a)  //输出2,假设JS是动态作用域，那么这里会输出3，但事实告诉我们显然不是
}
function test1(){
    var a=3;
    test2();
}
var a=2;
test1();
