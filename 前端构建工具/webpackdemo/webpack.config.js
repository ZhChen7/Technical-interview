const path = require('path')
const webpack = require('webpack')


module.exports = {
   mode:"production",
    devServer: { //这是配置  dev-server 命令参数的第二种形式，相对来说，麻烦一点。
        open: true,//自动打开浏览器
        port: 3000,//设置启动时候的运行端口
        contentBase: 'src',
        hot: true //启用热更新 第1步
    }
}
