<template>
  <div>
    <div>
      <mheader>个人中心</mheader>
    </div>
    <div class="person-banner">
      <img style="width: 100%; height: 3.12rem" src="@/assets/person/personbanner.png"/>
      <div class="person-banner-info">
        <div style="margin-right: 0.24rem; display: inline-block; vertical-align: middle">
          <img style="width: 1.15rem; height: 1.15rem; border-radius: 50%" src="@/assets/person/personPic.png"/>
        </div>
        <div style="display: inline-block; vertical-align: middle">
          <div>
            <span class="nickname">你的笑舔掉了牙</span>
            <img style="width: 0.25rem; height: 0.25rem; margin-left: 0.1rem" src="@/assets/index/sex.png"/>
            <img style="width: 0.25rem; height: 0.20rem; margin: 0 0.1rem" src="@/assets/index/truth.png"/>
            <img style="width: 0.25rem; height: 0.18rem" src="@/assets/index/member.png"/>
          </div>
          <div class="truthname">真实姓名：李庆峰</div>
        </div>
      </div>
      <div class="person-banner-money">
        <div class="money-con">
          <div>
            <div class="money-num">500.00</div>
            <div class="money-sur">余额</div>
          </div>
          <div class="middle-line"></div>
          <div>
            <div class="money-num">v3</div>
            <div class="money-sur">等级</div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
    <div style="padding: 0 0.2rem">
      <!--拼车-->
      <div class="person-content">
        <div class="person-content-title">拼车</div>
        <div class="person-content-con">
          <div class="con-item" v-for="(item, index) in arrPinche" @click="pinChe(index)">
            <div>
              <img style="width: 0.5rem; height: 0.5rem" :src="item.img"/>
            </div>
            <div class="con-truth">{{item.name}}</div>
          </div>
          <!--更多-->
          <div class="con-item" v-if="!more" @click="moreClick">
            <div>
              <img style="width: 0.5rem; height: 0.5rem" :src="arrMore.img"/>
            </div>
            <div class="con-truth">{{arrMore.name}}</div>
          </div>
          <div class="con-item" v-if="more" v-for="(item, index) in arrPincheChildren" @click="pinCheChildren(index)">
            <div>
              <img style="width: 0.5rem; height: 0.5rem" :src="item.img"/>
            </div>
            <div class="con-truth">{{item.name}}</div>
          </div>
          <!--更多end-->
        </div>
      </div>
      <!--送货-->
      <div class="person-content">
        <div class="person-content-title">送货</div>
        <div class="person-content-con">
          <div class="con-item" v-for="item in arrSh" @click="songHuo">
            <div>
              <img style="width: 0.5rem; height: 0.5rem" :src="item.img"/>
            </div>
            <div class="con-truth">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--商城-->
      <div class="person-content">
        <div class="person-content-title">商城</div>
        <div class="person-content-con">
          <div class="con-item" v-for="item in arrSc" @click="shangCheng">
            <div>
              <img style="width: 0.5rem; height: 0.5rem" :src="item.img"/>
            </div>
            <div class="con-truth">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Mheader from '@/common/mheader'

  export default {
    name: 'personCenter',
    components: {
      Mheader,
    },
    data () {
      return {
        arrPinche: [
          {img: require('../../assets/person/truthname.png'), name: '实名认证'},
          {img: require('../../assets/person/per1.png'), name: '车主认证'},
          {img: require('../../assets/person/per2.png'), name: '我要接单'},
          {img: require('../../assets/person/per3.png'), name: '我的发布'},
          {img: require('../../assets/person/per4.png'), name: '我的评价'},
          {img: require('../../assets/person/per5.png'), name: '我的订单'},
          {img: require('../../assets/person/per6.png'), name: '余额明细'},
        ],
        arrMore: {img: require('../../assets/person/per7.png'), name: '更多'},
        arrPincheChildren: [
          {img: require('../../assets/person/per17.png'), name: '升级记录'},
          {img: require('../../assets/person/per18.png'), name: '个人资料'},
          {img: require('../../assets/person/per19.png'), name: '投诉反馈'},
        ],
        arrSh: [
          {img: require('../../assets/person/per8.png'), name: '订单管理'},
          {img: require('../../assets/person/per1.png'), name: '车主认证'},
          {img: require('../../assets/person/per9.png'), name: '我要接单'},
          {img: require('../../assets/person/per10.png'), name: '我的评价'},
        ],
        arrSc: [
          {img: require('../../assets/person/per11.png'), name: '待付款'},
          {img: require('../../assets/person/per12.png'), name: '待发货'},
          {img: require('../../assets/person/per13.png'), name: '待收货'},
          {img: require('../../assets/person/per14.png'), name: '待评价'},
          {img: require('../../assets/person/per15.png'), name: '售后'},
          {img: require('../../assets/person/per16.png'), name: '我的订单'},
        ],
        more: false, // 更多
      }
    },
    methods: {
      moreClick () {
        this.more = true
      },
      pinChe (val) {
        if (val === 0) {

          this.$toast.center('暂未开放')

        } else if (val === 1) {

          this.$router.push('/driverAuth')

        }  else if (val === 2) {

          this.$router.push('/getOrder')

        }  else if (val === 3) {

          this.$toast.center('暂未开放')

        }  else if (val === 4) {

          this.$router.push('/myOrder')

        }  else if (val === 5) {

          this.$toast.center('暂未开放')

        }

      },
      pinCheChildren () {
        this.$toast.center('暂未开放')
      },
      songHuo () {
        this.$toast.center('暂未开放')
      },
      shangCheng () {
        this.$toast.center('暂未开放')
      },
    }
  }
