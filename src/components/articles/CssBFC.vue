<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <div class="at-markdown">
        <CssBFC></CssBFC>
      </div>
    </div>
  </div>
</template>

<script>
import CssBFC from '@/markdown/cssBFC.md'

export default {
  name: 'download',
  components: {
    CssBFC
  },
  data () {
    return {
      msg: 'Css BFC'
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
