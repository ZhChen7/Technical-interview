> ## 2019/10/08

**题目** ：1、let、const和var的概念与区别 ？

**解析** ：

![mark](http://static.zxinc520.com/blog/20190926/0imlOVJDQTTd.png?imageslim)

1. let/const 定义的变量不会出现变量提升，而 var 定义的变量会提升。
2. 相同作用域中，let 和 const 不允许重复声明，var 允许重复声明。
3. cosnt 声明变量时必须设置初始值
4. const 声明一个只读的常量，这个常量不可改变
5. let/const 声明的变量仅在块级作用域中有效。而 var 声明的变量在块级作用域外仍能访问到。
6. 顶层作用域中 var 声明的变量挂在window上(浏览器环境)
7. let/const有暂时性死区的问题，即let/const 声明的变量，在定义之前都是不可用的。如果使用会抛出错误。

