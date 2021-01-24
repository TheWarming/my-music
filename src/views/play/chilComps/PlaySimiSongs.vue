<template>
  <div>
    <second-header :title="title"></second-header>
    <song-list>
      <song-list-item
        v-for="item in songs"
        :key="item.id"
        :song="item"
        :picIsShow="true"
      ></song-list-item>
    </song-list>
  </div>
</template>

<script>
import SecondHeader from "components/content/secondHeader/SecondHeader";
import SongListItem from "components/content/songList/SongListItem";
import SongList from "components/content/songList/SongList";

export default {
  name: "PlaySimiSong",
  props: {
    songs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      title: "喜欢这首歌的人也听",
    };
  },
  components: {
    SecondHeader,
    SongListItem,
    SongList,
  },
};
</script>

<style scoped>
</style>