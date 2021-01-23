<template>
  <div class="search-box">
    <span></span>
    <input
      type="search"
      class="my-search"
      :placeholder="placeholder"
      v-model="value"
    />
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
    value: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped>
.search-box {
  padding: 6px 3px 6px 26px;
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
input::-webkit-search-cancel-button {
  -webkit-appearance: none;
  position: relative;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: url("~assets/img/search/cross.svg") no-repeat center;
  background-size: 100% 100%;
  color: rgba(0, 0, 0, 0);
}
input[type="search"]::-ms-clear {
  appearance: none;
  position: relative;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: url("~assets/img/search/cross.svg") no-repeat center;
  background-size: 100% 100%;
  color: rgba(0, 0, 0, 0);
}
</style>