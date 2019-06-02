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
import config from '../config.js'
export default {
  name: 'Valine',
  watch: {
    '$route' (to, from) {
      if (to.path !== from.path) {
        // 切换页面时刷新评论
        // this.$router.go(0)
        setTimeout(() => {
          this.createValine()
        }, 300)
      }
    }
  },
  methods: {
    createValine () {
      const valineConfig = config.themeConfig.valineConfig
      if (valineConfig) {
        const Valine = require('valine');
        const AV = require('leancloud-storage')
        if (typeof window !== 'undefined') {
          this.window = window
          window.AV = AV
        }
        new Valine({
          el: '#vcomments',
          appId: valineConfig.appId,// your appId
          appKey: valineConfig.appKey, // your appKey
          verify: false,
          notify: false,
          visitor: true,
          avatar: 'retro',
          path: window.location.pathname,
          placeholder: '吐槽区!!!'
        });
      }
    }
  },
  mounted: function () {
    this.createValine()
    let path = location.origin + location.pathname
    // vuepress打包后变成的HTML不知为什么吞掉此处的绑定`:id="countId"`
    document.getElementsByClassName('leancloud-visitors')[0].id = path
  }
}
</script>
<style lang="css">
.vctrl {
  /* display: none; */
}
</style>