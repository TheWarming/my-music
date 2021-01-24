<template>
  <div id="searchView">
    <div class="search-box-div">
      <search-box
        :placeholder="placeholder"
        @doSearch="doSearch"
        @clearSearch="clearSearch"
        ref="searchBox"
      ></search-box>
    </div>
    <search-hot-box
      :hots="searchHots"
      @changeSearch="changeSearch"
      v-show="!resultIsShow"
    ></search-hot-box>
    <scroll ref="scroll" class="wrapper" v-show="resultIsShow">
      <song-list v-if="searchResult">
        <song-list-item
          v-for="item in searchResult"
          :key="item.id"
          :song="item"
        ></song-list-item>
      </song-list>
      <div v-else class="no-result">没有搜索结果</div>
    </scroll>
  </div>
</template>

<script>
import SearchBox from "components/common/searchBox/SearchBox";
import Scroll from "components/common/scroll/Scroll";

import SongList from "components/content/songList/SongList";
import SongListItem from "components/content/songList/SongListItem";

import SearchHotBox from "./childComps/SearchHotBox";

import { getSearchHotData, getSearchData } from "network/search";

export default {
  name: "Search",
  components: {
    SearchBox,
    SearchHotBox,
    SongList,
    SongListItem,
    Scroll,
  },
  data() {
    return {
      searchHots: [],
      placeholder: "搜索歌曲、歌手、专辑",
      searchResult: [],
      resultIsShow: false,
    };
  },
  created() {
    getSearchHotData().then((res) => {
      this.searchHots = res.result.hots;
      /* console.log(res); */
    });
  },
  methods: {
    changeSearch(data) {
      this.$refs.searchBox.setValue(data);
      this.doSearch(data);
    },
    doSearch(value) {
      getSearchData(value).then((res) => {
        this.searchResult = res.result.songs;
        this.resultIsShow = true;
        console.log(this.searchResult);
        this.$nextTick(() => {
          this.$refs.scroll.refresh();
        });
      });
    },
    clearSearch() {
      this.resultIsShow = false;
    },
  },
};
</script>

<style scoped>
.search-box-div {
  height: 66px;
  display: flex;
  border-bottom: 1px solid var(--border-color);
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}
#searchView {
  height: calc(100% - 80px - 44px);
}
.wrapper {
  height: calc(100% - 66px);
}
.no-result {
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  margin-top: 20px;
}
</style>