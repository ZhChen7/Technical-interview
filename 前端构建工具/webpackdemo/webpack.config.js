const path = require('path')
const webpack = require('webpack')


module.exports = {
   mode:"production",
    devServer: { //这是配置  dev-server 命令参数的第二种形式，相对来说，麻烦一点。
        open: true,//自动打开浏览器
        port: 3000,//设置启动时候的运行端口
        contentBase: 'src',
        hot: true //启用热更新 第1步
    },
    plugins: [ //配置插件的节点
        new webpack.HotModuleReplacementPlugin() // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
    ]
}
