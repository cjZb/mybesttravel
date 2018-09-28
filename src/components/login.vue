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
          <input style="color: rgba(0,0,0,1); opacity: 0.3;" type="number" placeholder="请输入11位手机号"/>
        </div>
      </div>
      <div style="display: flex; margin: 0.75rem 0; justify-content: center">
        <div class="main-idten">
          <div style="width: 1.8rem; text-align: center;">验证码</div>
          <div class="line"></div>
          <input style="color: rgba(0,0,0,1); opacity: 0.3; width: 1.7rem" type="number" placeholder="请输入验证码"/>
        </div>
        <div class="getCode" @click="getCode">获取验证码</div>
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
  export default {
    name: 'login',
    data () {
      return {
        check: true, // 是否选择协议
        width: window.innerWidth + 'px',
        height: window.innerHeight + 'px',
      }
    },
    mounted() {

    },
    methods: {
      selectPro () {
        this.check = !this.check
      },
      submit () {

        if (this.check) {

          this.$toast.center('暂时无法绑定')

        }
      },
      getCode () {

        this.$toast.center('无法获取验证码')

      }
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
    color: #FF672C;
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
