<template>
  <transition name="side-left" @after-leave="sideLeftLeave">
    <div class="side-left" v-if="show">
      <header class="left-header">
        <div class="userInfo">
          <img v-bind:src="headPicUrl" alt="pic">
          <span class="hoster">{{userName}}</span>
        </div>
      </header>
      <ul class="left-list">
        <li v-for="item in items" class="left-list-item" @click="showSideLeftChild(item)">
          <router-link :to="item.path">{{item.message}}</router-link>
        </li>
      </ul>
      <footer class="left-footer">Quit</footer>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'sideleft',
  data() {
    return {
      userName: 'Amao',
      headPicUrl: '/static/Amao.png',
      show: true,
      items: [
        { message: 'Home', path: '/hello' },
        { message: 'Personal', path: '/personal' },
        { message: 'Curriculum Vitae', path: '/' },
        { message: 'Friendship Link', path: '/friend' }
      ]
    }
  },
  props: ['isShowLeft'],
  mounted () {
    this.show = this.isShowLeft
  },
  methods: {
    showSideLeftChild: function (item) {
        if (item.message == 'Curriculum Vitae'){
        	this.show = false
        }
    },
    sideLeftLeave: function () {
    	this.$emit('showSideLeft', this.show)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-left {
  position: relative;
  width: 400px;
  min-width: 400px;
  height: 100%;
  min-height: 490px;
  box-shadow: 2px 0px 10px #F2F4F6;
}

.side-left-enter-active, .side-left-leave-active {
	transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.side-left-enter, .side-left-leave-to {
  transform: translateX(-400px);
  opacity: 0;
}

.left-header {
  height: 240px;
  background: #071041;
}

.userInfo {
  position: relative;
}

.left-header img {
  width: 150px;
  height: 150px;
  margin-top: 30px;
  border-radius: 100%;
  box-shadow: 8px 6px 4px #169fe6;
}

.hoster {
  margin-top: 8px;
  display: block;
  color: #fff;
  font-size: 24px;
}

.left-list {
	list-style: none;
}

.left-list-item {
  height: 50px;
  line-height: 50px;
  /* border-bottom: 1px solid #CCC; */
}

.left-list-item a {
  display: inline-block;
  width: 100%;
  color: #000;
  text-decoration: none;
}

.left-list-item a:hover {
  background-color: #169ee5;
  color: #fff;
}

.left-footer {
  position: absolute;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #000;
  bottom: 0;
  cursor: pointer;
}

.left-footer:hover {
  background: #169ee5;
  color: #fff;
}

</style>
