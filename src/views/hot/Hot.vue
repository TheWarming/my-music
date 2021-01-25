<template>
  <scroll
    class="wrapper"
    ref="scroll"
    :isPullUpLoad="true"
    @pullingUp="loadMore"
  >
    <hot-header :time="updateTime"></hot-header>
    <hot-list :hotList="hotList" @listLoad="listLoad" ref="hotList"></hot-list>
  </scroll>
</template>

<script>
import { getHotSongData } from "network/hot";

import HotHeader from "./childComps/HotHeader";
import HotList from "./childComps/HotList";
import Scroll from "components/common/scroll/Scroll";

//自动刷新
import { autoRefreshMixin } from "common/mixin";

export default {
  name: "Hot",
  mixins: [autoRefreshMixin],
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
      this.hotList = res.playlist.tracks;
      this.updateTime = res.playlist.updateTime;
    });
  },
  methods: {
    listLoad() {
      this.$refs.scroll.refresh();
    },
    loadMore() {
      this.$refs.hotList.partListUpdate();
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: calc(100% - 80px - 44px);
}
</style>