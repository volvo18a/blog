import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Personal from '@/components/Personal'
import BlogRoll from '@/components/BlogRoll'
import Download from '@/components/articles/Download'
import EnvironmentConfig from '@/components/articles/EnvironmentConfig'
import VerticalAlign from '@/components/articles/VerticalAlign'
import GulpPostcss from '@/components/articles/GulpPostcss'
import CssRender from '@/components/articles/CssRender'
import CssBFC from '@/components/articles/CssBFC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/verticalalign',
      name: 'VerticalAlign',
      component: VerticalAlign
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
    },
    {
      path: '/cssbfc',
      name: 'CssBFC',
      component: CssBFC
    }
  ]
})
