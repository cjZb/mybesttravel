<template>
    <div >
      <input style="display: none" ref="file" type="file" multiple @change="upValue"/>
      <div style="display: flex; flex-wrap: wrap">
        <!--图片实际位置-->
        <div v-for="(item, index) in uploadValue" style="position: relative">
          <img :src="item"/>
          <div class="delImg" @click="delImg(index)">
            <img style="width: 0.4rem; height: 0.4rem" src="../../assets/logo.png"/>
          </div>
        </div>
        <!--end-->

        <!--图片占位框-->
        <div @click="showImgClick" class="showImg"></div>
        <!--end-->
      </div>
    </div>
</template>

<script>
  export default {
    name: 'uploadFile',
    data () {
      return {
        uploadValue: [],
      }
    },
    mounted () {

    },
    methods: {
      upValue () {

        let files = this.$refs.file.files // 获取图片对象

        for(let i = 0; i < files.length; i++) { // 获取图片地址

          let reader = new FileReader()

          reader.readAsDataURL(files[i])

          reader.onloadend = () => {

            console.log('base64编码', reader.result)

            this.uploadValue.push(reader.result)

          }
        }

      },
      showImgClick () {
        this.$refs.file.click()
      },
      delImg (val) {
        this.uploadValue = this.uploadValue.filter((item, index) => val !== index)
      },
    }
  }
</script>

<style scoped>
  .delImg {
    position: absolute;
    top: 1px;
    right: 0;
  }
  .showImg {
    width: 1.64rem;
    height: 1.64rem;
    border: 1px solid #ccc;
  }
</style>
