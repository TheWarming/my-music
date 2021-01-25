<template>
  <div class="playlist">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Playlists",
};
</script>

<style scoped>
.playlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>