</script>

<style scoped>
  .person-banner {
    position: relative;
    margin-bottom: 0.8rem;
  }
  .person-content {
    border-radius: 0.2rem;
    box-shadow:0 0 15px 0 rgba(69,0,0,0.05);
    background-color: #ffffff;
    margin-bottom: 0.2rem;
  }
  .person-content-title {
    padding: 0.2rem;
  }
  .person-banner-info {
    position: absolute;
    top: 0.7rem;
    left: 0.4rem;
  }
  .person-banner-money {
    position: absolute;
    top: 2.46rem;
    left: 0.25rem;
    width: 7rem;
    height: 1.3rem;
    background-color: #ffffff;
    border-radius: 0.2rem;
    box-shadow:0 0 15px 0 rgba(69,0,0,0.05);
  }
  .money-con {
    padding: 0.25rem 0;
    display: flex;
    justify-content: center;
  }
  .middle-line {
    width: 2px;
    background-color: #F1F1F1;
    margin: 0 1.1rem;
  }
  .money-num {
    font-size: 0.36rem;
    font-weight: bold;
    color: #FE6400;
    text-align: center;
  }
  .money-sur {
    font-size: 0.22rem;
    margin-top: 0.2rem;
    color: #333333;
    text-align: center;
  }
  .nickname {
    font-size: 0.38rem;
    font-weight: bold;
    color: #ffffff;
  }
  .truthname {
    margin-top: 0.20rem;
    font-size: 0.21rem;
    font-weight: bold;
    color: #ffffff;
  }
  .person-content-title {
    padding: 0.2rem;
    color: #333333;
    font-size: 0.28rem;
    font-weight: bold;
    border-bottom: 2px solid #F1F1F1;
  }
  .person-content-con {
    padding: 0.4rem;
    display: flex;
    flex-wrap: wrap;
  }
  .con-truth {
    font-size: 0.24rem;
    color: #666666;
    margin-top: 0.2rem;
  }
  .con-item {
    margin: 0 0.8rem 0.58rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .con-item:nth-child(4n+4) {
    margin-right: 0;
  }
</style>
