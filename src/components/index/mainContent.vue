<template>
  <div>
    <div class="main-top">
      <div @click="message" style="display: flex; align-items: center">
        <img style="width: 0.30rem; height: 0.30rem" src="../../assets/index/news.png"/>
      </div>
      <div style="color: #ff682d">美美出行</div>
      <div>
        <img style="width: 0.22rem; height: 0.26rem" src="../../assets/index/position.png"/>
        <span style="margin: 0 0.2rem">{{ city }}</span>
        <!--<img style="width: 0.18rem; height: 0.1rem" src="../../assets/index/daosanjiao.png"/>-->
      </div>
    </div>
    <div class="slider" style="background-color: #ffffff">
      <carousel
        :autoplay="true"
        :speed="500"
        :perPage="1"
        :paginationPadding="2"
        :paginationSize="10"
        :loop="true"
      >
        <slide>
          <img style="width: 7.5rem; height: 3rem" src="../../assets/index/slider.png"/>
        </slide>
        <slide>
          <img style="width: 7.5rem; height: 3rem" src="../../assets/index/timf.jpg"/>
        </slide>
        <slide>
          <img style="width: 7.5rem; height: 3rem" src="../../assets/index/timg.jpg"/>
        </slide>
      </carousel>
    </div>
    <div class="main-tab">
      <div class="main-tab-item" v-for="(item, index) in arrTab" :key="index" @click="tabItem(index)">
        <div>
          <img style="width: 0.8rem; height: 0.8rem" :src="item.img"/>
        </div>
        <div>{{ item.name }}</div>
      </div>
    </div>
    <div style="padding: 0.20rem; background-color: #ffffff">
      <div class="main-go">
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-right: 5px;"></div>
        <div>立即出行</div>
      </div>
      <div class="main-line" :style="{overflow: active === 'loadmore' ? 'auto' : 'hidden'}">
        <div class="main-line-item" v-for="item in arrcity" :key="item.id" @click="selectCar(item.start_city, item.end_city, item.start_city_id, item.end_city_id)">
          <div class="main-line-item-l">
            <div>{{item.start_city}}</div>
            <div>
              <img style="width: 0.34rem; height: 0.15rem" src="../../assets/index/arrow.png"/>
            </div>
            <div>{{item.end_city}}</div>
          </div>
          <div class="main-line-item-r" style="color: #ff510d">{{item.count}}个</div>
        </div>
      </div>
      <div class="loading" v-if="active === ''" @click="loadMore">查看更多</div>
    </div>
    <div class="main-quick">
      <div class="main-go">
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-right: 5px;"></div>
        <div>快捷送货</div>
      </div>
      <!--快捷送货-->
      <div class="main-quick-content">
        <div style="font-size: 0.32rem; padding: 0.2rem 0; text-align: center">累计送货<span style="color: #ff510d">288888</span>单</div>
        <scroller lock-y :scrollbar-x="false">
          <div style="width: 16rem; display: flex" >
            <div v-for="(item, index) in 3" :key="index" class="main-scoller" @click="deliverClick">
              <div style="font-size: 0.2rem; padding: 0.20rem 0.3rem;">
                <img style="width: 0.45rem; height: 0.45rem; margin-right: 0.15rem; vertical-align: middle" src="../../assets/index/touxiang.png"/>
                <span style="vertical-align: middle">全村的希望</span>
              </div>
              <div style="padding: 0 0.8rem; color: #666">
                <div style="font-size: 0.2rem; display: flex">
                  <div>
                    <img style="width: 0.15rem; height: 0.15rem" src="../../assets/index/start_small.png"/>
                    <span>郑州</span>
                  </div>
                  <div>
                    <img style="width: 0.26rem; height: 7px; margin: 0 0.4rem" src="../../assets/index/single_arrow.png"/>
                  </div>
                  <div>
                    <img style="width: 0.15rem; height: 0.15rem" src="../../assets/index/end_small.png"/>
                    <span>武汉</span>
                  </div>
                </div>
                <div style="font-size: 0.18rem">
                  <div style="display: flex; justify-content: space-between; margin-top: 0.2rem">
                    <div>货品类型</div>
                    <div>食品</div>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin: 0.1rem 0">
                    <div>评价星级</div>
                    <div>
                      <rater v-model="raterNum" :max="5" active-color="#ff510d" :font-size="rateSize"></rater>
                    </div>
                  </div>
                  <div style="display: flex; justify-content: space-between">
                    <div>评价</div>
                    <!--<div>食品</div>-->
                  </div>
                </div>
              </div>
              <div style="font-size: 0.24rem; text-align: center; margin-top: 0.2rem">送货特别快</div>
              <div class="scroller-time">2018.09.27-16:08</div>
            </div>
          </div>
        </scroller>
        <div class="loading" >立即下单</div>
      </div>
      <!--快捷送货end-->
    </div>
    <div class="main-shop">
      <div class="main-go">
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-right: 5px;"></div>
        <div>特惠商城</div>
      </div>
      <div class="main-shop-content">
        <div class="main-shop-content-item" v-for="(item, index) in arrShop" :key="index">
          <div>
            <img style="width: 3rem; height: 3rem; border-radius: 10px" :src="item.img"/>
          </div>
          <div style="font-size: 0.28rem; margin-top: 0.2rem">{{ item.name }}</div>
          <div style="display: flex; justify-content: space-between; align-items: center">
            <div style="color: #d92704; margin: 0.2rem 0">
              <span style="font-size: 0.26rem">￥</span>
              <span style="font-size: 0.36rem">9.9</span>
              <span style="font-size: 0.26rem; color: #999999;">￥<span style=" text-decoration: line-through">12.9</span></span>
            </div>
            <div class="main-shop-detail" @click="lookDetail">查看详情</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Scroller, Rater } from 'vux'
