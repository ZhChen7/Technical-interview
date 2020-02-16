// index.js 是我们项目的JS的入口文件

//1.导入 Jquery
// import *** from *** 是 ES6 中导入模块的方式
//由于 ES6 语法太高级了，浏览器解析不了，所以，执行会报错
import $ from 'jquery'

$(function () {
    $('li:odd').css({
        'background':'red'
    })
    $('li:even').css({
        'background':function () {
            return '#'+'D97634'
        }
    })
})
