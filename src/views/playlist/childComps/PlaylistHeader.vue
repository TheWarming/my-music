<template>
  <div class="playlist-header">
    <div class="backgound" :style="backStyle"></div>
    <div class="list-info">
      <div class="cover">
        <img :src="listInfo.cover" alt="cover" />
        <span class="songlist-tag">歌单</span>
        <span class="songlist-count">{{ showPlayCount }}</span>
      </div>
      <div class="detail">
        <p>{{ listInfo.name }}</p>
        <div class="creator">
          <img :src="listInfo.creatorAvatar" alt="creatorAvatar" />
          <span>{{ listInfo.creatorName }}</span>
        </div>
      </div>
    </div>
    <p class="desc">{{ listInfo.desc }}</p>
  </div>
</template>

<script>
export default {
  name: "PlaylistHeader",
  props: {
    listInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    backStyle() {
      return { backgroundImage: "url(" + this.listInfo.cover + ")" };
    },
    showPlayCount() {
      if (this.listInfo.playCount < 10000) return this.listInfo.playCount;
      return (this.listInfo.playCount / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.playlist-header {
  position: relative;
  width: 100%;
  color: aliceblue;
}
.backgound {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
}
.list-info {
  display: flex;
  padding: 20px 10px;
}
.cover {
  flex: 2;
  position: relative;
}
.songlist-tag {
  position: absolute;
  left: 0;
  top: 10%;
  font-size: 14px;
  padding: 2px 8px;
  background-color: var(--color-high-text);
  border-top-right-radius: 17px;
  border-bottom-right-radius: 17px;
}
.songlist-count {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 9;
  color: #fff;
  font-size: 10px;
  background-image: url(~assets/img/common/earphone.svg);
  background-repeat: no-repeat;
  padding-left: 12px;
  background-size: 10px 10px;
}
.cover img {
  width: 100%;
}
.detail {
  flex: 3;
  padding: 6px 10px;
}
.creator {
  margin-top: 20px;
  font-size: 14px;
  color: #eeeff0;
}
.creator img {
  width: 33px;
  height: 33px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.desc {
  padding: 0 10px 20px;
}
</style>