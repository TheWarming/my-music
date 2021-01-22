<template>
  <div class="recommend-playlist">
    <second-header :title="title"></second-header>
    <playlist>
      <playlist-item
        v-for="item in playlist"
        :key="item.id"
        :list="item"
        v-bind="$attrs"
      ></playlist-item>
    </playlist>
  </div>
</template>

<script>
import SecondHeader from "components/content/secondHeader/SecondHeader";
import Playlist from "components/content/playlist/Playlist";
import PlaylistItem from "components/content/playlist/PlaylistItem";

export default {
  name: "RecommendPlaylist",
  components: {
    SecondHeader,
    Playlist,
    PlaylistItem,
  },

  props: {
    playlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      title: "推荐歌单",
    };
  },
};
</script>

<style scoped>
.recommend-playlist {
  padding-bottom: 20px;
}
</style>