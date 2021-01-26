<template>
  <div class="search-history-item">
    <img src="~assets/img/search/history.svg" alt="history" class="history" />
    <div>{{ message }}</div>
    <img
      src="~assets/img/search/close.svg"
      alt="close"
      class="close"
      @click.stop="deleteHistoryItem(index)"
    />
  </div>
</template>

<script>
export default {
  name: "SearchHistoryItem",
  props: {
    message: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    deleteHistoryItem(index) {
      this.$emit("deleteHistoryItem", index);
    },
  },
};
</script>

<style scoped>
.search-history-item {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid var(--border-color);
}
.search-history-item div {
  flex: 1;
  padding-left: 10px;
}
.history {
  width: 16px;
  height: 16px;
}
.close {
  width: 12px;
  height: 12px;
}
</style>