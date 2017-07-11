/**
 * Created by 96004 on 2017/7/11.
 */
//webpack 是基于commonjs规范的
let path=require('path');//resolve,join
module.exports = {
    entry: './src/main.js',//填写相对路径,入口
    output: {
        filename: 'bundle.js',//打包后输出文件的名字
        path: path.resolve('./dist') //输出的路径,必须是绝对路径
    }
}