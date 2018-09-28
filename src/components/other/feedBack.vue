<template>
  <div style="background-color: #ffffff" :style="{width: width, height: height}">
    <div>
      <mheader>投诉反馈</mheader>
    </div>
    <div class="main-feed">
      <div style="color: #FF510D">1.投诉客服微信</div>
      <div>
        <img style="width: 3.4rem; height: 3.4rem" src="../../assets/other/img/erweima.png"/>
      </div>
      <div>（长按图片识别二维码，添加客服微信）</div>
    </div>
    <div class="phone-feed">
      <div style="color: #FF510D">2.投诉客服电话：</div>
      <div style="font-size: 0.7rem">133  0303  3313</div>
      <div>(电机号码，直接拨打）</div>
    </div>
  </div>
</template>

<script>
  import Mheader from '@/common/mheader'

  export default {
    name: 'feedBack',
    components: {
      Mheader
    },
    data () {
      return {
        width: window.innerWidth + 'px',
        height: window.innerHeight + 'px',
      }
    }
  }
</script>

<style scoped>
  .main-feed, .phone-feed {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 0.30rem;
  }
  .main-feed {
    height: 5.25rem;
    border-top: 1px solid #eee;
  }
  .phone-feed {
    margin-top: 1.2rem;
    height: 2.25rem;
  }
</style>
