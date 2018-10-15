<template>
  <div>
    <div>
      <mheader>实名认证</mheader>
    </div>
    <div class="main-body">
      <div class="main-go">
        <div>实名认证</div>
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-left: 5px;"></div>
      </div>
      <div class="main-identify">
        <div class="main-identify-item">
          <div>真实姓名</div>
          <input type="text" placeholder="请输入真实姓名"/>
        </div>
        <div class="main-identify-item">
          <div>手机号码</div>
          <input type="text" placeholder="请输入手机号码"/>
        </div>
        <div class="main-identify-item">
          <div>短信验证码</div>
          <div style="display: flex; width: 3.4rem">
            <input style="width: 1.6rem; margin-right: 0.30rem; border: 0" type="text" placeholder="请输入验证码"/>
            <div class="main-identify-item-num" @click="sendCode" v-if="code">发送验证码</div>
            <div class="main-identify-item-num" v-if="!code">{{ time }}s</div>
          </div>
        </div>
        <div class="main-identify-item">
          <div>身份证号码</div>
          <input type="text" placeholder="请输入身份证号码"/>
        </div>
      </div>
    </div>
    <div class="main-body">
      <div class="main-go">
        <div>身份证照片</div>
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-left: 5px;"></div>
      </div>
      <div class="main-id">
        <div class="main-id-top" style="margin-bottom: 0.5rem">
          <div class="main-id-picture">
            <!--<img style="width: 0.80rem; height: 0.80rem" src="../../assets/person/add.png"/>-->
            <upload
              :width="picWidth"
              :height="picHeight"
              :imgSrc="imgSrc1"
              :maxUploadNumber="1"
              @uploadItems="getInputItems"
              @uploadUrls="getInput"
              ref="child1"
            > </upload>
            <!--<div style="color: #fd7b48; margin-top: 0.20rem">身份证正面</div>-->
          </div>
          <!--<div class="main-id-picture" style="border: 0">
            <img style="width: 100%; height: 100%" src="../../assets/person/idtify.png"/>
          </div>-->
          <div class="uploadPicture" @click="uploadPicture1">+上传照片</div>
        </div>
        <div class="main-id-top">
          <div class="main-id-picture">
            <!--<img style="width: 0.80rem; height: 0.80rem" src="../../assets/person/add.png"/>-->
            <!--<div style="color: #fd7b48; margin-top: 0.20rem">身份证反面</div>-->
            <upload
              :width="picWidth"
              :height="picHeight"
              :imgSrc="imgSrc2"
              :maxUploadNumber="1"
              @uploadItems="getInputItems"
              @uploadUrls="getInput"
              ref="child2"
            > </upload>
          </div>
          <!--<div class="main-id-picture" style="border: 0">
            <img style="width: 100%; height: 100%" src="../../assets/person/_idtify.png"/>
          </div>-->
          <div class="uploadPicture" @click="uploadPicture2">+上传照片</div>
        </div>
      </div>
    </div>
    <div class="main-body">
      <div class="main-go">
        <div>手持身份证</div>
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-left: 5px;"></div>
      </div>
      <div class="main-hand">
        <div class="main-hand-item">
          <!--<img style="width: 0.80rem; height: 0.80rem" src="../../assets/person/add.png"/>-->
          <!--<div style="color: #fd7b48; margin-top: 0.20rem">手持身份证</div>-->
          <upload
            :width="picWidth2"
            :height="picHeight2"
            :imgSrc="imgSrc3"
            :maxUploadNumber="1"
            @uploadItems="getInputItems"
            @uploadUrls="getInput"
            ref="child3"
          > </upload>
        </div>
       <!-- <div class="main-hand-item" style="border: 0">
          <img style="width: 100%; height: 100%" src="../../assets/person/handid.png"/>
        </div>-->
        <div class="uploadPicture" @click="uploadPicture3">+上传照片</div>
      </div>
    </div>
    <div class="main-protocol">
      <input @click="selectPro" v-model="check" style="vertical-align: middle" type="checkbox"/>
      <span>我已阅读并同意美美出行<span style="color: #ff510d; vertical-align: middle">《隐私条款》</span></span>
    </div>
    <div class="main-btn" :style="{backgroundColor: check === true ? '#ff510d' : '#ccc'}" @click="submit">提交认证</div>
    <div class="main-tip">
      <p>请按照示例提交驾照信息，确保文字清晰，无遮挡，无反光，且证件占据整个照片大部分</p>
    </div>
  </div>
