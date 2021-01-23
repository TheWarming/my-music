<template>
  <div id="Play">
    <div class="background" :style="backgroundImage"></div>
    <scroll class="wrapper">
      <play-music :detail="songDetail" :songUrl="songUrl"></play-music>
    </scroll>
  </div>
</template>

<script>
import { getSongUrl, getSongDetail, SongDetail } from "network/play";

import Scroll from "components/common/scroll/Scroll";

import playMusic from "./chilComps/playMusic";

export default {
  name: "Play",
  created() {
    getSongUrl(this.urlId).then((res) => {
      console.log(res);
      this.songUrl = res.data[0].url;
    });
    getSongDetail(this.id).then((res) => {
      console.log(res);
      this.songDetail = new SongDetail(res.album);
    });
  },
  data() {
    return {
      id: this.$route.query.id,
      urlId: this.$route.query.urlId,
      songDetail: {},
      songUrl: "",
    };
  },
  components: {
    Scroll,
    playMusic,
  },
  computed: {
    backgroundImage() {
      return { backgroundImage: "url(" + this.songDetail.picUrl + ")" };
    },
  },
};
</script>

<style scoped>
#Play {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.background {
  width: 100%;
  height: 100%;
  opacity: 1;
  transform: scale(1.5);
  transform-origin: center center;
  filter: blur(30px);
  position: absolute;
  z-index: -1;
  top: 0;
}
.wrapper {
  height: 100%;
}
</style>