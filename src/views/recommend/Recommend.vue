<template>
  <div>
    <recommend-playlist :playlist="recommendPlaylist"></recommend-playlist>
    <recommend-new-song :newSongList="newSongList"></recommend-new-song>
  </div>
</template>

<script>
import RecommendPlaylist from "./childComps/RecommendPlaylist";
import RecommendNewSong from "./childComps/RecommendNewSong";

import { getRecommendPlaylistData, getNewSongData } from "network/recommend";

export default {
  name: "Recommend",
  components: {
    RecommendPlaylist,
    RecommendNewSong,
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
    });
    getNewSongData(10).then((res) => {
      this.newSongList = res.result;
    });
  },
};
</script>

<style scoped>
</style>