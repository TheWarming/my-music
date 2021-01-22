<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  /* border-bottom: 1px solid var(--border-color); */
  box-shadow: 0px 1px var(--border-color);
}
</style>