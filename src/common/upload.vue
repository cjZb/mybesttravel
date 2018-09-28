<template>
  <div>
    <div class="uploadCon">
      <div class="uploadItem" v-for="(item,index) in itemDatas" :key="index" :style="{'width':width,'height':height}">
        <div class="uploadItemImg" :style="{'backgroundImage':'url('+item+')'}">
          <div class="shadowBox" :style="{'line-height':width}">
            <div class="img1" @click="see(index)"></div>
            <img class="img2" @click="del(index)" src="./img/cuohao.png">
          </div>
        </div>
      </div>
      <div class="uploadItem" v-if="itemDatas.length<maxUploadNumber" @click="addItem" :style="{'width':width,'height':height}" >
        <div class="uploadItemImg" :style="{'backgroundImage':'url('+ imgSrc +')'}" style="background-position: center;"></div>
      </div>
      <input type="file" ref="file" @change="fileChange" multiple style="display: none"/>
      <div class="bigImgBox" @click="closeBigImg" v-if="bigImgSrc!==''">
        <div class="bigImgCon">
          <img :src="bigImgSrc" class="bigImg">
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  /**
   * @props
   * @emit
   */

  export default{
    data(){
      return{
        itemDatas:[],
        filesDatas:[],
        bigImgSrc:'',
      }
    },
    props:{
      items:{
        type:Array,
        default:()=>{
          return []
        }
      },
      width:{
        type:String,
        default:"1rem"
      },
      height:{
        type:String,
        default:"1rem"
      },
      imgSrc: {
        type: String,
        default: require('./img/idenZ.png')
      },
      maxUploadNumber:{
        type:Number,
        default:5
      },
      Size:{
        type:Number,
        default:3000
      }
    },
    mounted(){
      var that = this;
      setTimeout(function () {
        that.itemDatas=that.items;
      },20)
    },
    methods:{
      addItem(){
        this.$refs.file.click();
      },
      fileChange(){
        var that = this;
        var files = this.$refs.file.files;
        for(var i=0;i<files.length;i++){
          if(files[i].type==='image/png'||files[i].type==='image/jpg'||files[i].type==='image/jpeg'){
            if(files[i].size<(1024*this.Size)){
              if(this.filesDatas.length<this.maxUploadNumber){
                that.filesDatas.push(files[i])
                var reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onloadend = function (e) {
                  that.itemDatas.push(e.target.result)
                };
              }
            }else{
              this.$store.state.toastText='上传的图片不能超过 3MB！'
              this.$store.state.toastType='text'
            }
          }else{
            this.$store.state.toastText='只能上传 jpg 或 png 格式的图片！'
            this.$store.state.toastType='text'
          }
        }
        this.$emit('uploadUrls',this.filesDatas)
        this.$emit('uploadItems',this.itemDatas)
        this.$refs.file.value = ''
      },
      see(a){
        this.bigImgSrc=this.itemDatas[a];
      },
      del(a){
        this.itemDatas=this.itemDatas.filter((item,index)=>index!==a)
        this.filesDatas=this.filesDatas.filter((item,index)=>index!==a)
        this.$emit('uploadUrls',this.filesDatas)
        this.$emit('uploadItems',this.itemDatas)
        this.$refs.file.value = ''
      },
      closeBigImg(){
        this.bigImgSrc='';
      }
    },
  }
</script>
<style scoped>
  .uploadCon{font-size: 0;}
  .uploadItem{display:inline-block;margin-right:0.1rem;background-color: white;border-radius: 0.05rem;vertical-align: middle;font-size: 0.28rem;}
  .uploadItem .uploadItemImg{width:100%;height:100%;background-repeat: no-repeat;background-size: 100% 100%;}
  .uploadItem .uploadItemImg .shadowBox{width:100%;height: 100%;text-align: center;position: relative;}
  .uploadItem:hover .uploadItemImg .shadowBox{width:100%;height: 100%;background-color: rgba(0,0,0,0.7);}
  .uploadItem .uploadItemImg .shadowBox .img1{width:100%;height:100%;}
  .uploadItem .uploadItemImg .shadowBox .img2{width:15%;padding:0.04rem;cursor: pointer;position: absolute;top:-15%;right: -15%;}

  .bigImgBox{width:100%;height: 100%;position: fixed;top:0;background-color: rgba(0,0,0,0.5);left: 0;z-index: 99999;}
  .bigImgBox .bigImgCon{width:100%;background-color: white;padding:0.2rem;box-sizing:border-box;position: relative;top:50%;left:50%;transform:translate(-50%,-50%);}
  .bigImgBox .bigImgCon .bigImg{width:100%;}
</style>
