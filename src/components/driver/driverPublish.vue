<template>
  <div>
    <div>
      <mheader>司机发布</mheader>
    </div>
    <div style="background-color: #ffffff; margin-top: 0.10rem">
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
          <img style="width: 0.19rem; height: 0.23rem; margin-right: 0.20rem" src="../../assets/driver/price.png"/>
          <span>价格</span>
        </div>
        <span style="font-size: 0.28rem; color: #333333">
          <input style="text-align: right" v-model="pin_amount" type="number" placeholder="请输入价格"/>
          <span>元/位</span>
        </span>
      </div>
      <div class="dateStart">
        <div>
          <img style="width: 0.19rem; height: 0.23rem; margin-right: 0.20rem" src="../../assets/driver/zuowei.png"/>
          <span>余座</span>
        </div>
        <input style="font-size: 0.28rem; color: #333333; text-align: right" v-model="rest_sits" type="number" placeholder="请输入余座"/>
      </div>
      <div class="dateStart">
        <div>
          <img style="width: 0.19rem; height: 0.23rem; margin-right: 0.20rem" src="../../assets/driver/wayline.png"/>
          <span>路线</span>
        </div>
        <div>
          <textarea v-model="introduceLine" class="drivetext"></textarea>
        </div>
      </div>
      <div class="dateStart">
        <div>
          <img style="width: 0.19rem; height: 0.23rem; margin-right: 0.20rem" src="../../assets/driver/remark.png"/>
          <span>备注</span>
        </div>
        <div>
          <textarea v-model="beizhu" class="drivetext"></textarea>
        </div>
      </div>
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
  import { Actionsheet, DatetimeView, Popup, TransferDom, Datetime, XDialog   } from 'vux'
  import Mheader from '@/common/mheader'
  import { back, dri_fabu } from '@/api/allapi'

  export default {
    name: 'passengerContent',
    components: {
      Actionsheet,
      DatetimeView,
      Popup,
      TransferDom,
      Datetime,
      XDialog,
      Mheader
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        tabIndex: 1,
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

        start_address: '中兴路心怡路交叉口易元国际',
        start_city_id: '',
        end_city_id: '',
        pin_amount: '', // 价格
        introduceLine: '', // 路线介绍
        beizhu: '',
        rest_sits: '', // 余座
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
        this.$router.push({path: '/cityList', query: {flag: 'startPlace', from: '司机发布'}})
      },

      endClick () {
        this.$router.push({path: '/cityList', query: {flag: 'endPlace', from: '司机发布'}})
      },
      yesOrNo (val) {
        this.tabIndex = val
        if (val === 0) {

          this.isJiaji = true

          this.introduce = true

        } else {

          this.isJiaji = false

          this.introduce = false

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

          this._dri_fabu()

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

          this.startPlace = res.dri_city_info.start_city

          this.start_city_id = res.dri_city_info[0].start_city_id

          this.endPlace = res.dri_city_info.end_city

          this.end_city_id = res.dri_city_info[0].end_city_id

          this.cus_phone = this.cus_phone.substring(0, 3) + '****' + this.cus_phone.substring(7, 11)

          localStorage.setItem('startPlace', this.startPlace)

          localStorage.setItem('start_city_id', this.start_city_id)

          localStorage.setItem('endPlace', this.endPlace)

          localStorage.setItem('end_city_id', this.end_city_id)

          console.log('backback', res)

        })
      },
      _dri_fabu () {
        let start_time = new Date(this.datetime + ' ' + this.nowTime).getTime()
        dri_fabu({
          start_city_id: localStorage.getItem('start_city_id'),
          end_city_id: localStorage.getItem('end_city_id'),
          pin_amount: this.pin_amount,
          start_time: start_time,
          specific_address: this.start_address,
          introduce: this.introduceLine,
          beizhu: this.beizhu,
          rest_sits: '',
        })
          .then(res => {

            this.$toast.center(res)

            this.$router.push('/personCenter')

            console.log('司机发布', res)

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
  .drivetext {
    width: 4.75rem;
    height: 1.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.1rem;
  }
</style>

