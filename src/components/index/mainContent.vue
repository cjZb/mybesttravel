<template>
  <div>
    <div class="main-top">
      <div @click="message">
        <img style="width: 0.30rem; height: 0.30rem" src="../../assets/index/news.png"/>
      </div>
      <div style="color: #ff682d">美美出行</div>
      <div @click="selectArea">郑州</div>
    </div>
    <div>
      <img style="width: 100%; height: 3rem" src="../../assets/index/slider.png"/>
    </div>
    <div class="main-travel">
      <div class="main-travel-l">
        <div ref="place1" @click="startClick">{{ startPlace }}</div>
        <div @click="changeArea">
          <img style="width: 0.57rem; height: 0.35rem" src="../../assets/index/line.png"/>
        </div>
        <div ref="place2" @click="endClick">{{ endPlace }}</div>
      </div>
      <div class="main-travel-r" @click="searchCar">查询车辆</div>
    </div>
    <div style="padding: 0.20rem; background-color: #ffffff">
      <div class="main-go">
        <div>立即出发</div>
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-left: 5px;"></div>
      </div>
      <div class="main-line" :style="{overflow: active === 'loadmore' ? 'auto' : 'hidden'}">
        <div class="main-line-item" v-for="item in arr.length" :key="'c' + item" @click="selectCar">
          <div class="main-line-item-l">
            <div>郑州</div>
            <div>
              <img style="width: 0.34rem; height: 0.15rem" src="../../assets/index/arrow.png"/>
            </div>
            <div>武汉</div>
          </div>
          <div class="main-line-item-r" style="color: #ff510d">66个</div>
        </div>
      </div>
      <div class="loading" v-if="active === '' && arr.length > 12" @click="loadMore">LOADING...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainContent',
  data () {
    return {
      arr: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      active: '',
      startPlace: '郑州',
      endPlace: '濮阳',
    }
  },
  mounted() {
    if (this.$route.query.value1) {

      this.startPlace = this.$route.query.value1

    } else if (this.$route.query.value2) {

      this.endPlace = this.$route.query.value2

    } else {

      this.startPlace = '郑州'

      this.endPlace = '濮阳'

    }

  },
  methods: {
    searchCar () {
      this.$toast.center('暂不可查询')
    },
    selectCar () {
      this.$toast.center('暂不可选择')
    },
    message () {
      this.$toast.center('暂无消息')
    },
    selectArea () {
      this.$toast.center('暂不可选择地区')
    },
    changeArea () {
      let temp
      temp = this.$refs.place1.innerHTML
      this.$refs.place1.innerHTML = this.$refs.place2.innerHTML
      this.$refs.place2.innerHTML = temp
    },
    loadMore () {
      this.active = 'loadmore'
    },
    startClick () {
      // flag区分用户是点击出发地还是目的地
      this.$router.push({path: '/cityList', query: {flag: 'startPlace'}})
    },
    endClick () {
      this.$router.push({path: '/cityList', query: {flag: 'endPlace'}})
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
</style>
