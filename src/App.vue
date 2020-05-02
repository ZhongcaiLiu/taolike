<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar />
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
