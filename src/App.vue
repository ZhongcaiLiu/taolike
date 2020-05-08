<template>
  <div id="app">
    <keep-alive>  <!-- 缓存页面，切换页面时不再发起Ajax请求，提高性能 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: "App",
};
</script>

<style>
</style>
