<template>
  <div id="app">
    <keep-alive>  <!-- 缓存页面，切换页面时不再发起Ajax请求，提高性能 -->
      <router-view></router-view>
    </keep-alive>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";

export default {
  name: "App",
  components: {
    Tabbar
  }
};
</script>

<style>
</style>
