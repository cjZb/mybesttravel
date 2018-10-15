<template>
  <div>
    <!--<div class="driverContent">
      <div class="main-start">
        <img src="../../assets/passenger/start.png"/>
        <span>郑州</span>
      </div>
      <div class="main-arrow">
        <img style="width: 0.43rem; height: 0.32rem" src="../../assets/passenger/doubleLine.png"/>
      </div>
      <div class="main-end">
        <img src="../../assets/passenger/end.png"/>
        <span>武汉</span>
      </div>
      <div style="padding: 0.35rem 0.25rem;">
        <div class="search">搜索</div>
      </div>
    </div>-->
    <div style="padding: 0.3rem">
      <div style="padding: 0.3rem 0.2rem; background-color: #ffffff; margin-bottom: 0.2rem;">
        <div class="dateStart">
          <div>
            <!--<img style="width: 0.19rem; height: 0.23rem; margin-right: 0.20rem" src="../../assets/passenger/perL.png"/>-->
            <span style="font-size: 0.32rem; color: #353535; font-weight: bold">{{itemChildren.start_city}}-{{itemChildren.end_city}}</span>
          </div>
          <span style="font-size: 0.24rem; color: #FF510D">发布时间:{{itemChildren.create_time}}</span>
        </div>
        <div class="dateStart" v-if="status === '包车'">
          <div>
            <img style="width: 0.19rem; height: 0.23rem; margin-right: 0.20rem" src="../../assets/passenger/perL.png"/>
            <span>车型</span>
          </div>
          <span style="font-size: 0.28rem; color: #333333">{{itemChildren.car_type}}</span>
        </div>
        <div class="dateStart" v-if="status !== '包车'">
          <div>
            <img style="width: 0.19rem; height: 0.23rem; margin-right: 0.20rem" src="../../assets/passenger/perL.png"/>
            <span>人数</span>
          </div>
          <span style="font-size: 0.28rem; color: #333333">{{ itemChildren.customer_numbers }}人</span>
        </div>
        <div class="dateStart">
          <div>
            <img src="../../assets/passenger/date.png"/>
            <span>出发日期</span>
          </div>
          <div>{{ goTime[0] }}-{{ goTime[1] }}-{{ goTime[2] }}</div>
          <div v-transfer-dom>
            <popup v-model="showPopup">
              <datetime-view v-model="datetime"></datetime-view>
            </popup>
          </div>
        </div>
        <div class="dateStart">
          <div>
            <img src="../../assets/passenger/time.png"/>
            <span>出发时间</span>
          </div>
          <div>
            <div>{{ goTime[3] }}:{{ goTime[4] }}</div>
          </div>
        </div>
        <div class="dateStart">
          <div>
            <img style="width: 0.19rem; height: 0.23rem; margin-right: 0.20rem" src="../../assets/passenger/perL.png"/>
            <span>姓名</span>
          </div>
          <span style="font-size: 0.28rem; color: #333333">{{itemChildren.truename}}</span>
        </div>
        <div class="dateStart">
          <div>
            <img src="../../assets/passenger/pre.png"/>
            <span>上车地点</span>
          </div>
          <div style="width: 5rem; text-align: right" class="re-overFlowes">{{itemChildren.start_address}}</div>
        </div>
        <div class="dateStart">
          <div>
            <img src="../../assets/passenger/phone.png"/>
            <span>手机号码</span>
          </div>
          <div>
            <span>{{itemChildren.phone_number}}</span>
          </div>
        </div>
        <div class="bottom-btn">
          <div style="font-size: 0.22rem; color: #FF510D;" v-if="status === '包车'">订单预算总额：{{itemChildren.expect_price}}</div>
          <div style="font-size: 0.22rem; color: #FF510D;" v-if="status === '加急'">(已支付加急费用{{itemChildren.expect_price}}元)</div>
          <div class="orderBtn" @click="orderBtn">接单</div>
        </div>
        <!--我要接单-->
        <x-dialog v-model="showOrder">
          <div class="box">
            <div class="box-title">您需支付信息费{{itemChildren.money}}元</div>
            <div class="box-content">
              <div class="box-way" style="margin-top: 0.2rem" @click="imgGot(0)">
                <div>
                  <img style="width: 0.49rem; height: 0.49rem; margin-right: 0.1rem; vertical-align: middle" src="../../assets/driver/weixin.png"/>
                  <span style="vertical-align: middle">微信支付</span>
                </div>
                <img
                  style="width: 0.35rem; height: 0.35rem"
                  :src="whichWay ? require('../../assets/driver/got.png') : require('../../assets/driver/nogot.png')"
                />
              </div>
              <div class="box-way" style="margin-top: 0.2rem"  @click="imgGot(1)">
                <div>
                  <img style="width: 0.49rem; height: 0.49rem; margin-right: 0.1rem; vertical-align: middle" src="../../assets/driver/yue.png"/>
                  <span style="vertical-align: middle">余额支付</span>
                </div>
                <img style="width: 0.35rem; height: 0.35rem" :src="!whichWay ? require('../../assets/driver/got.png') : require('../../assets/driver/nogot.png')"/>
              </div>
            </div>
            <div class="main-btn" style="background-color: #ff510d" @click="payOne(status)">支付</div>
          </div>
        </x-dialog>
        <!--我要接单end-->
      </div>
    </div>
  </div>
