<template>
  <div class="vue-camera">
    <div class="video-wrapper">
      <video autoplay ref="video"></video>
      <div class="canvas-wrapper" v-show="false">
        <canvas ref="canvas"></canvas>
      </div>
    </div>
    <div class="panel control-panel">
      <transition name="popup">
        <toast
          v-show="isPredict"
          :content="`我们找到了 ${msg}`"
          class="predict"></toast>
      </transition>
      <a class="btn-play btn-floating btn-large waves-effect waves-dark white" @click="_record">
        <i class="material-icons md-dark md-56">play_arrow</i>
      </a>
    </div>
    <transition name="record">
      <div class="img-container" v-show="isRecord">
        <div class="img-layer"></div>
        <div class="img-wrapper">
          <!--<img src="../../assets/img/shark.jpg" alt="canvas" ref="img">-->
          <img :src="imgUrl" alt="canvas" ref="img">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import * as mobilenet from '@tensorflow-models/mobilenet'
  import Toast from '../Base/Toast/Toast'

  export default {
    name: "VueCamera",
    components: {
      Toast
    },
    data() {
      return {
        name: 'VueCamera',
        imgUrl: null,
        model: null,
        isRecord: false,
        isPredict: false,
        msg: ''
      }
    },
    watch: {
      isRecord(val, oldVal) {
        if (val) {
          setTimeout(() => {
            this.isRecord = false
          }, 400)
        }
        else {
          setTimeout(() => {
            this._predict()
          }, 200)
        }
      },
      isPredict(val, oldVal) {
        if (val) {
          setTimeout(() => {
            this.isPredict = false
          }, 600)
        }
      }
    },
    mounted() {
      this.model = mobilenet.load().then(model => Promise.resolve(model))
      this.$nextTick(() => {
        this._initMedia()
      })
    },
    methods: {
      _initMedia() {
        if (!this.$refs.video) {
          return
        }
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
        window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
        this._getMedia()
      },
      _getMedia() {
        if (navigator.getUserMedia) {
          navigator.getUserMedia({
            video: true,
            audio: true
          }, this._successCallback, this._errorCallback)
        }
        else {
          console.log('Native device media streaming (getUserMedia) not supported in this browser.');
        }
      },
      _successCallback(stream) {
        if (this.$refs.video.mozSrcObject !== undefined) {
          this.$refs.video.mozSrcObject = stream
        }
        else {
          // video.src = window.URL && window.URL.createObjectURL(stream) || stream;
          this.$refs.video.src = window.URL && window.URL.createObjectURL(stream) || stream;
        }
      },
      _errorCallback(e) {
        console.log(e)
      },
      _record() {
        let context = this.$refs.canvas.getContext('2d');
        context.drawImage(this.$refs.video, 0, 0, 300, 150)
        this.imgUrl = this.$refs.canvas.toDataURL("image/png")
        this.isRecord = true
      },
      _predict() {
        this.model.then((model) => {
          console.log('done')
          model.classify(this.$refs.img)
            .then((predictions => {
              this.msg = predictions[0].className.split(',')[0]
              this.isPredict = true
            }))
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import "VueCamera.styl"
</style>
