<template>
  <div class="playlist">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Playlist",
};
</script>

<style scoped>
.playlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>