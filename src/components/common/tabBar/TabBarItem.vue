<template>
  <div class="tab-bar-item">
    <div class="message" :class="{ actived: isActived }">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    title: {
      type: String,
      default: "title",
    },
    isActived: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  display: flex;
  justify-content: center;
}
.message {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
}
.actived {
  border-bottom: 3px solid var(--color-high-text);
  color: var(--color-high-text);
}
</style>