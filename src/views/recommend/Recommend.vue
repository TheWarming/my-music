<template>
  <scroll ref="scroll" class="wrapper">
    <recommend-playlist
      :playlist="recommendPlaylist"
      @imageLoad="imageLoad"
    ></recommend-playlist>
    <recommend-new-song :newSongList="newSongList"></recommend-new-song>
  </scroll>
</template>

<script>
import RecommendPlaylist from "./childComps/RecommendPlaylist";
import RecommendNewSong from "./childComps/RecommendNewSong";
import Scroll from "components/common/scroll/Scroll";

import { getRecommendPlaylistData, getNewSongData } from "network/recommend";

//自动刷新
import { autoRefreshMixin } from "common/mixin";

export default {
  name: "Recommend",
  mixins: [autoRefreshMixin],
  components: {
    RecommendPlaylist,
    RecommendNewSong,
    Scroll,
  },
  data() {
    return {
      recommendPlaylist: [],
      newSongList: [],
    };
  },
  created() {
    getRecommendPlaylistData(6).then((res) => {
      this.recommendPlaylist = res.result;
      /* console.log(res); */
    });
    getNewSongData(10).then((res) => {
      this.newSongList = res.result;
      /* console.log(res); */
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.debounceRefresh();
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: calc(100% - 80px - 44px);
}
</style>