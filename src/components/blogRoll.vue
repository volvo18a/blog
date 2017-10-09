<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content flex-box">
      <div class="swiper-container">
        <ul class="friend-container" :style="{ 'transform': 'translate3d(' + -(index * 300) + 'px, 0, 0)' }">
          <li class="friend-item" v-for="(friend, $index) in friends" :class="{ 'on': $index === index + 1 }" @click="go($index - 1)">
            <div class="friend-img" :style="{ backgroundImage: 'url(' + friend.img_url + ')' }"></div>
            <div class="friend-info">
              <div>{{ friend.name }}</div>
              <div>{{ friend.info }}</div>
              <div>
                Link：<a class="friend-link" :href="friend.link">{{ friend.link }}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import friend from '@/json/friend_link.json'

export default {
  name: 'blogRoll',
  data() {
    return {
      msg: 'Amao\'s Friendship Links',
      index: -1,
      friends: friend.data
    }
  },
  methods: {
    go(i) {
      this.index = i
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.swiper-container {
  width: 900px;
  height: 386px;
  overflow: hidden;
}

.friend-container {
  width: 2700px;
  height: 386px;
  list-style: none;
  font-size: 0;
  transition: transform .3s cubic-bezier(.86, 0, .07, 1), -webkit-transform .3s cubic-bezier(.86, 0, .07, 1);
  transform: translate3d(0, 0, 0);
}

.friend-item {
  float: left;
  display: inline-block;
  width: 300px;
  height: 386px;
  transform: scale(0.5);
  transition: transform .3s cubic-bezier(.86, 0, .07, 1);
}

.on {
  box-shadow: 0px 1px 10px #F2F4F6;
  transform: scale(1);
  transition: transform .3s cubic-bezier(.86, 0, .07, 1);
}

.friend-img {
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.friend-info {
  line-height: 25px;
  padding: 5px 15px;
  font-size: 16px;
  text-align: left;
  box-sizing: border-box;
  border-top: none;
  color: #fff;
  background: linear-gradient(to bottom right, #c8e1ff, rgba(132, 225, 239, 0.6));
  /* #76f6d7, #45f4be #c8e1ff, #84e1ef*/
}

.friend-link {
  font-size: 14px;
  color: #fff;
}

</style>
