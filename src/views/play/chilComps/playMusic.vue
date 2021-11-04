<template>
  <div class="playMusic">
    <span class="logo" @click="back">山寨云音乐</span>
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
    <div class="info" :style="{ opacity: isEmpty ? 0 : 1 }">
      <span>{{ detail.name + "-" }} </span>
      <span class="artists">{{ detail.artists }}</span>
    </div>
    <audio
      :src="songUrl"
      ref="audio"
      controls
      loop
      class="my-audio"
      @play="playSong"
      @pause="pauseSong"
      @seeked="seeked"
    ></audio>
    <scroll class="lyc-wrapper" ref="lycWrapper">
      <ul v-if="lyc !== null">
        <li
          v-for="(item, column) in lyc.lines"
          :key="column"
          :class="{ 'lyc-actived': column === currentColumn }"
        >
          {{ item.txt }}
        </li>
      </ul>
    </scroll>
    <div class="arr">
      <i @click="slide"></i>
    </div>
  </div>
</template>

<script>
//歌词解析
import Lyric from "lyric-parser";

//歌词滑动
import Scroll from "components/common/scroll/Scroll";

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
    lyric: {
      type: String,
      default: "",
    },
  },
  components: {
    Scroll,
  },
  data() {
    return {
      isStop: true,
      lyc: null,
      currentColumn: 0,
      flag: false,
    };
  },
  watch: {
    lyric() {
      if (this.lyc) {
        this.lyc.stop();
        this.currentColumn = 0;
        this.$refs.lycWrapper.scrollTo();
      }
      this.lyc = new Lyric(this.lyric, this.lycHandler);
      this.$nextTick(() => {
        this.$refs.lycWrapper.refresh();
      });
    },
    songUrl() {
      if (!this.isStop) {
        this.isStop = true;
        this.flag = true;
      }
    },
    isStop() {
      if (this.flag) {
        this.flag = false;
        console.log("reset");
        return;
      }
      this.lyc.togglePlay();
      //console.log("change", this.lyc);
    },
  },
  computed: {
    picUrlStyle() {
      return { backgroundImage: "url(" + this.detail.blurPicUrl + ")" };
    },
    isEmpty() {
      return Object.keys(this.detail).length === 0;
    },
  },
  methods: {
    playSong() {
      if (!this.songUrl || this.isStop === false) return;
      //console.log("play");
      this.isStop = false;
    },
    pauseSong() {
      if (!this.songUrl || this.isStop === true) return;
      //console.log("stop");
      this.isStop = true;
    },
    stateChange() {
      if (!this.songUrl) return;
      !this.isStop ? this.$refs.audio.pause() : this.$refs.audio.play();
    },
    back() {
      this.$router.go(-1);
      /*       console.log(1); */
    },
    slide() {
      this.$emit("slide");
    },
    lycHandler({ lineNum }) {
      if (!this.$refs.lycWrapper) return;
      this.currentColumn = lineNum;
      if (lineNum >= 3 && lineNum <= this.lyc.lines.length - 4) {
        // 结合better-scroll，滚动歌词
        this.$refs.lycWrapper.scrollTo(0, -20 * (lineNum - 2), 600);
      }
    },
    seeked(time) {
      this.lyc.seek(this.$refs.audio.currentTime * 1000);
      if (this.isStop) this.lyc.togglePlay();
      /* if (!this.isStop) this.lyc.play(); */
      /* console.log(this.$refs.audio.currentTime); */
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
  color: #666;
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
.arr {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  justify-content: center;
  z-index: 9;
}
.arr i {
  display: block;
  width: 17px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: 17px auto;
  background-position: 0 0;
  background-image: url(~assets/img/playSong/arr.png);
  animation: shining 1.2s steps(1) infinite;
}
.my-audio {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
@keyframes shining {
  0% {
    background-position: 0 0;
  }
  15% {
    background-position: 0 -12px;
  }
  30% {
    background-position: 0 -24px;
  }
  45% {
    background-position: 0 -36px;
  }
  60% {
    background-position: 0 -48px;
  }
  75% {
    background-position: 0 -60px;
  }
  90% {
    background-position: 0 -72px;
  }
  100% {
    background-position: 0 -84px;
  }
}
.lyc-wrapper {
  height: 100px;
  text-align: center;
}
.lyc-actived {
  color: white;
}
.lyc-wrapper li {
  height: 20px;
  padding: 2px;
  font-size: 16px;
  line-height: 16px;
}
</style>