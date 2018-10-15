<template>
  <div>
    <div>
      <mheader>我的评价</mheader>
    </div>
    <div class="comment" v-for="item in 3">
      <div class="comment-top">
        <div>
          <img style="width: 0.7rem; height: 0.7rem" src="@/assets/index/name_pic.png"/>
        </div>
        <div>
          <div class="comment-top-name">
            <span style="font-size: 0.32rem; font-weight: bold">匿名用户</span>
            <span style="font-size: 0.26rem; color: #B9B8B8">2018-09-09</span>
          </div>
          <div style="display: flex; color: #FF7200; margin: 0.1rem 0">
            <span>星级</span>
            <rater v-model="commentRate" active-color="#FF7200" :font-size="15"></rater>
          </div>
          <div>
            <textarea v-model="commentText" disabled="disabled" style="width: 5.6rem; height: 1.05rem"></textarea>
          </div>
        </div>
      </div>
      <div class="comment-bottom">
        <span style="color: #FF510D">车主回复(2018-09-12):</span>
        <span style="color: #333333">谢谢了</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Mheader from '@/common/mheader'
  import { Rater } from 'vux'

  export default {
    name: 'lookComment',
    components: {
      Mheader,
      Rater
    },
    data () {
      return {
        commentRate: 5,
        commentText: '人很好，很贴心'
      }
    }
  }
</script>

<style scoped>
  .comment {
    margin-bottom: 0.2rem;
    padding: 0.3rem;
    border-top: 1px solid #eee;
    background-color: #ffffff;
  }
  .comment-top {
    display: flex;
    justify-content: space-between;
  }
  .comment-top-name {
    width: 5.9rem;
    display: flex;
    justify-content: space-between;
  }
  .comment-bottom {
    margin-top: 0.2rem;
    border-top: 1px dashed #ccc;
    font-size: 0.24rem;
    font-weight: bold;
    padding: 0.3rem 0;
  }
</style>
