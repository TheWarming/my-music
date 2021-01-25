<template>
  <div class="comment-info">
    <img :src="comment.user.avatarUrl" alt="avatar" class="avatar" />
    <div class="comment-text">
      <div>
        <span class="like">{{ "like:" + comment.likedCount }}</span>
        <p class="nickname">{{ comment.user.nickname }}</p>
        <p class="time">{{ date }}</p>
      </div>
      <p class="content">{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";

export default {
  name: "CommentsItem",
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    date() {
      return formatDate(new Date(this.comment.time), "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.comment-info {
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
}
.comment-info div {
  flex: 1;
}
.content {
  padding-right: 10px;
}
.comment-text {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
  position: relative;
}
.like {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #999;
  font-size: 12px;
}
.time {
  color: #999;
  padding-top: 4px;
  padding-bottom: 10px;
}
</style>