</template>

<script>
  import { Actionsheet, DatetimeView, Popup, TransferDom, Datetime, XDialog } from 'vux'
  import {time} from '../../../static/js/utils'
  import { accept_general_submit, price, accept_bao_submit, accept_jiaji_submit } from '@/api/allapi'

  export default {
    name: 'driverContent',
    components: {
      Actionsheet,
      DatetimeView,
      Popup,
      TransferDom,
      Datetime,
      XDialog
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        tabIndex: 1,
        menu: {
          menu1: 1,
          menu2: 2,
          menu3: 3
        },
        perNum: 1,
        startPlace: '郑州',
        endPlace: '',
        check: true,
        datetime: '2017-10-24',
        showPopup: false,

        nowTime: '12:22',
        isJiaji: false,
        introduce: false, // 加急说明
        showOrder: false, // 支付一元钱
        whichWay: true, // 选择哪种支付方式
        money: '',
        imggo: '',
      }
    },
    mounted () {
      this._price()
    },
    computed: {
      goTime() {
        return time(this.itemChildren.start_time)
      }
    },
    props: ['status', 'itemChildren'],
    methods: {

      menuClick (menuKey, menuItem) {
        this.perNum = menuItem
      },
      orderBtn () {
        this.showOrder = true
      },
      payOne (status) {

        if (this.imggo === 0) {

          this.$toast.center('微信支付暂未开放')

        } else if (this.imggo === 1) {

          if (status === '包车') {

            this._accept_bao_submit()

          } else if (status === '加急') {

            this._accept_jiaji_submit()

          } else {

            this._accept_general_submit()

          }

        }

      },
      imgGot (val) {

        this.imggo = val

        val === 0 ? this.whichWay = true : this.whichWay = false

      },
      _price () {

        price().then( res => {

          this.money = res

          console.log('接单费用', res)

        })
      },
      _accept_general_submit () {

        accept_general_submit({

          id: this.itemChildren.id,

          price: this.money,

          }).then( res => {

          this.showOrder = false

          this.$toast.center(res)

          console.log('支付', res)

        })
      },
      _accept_bao_submit () {
        accept_bao_submit({

          id: this.itemChildren.id,

          price: this.money,

        }).then( res => {

          this.showOrder = false

          this.$toast.center(res)

          console.log('支付', res)

        })
      },
      _accept_jiaji_submit () {
        accept_jiaji_submit({

          id: this.itemChildren.id,

          price: this.money,

        }).then( res => {

          this.showOrder = false

          this.$toast.center(res)

          console.log('支付', res)

        })
      }
    }
  }
</script>

<style scoped>
  .main-start {
    padding: 0.35rem 0.25rem;
    display: flex;
    align-items: center
  }
  .main-end {
    padding: 0.35rem 0.25rem;
    display: flex;
    align-items: center
  }
  .main-start img, .main-end img {
    width: 0.30rem;
    height: 0.30rem;
    margin: 0 0.10rem;
  }
  .main-arrow {
    width: 1.00rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search {
    width: 1rem;
    height: 0.45rem;
    border-radius: 5px;
    background-color: #FF510D;
    color: #ffffff;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.24rem;
  }
  .driverContent {
    display: flex;
    justify-content: center;
    font-size: 0.32rem;
    background-color: #ffffff
  }
  .dateStart {
    padding: 0.35rem 0.25rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0.28rem;
    color: #333333;
  }
  .dateStart img {
    width: 0.27rem;
    height: 0.27rem;
    margin-right: 0.10rem;
  }
  .orderBtn {
    width: 1.85rem;
    height: 0.66rem;
    border-radius: 0.1rem;
    background-color: #ff510d;
    text-align: center;
    line-height: 0.66rem;
    color: #ffffff;
    font-size: 0.34rem;
    margin-left: 0.2rem
  }
  .main-btn {
    margin: 0.2rem auto;
    width: 5.55rem;
    height: 0.80rem;
    border-radius: 0.10rem;
    text-align: center;
    line-height: 0.80rem;
    color: #ffffff;
    font-size: 0.36rem;
  }
  .box-title {
    font-size: 0.34rem;
    font-weight: bold;
    padding: 0.2rem 0;
  }
  .box-content {
    font-weight: bold;
    font-size: 0.26rem;
  }
  .box-way {
    margin: 0.3rem auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 4rem;
  }
  .bottom-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 0.2rem
  }
</style>
