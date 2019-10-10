> ## 2019/9/30

**题目** ：2、判断数据类型typeof、instanceof、Object.prototype.toString.call()、constructor 

我的解答：

**typeof** ：

- `typeof`运算符可以返回一个值的数据类型。

- typeof 运算符 **只能** 区分 **值类型** 的 类型，对于引用类型的 **对象**、**数组** **区分不出来** 。

- 可以判断 7 种类型：**undefined**、**string**、**number**、**boolean**、**object**、**function** 、**symbol**（ES6提供的新的类型）

- 注意：typeof **null** // object



**instanceof**：

- `instanceof`运算符返回一个**布尔值**，表示对象是否为某个构造函数的**实例**。
- **缺点**：`instanceof`运算符**只能用于对象**（纯对象和数组），不适用原始类型（Undefined、Null、Boolean、Number 和 String）的值。



**Object.prototype.toString.call()**： 

- 可以通过`Object.prototype.toString`方法准确判断某个对象值属于哪种内置类型。





**constructor** ： 

根据对象的constructor判断：constructor
console.log(d.constructor === Array)    //true
console.log(e.constructor === Date)        //true
console.log(f.constructor === Function)    //true
注意constructor在类继承时会出错

细节问题：

null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。
函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的constructor 引用会丢失，constructor 会默认为 Object

