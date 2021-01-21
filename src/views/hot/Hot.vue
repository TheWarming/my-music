<template>
  <div>
    <hot-header :time="updateTime"></hot-header>
    <hot-list :hotList="hotList"></hot-list>
  </div>
</template>

<script>
import { getHotSongData } from "network/hot";

import HotHeader from "./childComps/HotHeader";
import HotList from "./childComps/HotList";

export default {
  name: "Hot",
  data() {
    return {
      hotList: [],
      updateTime: 0,
    };
  },
  components: {
    HotHeader,
    HotList,
  },
  created() {
    getHotSongData(3778678).then((res) => {
      this.hotList = res.playlist.tracks;
      this.updateTime = res.playlist.updateTime;
      console.log(res);
    });
  },
};
</script>

<style scoped>
</style>