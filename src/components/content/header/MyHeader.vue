<template>
  <div id="Header">
    <span class="wy-title center">{{ title }}</span>
    <span class="download right center">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    title: {
      type: String,
      default: "网易云音乐",
    },
    message: {
      type: String,
      default: "下载APP",
    },
  },
};
</script>

<style scoped>
#Header {
  height: 80px;
  background-color: var(--color-high-text);
  color: white;
  padding: 0 20px;
}
.wy-title {
  height: 32px;
  font-size: 20px;
  line-height: 32px;
}
.download {
  height: 32px;
  padding: 0 16px;
  line-height: 32px;
  font-size: 16px;
  color: var(--color-high-text);
  background-color: white;
  border-radius: 33%/100%;
}
</style>