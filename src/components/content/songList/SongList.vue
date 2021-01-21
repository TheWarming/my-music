<template>
  <div class="song-list">
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