<template>
  <div class="second-header">
    <span class="center">{{ title }}</span>
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
    backgroundColor: {
      type: String,
      default: "#FFF",
    },
  },
};
</script>

<style scoped>
.second-header {
  height: 48px;
}
.second-header span {
  color: black;
  padding: 0 6px;
  border-left: 2px solid var(--color-high-text);
  font-size: 16px;
}
</style>