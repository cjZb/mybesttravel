<template>
  <div>
    <div class="container" :style="{width: width, height: height}">
      <div class="main-logo">
        <img style="width: 0.98rem; height: 0.98rem" src="../assets/login/weixin.png"/>
        <img style="margin: 0.56rem; width: 0.62rem; height: 0.40rem" src="../assets/login/link.png"/>
        <img style="width: 0.98rem; height: 0.98rem" src="../assets/login/logo.png"/>
      </div>
      <div style="display: flex; justify-content: center">
        <div class="main-phone">
          <div style="width: 1.81rem; text-align: center">手机号码</div>
          <div class="line"></div>
          <input v-model="phone_number" style="color: rgba(0,0,0,1); opacity: 0.3;" type="number" placeholder="请输入11位手机号"/>
        </div>
      </div>
      <div style="display: flex; margin: 0.75rem 0; justify-content: center">
        <div class="main-idten">
          <div style="width: 1.8rem; text-align: center;">验证码</div>
          <div class="line"></div>
          <input v-model="code_number" style="color: rgba(0,0,0,1); opacity: 0.3; width: 1.7rem" type="number" placeholder="请输入验证码"/>
        </div>
        <div class="getCode" @click="getCode" v-if="iscode">获取验证码</div>
        <div class="getCode" v-if="!iscode">{{ time }}s</div>
      </div>
      <div class="main-protocol">
        <input @click="selectPro" v-model="check" style="vertical-align: middle" type="checkbox"/>
        <span>我已阅读并同意美美出行<span style="color: #ff510d; vertical-align: middle">《美美出行安全协议》</span></span>
      </div>
      <div class="main-btn" :style="{backgroundColor: check === true ? '#ff510d' : '#ccc'}" @click="submit">完成绑定</div>
    </div>
  </div>
</template>

<script>
  import { sendcode, save } from '@/api/allapi'

  export default {
    name: 'login',
    data () {
      return {
        check: true, // 是否选择协议
        width: window.innerWidth + 'px',
        height: window.innerHeight + 'px',

        phone_number: '',
        code_number: '',
        iscode: true,   // 验证码
        time: 60,
      }
    },
    mounted() {

    },
    methods: {
      selectPro () {
        this.check = !this.check
      },
      getCode () {

        // this.$toast.center('无法获取验证码')
        this._sendcode()

      },
      submit () {

        if (this.check && this.code_number) {

          // this.$toast.center('暂时无法绑定')
          this._save()

        }
      },
      // 验证码
       _sendcode () {
        sendcode({
          phone_number: this.phone_number,
        }).then( res => {

          if (res.code === 0) {

            this.$toast.center(res.message)

          } else {

            this.iscode = false

            this.countDown()

            this.$toast.center(res.message)

          }

          console.log('测试验证码', res)

        })
      },
      // 绑定
      _save () {
        save({
          phone_number: this.phone_number,  // 手机号码
          mes: this.code_number,     // 验证码
        }).then( res => {

          console.log('验证码', res)

        }).catch(err => {
          console.log(err)
        })
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
    },
  }
</script>

<style scoped>
  .container {
    background-color: #ffffff;
  }
  .main-logo {
    padding: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-phone, .main-idten {
    border: 1px solid rgba(255,81,13,1);
    border-radius: 0.41rem;
    font-size: 0.30rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-phone {
    width: 6.22rem;
    height: 0.82rem;
  }
  .line {
    height: 0.62rem;
    border:1px solid rgba(255,81,13,1);
    margin: 0 0.27rem;
  }
  .main-idten {
    width: 4.26rem;
    height: 0.82rem;
  }
  .getCode {
    margin-left: 0.4rem;
    display: flex;
    align-items: center;
    background-color: #FF672C;
    width: 1.4rem;
    color: #ffffff;
    justify-content: center;
    border-radius: 5px;
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
</style>
