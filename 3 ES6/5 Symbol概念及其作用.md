> ## 2019/10/30

**题目：** 5、Symbol概念及其作用

**解析：**[Symbol 的作用](https://juejin.im/post/5ca762f3e51d4536da6c5624) 

### symbols 是什么？

symbols 是一种无法被重建的基本类型。这时 symbols 有点类似与对象创建的实例互相不相等的情况，但同时 symbols 又是一种无法被改变的基本类型数据。这里有一个例子：

~~~js
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false
~~~

当你初始化一个带有一个接收可选字符串参数的 symbols 时，我们可以来 debug 看下，除此之外看看它会否影响自身。

~~~js
const s1 = Symbol('debug');
const str = 'debug';
const s2 = Symbol('xxyy');
console.log(s1 === str); // false
console.log(s1 === s2); // false
console.log(s1); // Symbol(debug)
~~~



#### 作用：

- symbols 作为对象的属性
- 阻止对象属性名冲突 （扩展对象属性很有用）
- 模拟私有属性



