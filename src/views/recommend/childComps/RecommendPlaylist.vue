<template>
  <div class="recommend-playlist">
    <second-header :title="title"></second-header>
    <playlists>
      <playlists-item
        v-for="item in playlist"
        :key="item.id"
        :list="item"
        v-bind="$attrs"
      ></playlists-item>
    </playlists>
  </div>
</template>

<script>
import SecondHeader from "components/content/secondHeader/SecondHeader";
import Playlists from "components/content/playlists/Playlists";
import PlaylistsItem from "components/content/playlists/PlaylistsItem";

export default {
  name: "RecommendPlaylist",
  components: {
    SecondHeader,
    Playlists,
    PlaylistsItem,
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