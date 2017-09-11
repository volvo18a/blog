import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import personal from '@/components/personal'
import blogRoll from '@/components/blogRoll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/friend',
      name: 'blogRoll',
      component: blogRoll
    }
  ]
})
