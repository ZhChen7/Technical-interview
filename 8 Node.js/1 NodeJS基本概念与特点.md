> ## 2019/10/10

**题目：** 1、NodeJS基本概念与特点 ？

**解析** ： **[【全文】狼叔：如何正确的学习Node.js](https://cnodejs.org/topic/5ab3166be7b166bb7b9eccf7)**

## Node.js简介

Node.js 不是一门语言也不是框架，它只是基于 Google V8 引擎的 JavaScript 运行时环境，同时结合 Libuv 扩展了 JavaScript 功能，使之支持 io、fs 等只有语言才有的特性，使得 JavaScript 能够同时具有 DOM 操作(浏览器)和 I/O、文件读写、操作数据库(服务器端)等能力，是目前最简单的全栈式语言。

早在2007年，Jeff Atwood 就提出了著名的 `Atwood定律`

> 任何能够用 JavaScript 实现的应用系统，最终都必将用 JavaScript 实现



## 什么是Node.js？

按照 [Node.js官方网站主页](https://nodejs.org/en/) 的说法:

```txt
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
```

从这段介绍来看，解读要点如下

- Node.js 不是 JavaScript 应用，不是语言（JavaScript 是语言），不是像 Rails(Ruby)、 Laravel(PHP) 或 Django(Python) 一样的框架，也不是像 Nginx 一样的 Web 服务器。Node.js 是 JavaScript 运行时环境
- 构建在 Chrome’s V8 这个著名的 JavaScript 引擎之上，Chrome V8 引擎以 C/C++ 为主，相当于使用JavaScript 写法，转成 C/C++ 调用，大大的降低了学习成本
- 事件驱动（event-driven），非阻塞 I/O 模型（non-blocking I/O model），简单点讲就是每个函数都是异步的，最后由 Libuv 这个 C/C++ 编写的事件循环处理库来处理这些 I/O 操作，隐藏了非阻塞 I/O 的具体细节，简化并发编程模型，让你可以轻松的编写高性能的Web应用，所以它是轻量（lightweight）且高效（efficient）的
- 使用 `npm` 作为包管理器，目前 `npm` 是开源库里包管理最大的生态，功能强大，截止到2017年12月，模块数量超过 60 万+

大多数人都认为 Node.js 只能写网站后台或者前端工具，这其实是不全面的，Node.js的目标是让并发编程更简单，主要应用在以网络编程为主的 I/O 密集型应用。它是开源的，跨平台，并且高效（尤其是I/O处理），包括IBM、Microsoft、Yahoo、SAP、PayPal、沃尔玛及GoDaddy都是 Node.js 的用户。



### node.js的三大特点  

> 估计我们看的最多关于Node.js特性的词是**单线程**、**异步无阻塞**、**事件驱动**。本文通过这几个特征词汇深入聊聊Node.js的特性。
>
> [Node.js之深入理解特性](https://segmentfault.com/a/1190000008961775)

- 单线程
- 异步无阻塞I/O   non-blocking I/O
- 事件驱动 event-driven