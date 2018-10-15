<template>
  <div>
    <div>
      要使用的图片<br/>
      <img ref="img1" style="margin-bottom: 30px" src="../../assets/index/shop_logo1.png"/><br/>
      <img ref="img2" style="width: 30px; height: 30px" src="../../assets/logo.png"/>
    </div>
    <div>
      画布<br/>
      <canvas ref="canvas" style="background-color: #333333;">您的浏览器不支持canvas</canvas>
    </div>
    <div>
      导出图片<br/>
      <a ref="aaaa" href="" download="sss.png"><img ref="img3" src=""/></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'canvas111',
    data () {
      return {

      }
    },
    mounted () {
      this.canvas()
    },
    methods: {
      canvas () {
        let ctx = this.$refs.canvas.getContext('2d')
        // ctx.fillStyle = 'yellow'   // 必须在创建矩形之前
        // ctx.fillRect(0, 0, 50, 50)
        //
        // ctx.fillStyle = '#ff510d'   // 必须在创建矩形之前
        // ctx.fillRect(10, 10, 50, 50)

        console.log(ctx.drawImage(this.$refs.img1, 20, 20))
        //
        setTimeout(() => ctx.drawImage(this.$refs.img1, 20, 20), 20)   // CSSImageValue or HTMLImageElement or SVGImageElement or HTMLVideoElement or HTMLCanvasElement or ImageBitmap or OffscreenCanvas

        setTimeout(() => ctx.drawImage(this.$refs.img2, 50, 55), 40)

        console.log(this.$refs.canvas.toDataURL())

        setTimeout(() => {
          this.$refs.img3.src = this.$refs.canvas.toDataURL()

          this.$refs.aaaa.href = this.$refs.canvas.toDataURL()
        }, 60)


      }
    }
  }
</script>

<style scoped>

</style>
