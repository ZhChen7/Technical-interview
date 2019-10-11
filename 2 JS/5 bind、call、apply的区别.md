> ## 2019/10/11

**题目：**  bind、call、apply的区别？

**解析：** 

三者都是用于改变函数体内this的指向，但是bind与apply和call的最大的区别是：bind不会立即调用，而是返回一个新函数，称为绑定函数，其内的this指向为创建它时传入bind的第一个参数，而传入bind的第二个及以后的参数作为原函数的参数来调用原函数。

```js
var obj = {};

function test() {
    console.log(this === obj);
}

test(); //false

var testObj = test.bind(obj);
testObj();  //true
```

　　apply和call都是为了改变某个函数运行时的上下文而存在的（就是为了改变函数内部this的指向）；apply和call的调用返回函数执行结果；

　　如果使用apply或call方法，那么this指向他们的第一个参数，apply的第二个参数是一个参数数组，call的第二个及其以后的参数都是数组里面的元素，就是说要全部列举出来；

以下是MDN文档：

```txt
bind语法：

func.bind(thisArg[, arg1[, arg2[, ...]]])
thisArg 当绑定函数被调用时，该参数会作为原函数运行时的this指向。当使用new 操作符调用绑定函数时，该参数无效。
arg1, arg2, ... 当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。
```



```txt
call语法：

fun.call(thisArg, arg1, arg2, ...)
thisArg:：在fun函数运行时指定的this值。需要注意的是，指定的this值并不一定是该函数执行时真正的this值，如果这个函数处于非严格模式下，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象。
arg1, arg2, ... 指定的参数列表。
```

```txt
apply语法：

fun.apply(thisArg, [argsArray])
thisArg： 在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。
argsArray: 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为null 或 undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。
```

**区别总结：**

当我们使用一个函数需要改变this指向的时候才会用到`call,apply,bind`
如果你要传递的参数不多，则可以使用`fn.call(thisObj, arg1, arg2 ...)`
如果你要传递的参数很多，则可以用数组将参数整理好调用`fn.apply(thisObj, [arg1, arg2 ...])`
如果你想生成一个新的函数长期绑定某个函数给某个对象使用，则可以使用

~~~js
const newFn = fn.bind(thisObj);
newFn(arg1, arg2...)
~~~





## 2、bind、call、apply的实现

### myBind:

```js
Function.prototype.myBind = function() {
    var _this = this;
    var context = [].shift.call(arguments);// 保存需要绑定的this上下文
    var args = [].slice.call(arguments); //剩下参数转为数组
    console.log(_this, context, args);
    return function() {
        return _this.apply(context, [].concat.call(args, [].slice.call(arguments)));
    }
};
```

### myCall:

```js
/**
 * 每个函数都可以调用call方法，来改变当前这个函数执行的this关键字，并且支持传入参数
 */
Function.prototype.myCall = function(context) {
    //第一个参数为调用call方法的函数中的this指向
    var context = context || global;
    //将this赋给context的fn属性
    context.fn = this;//此处this是指调用myCall的function

    var arr = [];
    for (var i=0,len=arguments.length;i<len;i++) {
        arr.push("arguments[" + i + "]");
    }
    //执行这个函数，并返回结果
    var result = eval("context.fn(" + arr.toString() + ")");
    //将this指向销毁
    delete context.fn;
    return result;
}
```

### myApply:

```js
/**
 * apply函数传入的是this指向和参数数组
 */
Function.prototype.myApply = function(context, arr) {
    var context = context || global;
    context.fn = this;
    var result;
    if (!arr) {
        result = context.fn(); //直接执行
    } else {
        var args = [];
        for (var i=0,len=arr.length;i<len;i++) {
            args.push("arr[" + i + "]");
        }
        result = eval("context.fn([" + args.toString() + "])");
    }
    //将this指向销毁
    delete context.fn;
    return result;
}
```

　　以上是bind、apply、和call的模拟实现

> 注意：绑定函数(bind函数返回的新函数)不可以再通过apply和call改变其this指向，即当绑定函数调用apply和call改变其this指向时，并不能达到预期效果。

~~~js
var obj = {};

function test() {
    console.log(this === obj);
}

var testObj = test.bind(obj);
testObj();  //true

var objTest = {
    "作者": "chengbo"
};
/**
 * 预期返回false, 但是testObj是个绑定函数，所以不能改变其this指向
 */
testObj.apply(objTest); //true
testObj.call(objTest); //true
~~~

