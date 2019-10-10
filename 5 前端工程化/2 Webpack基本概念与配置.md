> ## 2019/10/10

**题目：**  2、Webpack基本概念与配置

**解析：**  [webpack官方文档](https://webpack.docschina.org/concepts/) 

## 一. 什么是webpack

`webpack`可以看做是 模块打包工具：它将各种静态资源（比如：`JavaScript` 文件，图片文件，样式文件等）视为模块，它能够对这些模块进行解析优化和转换等操作，最后将它们打包在一起，打包后的文件可用于在浏览器中使用。



## 二. 为什么使用webpack

`webpack`通过`loader`将这些`JavaScript`程序和依赖包都转换成`JavaScript` 模块，这样通过`webpack`我们就把一个项目中的复杂程序细化为了各种具有依赖关系的模块，从而使我们的项目管理起来更加方便。



### `webpack`优势

`webpack`能替代部分 `grunt/gulp` 的工作，比如打包、压缩混淆、图片转`base64`等，而且还具有以下几点优势：

- `webpack` 是以 `commonJS` 的形式来书写脚本的，但对 `AMD/CMD` 的支持也很全面，方便旧项目进行代码迁移
- 能被模块化的不仅仅是 `JS` 了
- 扩展性强，具有强大的插件（`Plugin`）接口，使用起来比较灵活，特别是支持热插拔的功能很实用
- 可以将代码切割成不同的块（`chunk`），每个块包含一个或多个模块，块可以按需被异步加载，降低了初始化时间
- ......





## 三. 基本概念

在正式讲解怎么使用`webpack`之前，你需要先理解四个核心概念：

- 入口(entry)
- 输出(output)
- loader
- 插件(plugins)

本篇做为一个开门篇，先讲解前两个核心概念：入口(entry)和输出(output)。

### 3.1 入口(entry)

入口起点(entry point)指示 `webpack` 应该使用哪个模块做为入口文件，来作为构建其内部依赖图的开始。进去入口起点后，`webpack` 会找出有哪些模块和库是入口起点（直接和间接）依赖的，每个依赖项随即被处理，最后输出到称之为 `bundles` 的文件中。

### 3.2 出口(output)

`output` 属性告诉 `webpack` 在哪里输出它所创建的 `bundles`，以及如何命名这些文件，这些都可以在`webpack`的配置文件中指定，后面的案例会给大家介绍怎么去配置。

### 3.3 loader

[查看原文](https://webpack.js.org/concepts/loaders/)

loader 用于对模块的源代码进行转换。loader 可以使你在 `import` 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 `import` CSS文件！

### 3.4 插件(plugin)

[查看原文](https://webpack.js.org/concepts/plugins/)https://github.com/docschina/webpack.js.org/edit/cn/src/content/concepts/plugins.md)

**插件**是 webpack 的 [支柱](https://github.com/webpack/tapable) 功能。webpack 自身也是构建于，你在 webpack 配置中用到的**相同的插件系统**之上！

插件目的在于解决 [loader](https://webpack.docschina.org/concepts/loaders) 无法实现的**其他事**。



### 4.7 使用配置文件

我们新建一个`webpack`配置文件：`webpack.config.js`:

~~~js
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};
~~~

**注意：**

> `webpack.config.js`是`webpack`默认的配置文件名，如果我们的配置文件不叫这个名字时，我们需要借助一个 `--config` 参数来实现打包（`--config` 参数来指定去找哪个配置文件）：

```js
webpack --config `webpack.filename.js`
```