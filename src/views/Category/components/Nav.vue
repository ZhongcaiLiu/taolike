<template>
  <ul id="Nav">
    <li v-for="(item, index) in nav" :key="index" :class="flag===index?'active':''" @touchstart='change(index)'>{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Nav',
  data(){
      return{
          nav:['家居','女装','男装','运动','潮玩馆'],
          flag:0
      }
  },
  methods:{
      change(index){
       this.flag=index;
       this.$store.commit('CHANGE_TYPEID',index+1)
      }
  }
}
</script>

<style lang="less" scoped>
#Nav{
    display: flex;
    font-size: 14px;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    background-color: #fff;
    li{
        border: 1px solid #f40;
        padding: 0 .5rem;
        border-radius: 10px;
    }
    .active{
        background-color: #f40;
        color: #fff;
    }
}
</style>