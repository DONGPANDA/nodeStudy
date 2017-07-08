/**
 * Created by 96004 on 2017/7/8.
 */
//将任意进制转化为10进制,parseInt
//将任意进制转为任意进制
console.log(parseInt('111', 2));
console.log(0xff.toString(10));
//base64 转图片,转文字,没有加密功能,最大取值是在64之间
let buffer=new Buffer("牛")
console.log(buffer);
console.log(0xe7.toString(2));
console.log(0x89.toString(2));
console.log(0x9b.toString(2));
//111001 111000 100110 011011
console.log(parseInt('111001', 2));
console.log(parseInt('111000', 2));
console.log(parseInt('100110', 2));
console.log(parseInt('011011', 2));

let str='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+=str.toLowerCase();
str+='0123456789';
str+='+/';
console.log(str[57] + str[56] + str[38] + str[27]);

let str1='1234'
str1[0]=5;//字符串不可改
console.log(str1);