<template>
  <div
    class="song-list-item"
    v-if="Object.keys(song).length !== 0"
    @click="toPlay"
  >
    <div class="rank" v-if="!isNaN(rank)">
      <span class="center" :class="{ top: rank <= 3 }">
        {{ rankIndex }}
      </span>
    </div>
    <div class="pic" v-if="picIsShow">
      <img :src="picUrl" alt="pic" class="center" />
    </div>
    <div class="song">
      <p class="my-text-overflow">
        <span class="name">{{ name }}</span>
        <span>{{ alias }}</span>
      </p>
      <p class="artists my-text-overflow" :class="{ sq: song.exclusive }">
        {{ artists }}
      </p>
    </div>
    <div class="play">
      <span class="center"></span>
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
    rank: {
      type: Number,
      default: NaN,
    },
    picIsShow: {
      type: Boolean,
      default: false,
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
    rankIndex() {
      return this.rank <= 9 ? "0" + this.rank : this.rank;
    },
    picUrl() {
      return this.song.album.picUrl || this.song.al.picUrl;
    },
  },
  methods: {
    toPlay() {
      const query = {
        id: this.song[this.keys[0]].id,
        urlId: this.song.al ? this.song.id : this.song.privilege.id,
      };
      this.$router.push({
        path: "/play",
        query,
      });
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
  width: 22px;
}
.play span {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url(~assets/img/common/icon.png) -24px 0 no-repeat;
  background-size: 166px 97px;
}
.name {
  color: #000;
}
.artists {
  font-size: 12px;
  margin-top: 2px;
}
.rank {
  width: 30px;
}
.top {
  color: var(--color-high-text);
}
.sq::before {
  display: inline-block;
  background: url(~assets/img/common/icon.png) no-repeat;
  content: "";
  width: 12px;
  height: 8px;
  background-size: 166px 97px;
  margin-right: 2px;
}
.pic img {
  width: 34px;
  height: 34px;
}
.pic {
  padding: 0 6px;
}
</style>