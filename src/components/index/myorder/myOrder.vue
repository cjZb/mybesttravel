<template>
  <div>
    <div>
      <mheader>我的预约评价</mheader>
    </div>
    <div>
      <tab :line-width="1" custom-bar-width="60px" active-color="#FF510D">
        <tab-item selected @on-item-click="yescomment">已评价</tab-item>
        <tab-item @on-item-click="nocomment">未评价</tab-item>
      </tab>
    </div>
    <!--已评价-->
       <!--约车-->
    <div class="order-item" v-for="item in arrComment.yue_list" v-if="iscomment">
      <div style="display: flex; justify-content: space-between">
        <div>
          <img style="width: 0.7rem; height: 0.7rem" src="@/assets/index/travel.png"/>
        </div>
        <div style="font-size: 0.28rem;">
          <div style="font-weight: bold; color: #353535">{{item.start_city}}-{{item.end_city}}</div>
          <div class="order-item-time">
            <div>出行时间:{{item.create_time}}</div>
            <div>{{item.customer_numbers}}人</div>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 0.2rem">
        <div>
          <img style="width: 0.7rem; height: 0.7rem" src="@/assets/index/name_pic.png"/>
        </div>
        <div style="font-size: 0.28rem;">
          <div style="font-weight: bold; color: #353535">9月25日(周三)  08:08 </div>
          <div class="order-item-time">
            <div>
              <span style="font-weight: bold; color: #353535">{{item.username}}</span>
              <img style="width: 0.25rem; height: 0.25rem" src="@/assets/index/sex.png"/>
              <img style="width: 0.25rem; height: 0.20rem" src="@/assets/index/truth.png"/>
              <img style="width: 0.25rem; height: 0.18rem" src="@/assets/index/member.png"/>
            </div>
            <div style="color: #666666">{{item.car_type}}   {{item.car_number}}</div>
          </div>
        </div>
      </div>
      <div class="order-comment" @click="lookComment">查看评价</div>
    </div>
    <!--包车-->
    <div class="order-item" v-for="item in arrComment.bao_list" v-if="iscomment">
      <div style="display: flex; justify-content: space-between">
        <div>
          <img style="width: 0.7rem; height: 0.7rem" src="@/assets/index/travel.png"/>
        </div>
        <div style="font-size: 0.28rem;">
          <div style="font-weight: bold; color: #353535">{{item.start_city}}-{{item.end_city}}</div>
          <div class="order-item-time">
            <div>出行时间:{{item.create_time}}</div>
            <div></div>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 0.2rem">
        <div>
          <img style="width: 0.7rem; height: 0.7rem" src="@/assets/index/name_pic.png"/>
        </div>
        <div style="font-size: 0.28rem;">
          <div style="font-weight: bold; color: #353535">9月25日(周三)  08:08 </div>
          <div class="order-item-time">
            <div>
              <span style="font-weight: bold; color: #353535">{{item.username}}</span>
              <img style="width: 0.25rem; height: 0.25rem" src="@/assets/index/sex.png"/>
              <img style="width: 0.25rem; height: 0.20rem" src="@/assets/index/truth.png"/>
              <img style="width: 0.25rem; height: 0.18rem" src="@/assets/index/member.png"/>
            </div>
            <div style="color: #666666">{{item.car_type}}   {{item.car_number}}</div>
          </div>
        </div>
      </div>
      <div class="order-comment" @click="lookComment">查看评价</div>
    </div>
    <!--end-->
    <!--未评价-->
    <div class="order-item" v-for="item in arrComment.yue_list" v-if="!iscomment">
      <div style="display: flex; justify-content: space-between">
        <div>
          <img style="width: 0.7rem; height: 0.7rem" src="@/assets/index/travel.png"/>
        </div>
        <div style="font-size: 0.28rem;">
          <div style="font-weight: bold; color: #353535">{{item.start_city}}-{{item.end_city}}</div>
          <div class="order-item-time">
            <div>出行时间:{{item.create_time}}</div>
            <div>{{item.customer_numbers}}人</div>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 0.2rem">
        <div>
          <img style="width: 0.7rem; height: 0.7rem" src="@/assets/index/name_pic.png"/>
        </div>
        <div style="font-size: 0.28rem;">
          <div style="font-weight: bold; color: #353535">9月25日(周三)  08:08 拷贝 2</div>
          <div class="order-item-time">
            <div>
              <span style="font-weight: bold; color: #353535">{{item.username}}</span>
              <img style="width: 0.25rem; height: 0.25rem" src="@/assets/index/sex.png"/>
              <img style="width: 0.25rem; height: 0.20rem" src="@/assets/index/truth.png"/>
              <img style="width: 0.25rem; height: 0.18rem" src="@/assets/index/member.png"/>
            </div>
            <div style="color: #666666">{{item.car_type}}   {{item.car_number}}</div>
          </div>
        </div>
      </div>
      <div class="order-comment" @click="goComment">评价</div>
      <!--评价弹窗-->
      <div v-transfer-dom>
        <popup v-model="showcomment" style="background-color: #ffffff">
          <div class="comment-title">
            <div @click="close">
              <img style="width: 0.25rem; height: 0.25rem" src="@/assets/index/error.png"/>
            </div>
            <div>
              <span style="color: #333333; font-size: 0.34rem">评价</span>
            </div>
            <div></div>
          </div>
          <div class="comment-content">
            <div style="display: flex">
              <span class="comment-content-title">星级:</span>
              <rater v-model="commentRate" active-color="#FF7200" :font-size="15"></rater>
            </div>
            <div style="display: flex; margin: 0.2rem 0">
              <span class="comment-content-title">留言:</span>
              <div>
                <textarea placeholder="请留言" style="width: 5.4rem; height: 1.6rem; border: 1px solid #eee" ></textarea>
                <div style="color: #999999">你的评价会让司机做的更好</div>
              </div>
            </div>
            <div class="subcomment" @click="subcomment">提交评论</div>
          </div>
        </popup>
      </div>
      <!--评价弹窗end-->
    </div>
    <div class="order-item" v-for="item in arrComment.bao_list" v-if="!iscomment">
      <div style="display: flex; justify-content: space-between">
        <div>
          <img style="width: 0.7rem; height: 0.7rem" src="@/assets/index/travel.png"/>
        </div>
        <div style="font-size: 0.28rem;">
          <div style="font-weight: bold; color: #353535">{{item.start_city}}-{{item.end_city}}</div>
          <div class="order-item-time">
            <div>出行时间:{{item.create_time}}</div>
            <div></div>
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 0.2rem">
        <div>
          <img style="width: 0.7rem; height: 0.7rem" src="@/assets/index/name_pic.png"/>
        </div>
        <div style="font-size: 0.28rem;">
          <div style="font-weight: bold; color: #353535">9月25日(周三)  08:08 拷贝 2</div>
          <div class="order-item-time">
            <div>
              <span style="font-weight: bold; color: #353535">{{item.username}}</span>
              <img style="width: 0.25rem; height: 0.25rem" src="@/assets/index/sex.png"/>
              <img style="width: 0.25rem; height: 0.20rem" src="@/assets/index/truth.png"/>
              <img style="width: 0.25rem; height: 0.18rem" src="@/assets/index/member.png"/>
            </div>
            <div style="color: #666666">{{item.car_type}}   {{item.car_number}}</div>
          </div>
        </div>
      </div>
      <div class="order-comment" @click="goComment">评价</div>
      <!--评价弹窗-->
      <div v-transfer-dom>
        <popup v-model="showcomment" style="background-color: #ffffff">
          <div class="comment-title">
            <div @click="close">
              <img style="width: 0.25rem; height: 0.25rem" src="@/assets/index/error.png"/>
            </div>
            <div>
              <span style="color: #333333; font-size: 0.34rem">评价</span>
            </div>
            <div></div>
          </div>
          <div class="comment-content">
            <div style="display: flex">
              <span class="comment-content-title">星级:</span>
              <rater v-model="commentRate" active-color="#FF7200" :font-size="15"></rater>
            </div>
            <div style="display: flex; margin: 0.2rem 0">
              <span class="comment-content-title">留言:</span>
              <div>
                <textarea placeholder="请留言" style="width: 5.4rem; height: 1.6rem; border: 1px solid #eee" ></textarea>
                <div style="color: #999999">你的评价会让司机做的更好</div>
              </div>
            </div>
            <div class="subcomment" @click="subcomment">提交评论</div>
          </div>
        </popup>
      </div>
      <!--评价弹窗end-->
    </div>
    <!--end-->
  </div>
