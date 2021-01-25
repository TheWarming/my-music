<template>
  <div>
    <song-list>
      <song-list-item
        v-for="(item, index) in partList"
        :key="index"
        :song="item"
        :rank="index + 1"
      ></song-list-item>
    </song-list>
    <div v-if="loadAll" class="load-all">已到达尽头</div>
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
  data() {
    return {
      partList: [],
    };
  },
  methods: {
    partListUpdate() {
      if (this.loadAll) return;
      this.partList.push(...this.hotList.splice(0, 20));
      this.$nextTick(() => {
        this.$emit("listLoad");
      });
    },
  },
  computed: {
    loadAll() {
      return this.hotList.length === 0;
    },
  },
  created() {
    this.partListUpdate();
  },
  watch: {
    hotList() {
      this.partListUpdate();
    },
  },
};
</script>

<style scoped>
.load-all {
  text-align: center;
  padding: 10px 0;
}
</style>