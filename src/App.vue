<template>
  <div id="app">
    <SideLeft :isShowLeft="isShowLeft" v-on:showSideLeft="showSideLeft" v-if="isShowLeft"></SideLeft>
    <SideLeftChild :isShowLeftChild="isShowLeftChild" v-on:showSideLeft="showSideLeft" v-if="isShowLeftChild"></SideLeftChild>
    <router-view></router-view>
  </div>
</template>
<script>
import SideLeft from '@/components/SideLeft'
import SideLeftChild from '@/components/SideLeftChild'

export default {
  name: 'app',
  components: {
    SideLeft,
    SideLeftChild
  },
  data() {
    return {
      isShowLeftChild: false,
      isShowLeft: true
    }
  },
  methods: {
    showSideLeft: function(isShow) {
      this.isShowLeft = isShow
      this.isShowLeftChild = !isShow
    }
  }
}

</script>
<style lang="scss">
@import './mdstyle/markdown.scss';
@import './mdstyle/hls.scss';

@font-face {
  font-family: 'iconfont';  /* project id 220709 */
  src: url('//at.alicdn.com/t/font_220709_zgfshco7lnn7mn29.eot');
  src: url('//at.alicdn.com/t/font_220709_zgfshco7lnn7mn29.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_220709_zgfshco7lnn7mn29.woff') format('woff'),
  url('//at.alicdn.com/t/font_220709_zgfshco7lnn7mn29.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_220709_zgfshco7lnn7mn29.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

* {
  padding: 0;
  margin: 0;
  -webkit-appearance:none;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}

.side-right {
  margin-left: 400px;
  min-width: 800px;
  height: 100%;
  header {
    height: 75px;
    line-height: 75px;
    font-size: 30px;
    box-sizing: border-box;
    box-shadow: 0px 1px 10px #F2F4F6;
  }
}

.right-content {
  min-height: calc(100% - 75px);
  position: relative;
  box-sizing: border-box;
  padding: 30px;
}

.flex-box {
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
