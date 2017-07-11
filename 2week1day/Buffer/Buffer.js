/**
 * Created by 96004 on 2017/7/8.
 */
//1.buffer 代表的是内存
//2.node为了操作二进制,生产出来的一个类型,buffer默认展示16进制,可以和字符串无条件转换
//2进制最大1 16进制最大f
//字符串在node中只支持utf-8格式 一个汉字有3个字节
//一个字节由八个位组成 一个汉字多少位 24 每个位都由二进制组成 1111111转10进制255 转16进制ff

//1)声明Buffer 固定大小
let ary=new Array(3)//[ , , ]
var buffer=new Buffer(100)//100字节,随机创建
//buffer.fill(0)都填充为0
//我们不关心里面原本什么样子,我们将内容写进去
//2)通过数组创建
let buffer1=new Buffer([0x16,17,18])//超出取模 258->02 -255->01,很少用
//3)字符串创建
let buffer2=new Buffer('阿牛');
console.log(buffer2.toString());//将buffer转为字符串

//copy concat
//let buf1=new Buffer('阿牛')
//let buf2=new Buffer('很色')
//console.log(buf1.length);//长度是字节的长度
let bBuf=new Buffer(12);
//targetBuffer目标buff,targetStart目标开始,sourceStart,源的开始,sourceEnd源的结束
//buf1.copy(bBuf);
//buf2.copy(bBuf,buf1.length)
console.log(bBuf.toString());

//slice数组的slice截取返回新数组,深拷贝,浅拷贝?
//浅拷贝:拷贝内存地址 slice,Object.assign()
//深拷贝:拷贝的是内容
//深拷贝: 递归循环/JSON但是不识别函数
var arr=[1,2,3];
var A=[arr,4,5];
var newArr=JSON.parse(JSON.stringify(A))
arr[0]=100;
console.log(newArr);//[ [ 1, 2, 3 ], 4, 5 ]

var buffer=new Buffer([1,2,3]);
var newB=buffer.slice(0,1);
newB[0]=100;
console.log(buffer);//<Buffer 64 02 03>
//buffer中存放的是内存地址[[],[],[]],可以将buffer看成二维数组
var buf1=new Buffer('阿牛');
var buf2=new Buffer('给我');
var buf3=new Buffer('发小');
var buf4=new Buffer('视频');

console.log(Buffer.concat([buf1, buf2, buf3, buf4],6).toString());
//Buffer.concat(list,位数)
//模拟一个myConcat
    //1.先判断是否传入totalLength,如果没有,计算总长
    //2.创建一个新buffer
    //3.循环数组,每一项拷贝到buffer
    //4.截取有效长度

Buffer.myConcat=function (list,totalLength) {
    if(typeof totalLength=="undefined"){
        totalLength=0;
        list.forEach(item=>totalLength+=item.length)
    }
    let buffer=new Buffer(totalLength);
    let index=0;
    list.forEach(item=>{
        item.copy(buffer,index)
        index+=item.length
    })
    return buffer.slice(0,index)
}

console.log(Buffer.myConcat([buf1, buf2, buf3, buf4]).toString());