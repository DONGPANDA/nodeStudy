/**
 * Created by 96004 on 2017/7/11.
 */
//webpack 是基于commonjs规范的
let path=require('path');//resolve,join
let HtmlWebpackPlugin=require('html-webpack-plugin')
//HtmlWebpackPlugin是一个类
module.exports = {
    entry: './src/main.js',//填写相对路径,入口
    output: {
        filename: 'bundle.js',//打包后输出文件的名字
        path: path.resolve('./dist') //输出的路径,必须是绝对路径
    },
    //改变es5代码
    //使用babel babel-core babel-loader
    module: {
        rules: [
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use: 'url-loader?limit=8192',//url-loader需要file-loader,limit 8k以下文件转化为base64
            }
        ]
    },
    plugins: [//可以放很多插件
        new HtmlWebpackPlugin({
            template: './src/index.html'//会自动将此html引入打包后的文件,导出到dist目录下
        })
    ]
}