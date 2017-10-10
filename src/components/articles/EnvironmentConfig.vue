<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <div class="at-markdown">
        <Config></Config>
      </div>
    </div>
  </div>
</template>

<script>
import Config from '@/markdown/config.md'

export default {
  name: 'environment',
  components: {
    Config
  },
  data () {
    return {
      msg: 'vue-cli Environment construction'
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
