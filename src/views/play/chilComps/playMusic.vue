<template>
  <div class="playMusic">
    <span class="logo" @click="back">网易云音乐</span>
    <img src="~assets/img/playSong/needle.png" alt="needle" class="needle" />
    <div class="musicPic">
      <div
        :style="picUrlStyle"
        class="song-pic autoRotate"
        :class="{ play: !isStop }"
        @click="stateChange"
      >
        <img src="~assets/img/playSong/disc.png" alt="disc" class="disc" />
      </div>
      <img
        src="~assets/img/playSong/play.png"
        alt="stop"
        class="stop"
        @click="stateChange"
        v-show="isStop"
      />
    </div>
    <div class="info">
      <span>{{ detail.name + "-" }} </span>
      <span class="artists">{{ detail.artists }}</span>
    </div>
    <div class="audio_con">
      <audio
        :src="songUrl"
        ref="audio"
        controls
        loop
        class="myaudio"
        @play="playSong"
        @pause="pauseSong"
      ></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "playMusic",
  props: {
    picUrl: {
      type: String,
      default: "",
    },
    detail: {
      type: Object,
      default: {},
    },
    songUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isStop: true,
    };
  },
  computed: {
    picUrlStyle() {
      return { backgroundImage: "url(" + this.detail.picUrl + ")" };
    },
  },
  methods: {
    playSong() {
      this.isStop = false;
    },
    pauseSong() {
      this.isStop = true;
    },
    stateChange() {
      this.isStop = !this.isStop;
      this.isStop ? this.$refs.audio.pause() : this.$refs.audio.play();
    },
    back() {
      this.$router.go(-1);
      console.log(1);
    },
  },
};
</script>

<style scoped>
.playMusic {
  height: 100vh;
  position: relative;
}
.logo {
  color: #fff;
  font-size: 18px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
}
.needle {
  width: 96px;
  height: 137px;
  top: 0px;
  left: 44%;
  position: absolute;
  z-index: 2;
}
.musicPic {
  padding-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.musicPic div {
  display: inline-block;
  width: 296px;
  height: 296px;
  margin: 0 auto;
  background-size: 190px 190px;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}
.disc {
  width: 100%;
  height: 100%;
}
.info {
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding: 20px;
}
.artists {
  color: #aaa;
}
.audio_con {
  text-align: center;
}
/* 旋转的动画 */
@keyframes Rotate {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}
/* 旋转的类名 */
.autoRotate {
  animation-name: Rotate;
  animation-iteration-count: infinite;
  animation-play-state: paused;
  animation-timing-function: linear;
  animation-duration: 5s;
}
.play {
  animation-play-state: running;
}
.stop {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
}
</style>