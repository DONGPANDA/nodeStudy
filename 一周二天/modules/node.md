## 模块化 
- js中实现模块化,单例,闭包
- 单例缺点:不能保证一定不冲突,会导致调用过长,require(AMD),seajs(CMD),import export,不兼容  
- 没有块级作用域 

## node自带模块化 commonjs规范
- 怎么定义一个模块(每个js都是一个模块,在每个文件外面增加一个闭包)
- 如何导出一个模块 (module.exports/exports)
- 如何引用一个模块(require())

require exports module 这些都是文件外面闭包的形参
(function(exports,module,require,__dirname,__filename){})();
这五个参数也叫全局对象

## 模块分类
- 文件模块 
- 第三方模块 
    全局安装(只能在命令行下使用,代码里不能使用)
    
```
  npm install nrm -g
  nrm test
  nrm use taobao

```

本地安装(在当前项目下使用)
    
```
 npm init -y记录依赖package.json 可能会导致安装到上级目录,名字不能有中文,不能有大写,不能有特殊字符
    开发依赖 只有在开发时应用 --save-dev(-D)
    项目依赖 开发上线都需要 --save(-S)
    卸载 npm uninstall xxx --save-dev/--save
    安装制定版本 
    npm info xxx查看npm模块版本
    npm install vue@1.0.0 --save
```
    
- 内置模块(核心模块) node自带  

## yarn 需要npm下载(主流)

```
npm install yarn -g
```

- 初始化package.json 

```
yarn init -y
``` 

- 本地安装 
    - 开发依赖 yarn add less --dev
    - 项目依赖 yarn add jquery 

- 删除 

```
yarn remove xxx --dev
```  

## 安装依赖yarn install

> npm node package manager 管理node包(很多js文件)的,安装node自带npm  

## 发布包 (必须是别人没发过的,包里需要有一个package.json)

- 需要登录到官方npm
```$xslt
nrm use npm
```  
- 注册账号  
```$xslt
npm addUser
npm publish 发布
```  

第三方模块需要下载 引用直接写模块名字,当前目录上没有就回去上级查找,找到根盘符位置,没有就报错,一般都是当前文件夹下 module.paths 查找顺序