</template>

<script>
  import Mheader from '@/common/mheader'
  import { Tab, TabItem, Popup, TransferDom, Rater } from 'vux'
  import { cus_comment_complete, cus_comment_unfinished } from '@/api/allapi'

  export default {
    name: 'myOrder',
    directives: {
      TransferDom
    },
    components: {
      Mheader,
      Tab,
      TabItem,
      Popup,
      TransferDom,
      Rater
    },
    data () {
      return {
        iscomment: true,
        showcomment: false,
        commentRate: 5,
        arrComment: [],
      }
    },
    mounted () {
      this._cus_comment_complete()
    },
    methods: {
      yescomment () {
        this.iscomment = true
        this._cus_comment_complete()
      },
      nocomment () {
        this.iscomment = false
        this._cus_comment_unfinished()
      },
      lookComment () {
        this.$router.push('/lookComment')
      },
      goComment () {
        this.showcomment = true
      },
      subcomment () {
        this.$toast.center('暂不可提交评论')
      },
      close () {
        this.showcomment = false
      },
      _cus_comment_complete () {

        cus_comment_complete().then( res => {

          this.arrComment = res

          console.log('我的预约-已评价', res)

        })
      },
      _cus_comment_unfinished () {

        cus_comment_unfinished().then( res => {

          this.arrComment = res

          console.log('我的预约-未评价', res)

        })
      }
    }
  }
</script>

<style scoped>
  .order-item {
    padding: 0.30rem;
    background-color: #ffffff;
    margin-bottom: 0.2rem;
  }
  .order-item-time {
    width: 5.9rem;
    display: flex;
    justify-content: space-between;
    color: #666666;
  }
  .order-comment {
    padding-top: 0.2rem;
    text-align: right;
    font-size: 0.26rem;
    color: #FF510D;
    font-weight: bold;
  }
  .comment-title, .comment-content {
    padding: 0.3rem;
  }
  .comment-title {
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .comment-content-title {
    font-size: 0.25rem;
    color: #666666;
    margin-right: 0.2rem;
  }
  .subcomment {
    width: 2.3rem;
    height: 0.6rem;
    background-color: #ff510d;
    color: #ffffff;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.32rem;
    font-weight: 400;
    border-radius: 5px;
    margin: 0 auto;
  }
</style>
