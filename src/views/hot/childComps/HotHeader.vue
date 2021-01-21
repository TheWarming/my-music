<template>
  <div id="HotHeader">
    <p class="cloud-music">云音乐</p>
    <p class="hot-song">热歌榜</p>
    <p class="date">更新时间：{{ date }}</p>
  </div>
</template>

<script>
import { formatDate } from "common/utils";

export default {
  name: "HotHeader",
  props: {
    time: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    date() {
      return formatDate(new Date(this.time), "MM月dd日");
    },
  },
};
</script>

<style scoped>
#HotHeader {
  background: url(~assets/img/hot/hot_music_bg_2x.jpg) no-repeat;
  background-size: cover;
  padding: 20px;
  color: aliceblue;
}
.hot-song {
  font-size: 32px;
  margin: 6px 0;
}
.date {
  font-size: 12px;
}
.cloud-music {
  font-size: 14px;
  font-style: italic;
}
</style>