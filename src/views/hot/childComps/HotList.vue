<template>
  <div>
    <song-list>
      <song-list-item
        v-for="item in hotList"
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
  watch: {
    hotList() {
      this.$nextTick(() => {
        this.$emit("listLoad");
      });
    },
  },
};
</script>

<style scoped>
</style>