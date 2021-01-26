<template>
  <div class="song-list lastClearBorder" :style="{ color: nameColor }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SongList",
  props: {
    nameColor: {
      type: String,
      default: "#000000",
    },
  },
};
</script>

<style scoped>
.song-list {
  padding: 0 5px;
}
</style>