<template>
  <div class="second-header">
    <span class="center" :style="{ color: fontColor }">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "SecondHeader",
  props: {
    title: {
      type: String,
      default: "title",
    },
    fontColor: {
      type: String,
      default: "#000",
    },
  },
};
</script>

<style scoped>
.second-header {
  height: 48px;
}
.second-header span {
  padding: 0 6px;
  border-left: 2px solid var(--color-high-text);
  font-size: 16px;
}
</style>