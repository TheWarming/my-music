<template>
  <div class="comments lastClearBorder" :style="{ color: fontColor }">
    <p class="comments-type" v-if="commentsType.length">
      {{ commentsType }}
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: {
    commentsType: {
      type: String,
      default: "评论",
    },
    fontColor: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>

<style scoped>
.comments {
  padding-bottom: 6px;
}
.comments-type {
  color: aliceblue;
  margin: 50px 0 20px 10px;
}
</style>