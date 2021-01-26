<template>
  <scroll id="playlist" ref="scroll">
    <playlist-header :listInfo="headerInfo"></playlist-header>
    <div class="content">
      <p class="row">歌曲列表</p>
      <song-list>
        <song-list-item
          v-for="(item, index) in songs"
          :key="index"
          :song="item"
        ></song-list-item>
      </song-list>
      <div v-if="hotComments.length">
        <p class="row">精彩评论</p>
        <comments fontColor="#000000" commentsType="">
          <comments-item
            v-for="(item, index) in hotComments"
            :key="index"
            :comment="item"
          ></comments-item>
        </comments>
      </div>
      <div v-if="newComments.length">
        <p class="row">最新评论</p>
        <comments fontColor="#000000" commentsType="">
          <comments-item
            v-for="(item, index) in newComments"
            :key="index"
            :comment="item"
          ></comments-item>
        </comments>
      </div>
      <div class="all-comments">
        <span>查看全部评论</span>
      </div>
    </div>
  </scroll>
</template>

<script>
import { getPlaylistInfo, HeaderInfo, getComment } from "network/playlist";

import PlaylistHeader from "./childComps/PlaylistHeader";

import SongList from "components/content/songList/SongList";
import SongListItem from "components/content/songList/SongListItem";
import Comments from "components/content/comments/Comments";
import CommentsItem from "components/content/comments/CommentsItem";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Playlist",
  components: {
    PlaylistHeader,
    SongList,
    SongListItem,
    Scroll,
    Comments,
    CommentsItem,
  },
  data() {
    return {
      id: this.$route.query.id,
      headerInfo: {},
      songs: [],
      hotComments: [],
      newComments: [],
    };
  },
  created() {
    getPlaylistInfo(this.id).then((res) => {
      /* console.log(res); */
      this.headerInfo = new HeaderInfo(res.playlist);
      this.songs = res.playlist.tracks;
    });

    getComment(this.id).then((res) => {
      this.hotComments = res.hotComments.splice(0, 5);
      this.newComments = res.comments;
    });
  },
  methods: {
    refresh() {
      this.$refs.scroll && this.$refs.scroll.debounceRefresh();
    },
  },
  watch: {
    songs() {
      this.$nextTick(() => {
        this.refresh();
      });
    },
    hotComments() {
      this.$nextTick(() => {
        this.refresh();
      });
    },
    newComments() {
      this.$nextTick(() => {
        this.refresh();
      });
    },
  },
};
</script>

<style scoped>
#playlist {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}
.content {
  background-color: #ffffff;
}
.row {
  background-color: #eeeff0;
  padding: 4px 6px;
  font-size: 12px;
}
.all-comments {
  font-size: 18px;
  text-align: center;
  padding: 18px 0;
}
</style>