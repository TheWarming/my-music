<template>
  <div>
    <second-header :title="title"></second-header>
    <song-list>
      <song-list-item
        v-for="item in newSongList"
        :key="item.id"
        :song="item.song"
      ></song-list-item>
    </song-list>
  </div>
</template>

<script>
import SecondHeader from "components/content/secondHeader/SecondHeader";
import SongListItem from "components/content/songList/SongListItem";
import SongList from "components/content/songList/SongList";

export default {
  name: "RecommendNewSong",
  props: {
    newSongList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      title: "最新音乐",
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