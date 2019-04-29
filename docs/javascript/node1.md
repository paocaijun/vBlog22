---
title: 认识node.js
date: 2019-04-22
tags: node
---

Node.js 是什么呢？官方的介绍是介个样子滴

Node.js 是一个基于 Chrome V8 引擎的 Javascript 运行环境

简单的来说，javascript 代码可以在浏览器运行，也能在 node 环境中运行，node 是一个平台

nodejs 有两种方式调试代码：控制台交互模式 和 搭建 http 服务器

##### 控制台交互模式

第一步首先是安装 node ,安装完成后，Win+R 打开运行窗口，输入 cmd 进入命令行，输入 node 回车进入 node 交互界面，在这里你可以输入任意的 js 表达式和运算符，如图
![pic](../.vuepress/public/imgs/node1.png)
用法与在 chrome 控制台差不多

##### 搭建 http 服务器

以上用法实际用处不大，接下来我们用 node.js 搭建一个 web 服务器。node.js 中封装了很多好用的模块，比如 http,url,fs 等，在我们要使用时直接用 require 引入，将模块存储到变量里即可使用

搭建服务操作如下：

1、新建一个空的文件夹，比如 nodeDemo

2、在文件夹下建立文件 server.js, server.js 文件内写入如下代码

```js
// 引入http模块
var http =require('http')
// 使用http.createServer创建服务器
htt.createServer((request,response){
    // 发送响应头部，状态码：200，文档类型：text/plain，即纯文本格式
    response.writeHead(200, { "Content-Type": "text/plain" })
    // 发送响应数据
	response.write("Hello You ")
    response.end()
}).listen(3007) // 监听端口3007
console.log("Server is listening port 3007...")
```

以上代码我们完成了一个可以工作的 HTTP 服务器，接下来吧服务跑起来

3、在 nodeDemo 文件夹下打开命令行，输入 node server.js,当命令行输出 Server is listening port 3007...时，证明 web 服务器已经启动并运行了

4、打开浏览器，输入地址 localhost:3007

![pic2](../.vuepress/public/imgs/node12.png)

Hello You ,哈哈恭喜，node.js 创建的第一个应用成功
