<template>
  <div class="side-right">
    <header>{{ msg }}</header>
    <div class="right-content">
      <!-- <div class="at-markdown">
        <HomeMd></HomeMd>
        <Config></Config>
        <CssFirstArticle></CssFirstArticle>
      </div> -->
      <div class="at-markdown">
        <ul class="article-list">
          <li v-for="item in items" class="article-list-item">
            <router-link :to="item.path">
              <header class="article-item-title">{{ item.title }}</header>
              <div class="article-item-description">{{ item.description }}
                <span class="article-item-time">{{ item.datetime }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
/*import HomeMd from '@/markdown/home.md'
import Config from '@/markdown/config.md'
import CssFirstArticle from '@/markdown/cssFirstArticle.md'
import GulpPostcss from '@/markdown/gulpPostcss.md'*/

export default {
  name: 'home',
  // components: {
  //   HomeMd,
  //   Config,
  //   CssFirstArticle
  // },
  data () {
    return {
      msg: 'Welcome to Amao\'s blog',
      items: [
        { title: 'Download', path: '/download', description: '启动本项目步骤介绍', datetime: '2017-9-10' },
        { title: 'vue-cli Environment construction', path: '/environmentconfig', description: '关于vue-cli构建项目的步骤介绍及webpack的sass配置问题', datetime: '2017-9-12' },
        { title: 'Css First Article', path: '/cssfirst', description: '关于css定位布局等技巧的初次整理', datetime: '2017-9-14' },
        { title: 'Gulp Postcss', path: '/gulppostcss', description: '关于淘宝Flexible.js使用gulp的postcss编译css使用方式', datetime: '2017-9-20' },
        { title: 'Css Render Mechanism', path: '/cssrender', description: '浏览器渲染机制（Css的重绘与回流）', datetime: '2017-9-22' }
      ]
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

.article-list {
  width: 80%;
  margin: 0 auto;
  list-style: none;
}

.article-list-item {
  position: relative;
  height: 110px;
  box-shadow: 1px 1px 5px rgb(230, 230, 230);
  margin-bottom: 50px;
}

.article-list-item a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #666666;
  padding: 10px 20px;
}

.article-item-description {
  display: block;
  margin-top: 18px;
  color: #999999;
}

.article-item-time {
  float: right;
  display: inline-block;
  height: 21px;
  line-height: 21px;
  margin-right: 35px;
}

.article-list-item header {
  box-shadow: none;
  font-size: 24px;
  height: 36px;
  line-height: 36px;
}
</style>
