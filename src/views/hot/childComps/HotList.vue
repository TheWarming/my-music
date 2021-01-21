<template>
  <div>
    <song-list>
      <song-list-item
        v-for="item in hotList.splice(0, 20)"
        :key="item"
        :song="item"
      ></song-list-item>
    </song-list>
  </div>
</template>

<script>
import SongListItem from "components/content/songList/SongListItem";
import SongList from "components/content/songList/SongList";

export default {
  name: "HotList",
  components: {
    SongList,
    SongListItem,
  },
  props: {
    hotList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
};
</script>

<style scoped>
</style>