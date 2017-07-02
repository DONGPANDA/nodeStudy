/**
 * Created by 96004 on 2017/7/2.
 */
//第三方模块需要下载 引用直接写模块名字,当前目录上没有就回去上级查找,找到根盘符位置,没有就报错,一般都是当前文件夹下 module.paths 查找顺序
let str=require('my-pack-d');
console.log(str);
console.log(module.paths);