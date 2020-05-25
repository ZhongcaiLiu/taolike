<template>
  <div id="Search">
    <span class="iconfont icon-sousuo"></span>
    <input type="text" placeholder="请输入要找的宝贝" v-model="kw">
  </div>
</template>

<script>
export default {
  name: 'Search',
  computed:{
    kw:{
      get(){
        return this.$store.state.kw;
      },
      set(kw){
        this.$store.commit('SEARCH',kw)
      }
    }
  } 
}
</script>

<style scoped lang="less">
#Search {
  background-color: #f40;
  color: #fff;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  input {
    height: 1.3rem;
    width: 70%;
    padding: 0 1rem;
    box-sizing: border-box;
  }
  span {
    position: absolute;
    left: 2.7rem;
    color: #888;
  }
}
</style>