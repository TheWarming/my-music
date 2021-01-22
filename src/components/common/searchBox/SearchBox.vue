<template>
  <div class="search-box">
    <span>搜</span>
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
  padding: 6px 26px;
  background-color: #ddd;
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
  position: absolute;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5px;
}
</style>