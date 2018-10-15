<template>
  <div>
    <div>
      <mheader>车主评价</mheader>
    </div>
    <div class="comment" v-for="item in arrComment">
      <single-comment :item-children="item"></single-comment>
    </div>
  </div>
</template>

<script>
  import Mheader from '@/common/mheader'
  import { all_dri_comment } from '@/api/allapi'
  import SingleComment from './singleComment'

  export default {
    name: 'lookComment',
    components: {
      Mheader,
      SingleComment
    },
    data () {
      return {
        arrComment: []
      }
    },
    mounted () {
      this.driver_id = this.$route.query.driver_id

      this._all_dri_comment()
    },
    methods: {
      _all_dri_comment () {
        all_dri_comment({
          driver_id: this.driver_id,
        })
          .then(res => {

            this.arrComment = res
            console.log('车主评论', res)

          })
      },
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
