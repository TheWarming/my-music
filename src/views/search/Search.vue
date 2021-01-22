<template>
  <div>
    <div class="search-box-div">
      <search-box :placeholder="placeholder" :value="searchValue"></search-box>
    </div>
    <search-hot-box
      :hots="searchHots"
      @changeSearch="changeSearch"
    ></search-hot-box>
  </div>
</template>

<script>
import SearchBox from "components/common/searchBox/SearchBox";

import SearchHotBox from "./childComps/SearchHotBox";

import { getSearchHotData } from "network/search";

export default {
  name: "Search",
  components: {
    SearchBox,
    SearchHotBox,
  },
  data() {
    return {
      searchHots: [],
      placeholder: "搜索歌曲、歌手、专辑",
      searchValue: "",
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
      this.searchValue = data;
    },
  },
};
</script>

<style scoped>
.search-box-div {
  padding: 16px 10px;
  border-bottom: 1px solid var(--border-color);
}
</style>