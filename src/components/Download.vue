<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <div class="at-markdown">
        <HomeMd></HomeMd>
      </div>
    </div>
  </div>
</template>

<script>
import HomeMd from '@/markdown/home.md'

export default {
  name: 'download',
  components: {
    HomeMd
  },
  data () {
    return {
      msg: 'Start the project'
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
