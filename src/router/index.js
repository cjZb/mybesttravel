import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Login from '@/components/login'
import FeedBack from '@/components/other/feedBack'
import CityList from '@/components/index/cityList'

import Demo from '@/components/weixin/demo'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // 登录页
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 投诉反馈页
    {
      path: '/feedBack',
      name: 'feedBack',
      component: FeedBack
    },
    // 城市列表页
    {
      path: '/cityList',
      name: 'cityList',
      component: CityList
    },

    // 微信地理定位demo
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
  ]
})
