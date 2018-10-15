<template>
  <div>
    <div style="background-color: #ffffff">
      <div style="display: flex; justify-content: center; font-size: 0.4rem">
        <div class="main-start" @click="startClick">
          <img src="../../assets/passenger/start.png"/>
          <span>{{ startPlace }}</span>
        </div>
        <div class="main-arrow" @click="arrowClick">
          <img style="width: 0.43rem; height: 0.32rem" src="../../assets/passenger/doubleLine.png"/>
        </div>
        <div class="main-end" @click="endClick">
          <img src="../../assets/passenger/end.png"/>
          <span>{{ endPlace }}</span>
        </div>
      </div>
      <div class="dateStart">
        <div>
          <img style="width: 0.19rem; height: 0.23rem; margin-right: 0.20rem" src="../../assets/passenger/perL.png"/>
          <span>人数</span>
        </div>
        <span @click="selectNum" style="font-size: 0.28rem; color: #333333">{{ perNum }}人</span>
      </div>
      <!--人数弹窗-->
      <actionsheet
        v-model="show1"
        :menus="menu"
        theme="ios"
        @on-click-menu="menuClick"
      ></actionsheet>
      <!--end-->
      <div class="dateStart">
        <div>
          <img src="../../assets/passenger/date.png"/>
          <span>出发日期</span>
        </div>
        <div @click="showPopup = true">{{ datetime }}</div>
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
          <datetime v-model="nowTime" format="HH:mm"></datetime>
        </div>
      </div>
      <div class="dateStart">
        <div>
          <img src="../../assets/passenger/pre.png"/>
          <span>上车地点</span>
        </div>
        <div style="width: 5rem; text-align: right" class="re-overFlowes" @click="startAddress">{{ start_address }}</div>
      </div>
      <div class="dateStart">
        <div>
          <img src="../../assets/passenger/phone.png"/>
          <span>手机号码</span>
        </div>
        <div>
          <span>{{cus_phone}}</span>
        </div>
      </div>
      <div class="dateStart">
        <div>
          <img src="../../assets/passenger/wenhao.png"/>
          <span>是否加急</span>
        </div>
        <div style="display: flex">
          <div style="margin-right: 0.60rem" @click="yesOrNo(1)">
            <img style="width: 0.25rem; height: 0.25rem" :src="tabIndex === 1 ? require('../../assets/passenger/yes.png') : require('../../assets/passenger/no.png')"/>
            <span>是</span>
          </div>
          <div @click="yesOrNo(0)">
            <img style="width: 0.25rem; height: 0.25rem" :src="tabIndex === 0 ? require('../../assets/passenger/yes.png') : require('../../assets/passenger/no.png')"/>
            <span>否</span>
          </div>
        </div>
      </div>
      <!--加急说明-->
      <div>
        <x-dialog v-model="introduce">
          <div class="dlog">
            <div class="dlog-title">加急说明</div>
            <div class="dlog-content">
              <p>
                拼友提交预约请求后，系统会持续匹配与您出行时 相符的车主，并实时通知给您。拼友提交预约请求后 ，系统会持续匹配与您出行时
                拼友提交预约请求后，系统会持续匹配与您出行时 相符的车主，并实时通知给您。拼友提交预约请求后 ，系统会持续匹配与您出行时
              </p>
            </div>
            <div class="dlog-no">
              <input type="checkbox"/>
              <span>不再提示</span>
            </div>
            <div class="dlog-btn" @click="iknow">我知道了</div>
          </div>
        </x-dialog>
      </div>
      <!--end-->
    </div>
    <div class="main-pay">
      <span v-if="isJiaji" style="font-size: 0.22rem; color: #FF510D; margin-right: 0.2rem">(另外需付加急费用10元)</span>
      <span style="font-size: 0.26rem; color: #333333">预计支付<span class="main-pay-num">198</span>元</span>
    </div>
    <div class="main-protocol">
      <input @click="selectPro" v-model="check" style="vertical-align: middle" type="checkbox" />
      <span>我已阅读并同意美美出行<span style="color: #ff510d; vertical-align: middle">《合乘协议》</span></span>
    </div>
    <div class="main-btn" :style="{backgroundColor: check === true ? '#ff510d' : '#ccc'}" @click="rightGo">立即发布</div>
    <div class="main-tip">
      <p style="margin: 0.1rem 0">1.拼友提交预约请求后，系统会持续匹配与您出行时间相符的车主，并实时通知给您。</p>
      <p style="margin: 0.1rem 0">
        2.<span style="color: #ff510d">匹配成功，不是定做成功。</span>此功能仅仅是通知提醒功能，拼友还要自己判断车主路线是否符合自己。
      </p>
    </div>
  </div>
</template>

<script>
import { Actionsheet, DatetimeView, Popup, TransferDom, Datetime, XDialog } from 'vux'
import { back, cus_fabu_yue } from '@/api/allapi'

