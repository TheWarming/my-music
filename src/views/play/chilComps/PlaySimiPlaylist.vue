<template>
  <div class="playlist" v-if="playlists.length !== 0">
    <second-header :title="title"></second-header>
    <playlist>
      <playlist-item
        v-for="item in playlists"
        :key="item.id"
        :list="item"
        :option="{ showCreator: true, line: 1 }"
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
  name: "PlaySimiPlaylist",
  components: {
    SecondHeader,
    Playlist,
    PlaylistItem,
  },

  props: {
    playlists: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      title: "包含这首歌的歌单",
    };
  },
};
</script>

<style scoped>
.playlist {
  padding-bottom: 20px;
}
</style>