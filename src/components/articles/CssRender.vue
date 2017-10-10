<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <div class="at-markdown">
        <CssRender></CssRender>
      </div>
    </div>
  </div>
</template>

<script>
import CssRender from '@/markdown/cssRender.md'

export default {
  name: 'cssrender',
  components: {
    CssRender
  },
  data () {
    return {
      msg: 'Css Render Mechanism'
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
