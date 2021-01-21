<template>
  <div class="playlist-item">
    <div class="image-div">
      <img :src="list.picUrl" alt="" />
      <span>{{ showPlayCount }}</span>
    </div>
    <p>{{ list.name }}</p>
  </div>
</template>

<script>
export default {
  name: "PlaylistItem",
  props: {
    list: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showPlayCount() {
      if (this.list.playCount < 10000) return this.list.playCount;
      return (this.list.playCount / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.playlist-item {
  width: 32.5%;
  position: relative;
}
.image-div img {
  width: 100%;
}
.image-div span {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 9;
  color: #fff;
  font-size: 10px;
}
.image-div::after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 20px;
  z-index: 2;
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)
  );
}
.playlist-item p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 15px;
  padding: 2px;
}
</style>