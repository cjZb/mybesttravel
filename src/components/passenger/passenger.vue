<template>
  <div>
    <div class="main-top">
      <div @click="message" style="display: flex; align-items: center">
        <img style="width: 0.30rem; height: 0.30rem" src="@/assets/index/news.png"/>
      </div>
      <div style="color: #ff682d">乘客发布</div>
      <div>
       <!-- <img style="width: 0.22rem; height: 0.26rem" src="@/assets/index/position.png"/>
        <span style="margin: 0 0.2rem">{{ city }}</span>
        <img style="width: 0.18rem; height: 0.1rem" src="@/assets/index/daosanjiao.png"/>-->
      </div>
    </div>
    <div>
      <tab :line-width="1" custom-bar-width="60px" active-color="#FF510D">
        <tab-item selected @on-item-click="pinCar">拼车</tab-item>
        <tab-item @on-item-click="baoCar">包车</tab-item>
      </tab>
    </div>
    <div v-if="carway">
      <passenger-content></passenger-content>
    </div>
    <div v-if="!carway">
      <chart-bus></chart-bus>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import PassengerContent from './passengerContent'
  import ChartBus from './chartBus'
  
  export default {
    name: 'passenger',
    components: {
      Tab,
      TabItem,
      PassengerContent,
      ChartBus
    },
    data () {
      return {
        carway: true,
        city: '',
      }
    },
    mounted () {
      if (this.$route.query.value) {

        this.city = this.$route.query.value

      } else {

        this.city = '郑州'

      }
    },
    methods: {
      pinCar () {
        this.carway = true
      },
      baoCar () {
        this.carway = false
      },

      message () {
        this.$toast.center('暂无消息')
      },

    }
  }
</script>

<style scoped>
  .main-top {
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.30rem;
    background-color: #ffffff;
  }
</style>
