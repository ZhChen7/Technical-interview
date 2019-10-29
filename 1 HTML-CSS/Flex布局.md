

> ## 2019/10/28

**题目：**14、Flex布局

**解析：** 

2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

Flex 布局将成为未来布局的首选方案。

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。



#### 三、容器的属性

以下6个属性设置在容器上。

- flex-direction
- flex-wrap
- flex-flow 
- justify-content
- align-items
- align-content



#### flex-direction

- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。



#### flex-wrap属性

1. `nowrap`（默认）：不换行。
2. `wrap`：换行，第一行在上方。
3. `wrap-reverse`：换行，第一行在下方。

~~~css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
~~~





#### flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

~~~css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
~~~



#### justify-content属性

~~~css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
~~~

- `flex-start`（默认值）：左对齐
- `flex-end`：右对齐
- `center`： 居中
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。



#### align-items属性

~~~css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
~~~

- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。



#### align-content属性

~~~css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
~~~

- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- `stretch`（默认值）：轴线占满整个交叉轴。



