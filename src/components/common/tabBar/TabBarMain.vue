<template>
  <tab-bar>
    <tab-bar-item
      v-for="(item, index) in titles"
      :key="index"
      :title="item"
      :isActived="index === currentIndex"
      @click="titleChang(index)"
    ></tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "TabBarMain",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      titles: ["推荐音乐", "热歌榜", "搜索"],
      paths: ["recommend", "hot", "search"],
    };
  },
  methods: {
    titleChang(index) {
      if (index === this.currentIndex) return;
      this.$router.replace(this.paths[index]);
    },
  },
  computed: {
    currentIndex() {
      if (this.$route.path.includes("/recommend")) {
        return 0;
      } else if (this.$route.path.includes("/hot")) {
        return 1;
      } else if (this.$route.path.includes("/search")) {
        return 2;
      }
    },
  },
};
</script>

<style scoped>
</style>