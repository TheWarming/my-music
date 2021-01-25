<template>
  <div id="app">
    <my-header title="山寨网易云音乐" message="By Warming"></my-header>
    <tab-bar-main></tab-bar-main>
    <router-view v-slot="{ Component }">
      <keep-alive :exclude="['Play', 'Playlist']">
        <component :is="Component" />
      </keep-alive>
    </router-view>
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
#app {
  height: 100vh;
}
</style>
