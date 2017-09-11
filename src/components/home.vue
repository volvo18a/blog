<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <div class="at-markdown">
        <homeMd></homeMd>
      </div>
    </div>
  </div>
</template>

<script>
import homeMd from '@/markdown/home.md'

export default {
  name: 'home',
  components: {
    homeMd
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
.at-markdown {
  width: 100%;
  height: 100%;
  text-align: left;
}
</style>
