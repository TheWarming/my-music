<template>
  <scroll class="wrapper" ref="scroll">
    <hot-header :time="updateTime"></hot-header>
    <hot-list :hotList="hotList" @listLoad="listLoad"></hot-list>
  </scroll>
</template>

<script>
import { getHotSongData } from "network/hot";

import HotHeader from "./childComps/HotHeader";
import HotList from "./childComps/HotList";
import Scroll from "components/common/scroll/Scroll";

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
    Scroll,
  },
  created() {
    getHotSongData(3778678).then((res) => {
      this.hotList = res.playlist.tracks.splice(0, 20);
      this.updateTime = res.playlist.updateTime;
    });
  },
  methods: {
    listLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: calc(100% - 80px - 44px);
}
</style>