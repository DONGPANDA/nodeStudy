## 安装 sass less webpack 一般采用本地安装
- 不会导致版本冲突 这种一般都是开发依赖,上线不需要

## 创建一个webpack.config.js的文件

## js es6转 es5

````
npm install babel-core babel-loader --save-dev
````

## 需要将es6转成es5 

```$xslt
npm install babel-preset-es2015 --save-dev
```

##webpack 服务 在内存中打包,可以拿到最新的改动
```$xslt
npm install webpack-dev-server --save-dev
```
## html-webpack-plugin插件

## 解析图片 url-loader file-loader

## vue-cli可以帮我们生成项目
```$xslt
vue init simple 项目名
vue init webpack-simple 项目名
vue init 项目名
```  

## vue有两部分组成
- runtime
- compiler

runtime+compiler 即支持render也支持template
runtime-only 只支持render

render方法可以将对象渲染成真实dom
app组件中自带render 直接结构即可
App是根组件

router文件夹下index.js 导入时可以不写
