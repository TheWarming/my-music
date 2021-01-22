<template>
  <div class="search-hot">
    <p>热门搜索</p>
    <div class="hots-box">
      <span
        v-for="(item, index) in hots"
        :key="index"
        @click="changeSearch(item.first)"
        >{{ item.first }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHotBox",
  props: {
    hots: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    changeSearch(data) {
      this.$emit("changeSearch", data);
    },
  },
};
</script>

<style scoped>
.search-hot {
  padding: 10px;
}
.search-hot p {
  margin: 10px 0;
  font-size: 12px;
}
.hots-box {
  display: flex;
  flex-wrap: wrap;
}
.hots-box span {
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  margin-right: 8px;
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
}
</style>