<template>
  <div id="CheckedAddress">
    <span class="iconfont icon-shouhuodizhi"></span>
    <div class="address" v-for="(item, index) in defaults" :key="index">
      <p><span>{{item.name}}</span><span>{{item.phone}}</span></p>
      <p><span class="default">默认地址</span>{{item.address}}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'CheckedAddress',
  computed:{
    ...mapState(['Address']),
    defaults(){
      return this.Address.filter(a=>a.default)
    }
  }
}
</script>

<style scoped lang="less">
#CheckedAddress {
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 1rem;
  >span {
    font-size: 28px;
    margin-right: 0.5rem;
    color: #f40;
  }
  .address {
    font-size: 14px;
    p {
      margin-bottom: .2rem;
      span {
        font-size: 18px;
        &:nth-child(2) {
          color: #888;
          font-size: 14px;
          margin: 0 0.6rem;
        }
      }
      .default{
        font-size: 14px;
        background-color: #eee;
        color: #f40;
      }
    }
  }
}
</style>