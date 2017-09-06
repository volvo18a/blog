import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import personal from '@/components/personal'
import blogRoll from '@/components/blogRoll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: hello
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
