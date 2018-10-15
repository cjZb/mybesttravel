import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Login from '@/components/login'
import FeedBack from '@/components/other/feedBack'
import CityList from '@/components/index/cityList'
import GoTravel from '@/components/index/gotravel/goTravel'
import MyOrder from '@/components/index/myorder/myOrder'
import LookComment from '@/components/index/myorder/lookComment'
import LookOwner from '@/components/index/lookowner/lookOwner'
import DriverPublish from '@/components/driver/driverPublish'
import DriverComment from '@/components/driver/driverComment'
import GetOrder from '@/components/driver/getOrder'
import DriverAuth from '@/components/person/driverAuth'
import PersonCenter from '@/components/person/personCenter'
import Passenger from '@/components/passenger/passenger'


import Demo from '@/components/demo/weixin/demo'
import UploadFile from '@/components/demo/uploadFile'
import Canvas from '@/components/demo/canvas'

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
    // 拼车出行
    {
      path: '/goTravel',
      name: 'goTravel',
      component: GoTravel
    },
    // 我的预约
    {
      path: '/myOrder',
      name: 'myOrder',
      component: MyOrder
    },
    // 查看评价
    {
      path: '/lookComment',
      name: 'lookComment',
      component: LookComment
    },
    // 寻找车主
    {
      path: '/lookOwner',
      name: 'lookOwner',
      component: LookOwner
    },
    // 司机发布
    {
      path: '/driverPublish',
      name: 'driverPublish',
      component: DriverPublish
    },
    // 车主评价
    {
      path: '/driverComment',
      name: 'driverComment',
      component: DriverComment
    },
    // 我要接单
    {
      path: '/getOrder',
      name: 'getOrder',
      component: GetOrder
    },
    // 车主认证
    {
      path: '/driverAuth',
      name: 'driverAuth',
      component: DriverAuth
    },
    // 个人中心
    {
      path: '/personCenter',
      name: 'personCenter',
      component: PersonCenter
    },
    // 乘客发布
    {
      path: '/passenger',
      name: 'passenger',
      component: Passenger
    },










    // 微信地理定位demo
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    // 图片上传demo
    {
      path: '/uploadFile',
      name: 'uploadFile',
      component: UploadFile
    },
    // canvas绘图demo
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas
    },
  ]
})
