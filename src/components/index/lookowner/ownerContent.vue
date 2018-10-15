<template>
  <div>
    <div class="owner-time">{{startTime[1]}}月{{startTime[2]}}日 {{startTime[3]}}:{{startTime[4]}}</div>
    <div class="owner-content">
      <div style="display: flex; align-items: center">
        <img style="width: 0.7rem; height: 0.7rem" :src="itemChildren.user_photo ? itemChildren.user_photo : require('@/assets/index/name_pic.png')"/>
        <span style="font-weight: bold; color: #353535; font-size: 0.28rem; margin: 0 0.1rem">{{itemChildren.username}}</span>
        <img style="width: 0.25rem; height: 0.25rem" src="@/assets/index/sex.png"/>
        <img style="width: 0.25rem; height: 0.20rem; margin: 0 0.1rem" src="@/assets/index/truth.png"/>
        <img style="width: 0.25rem; height: 0.18rem" src="@/assets/index/member.png"/>
      </div>
      <div style="display: flex; justify-content: space-between">
        <div class="ower-content-l">
          <div class="ower-detail">
            <img class="smallImg" src="@/assets/index/scar.png"/>
            <span style="vertical-align: middle">车型: {{itemChildren.car_type}}</span>
          </div>
          <div class="ower-detail">
            <img class="smallImg" src="@/assets/index/sline.png"/>
            <span style="vertical-align: middle" >路线: {{itemChildren.introduce}}</span>
          </div>
          <div class="ower-detail">
            <img class="smallImg" src="@/assets/index/sdot.png"/>
            <span style="vertical-align: middle">出发地点: {{itemChildren.specific_address}}</span>
          </div>
          <div class="ower-detail">
            <img class="smallImg" src="@/assets/index/sdoth.png"/>
            <span style="vertical-align: middle">备注: {{itemChildren.beizhu}}.</span>
          </div>
        </div>
        <div class="ower-content-r">
          <div>
            <span style="color: #FE2700; font-size: 0.30rem">{{itemChildren.pin_amount}}</span>
            <span style="color: #666666; font-size: 0.20rem">元/位</span>
          </div>
          <div style="margin-top: 0.2rem"><span>余<span style="color: #FFA126; font-size: 0.2rem">{{itemChildren.rest_sits}}</span>座</span></div>
        </div>
      </div>
      <div class="ower-bottom">
        <div @click="dricom(itemChildren.driver_id)">
          <img style="width: 0.22rem; height: 0.22rem" src="@/assets/index/scomment.png"/>
          <span>{{itemChildren.comment_count}}</span>
        </div>
        <div class="owner-order" @click="orderClick">预定</div>
      </div>
    </div>
    <!--立即预定-->
    <x-dialog v-model="showOrder">
      <div class="box">
        <div class="box-title">预定座位</div>
        <div class="box-item">
          <div class="box-item-l">手机号</div>
          <div>
            <input v-model="cus_phone" class="box-item-r" type="text" placeholder="请输入手机号"/>
          </div>
        </div>
        <div class="box-item">
          <div class="box-item-l">预订人数</div>
          <div>
            <input v-model="yue_members" class="box-item-r" type="text" placeholder="请输入人数"/>
          </div>
        </div>
        <div class="box-item">
          <div class="box-item-l">上车点</div>
          <div>
            <input v-model="start_address" class="box-item-r" type="text" placeholder="请输入上车地点"/>
          </div>
        </div>
        <div class="main-protocol">
          <input @click="selectPro" v-model="check" style="vertical-align: middle" type="checkbox" />
          <span>我已阅读并同意美美出行<span style="color: #ff510d; vertical-align: middle">《合乘协议》</span></span>
        </div>
        <div class="main-btn" :style="{backgroundColor: check === true ? '#ff510d' : '#ccc'}" @click="rightGo">立即预定</div>
      </div>
    </x-dialog>
    <!--立即预定end-->
  </div>
</template>

<script>
  import {time} from '../../../../static/js/utils'
  import { customer_order } from '@/api/allapi'
  import { XDialog } from 'vux'

  export default {
    name: 'ownerContent',
    components: {
      XDialog,
    },
    data () {
      return {
        showOrder: false, // 弹窗
        check: true, // 是否同意协议
        cus_phone: '',
        yue_members: '',
        start_address: '',
      }
    },
    computed: {
      startTime () {
        return time(this.itemChildren.start_time)
      }
    },
    props: {
      itemChildren: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      dricom (val) {
        this.$router.push({path: '/driverComment', query: {driver_id: val}})
      },
      orderClick () {
        this.showOrder = true
      },
      selectPro () {
        this.check = !this.check
      },
      rightGo () {

         if (this.check) {

           this._customer_order()

           // if (this.endPlace !== '') {
           //
           //   this.$toast.center('暂不支持购票')
           //
           // } else {
           //
           //   this.$toast.center('请输入目的地')
           //
           // }
         }

      },
      _customer_order () {
        customer_order({
          driver_pin_id: this.itemChildren.id,
          cus_phone: this.cus_phone,
          yue_members: this.yue_members,
          start_address: this.start_address,
        })
          .then(res => {

            this.$toast.center(res)

            this.showOrder = false

            console.log('预定', res)

          })
      },
    }
  }
</script>

<style scoped>
  .owner-time {
    padding: 0.3rem;
    text-align: center;
    font-weight: bold;
    font-size: 0.32rem;
    border-bottom: 1px solid #eee;
  }
  .owner-content {
    padding: 0.2rem 0;
  }
  .ower-content-l {
    width: 4.5rem;
    font-size: 0.28rem;
    color: #353535;
  }
  .ower-content-r {
    width: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .smallImg {
    width: 0.16rem;
    height: 0.16rem;
    margin-right: 0.15rem;
    vertical-align: middle;
  }
  .ower-detail {
    margin-top: 0.2rem;
  }
  .ower-bottom {
    padding: 0.2rem 0;
    display: flex;
    justify-content: space-between;
  }
  .owner-order {
    width: 1.2rem;
    height: 0.45rem;
    border-radius: 5px;
    text-align: center;
    line-height: 0.45rem;
    color: #ffffff;
    font-size: 0.26rem;
    background-color: #FF7500;
  }
  .box {
    padding: 0.3rem;
  }
  .box-title {
    font-size: 0.4rem;
    color: #ff510d;
    font-weight: bold;
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
    border-radius: 0.10rem;
    text-align: center;
    line-height: 0.80rem;
    color: #ffffff;
    font-size: 0.36rem;
  }
  .box-item {
    display: flex;
    margin-top: 0.2rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .box-item-l {
    width: 1.45rem;
    height: 0.68rem;
    /*border-right: 1px solid #ccc;*/
    font-size: 0.28rem;
    background-color: #F1F1F1;
    text-align: center;
    line-height: 0.68rem;
  }
  .box-item-r {
    width: 3.4rem;
    height: 0.68rem;
    font-size: 0.28rem;
    padding-left: 0.1rem;
  }
</style>
