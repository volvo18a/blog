<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <div class="at-markdown">
        <homeMd></homeMd>
        <config></config>
        <cssFirstArticle></cssFirstArticle>
      </div>
    </div>
  </div>
</template>

<script>
import homeMd from '@/markdown/home.md'
import config from '@/markdown/config.md'
import cssFirstArticle from '@/markdown/cssFirstArticle.md'


export default {
  name: 'home',
  components: {
    homeMd,
    config,
    cssFirstArticle
  },
  data () {
    return {
      msg: 'Welcome to Amao\'s blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.right-content {
  padding: 0 15px;
}
.at-markdown {
  width: 100%;
  height: 100%;
  text-align: left;
}
</style>
