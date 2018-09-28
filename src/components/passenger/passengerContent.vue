<template>
  <div>
    <div class="main-top">
      <div @click="home"><i class="iconfont icon-shouye"></i></div>
      <div style="color: #ff682d">乘客发布</div>
      <div @click="message">
        <img style="width: 0.30rem; height: 0.30rem" src="../../assets/index/news.png"/>
      </div>
    </div>
    <div style="background-color: #ffffff; margin-top: 0.10rem">
      <div class="main-go">
        <div>乘客发布</div>
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-left: 5px;"></div>
      </div>
      <div style="display: flex">
        <div>
          <div class="main-start">
            <img src="../../assets/passenger/start.png"/>
            <span>{{ startPlace }}</span>
          </div>
          <div class="main-end">
            <img src="../../assets/passenger/end.png"/>
            <input v-model="endPlace" style="color: #999999; width: 4rem;" type="text" placeholder="去哪儿"/>
          </div>
        </div>
        <div class="main-arrow" @click="arrowClick">
          <img style="width: 0.32rem; height: 0.46rem" src="../../assets/passenger/colarrow.png"/>
        </div>
      </div>
      <div class="main-person">
        <div class="main-person-l">
          <div @click="selectNum">
            <img style="width: 0.19rem; height: 0.23rem; margin-right: 0.10rem" src="../../assets/passenger/perL.png"/>
            <span style="font-size: 0.28rem; color: #333333">{{ perNum }}人</span>
          </div>
          <actionsheet
             v-model="show1"
             :menus="menu"
             theme="ios"
             @on-click-menu="menuClick"
          ></actionsheet>
        </div>
        <div class="main-person-r">
          <img style="width: 0.28rem; height: 0.28rem; margin-right: 0.10rem" src="../../assets/passenger/perY.png"/>
          <span style="font-size: 0.28rem; color: #333333">本人</span>
          <img style="width: 0.18rem; height: 0.10rem; margin-left: 0.20rem" src="../../assets/passenger/downArrow.png"/>
        </div>
      </div>
      <div class="dateStart">
        <div>
          <img src="../../assets/passenger/date.png"/>
          <span>出发日期</span>
        </div>
        <div>9月20日</div>
      </div>
      <div class="dateStart">
        <div>
          <img src="../../assets/passenger/time.png"/>
          <span>出发时间</span>
        </div>
        <div>23:20</div>
      </div>
      <div class="dateStart">
        <div>
          <img src="../../assets/passenger/pre.png"/>
          <span>上车地点</span>
        </div>
        <div style="width: 5rem; text-align: right" class="re-overFlowes">郑州绿地缤纷城绿地之窗景峰座</div>
      </div>
      <div class="dateStart">
        <div>
          <img src="../../assets/passenger/phone.png"/>
          <span>手机号码</span>
        </div>
        <div>18595836173</div>
      </div>
      <div class="dateStart">
        <div>
          <img src="../../assets/passenger/wenhao.png"/>
          <span>是否加急</span>
        </div>
        <div style="display: flex">
          <div style="margin-right: 0.60rem" @click="yesOrNo(0)">
            <img style="width: 0.25rem; height: 0.25rem" :src="tabIndex === 0 ? require('../../assets/passenger/yes.png') : require('../../assets/passenger/no.png')"/>
            <span>是</span>
          </div>
          <div @click="yesOrNo(1)">
            <img style="width: 0.25rem; height: 0.25rem" :src="tabIndex === 1 ? require('../../assets/passenger/yes.png') : require('../../assets/passenger/no.png')"/>
            <span>否</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-pay">
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
import { Actionsheet } from 'vux'

export default {
  name: 'passengerContent',
  components: {
    Actionsheet
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
      endPlace: '',
      check: true
    }
  },
  methods: {
    yesOrNo (val) {
      this.tabIndex = val
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

        if (this.endPlace !== '') {

          this.$toast.center('暂不支持购票')

        } else {

          this.$toast.center('请输入目的地')

        }
      }
    }
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
  .main-go {
    display: flex;
    font-size: 0.26rem;
    font-weight: bold;
    color: #333333;
    align-items: center;
    padding: 0.20rem 0.25rem;
    border-bottom: 1px solid #eaeaea;
  }
  .main-start {
    padding: 0.35rem 0.25rem;
    width: 5.8rem;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
    align-items: center
  }
  .main-end {
    padding: 0.35rem 0.25rem;
    width: 5.8rem;
    display: flex;
    align-items: center
  }
  .main-start img, .main-end img {
    width: 0.30rem;
    height: 0.30rem;
    margin-right: 0.10rem;
  }
  .main-arrow {
    width: 1.00rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-person {
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
  }
  .main-person-l {
    width: 3.7rem;
    padding: 0.35rem 0;
    text-align: center;
    border-right: 1px solid #e7e7e7;

  }
  .main-person-r {
    width: 3.7rem;
    padding: 0.35rem 0;
    text-align: center;
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
</style>
