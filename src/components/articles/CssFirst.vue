<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <div class="at-markdown">
        <CssFirstArticle></CssFirstArticle>
      </div>
    </div>
  </div>
</template>

<script>
import CssFirstArticle from '@/markdown/cssFirstArticle.md'

export default {
  name: 'download',
  components: {
    CssFirstArticle
  },
  data () {
    return {
      msg: 'Css First Article'
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
  height: 100%;
  text-align: left;
}
</style>
