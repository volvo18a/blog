import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Personal from '@/components/Personal'
import BlogRoll from '@/components/BlogRoll'
import Download from '@/components/articles/Download'
import EnvironmentConfig from '@/components/articles/EnvironmentConfig'
import CssFirst from '@/components/articles/CssFirst'
import GulpPostcss from '@/components/articles/GulpPostcss'
import CssRender from '@/components/articles/CssRender'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/friend',
      name: 'blogRoll',
      component: BlogRoll
    },
    {
      path: '/environmentconfig',
      name: 'EnvironmentConfig',
      component: EnvironmentConfig
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/cssfirst',
      name: 'CssFirst',
      component: CssFirst
    },
    {
      path: '/gulppostcss',
      name: 'GulpPostcss',
      component: GulpPostcss
    },
    {
      path: '/cssrender',
      name: 'CssRender',
      component: CssRender
    }
  ]
})
