<template>
  <div>
    <div class="comment-top">
      <div>
        <img style="width: 0.7rem; height: 0.7rem" :src="itemChildren.user_photo ? itemChildren.user_photo : require('@/assets/index/name_pic.png')"/>
      </div>
      <div>
        <div class="comment-top-name">
          <span style="font-size: 0.32rem; font-weight: bold">{{itemChildren.cus_name}}</span>
          <span style="font-size: 0.26rem; color: #B9B8B8">{{itemChildren.create_time}}</span>
        </div>
        <div style="display: flex; color: #FF7200; margin: 0.1rem 0">
          <span>星级</span>
          <rater v-model="itemChildren.review_scores" active-color="#FF7200" :font-size="15"></rater>
        </div>
        <div>
          <div style="width: 5.6rem; padding: 0.1rem; background-color: #e7e7e7">{{itemChildren.comment}}</div>
        </div>
      </div>
    </div>
    <div class="comment-bottom">
      <span style="color: #FF510D">车主回复({{owerTime[0]}}-{{owerTime[1]}}-{{owerTime[2]}}):</span>
      <span style="color: #333333">{{itemChildren.driver_reply}}</span>
    </div>
  </div>
</template>

<script>
  import {time} from '../../../static/js/utils'
  import { Rater } from 'vux'

  export default {
    name: 'singleComment',
    components: {
      Rater,
    },
    data () {
      return {

      }
    },
    computed: {
      owerTime () {
        return time(this.itemChildren.driver_reply_time)
      }
    },
    props: {
      itemChildren: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style scoped>
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
