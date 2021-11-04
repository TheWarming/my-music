<template>
  <div class="search-box">
    <span @click="doSearch"></span>
    <input
      type="text"
      class="my-search"
      :placeholder="placeholder"
      v-model="value"
      @keyup.enter="doSearch"
      ref="searchInput"
    />
    <i class="cross-i" @click="clear" v-show="value.length !== 0"></i>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  props: {
    placeholder: {
      type: String,
      default: "test",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    doSearch() {
      if (!this.value) return;
      this.$emit("doSearch", this.value);
      this.$refs.searchInput.blur();
    },
    clear() {
      this.value = "";
      this.$emit("clearSearch", this.value);
    },
    setValue(data) {
      this.value = data;
    },
  },
  watch: {
    value(newV) {
      if (!newV) this.clear();
    },
  },
};
</script>

<style scoped>
.search-box {
  width: 100%;
  padding: 6px 26px;
  background-color: #eee;
  border-radius: 8%/100%;
  position: relative;
}
.search-box input {
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
}
.search-box span {
  display: inline-block;
  position: absolute;
  width: 13px;
  height: 13px;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(~assets/img/search/search.svg);
  background-repeat: no-repeat;
}
.search-box .cross-i {
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  position: absolute;
  right: 6px;
  background: url("~assets/img/search/cross.svg") no-repeat center;
  background-size: 100% 100%;
  color: rgba(0, 0, 0, 0);
  top: 50%;
  transform: translateY(-50%);
}
</style>