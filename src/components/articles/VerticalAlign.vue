<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <div class="at-markdown">
        <VerticalAlign></VerticalAlign>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalAlign from '@/markdown/verticalAlign.md'

export default {
  name: 'download',
  components: {
    VerticalAlign
  },
  data () {
    return {
      msg: 'Css Vertical Align'
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
