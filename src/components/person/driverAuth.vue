<template>
  <div>
    <div>
      <mheader>车主认证</mheader>
    </div>
    <div class="main-body">
      <div class="main-go">
        <div>车型认证</div>
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-left: 5px;"></div>
      </div>
      <div class="main-identify">
        <div class="main-identify-item">
          <div>品牌车型</div>
          <input type="text" placeholder="请输入您的品牌车型"/>
        </div>
        <div class="main-identify-item">
          <div>车牌号</div>
          <input type="text" placeholder="请输入您的车牌号"/>
        </div>
      </div>
    </div>
    <div class="main-body">
      <div class="main-go">
        <div>行驶证认证</div>
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-left: 5px;"></div>
      </div>
      <div class="main-hand">
        <div class="main-hand-item">
          <upload
            :width="picWidth2"
            :height="picHeight2"
            :imgSrc="imgSrc1"
            :maxUploadNumber="1"
            @uploadItems="getInputItems"
            @uploadUrls="getInput"
            ref="child"
          > </upload>
        </div>
       <!-- <div class="main-hand-item" style="border: 0">
          <img style="width: 100%; height: 100%" src="../../assets/person/example.png"/>
        </div>-->
        <div class="uploadPicture" @click="uploadPicture1">+上传照片</div>
      </div>
    </div>
    <div class="main-body">
      <div class="main-go">
        <div>驾驶证认证</div>
        <div style="width: 2px; height: 0.25rem; background-color: #ff682d; margin-left: 5px;"></div>
      </div>
      <div class="main-hand">
        <div class="main-hand-item">
          <upload
            :width="picWidth2"
            :height="picHeight2"
            :imgSrc="imgSrc2"
            :maxUploadNumber="1"
            @uploadItems="getInputItems"
            @uploadUrls="getInput"
            ref="child"
          > </upload>
        </div>
       <!-- <div class="main-hand-item" style="border: 0">
          <img style="width: 100%; height: 100%" src="../../assets/person/drive.png"/>
        </div>-->
        <div class="uploadPicture" @click="uploadPicture2">+上传照片</div>
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
    name: 'driverAuth',
    components: {
      Upload,
      Mheader
    },
    data () {
      return {
        picWidth2: '4.5rem',
        picHeight2: '2.8rem',
        imgSrc1: require('../../assets/person/example.png'),
        imgSrc2: require('../../assets/person/drive.png'),
        check: true, // 是否选择协议
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
      getInputItems(a){
        console.log('a', a)
      },
      getInput(b){
        console.log('b', b)
      },
      uploadPicture1 () {
        this.$refs.child.addItem()
      },
      uploadPicture2 () {
        this.$refs.child.addItem()
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
    margin-top: 0.20rem;
    padding-bottom: 0.2rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #eaeaea;
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
