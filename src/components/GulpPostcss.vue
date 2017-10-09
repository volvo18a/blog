<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <div class="at-markdown">
        <GulpPostcss></GulpPostcss>
      </div>
    </div>
  </div>
</template>

<script>
import GulpPostcss from '@/markdown/gulpPostcss.md'

export default {
  name: 'gulppostcss',
  components: {
    GulpPostcss
  },
  data () {
    return {
      msg: 'Gulp Postcss'
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
