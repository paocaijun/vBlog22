---
title: 三栏布局的几种方案及优缺点
date: 2018-11-12 18:04:55
tags: css
---

**假设高度已知，请写出三栏布局，左栏、右栏宽度 300px，中间宽度自适应。**

下面是几种布局方式
先写一些 `公共样式`

```
 <style>
      html,body,* {
        padding: 0;
        margin: 0;
      }
      section article div {
        min-height: 100px;
      }
      .left {
        background: lightblue;
        width: 300px;
      }
      .center {
        background: pink;
      }
      .right {
        background: darkgray;
        width: 300px;
      }
    </style>
```

#### 1、浮动布局

```
<section>
    <style>
        .float-layout .left {
            float: left;
        }
        .float-layout .right {
            float: right;
        }
    </style>
    <article class="float-layout">
        <div class="left"> left </div>
        <div class="right"> right </div>
        <div class="center">
            <h1>浮动解决方案</h1>
            <p>center</p>
            <p>center</p>
            <p>center</p>
        </div>
    </article>
</section>
```

打开浏览器看下结果：
![浮动结果](../.vuepress/public/imgs/31.png)
优点：简单、兼容性好

缺点：浮动元素是脱离文本流的，要清除浮动，不然会带来高度塌陷等问题

思考：当中间一栏内容很多时，会怎样？结果如下
![超出啦](../.vuepress/public/imgs/32.png)
结合浮动的原理不难理解为什么会这样，解决的办法之一是对中间一栏设置 overflow:hidden 创建 BFC

#### 2、绝对定位

```
<section>
    <style>
        .position-layout {
            position: relative;
        }
        .position-layout .left {
            position: absolute;
            left: 0;
        }
        .position-layout .center {
            position: absolute;
            left: 300px;
            right: 300px;
        }
        .position-layout .right {
            position: absolute;
            right: 0;
        }
    </style>
    <article class="position-layout">
        <div class="left">left</div>
        <div class="center">
            <h2>绝对定位解决方案</h2>
            <p>center</p>
            <p>center</p>
        </div>
        <div class="right">right</div>
    </article>
<section>
```

这个没什么好说的啦~~~~

#### 3、flex 布局

```
<section>
<style>
    .flex-layout {
        display: flex;
    }
    .flex-layout .center {
        flex: 1;
    }
    </style>
    <article class="flex-layout">
    <div class="left">left</div>
    <div class="center">
        <h2>弹性布局解决方案</h2>
        <p>center</p>
        <p>center</p>
    </div>
    <div class="right">right</div>
    </article>
</section>
```

优点很明显，是比较完美的方案
缺点：flexbox 是 css3 提出的，不能兼容 IE8 及以下的浏览器

#### 4、表格布局

```
<section>
    <style>
    .table-layout {
        display: table;
        width: 100%;
    }
    .table-layout div {
        display: table-cell;
    }
    </style>
    <article class="table-layout">
        <div class="left">left</div>
        <div class="center">
            <h2>表格布局解决方案</h2>
            <p>center</p>
            <p>center</p>
        </div>
        <div class="right">right</div>
    </article>
</section>
```

表格布局的历史一言难尽，但是在这里用于三栏布局还是很实用的，兼容性也很好，弹性布局不兼容的时候可以考虑表格布局。

弹性布局，表格布局有个相同之处是：当中间栏高度超出时，三栏高度会同步改变，有时候我们并不想要这样的效果。
