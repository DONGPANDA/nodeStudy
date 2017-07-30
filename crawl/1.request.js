/**
 * Created by 96004 on 2017/7/30.
 */
let request=require('request');
let iconv=require('iconv-lite');
let cheerio=require('cheerio');

request({url:'http://top.baidu.com/category?c=1',encoding:null},function (err,response,body) {
    if(!err&& response.statusCode==200){
        body=iconv.decode(body,'gbk');
        let $=cheerio.load(body);
        $('.hd .title a').each(function (index,item) {
            console.log($(item).text());
        })
    }
})