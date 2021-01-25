<template>
  <div class="song-list lastClearBorder">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SongList",
};
</script>

<style scoped>
.song-list {
  padding: 0 5px;
}
</style>