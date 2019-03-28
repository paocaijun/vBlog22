---
home: true
# heroImage: /hero.png
actionText: Get Started →
actionLink: /accumulate/1.md
features:
    - title: left
      details: Minimal setup with markdown-centered project structure helps you focus on writing.
    - title: cneter
      details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
    - title: right
      details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2018-present paocaijun
---

1、node8.12.0 ,vuepress0.14.启动项目，访问页面时： TypeError: res.getHeader is not a function
ANS:1、vuepress 必须是 v1 以上的, npm install -g vuepress@next.不加@next 默认下载的是 v0.x
2、(vuepress v0.14)查看全局安装的 vuepress 依赖的 webpack-dev-middleware 是 v3.6.1, 此版本有问题，在项目中下载 webpack-dev-middleware@3.6.0,
再启动项目，若仍然有问题，则在项目中安装 vuepress
3、对默认主题的简单覆盖。建立.vuepress/override.styl 文件（stylus）,以下变量可以调整
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
//
