<template>
  <div id="app">
    <keep-alive>  <!-- 缓存页面，切换页面时不再发起Ajax请求，提高性能 -->
      <router-view v-if="$route.meta.KeepAlive"></router-view>
    </keep-alive>
      <router-view v-if="!$route.meta.KeepAlive"></router-view>
  </div>
</template>

<script>


export default {
  name: "App",
};
</script>

<style>
</style>
