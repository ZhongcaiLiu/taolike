<template>
  <div id="Tabbar">
    <router-link to="/home"><span class="iconfont icon-yemian-copy-copy-copy-copy"></span>首页</router-link>
    <router-link to="/category"><span class="iconfont icon-feneli-copy"></span>分类</router-link>
    <router-link to="/cart"><span class="iconfont icon-gouwuchekong"></span>购物车</router-link>
    <router-link to="/mine"><span class="iconfont icon-weibiaoti-_huabanfuben"></span>我的</router-link>
  </div>
</template>

<script>
export default {
  name: "tabbar"
};
</script>

<style scoped>
#Tabbar {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 2.3rem;
  background-color: #fff;
}
#Tabbar a {
  font-size: .6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.router-link-exact-active {
  color: red;
}
#Tabbar a span{
  font-size: .85rem;
}
</style>