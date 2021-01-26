<template>
  <div id="play">
    <div class="background" :style="backgroundImage"></div>
    <scroll class="wrapper" ref="scroll">
      <play-music
        :detail="songDetail"
        :songUrl="songUrl"
        @slide="slide"
        ref="palyMusic"
      ></play-music>
      <play-simi-playlist
        :playlists="simiPlaylists"
        @imageLoad="refresh"
      ></play-simi-playlist>
      <play-simi-songs
        :songs="simiSongs"
        @simiSongLoad="refresh"
      ></play-simi-songs>
      <comments :commentsType="'精选评论'" v-if="hotComments.length">
        <comments-item
          v-for="comment in hotComments"
          :comment="comment"
          :key="comment.commentId"
        ></comments-item>
      </comments>
    </scroll>
  </div>
</template>

<script>
import {
  getSongUrl,
  getSongDetail,
  SongDetail,
  getSimiPlaylist,
  getSimiSong,
  getHotComment,
} from "network/play";

import Scroll from "components/common/scroll/Scroll";
import Comments from "components/content/comments/Comments";
import CommentsItem from "components/content/comments/CommentsItem";

import PlayMusic from "./chilComps/PlayMusic";
import PlaySimiPlaylist from "./chilComps/PlaySimiPlaylist";
import PlaySimiSongs from "./chilComps/PlaySimiSongs";

export default {
  name: "Play",
  components: {
    Scroll,
    PlayMusic,
    PlaySimiPlaylist,
    PlaySimiSongs,
    Comments,
    CommentsItem,
  },

  data() {
    return {
      id: this.$route.query.id,
      urlId: this.$route.query.urlId,
      songDetail: {},
      songUrl: "",
      simiPlaylists: [],
      simiSongs: [],
      hotComments: [],
      slideY: 0,
    };
  },
  methods: {
    init() {
      getSongUrl(this.urlId).then((res) => {
        /* console.log(res); */
        this.songUrl = res.data[0].url;
      });
      getSongDetail(this.id).then((res) => {
        /* console.log(res); */
        this.songDetail = new SongDetail(res.album);
      });
      getSimiPlaylist(this.urlId).then((res) => {
        /* console.log(res); */
        this.simiPlaylists = res.playlists;
      });
      getSimiSong(this.urlId).then((res) => {
        /* console.log(res); */
        this.simiSongs = res.songs;
      });
      getHotComment(this.urlId).then((res) => {
        this.hotComments = res.hotComments.splice(0, 20);
      });
    },
    refresh() {
      this.$refs.scroll && this.$refs.scroll.debounceRefresh();
    },

    //点击滑动
    slide() {
      if (!this.slideY) {
        this.slideY = this.$refs.palyMusic.$el.offsetHeight;
      }
      this.$refs.scroll.scrollTo(0, -this.slideY);
    },
  },
  computed: {
    backgroundImage() {
      return { backgroundImage: "url(" + this.songDetail.picUrl + ")" };
    },
  },
  watch: {
    $route(to, from) {
      //监听路由变化
      if (to.query.urlId && to.query.urlId !== from.query.urlId) {
        this.id = to.query.id;
        this.urlId = to.query.urlId;
        this.init();
        this.$refs.scroll.scrollTo(0, 0, 0);
      }
    },
    hotComments() {
      this.$nextTick(() => {
        this.refresh();
      });
    },
  },
  created() {
    this.init();
  },
};
</script>

<style scoped>
#play {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.background {
  width: 100%;
  height: 100%;
  opacity: 1;
  transform: scale(1.5);
  transform-origin: center center;
  filter: blur(30px);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #161824;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  overflow: hidden;
}
.wrapper {
  height: 100%;
}
</style>