import { Carousel, Slide } from 'vue-carousel'
import { cityLine } from '@/api/allapi'

export default {
  name: 'mainContent',
  components: {
    Scroller,
    Rater,
    Carousel,
    Slide
  },
  data () {
    return {
      arrcity: [],
      active: '',
      /*startPlace: '郑州',
      endPlace: '濮阳',*/

      arrTab: [
        {img: require('../../assets/index/tab_car.png'), name: '拼车出行'},
        {img: require('../../assets/index/tab_pos.png'), name: '立即约车'},
        {img: require('../../assets/index/tab_driver.png'), name: '司机发布'},
        {img: require('../../assets/index/tab_person.png'), name: '实名认证'},
        {img: require('../../assets/index/tab_notify.png'), name: '系统通知'},
        {img: require('../../assets/index/tab_deliver.png'), name: '我要运货'},
        {img: require('../../assets/index/tab_advice.png'), name: '新品推荐'},
        {img: require('../../assets/index/tab_shop.png'), name: '优惠商店'},
      ],
      arrShop: [
        {img: require('../../assets/index/shop_logo1.png'), name: '车内饰品摆件'},
        {img: require('../../assets/index/shop_logo2.png'), name: '汽车养护用品'},
        {img: require('../../assets/index/shop_logo3.png'), name: '车内饰品摆件'},
        {img: require('../../assets/index/shop_logo4.png'), name: '汽车养护用品'},
      ],
      raterNum: 5,   // 星级数量
      rateSize: 18,  // 星级字体大小
      city: '',
    }
  },
  mounted() {

    if (this.$route.query.value) {

      this.city = this.$route.query.value

    } else {

      this.city = '郑州'

    }

    this._cityLine()

  },
  methods: {
    selectCar (start, end, startId, endId) {
      this.$router.push({path: '/lookowner', query: {start: start, end: end, startId: startId, endId: endId}})
    },
    message () {
      this.$toast.center('暂无消息')
    },
    selectArea () {
      this.$router.push({path: '/cityList'})
    },
    loadMore () {
      this.active = 'loadmore'
      this.$router.push({path: '/goTravel', query: {}})
    },
    tabItem (val) {

      if (val === 0) {

        this.$router.push('/goTravel')

      } else if (val === 1) {

        this.$router.push('/passenger')

      }  else if (val === 2) {

        this.$router.push('/driverPublish')

      }

    },
    lookDetail () {
      this.$toast.center('暂不可查看详情')
    },
    deliverClick () {
      this.$toast.center('暂无内容')
    },
    _cityLine () {
      cityLine().then( res => {

        if (res) {

          this.arrcity = res

        }

        console.log('城市列表', res)
      })
    }
  }
}
</script>

<style scoped>
  .slider >>> .VueCarousel-pagination {
    position: absolute;
    bottom: 5px;
  }
  .main-top {
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.30rem;
    background-color: #ffffff;
  }

  .main-tab {
    margin: 0.1rem 0;
    padding: 0.1rem 0.75rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #ffffff;
  }
  .main-tab-item {
    margin: 0.2rem 0.6rem 0.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-tab-item:nth-child(4n+4) {
    margin-right: 0;
  }
  .main-go {
    display: flex;
    font-size: 0.26rem;
    font-weight: bold;
    color: #333333;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
    padding-bottom: 0.2rem;
  }
  .main-line {
    padding: 0.15rem 0.10rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /*height: 4.00rem;*/
  }
  .main-line-item {
    margin-top: 0.25rem;
    font-size: 0.26rem;
    display: flex;
    border: 1px solid #ff510d;
    border-radius: 0.30rem;
    width: 2.90rem;
  }
  .main-line-item-l {
    padding: 0.10rem;
    display: flex;
    justify-content: space-around;
    width: 2.05rem;
    border-right: 1px solid #ff510d;
  }
  .main-line-item-r {
    width: 0.8rem;
    padding: 0.10rem 0;
    text-align: center;
  }
  .loading {
    font-size: 0.24rem;
    line-height: 0.4rem;
    margin: 0.20rem auto;
    text-align: center;
    width: 1.40rem;
    height: 0.4rem;
    color: #ffffff;
    background-color: #ff510d;
    border-radius: 5px;
  }
  .main-quick, .main-shop {
    margin: 0.2rem 0;
    padding: 0.20rem;
    background-color: #ffffff;
  }
  .main-quick-content {
    padding: 0.3rem 0;
  }
  .main-scoller {
    width: 5rem;
    margin-right: 0.3rem;
    border-radius: 5px;
    box-shadow: 0 0 15px 2px rgba(0,0,0,0.1);
  }
  .scroller-time {
    font-size: 0.17rem;
    color: #333333;
    text-align: right;
    padding: 0.2rem;
  }

  .main-shop-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0.3rem;
  }
  .main-shop-content-item {
    margin: 0.2rem 0.1rem 0 0;
  }
  .main-shop-content-item:nth-child(2n+2) {
    margin-right: 0;
  }
  .main-shop-detail {
    width: 1.4rem;
    height: 0.4rem;
    color: #ffffff;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 5px;
    background-color: #ff510d;
    margin-left: 0.1rem;
  }
</style>
