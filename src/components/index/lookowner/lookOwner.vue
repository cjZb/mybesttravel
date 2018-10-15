<template>
  <div>
    <div class="owner-title">
      <div style="display: flex; align-items: center" @click="leftArrow">
        <img style="width: 0.17rem; height: 0.31rem" src="@/common/img/leftarrow.png"/>
      </div>
      <div class="owner-city">
        <span>{{ startCity }}</span>
        <img style="width: 0.45rem; height: 0.15rem; margin: 0 0.1rem" src="@/assets/index/single_arrow.png"/>
        <span>{{ endCity }}</span>
      </div>
      <div>
        <img style="width: 0.22rem; height: 0.26rem" src="@/assets/index/position.png"/>
        <span>郑州东站...</span>
      </div>
    </div>
    <div style="padding: 0.2rem;">
      <div class="owner-owner" v-for="item in ownerContent">
        <owner-content :item-children="item"></owner-content>
      </div>
    </div>
    <!--浮动提示-->
    <div class="floatTip">
      <div class="tipcar">没有合适的车辆？</div>
      <div class="go-order" @click="goOrder">马上预约</div>
    </div>
    <!--浮动提示end-->
  </div>
</template>

<script>

  import { find_driver } from '@/api/allapi'
  import OwnerContent from './ownerContent'

  export default {
    name: 'lookOwner',
    components: {
      OwnerContent
    },
    data () {
      return {
        startId: '',
        endId: '',
        startCity: '',
        endCity: '',
        ownerContent: [],
      }
    },
    computed: {

    },
    mounted () {
      this.startCity = this.$route.query.start
      this.endCity = this.$route.query.end
      this.startId = this.$route.query.startId
      this.endId = this.$route.query.endId

      this._find_driver()
    },
    methods: {

      leftArrow () {
        this.$router.go(-1)
      },
      goOrder () {
        this.$router.push('/passenger')
      },
      _find_driver () {
        find_driver({
          start_city_id: this.startId,
          end_city_id: this.endId,
        })
          .then( res => {

            this.ownerContent = res

            console.log('车主信息', res)

          })
      },
    }
  }
</script>

<style scoped>
  .owner-title {
    background-color: #ffffff;
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .owner-city {
    font-size: 0.4rem;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  .owner-owner {
    padding: 0 0.2rem;
    background-color: #ffffff;
    margin-top: 0.2rem
  }
  .floatTip {
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
    background-color: #ffffff;
    border-top: 1px solid #eee;
    padding: 0.3rem;
  }
  .tipcar, .go-order {
    display: inline-block;
  }
  .tipcar {
    font-size: 0.32rem;
    color: #333333;
    margin-right: 0.3rem;
  }
  .go-order {
    width: 1.7rem;
    height: 0.6rem;
    border-radius: 5px;
    text-align: center;
    line-height: 0.6rem;
    color: #ffffff;
    font-size: 0.32rem;
    background-color: #FF7500;
  }

</style>
