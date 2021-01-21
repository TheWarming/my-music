<template>
  <div>
    <my-header></my-header>
    <tab-bar-main></tab-bar-main>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBarMain from "components/common/tabBar/TabBarMain";
import MyHeader from "components/content/header/MyHeader";

export default {
  name: "App",
  components: {
    TabBarMain,
    MyHeader,
  },
};
</script>

<style lang="scss">
@import "~assets/css/base.css";
</style>
