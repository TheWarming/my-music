<template>
  <div class="comments">
    <p class="comments-type">{{ commentsType }}</p>
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