</template>

<script>
import Upload from "@/common/upload"
import Mheader from '@/common/mheader'

export default {
  name: 'personReal',
  components: {
    Upload,
    Mheader
  },
  data () {
    return {
      uploadUrl: '',
      check: true, // 是否选择协议
      code: true,   // 验证码
      time: 60,
      picWidth: '3rem', // 图片宽度
      picHeight: '1.8rem', // 图片宽度
      picWidth2: '4.5rem',
      picHeight2: '2.8rem',
      imgSrc1: require('../../assets/person/idtify.png'),
      imgSrc2: require('../../assets/person/_idtify.png'),
      imgSrc3: require('../../assets/person/handid.png'),
    }
  },
  methods: {
    selectPro () {
      this.check = !this.check
    },
    submit () {

      if (this.check) {

        this.$toast.center('暂时无法认证')

      }
    },
    sendCode () {

      this.code = false

      this.countDown()

    },
    countDown () {
      let temp = setInterval(() => {

        if (this.time < 1) {

          this.time = 60

          this.code = true

          clearInterval(temp)

        } else {

          this.time --

        }

      }, 1000)
    },
    getInputItems(a){
      console.log('a', a)
    },
    getInput(b){
      console.log('b', b)
    },
    uploadPicture1 () {
      this.$refs.child1.addItem()
    },
    uploadPicture2 () {
      this.$refs.child2.addItem()
    },
    uploadPicture3 () {
      this.$refs.child3.addItem()
    }
  }
}
</script>

<style scoped>
  .main-body {
    margin-top: 0.10rem;
    background-color: #ffffff;
  }
  .main-go {
    display: flex;
    font-size: 0.26rem;
    font-weight: bold;
    color: #333333;
    align-items: center;
    padding: 0.20rem 0.25rem;
    border-bottom: 1px solid #eaeaea;
  }
  .main-identify {
    padding: 0.10rem 0;
    font-size: 0.32rem;
  }
  .main-identify-item {
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #eaeaea;
    margin-top: 0.20rem;
    display: flex;
    justify-content: space-around;
  }
  .main-identify-item > div {
    width: 1.7rem;
    text-align: left;
  }
  .main-identify-item input {
    border: 0;
    width: 3.4rem;
    color: #cdcdcd;
  }
  .main-identify-item-num {
    width: 1.2rem;
    padding: 0.1rem;
    font-size: 0.24rem;
    text-align: center;
    border-radius: 5px;
    background-color: #ff510d;
    color: #ffffff;
  }
  .main-id {
    padding: 0.25rem;
  }
  .main-id-picture {
    width: 3rem;
    height: 1.85rem;
    /*border: 1px solid #ccc;*/
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main-id-top {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .main-hand {
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-hand-item {
    width: 4.5rem;
    height: 2.85rem;
    /*border: 1px solid #ccc;*/
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.30rem;
  }
  .main-protocol {
    padding: 0.3rem 0 0.1rem 0;
    font-size: 0.22rem;
    text-align: center;
  }
  .main-btn {
    margin: 0.2rem auto;
    width: 5.55rem;
    height: 0.80rem;
    border-radius: 0.50rem;
    text-align: center;
    line-height: 0.80rem;
    color: #ffffff;
    font-size: 0.36rem;
  }
  .main-tip {
    font-size: 0.20rem;
    color: #ff510d;
    padding: 0.25rem;
  }
  .uploadPicture {
    width: 2.8rem;
    height: 0.6rem;
    border: 1px solid #ff7500;
    border-radius: 5px;
    text-align: center;
    line-height: 0.6rem;
    color: #ff7500;
  }
</style>
