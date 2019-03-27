<template>
  <div>
    <h3>
      <a href="javascript:;"></a>
      评 论：
    </h3>
    <div id="vcomments"></div>
  </div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')

    }
    new Valine({
      el: '#vcomments',
      appId: 'iouwTIVqxjN9UG79fxYMNQm1-gzGzoHsz',// your appId
      appKey: 'HBmftNP6DQOlUIPsDr76aHuc', // your appKey
      notify: false, //评论回复邮件提醒
      verify: false, //验证码
      avatar: 'monsterid', //头像配置
      visitor: true, // 阅读量统计
      placeholder: '吐槽区...'
    });
  },
}
</script>
<style lang="css">
.vctrl {
  /* display: none; */
}
</style>