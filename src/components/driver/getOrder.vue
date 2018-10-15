<template>
  <div>
    <div class="main-top">
      <div @click="message" style="display: flex; align-items: center">
        <img style="width: 0.30rem; height: 0.30rem" src="@/assets/index/news.png"/>
      </div>
      <div style="color: #ff682d">我要接单</div>
      <div>
        <!--<img style="width: 0.22rem; height: 0.26rem" src="@/assets/index/position.png"/>
        <span style="margin: 0 0.2rem">{{ city }}</span>
        <img style="width: 0.18rem; height: 0.1rem" src="@/assets/index/daosanjiao.png"/>-->
      </div>
    </div>
    <div>
      <tab :line-width="1" custom-bar-width="60px" active-color="#FF510D">
        <tab-item selected @on-item-click="onItemClick">普通</tab-item>
        <tab-item @on-item-click="onItemClick">加急</tab-item>
        <tab-item @on-item-click="onItemClick">包车</tab-item>
      </tab>
    </div>
    <div  v-for="item in arrDriver">
      <driver-content :status="status" :item-children="item"></driver-content>
    </div>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import DriverContent from './driverContent'
  import { customer_yue_putong, customer_yue_jiaji, customer_bao } from '@/api/allapi'

  export default {
    name: 'passenger',
    components: {
      Tab,
      TabItem,
      DriverContent,
    },
    data () {
      return {
        city: '',
        status: '普通',
        arrDriver: []
      }
    },
    mounted () {
      if (this.$route.query.value) {

        this.city = this.$route.query.value

      } else {

        this.city = '郑州'

      }

      this._customer_yue_putong()

    },
    methods: {

      onItemClick (index) {

        if (index === 0) {

          this.status = '普通'

          this._customer_yue_putong()

        } else if (index === 1) {

          this.status = '加急'

          this._customer_yue_jiaji()

        } else if (index === 2) {

          this.status = '包车'

          this._customer_bao()

        }

      },
      selectArea () {
        this.$router.push({path: '/cityList'})
      },
      message () {
        this.$toast.center('暂无消息')
      },
      _customer_yue_putong () {

        customer_yue_putong().then( res => {

          this.arrDriver = res

          console.log('接单-普通', res)

          })
      },
      _customer_yue_jiaji () {

        customer_yue_jiaji().then( res => {

          this.arrDriver = res

          console.log('接单-加急', res)

        })
      },
      _customer_bao () {

        customer_bao().then( res => {

          this.arrDriver = res

          console.log('接单-包车', res)

        })
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
