> ## 2019/10/10

**题目：** 1、Canvas和SVG的区别 ？

**解析：** [SVG 与 HTML5 的 canvas 各有什么优点，哪个更有前途？](https://www.zhihu.com/question/19690014)



观点一：

Canvas是使用JavaScript程序绘图(动态生成)，SVG是使用XML文档描述来绘图。
     从这点来看：SVG更适合用来做动态交互，而且SVG绘图很容易编辑，只需要增加或移除相应的元素就可以了。
       同时SVG是基于矢量的，所有它能够很好的处理图形大小的改变。Canvas是基于位图的图像，它不能够改变大小，只能缩放显示；所以说Canvas更适合用来实现类似于Flash能做的事情(当然现在Canvas与Flash相比还有一些不够完善的地方)。
      关于最后一点二者谁更有前途：从上面我们可以知道二者是有不同用途的，作为一个开发者，你应该做的是理解应用程序的具体需求并选择正确的技术来实现它。



另一种：

> #### Canvas适用场景
>
> Canvas提供的功能更原始，适合像素处理，动态渲染和大数据量绘制
>
> #### SVG适用场景
>
> SVG功能更完善，适合静态图片展示，高保真文档查看和打印的应用场景

Canvas和SVG是HTML5中主要的2D图形技术，前者提供画布标签和绘制API，后者是一整套独立的矢量图形语言，成为W3C标准已经有十多年(2003.1至今)，总的来说，Canvas技术较新，从很小众发展到广泛接受，注重栅格图像处理，SVG则历史悠久，很早就成为国际标准，复杂，发展缓慢（Adobe SVG Viewer近十年没有大的更新）

![mark](https://pic3.zhimg.com/b00e22b6281710f76bb784fe13ff9243_r.jpg)

**Canvas vs SVG**

<canvas>和<svg>都是HTML5推荐使用的图形技术，Canvas基于像素，提供2D绘制函数，是一种HTML元素类型，依赖于HTML，只能通过脚本绘制图形；SVG为矢量，提供一系列图形元素（Rect, Path, Circle, Line …），还有完整的动画，事件机制，本身就能独立使用，也可以嵌入到HTML中，SVG很早就成为了国际标准，目前的稳定版本是1.1 – [Scalable Vector Graphics (SVG) 1.1 (Second Edition)](https://link.zhihu.com/?target=http%3A//www.w3.org/TR/SVG/)，两者的主要特点见下面的表格：



![mark](https://pic1.zhimg.com/80/7cc17f3b9ce5f0d879fdfa2be9a54ca0_hd.jpg)

### SVG与Canvas主要特点

根据两者的不同特点，Canvas和SVG有各自的适用范围

#### Canvas适用场景

Canvas提供的功能更原始，适合像素处理，动态渲染和大数据量绘制

#### SVG适用场景

SVG功能更完善，适合静态图片展示，高保真文档查看和打印的应用场景

![mark](https://pic4.zhimg.com/80/9b0e2025971c2ee23154f7331ac59426_hd.jpg)

