/**
 * Created by 96004 on 2017/7/11.
 */
import './style.less'
let fn=(a,b)=>a+b
import Str from './a'
let str=Str+fn(200,33)
document.write(str)
let obj={name:1}
let obj1={age:24}
let obj3={...obj,...obj1}
console.log(obj3);
//在前端里尽量使用es6,不要混着来