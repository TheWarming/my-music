<template>
  <div class="song-list-item" v-if="Object.keys(song).length !== 0">
    <div class="song">
      <p class="my-text-overflow">
        <span class="name">{{ name }}</span>
        <span>{{ alias }}</span>
      </p>
      <p class="artists my-text-overflow">{{ artists }}</p>
    </div>
    <div class="play">
      <span>播放</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongListItem",
  props: {
    song: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    name() {
      const key = this.keys[0];
      return this.song[key].name + " ";
    },
    alias() {
      const key = this.keys[1];
      if (this.song[key].length === 0) return "";
      return "(" + this.song[key].join("/") + ")";
    },
    artists() {
      const key = this.keys[2];
      return (
        this.song[key]
          .reduce((pre, item) => pre + item.name + "/", "")
          .slice(0, -1) +
        " - " +
        this.song[this.keys[0]].name
      );
    },
    keys() {
      return this.song.al
        ? ["al", "alia", "ar"]
        : ["album", "alias", "artists"];
    },
  },
};
</script>

<style scoped>
.song-list-item {
  display: flex;
  margin: 0 5px;
  border-bottom: 1px solid var(--border-color);
  padding: 10px 0;
}
.song {
  flex: 1;
  min-width: 0;
}
.play {
  width: 50px;
}
.name {
  color: #000;
}
.artists {
  font-size: 12px;
  margin-top: 2px;
}
</style>