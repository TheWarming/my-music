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
    ></search-hot-box>
    <scroll class="history-wrapper" ref="historyScroll">
      <search-history-item
        v-for="(item, index) in searchHistory"
        :key="index"
        :message="item"
        :index="index"
        @click.native="changeSearch(item)"
        @deleteHistoryItem="deleteHistoryItem"
      ></search-history-item>
    </scroll>
    <scroll
      ref="scroll"
      class="search-wrapper"
      v-show="resultIsShow"
      :isPullUpLoad="true"
      @pullingUp="loadMore"
    >
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
import SearchHistoryItem from "./childComps/SearchHistoryItem";

import { getSearchHotData, getSearchData } from "network/search";

//自动刷新
import { autoRefreshMixin } from "common/mixin";

export default {
  name: "Search",
  mixins: [autoRefreshMixin],
  components: {
    SearchBox,
    SearchHotBox,
    SongList,
    SongListItem,
    Scroll,
    SearchHistoryItem,
  },
  data() {
    return {
      searchHots: [],
      placeholder: "搜索歌曲、歌手、专辑",
      searchResult: [],
      resultIsShow: false,
      page: 0,
      searchKey: "",
      searchHistory: null,
    };
  },
  created() {
    this.searchHistory = localStorage.getItem("my-music-search-history")
      ? JSON.parse(localStorage.getItem("my-music-search-history"))
      : [];

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
      /* this.searchHistory.unshift(value); */
      this.searchHistoryUnshift(value);
      this.searchKey = value;
      getSearchData(value, this.page).then((res) => {
        this.page++;
        this.searchResult = res.result.songs;
        this.resultIsShow = true;
        this.$nextTick(() => {
          this.$refs.scroll.refresh();
        });
      });
    },
    //清除搜索
    clearSearch() {
      this.$refs.scroll.scrollTo();
      this.resultIsShow = false;
      this.searchKey = "";
      this.page = 0;

      //历史记录显示
      this.$refs.historyScroll.refresh();
    },
    loadMore() {
      getSearchData(this.searchKey, this.page).then((res) => {
        this.page++;
        this.searchResult.push(...res.result.songs);
        this.$nextTick(() => {
          this.$refs.scroll.refresh();
          this.$refs.scroll.finishPullUp();
        });
      });
    },
    savaSearchHistory() {
      localStorage.setItem(
        "my-music-search-history",
        JSON.stringify(this.searchHistory)
      );
    },
    deleteHistoryItem(index) {
      this.searchHistory.splice(index, 1);
      this.savaSearchHistory();
      this.$nextTick(() => {
        this.$refs.historyScroll.refresh();
      });
    },
    searchHistoryUnshift(value) {
      const i = this.searchHistory.findIndex((n) => n === value);
      i !== -1 && this.searchHistory.splice(i, 1);
      this.searchHistory.unshift(value);
      this.savaSearchHistory();
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
  position: relative;
}
.search-wrapper {
  background-color: #ffffff;
  height: calc(100% - 66px);
  position: absolute;
  top: 66px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
.no-result {
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  margin-top: 20px;
}
.history-wrapper {
  height: calc(100% - 80px - 44px - 100px);
}
</style>