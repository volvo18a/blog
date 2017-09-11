<template>
  <transition name="side-left-child" @after-leave="sideLeftChildLeave">
    <div class="side-left-child" v-if="show">
      <header class="left-child-header">
        <span class="iconfont back-btn" @click="showSideLeft()">&#xe61a;</span>
      </header>
      <ul class="left-child-list">
        <li v-for="item in items" class="left-child-list-item">
          <router-link :to="item.path">{{ item.message }}</router-link>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'sideleftChild',
  data() {
    return {
      show: false,
      items: [
        { message: 'Color', path: '/' },
        { message: 'Button', path: '/' },
        { message: 'Input', path: '/' },
        { message: 'Modal', path: '/' }
      ]
    }
  },
  props: ['isShowLeftChild'],
  mounted() {
    this.show = this.isShowLeftChild
  },
  methods: {
    showSideLeft: function() {
      this.show = false
    },
    sideLeftChildLeave: function() {
      this.$emit('showSideLeft', !this.show)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.side-left-child {
  position: relative;
  width: 400px;
  min-width: 400px;
  height: 100%;
  min-height: 490px;
  box-shadow: 2px 0px 10px #F2F4F6;
}

.side-left-child-enter-active,
.side-left-child-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.side-left-child-enter,
.side-left-child-leave-to {
  transform: translateX(-400px);
  opacity: 0;
}

.left-child-header {
  height: 60px;
  line-height: 60px;
  background: #071041;
  text-align: left;
  padding: 0 30px;
}

.left-child-header {
  .back-btn {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
}

.left-child-list {
  list-style: none;
}

.left-child-list-item {
  height: 50px;
  line-height: 50px;
  /* border-bottom: 1px solid #CCC; */
}

.left-child-list-item {
  a {
    display: inline-block;
    width: 100%;
    color: #000;
    text-decoration: none;
  }
}

.left-child-list-item {
  a{
    &:hover {
      background-color: #169ee5;
      color: #fff;
    }
  }
}

</style>