export default {
  name: 'passengerContent',
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
      tabIndex: 0,
      show1: false,
      menu: {
        menu1: 1,
        menu2: 2,
        menu3: 3
      },
      perNum: 1,
      startPlace: '郑州',
      endPlace: '濮阳',
      check: true,
      datetime: '2017-10-24',
      showPopup: false,

      nowTime: '12:22',
      isJiaji: false,
      introduce: false, // 加急说明

      cus_phone: '',
      start_address: '中兴路心怡路交叉口易元国际',
      start_city_id: '',
      end_city_id: '',
    }
  },
  mounted () {

    this.start_city_id = this.$route.query.startId

    this.end_city_id = this.$route.query.endId

    if (this.$route.query.value1) {

      this.startPlace = this.$route.query.value1

      localStorage.setItem('startPlace', this.startPlace)

      localStorage.setItem('start_city_id', this.start_city_id)

      this.endPlace = localStorage.getItem('endPlace')

    } else if (this.$route.query.value2) {

      this.endPlace = this.$route.query.value2

      localStorage.setItem('endPlace', this.endPlace)

      localStorage.setItem('end_city_id', this.end_city_id)

      this.startPlace = localStorage.getItem('startPlace')

    } else {

      this._back()

    }
  },
  methods: {
    startAddress () {
      this.$toast.center('暂不可选择地址')
    },
    startClick () {
      // flag区分用户是点击出发地还是目的地
      this.$router.push({path: '/cityList', query: {flag: 'startPlace', from: '乘客发布'}})
    },

    endClick () {
      this.$router.push({path: '/cityList', query: {flag: 'endPlace', from: '乘客发布'}})
    },
    yesOrNo (val) {
      this.tabIndex = val
      if (val === 0) {

        this.isJiaji = false

        this.introduce = false

      } else {

        this.isJiaji = true

        this.introduce = true

      }
    },
    home () {
      this.$toast.center('暂不知去向')
    },
    message () {
      this.$toast.center('暂无消息')
    },
    selectNum () {
      this.show1 = true
    },
    menuClick (menuKey, menuItem) {
      this.perNum = menuItem
    },
    arrowClick () {
      let temp
      if (this.endPlace !== '') {

        temp = this.startPlace

        this.startPlace = this.endPlace

        this.endPlace = temp

      } else {

        this.$toast.center('请输入目的地')

      }
    },
    selectPro () {
      this.check = !this.check
    },
    rightGo () {

      if (this.check) {

        this._cus_fabu_yue()

       /* if (this.endPlace !== '') {

          this.$toast.center('暂不支持购票')

        } else {

          this.$toast.center('请输入目的地')

        }*/
      }
    },
    iknow () {
      this.introduce = false
    },
    _back () {
      back().then(res => {

        this.cus_phone = res.cus_phone

        this.startPlace = res.yue_city_info.start_city

        this.start_city_id = res.yue_city_info[0].start_city_id

        this.endPlace = res.yue_city_info.end_city

        this.end_city_id = res.yue_city_info[0].end_city_id

        this.cus_phone = this.cus_phone.substring(0, 3) + '****' + this.cus_phone.substring(7, 11)

        localStorage.setItem('startPlace', this.startPlace)

        localStorage.setItem('start_city_id', this.start_city_id)

        localStorage.setItem('endPlace', this.endPlace)

        localStorage.setItem('end_city_id', this.end_city_id)

        console.log('backback', res)

      })
    },
    _cus_fabu_yue () {
      let start_time = new Date(this.datetime + ' ' + this.nowTime).getTime()
      cus_fabu_yue({
        start_city_id: localStorage.getItem('start_city_id'),
        end_city_id: localStorage.getItem('end_city_id'),
        start_time: start_time,
        customer_numbers: this.perNum,
        start_address: this.start_address,
        is_hurry: this.tabIndex,
      })
        .then(res => {

          this.$toast.center(res)

          this.$router.push('/personCenter')

          console.log('乘客发布', res)

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
  .main-pay {
    padding: 0.20rem;
    text-align: right;
  }
  .main-pay-num {
    color: #ff510d;
    font-size: 0.40rem;
    margin: 0.10rem;
  }
  .main-protocol {
    padding: 0.1rem;
    font-size: 0.22rem;
    text-align: center;
  }
  .main-btn {
    margin: 0.2rem auto;
    width: 5.55rem;
    height: 0.80rem;
    border-radius: 0.50rem;
    text-align: center;
    line-height: 0.80rem;
    color: #ffffff;
    font-size: 0.36rem;
  }
  .main-tip {
    font-size: 0.26rem;
    padding: 0.20rem 0.3rem;
    color: #666;
  }
  .dlog {
    border-radius: 5px;
    padding: 0.3rem;
  }
  .dlog-title {
    font-size: 0.4rem;
    font-weight: bold;
    color: #FF510D;
  }
  .dlog-content {
    font-size: 0.26rem;
    font-weight: 300;
    margin: 0.2rem 0;
  }
  .dlog-no {
    font-size: 0.28rem;
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 0.3rem;
  }
  .dlog-btn {
    border-radius: 0.1rem;
    color: #ffffff;
    height: 0.68rem;
    line-height: 0.68rem;
    text-align: center;
    background-color: #FF510D;
  }
</style>
