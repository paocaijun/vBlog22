const path = require("path");
module.exports = {
  title: "个人博客",
  description: "种一颗树最好的时机是十年前，其次是现在",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/imgs/cow.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "public")
      }
    }
  },
  host: "localhost",
  port: 8881,
    theme: "reco",
  base: "/dxBlog/", // 这是部署到github相关的配置,css等需要根据这个地址来查找css资源
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: "前端基础", link: "/accumulate/1.html" },
      { text: "javascript", link: "/javascript/" }, // 以/结尾的匹配README.md文件
      { text: "也聊人生", link: "/littleTalk/" },
      {
        text: "categories",
        items: [
          { text: "frontEnd", link: "/categories/frontEnd" },
          { text: "backEnd", link: "/categories/backEnd" }
        ]
      }
    ],
    sidebar: {
      // 侧边栏配置
      "/accumulate/": [
        {
          title: "前端基础",
          children: ["/accumulate/1.html"]
        }
      ],
      "/javascript/": [
        {
          title: "javascript",
          children: ["/javascript/"]
        }
      ],
      "/littleTalk/": [
        "/littleTalk/",
        {
          title: "也聊人生",
          children: ["/littleTalk/"]
        }
      ]
    },
    // sidebar: "auto", // 侧边栏配置 ，开启时，左侧不显示层级
    sidebarDepth: 2 // 侧边栏显示2级
  }
};
