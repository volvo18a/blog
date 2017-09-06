<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">content</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Amao\'s blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
