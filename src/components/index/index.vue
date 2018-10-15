<template>
  <div>
    <div class="main-content">
      <div v-if="tabIndex === 0">
        <main-content></main-content>
      </div>
      <div v-if="tabIndex === 1">
        <passenger></passenger>
      </div>
     <!-- <div v-if="tabIndex === 2">
        <get-order></get-order>
      </div>
      <div v-if="tabIndex === 3">
        <get-order></get-order>
      </div>-->
      <div v-if="tabIndex === 4">
        <!--<person-real></person-real>-->
        <!--<driver-auth></driver-auth>-->
        <!--<get-order></get-order>-->
        <person-center></person-center>
      </div>
    </div>
    <!--底部占位-->
    <div class="place"></div>
    <!--end-->
    <div class="bottom-bar">
      <div class="bottom-bar-content">
        <div @click="change(0)" :style="{color: tabIndex === 0 ? 'red' : '#000' }">
          <i class="iconfont icon-shouye"></i>
          <div>首页</div>
        </div>
        <div @click="change(1)" :style="{color: tabIndex === 1 ? 'red' : '#000' }">
          <i class="iconfont icon-car"></i>
          <div>拼车</div>
        </div>
        <div @click="change(2)" :style="{color: tabIndex === 2 ? 'red' : '#000' }">
          <i class="iconfont icon-songhuohuoche"></i>
          <div>送货</div>
        </div>
        <div @click="change(3)" :style="{color: tabIndex === 3 ? 'red' : '#000' }">
          <i class="iconfont icon-store_icon"></i>
          <div>商城</div>
        </div>
        <div @click="change(4)" :style="{color: tabIndex === 4 ? 'red' : '#000' }">
          <i class="iconfont icon-icongerenzhongxin-01"></i>
          <div>我的</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainContent from './mainContent'
import Passenger from '../passenger/passenger'
import GetOrder from '../driver/getOrder'
import PersonReal from '../person/personReal'
import DriverAuth from '../person/driverAuth'
import personCenter from '../person/personCenter'

export default {
  components: {
    MainContent,
    Passenger,
    GetOrder,
    PersonReal,
    DriverAuth,
    personCenter
  },
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    change (val) {
      this.tabIndex = val
      if (val === 2) {

        this.$toast.center('暂未开放')

      } else if (val === 3) {

        this.$toast.center('暂未开放')

      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .bottom-bar-content{
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 0.10rem 0;
    background-color: #ffffff;
  }
  .place {
    display: flex;
    align-items: end;
    padding: 0.45rem;
  }
</style>
