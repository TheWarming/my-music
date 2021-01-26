<template>
  <div class="playlist" v-if="playlists.length !== 0">
    <second-header :title="title" fontColor="#FFFFFF"></second-header>
    <playlists>
      <playlists-item
        v-for="item in playlists"
        :key="item.id"
        :list="item"
        :option="{ showCreator: true, line: 1 }"
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
  name: "PlaySimiPlaylist",
  components: {
    SecondHeader,
    Playlists,
    PlaylistsItem,
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