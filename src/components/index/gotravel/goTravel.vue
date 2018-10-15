<template>
  <div>
    <div class="main-top">
      <div @click="message" style="display: flex; align-items: center">
        <img style="width: 0.30rem; height: 0.30rem" src="@/assets/index/news.png"/>
      </div>
      <div style="color: #ff682d">美美出行</div>
      <div @click="selectArea">
        <img style="width: 0.22rem; height: 0.26rem" src="@/assets/index/position.png"/>
        <span style="margin: 0 0.2rem">{{ city }}</span>
        <img style="width: 0.18rem; height: 0.1rem" src="@/assets/index/daosanjiao.png"/>
      </div>
    </div>
    <div class="slider" style="background-color: #ffffff">
      <!--<img style="width: 100%; height: 3rem" src="@/assets/index/slider.png"/>-->
      <carousel
        :autoplay="true"
        :speed="500"
        :perPage="1"
        :paginationPadding="2"
        :paginationSize="10"
        :loop="true"
      >
        <slide>
          <img style="width: 7.5rem; height: 3rem" src="@/assets/index/slider.png"/>
        </slide>
        <slide>
          <img style="width: 7.5rem; height: 3rem" src="@/assets/index/timf.jpg"/>
        </slide>
        <slide>
          <img style="width: 7.5rem; height: 3rem" src="@/assets/index/timg.jpg"/>
        </slide>
      </carousel>
    </div>
    <div class="main-travel">
      <div class="main-travel-l">
        <div ref="place1" @click="startClick">{{ startPlace }}</div>
        <div @click="changeArea">
          <img style="width: 0.57rem; height: 0.35rem" src="@/assets/index/line.png"/>
        </div>
        <div ref="place2" @click="endClick">{{ endPlace }}</div>
      </div>
      <div class="main-travel-r" @click="searchCar">查询车辆</div>
    </div>

    <div style="padding: 0.20rem; background-color: #ffffff">
      <div class="main-go">
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-right: 5px;"></div>
        <div>立即出行</div>
      </div>
      <div class="main-line" :style="{overflow: active === 'loadmore' ? 'auto' : 'hidden'}">
        <div class="main-line-item" v-for="item in arr.length" :key="'c' + item" @click="selectCar">
          <div class="main-line-item-l">
            <div>郑州</div>
            <div>
              <img style="width: 0.34rem; height: 0.15rem" src="@/assets/index/arrow.png"/>
            </div>
            <div>武汉</div>
          </div>
          <div class="main-line-item-r" style="color: #ff510d">66个</div>
        </div>
      </div>
      <div class="loading" v-if="active === '' && arr.length > 12" @click="loadMore">查看更多</div>
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
  import { Scroller, Rater } from 'vux'
  import { Carousel, Slide } from 'vue-carousel'

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
        arr: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        active: '',
        startPlace: '郑州',
        endPlace: '濮阳',

        raterNum: 5,   // 星级数量
        rateSize: 18,  // 星级字体大小
        city: '',

        tabIndex: 0
      }
    },
    mounted() {

      if (this.$route.query.value) {

        this.city = this.$route.query.value

      } else {

        this.city = '郑州'

      }

      if (this.$route.query.value1) {
  
        this.startPlace = this.$route.query.value1
  
        localStorage.setItem('startPlace', this.startPlace)
  
        this.endPlace = localStorage.getItem('endPlace')
  
      } else if (this.$route.query.value2) {
  
        this.endPlace = this.$route.query.value2
  
        localStorage.setItem('endPlace', this.endPlace)
  
        this.startPlace = localStorage.getItem('startPlace')
  
      } else {
  
        localStorage.setItem('startPlace', this.startPlace)
  
        localStorage.setItem('endPlace', this.endPlace)
  
      }

    },
    methods: {
      searchCar () {
        this.$toast.center('暂不可查询')
      },
      selectCar () {
        this.$toast.center('暂不可查询')
      },

      changeArea () {
        let temp
        temp = this.$refs.place1.innerHTML
        this.$refs.place1.innerHTML = this.$refs.place2.innerHTML
        this.$refs.place2.innerHTML = temp
        /*id也得换*/ // TODO
      },

      startClick () {
        // flag区分用户是点击出发地还是目的地
        this.$router.push({path: '/cityList', query: {flag: 'startPlace'}})
      },

      endClick () {
        this.$router.push({path: '/cityList', query: {flag: 'endPlace'}})
      },

      message () {
        this.$toast.center('暂无消息')
      },
      selectArea () {
        this.$router.push({path: '/cityList'})
      },
      loadMore () {
        this.active = 'loadmore'
      },

      // 底部导航
      change (val) {
        this.tabIndex = val
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
  .main-travel {
    margin: 0.30rem 0;
    border: 1px solid #f1d0c3;
    border-radius: 5px;
    display: flex;
    background-color: #ff682d;
  }
  .main-travel-l {
    padding: 0.20rem;
    width: 4.95rem;
    text-align: center;
    font-size: 0.50rem;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
  }
  .main-travel-r {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    font-size: 0.32rem;
    color: #ffffff;
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
    height: 5.00rem;
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
    font-size: 0.32rem;
    font-weight: bold;
    color: #ff510d;
    margin: 0.20rem 0 0.1rem 0;
    text-align: center;
  }
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
