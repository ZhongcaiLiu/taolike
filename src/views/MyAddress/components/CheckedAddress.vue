<template>
  <div id="CheckedAddress">
      <span class="iconfont icon-shouhuodizhi"></span>
      <div class="address" v-for="(item, index) in defaults" :key="index">
        <p><span>{{item.name}}</span><span>{{item.phone}}</span></p>
        <p><span class="default">默认地址</span>{{item.address}}</p>
      </div>
      <div id="cover" v-if="!defaults.length">您还没有默认收货地址,从下面地址中选一个或者添加一个吧！</div></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CheckedAddress',
  computed: {
    ...mapState(['Address']),
    defaults() {
      return this.Address.filter(a => a.defaults)
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
  position: relative;
  > span {
    font-size: 28px;
    margin-right: 0.5rem;
    color: #f40;
  }
  .address {
    font-size: 14px;
    p {
      margin-bottom: 0.2rem;
      span {
        font-size: 18px;
        &:nth-child(2) {
          color: #888;
          font-size: 14px;
          margin: 0 0.6rem;
        }
      }
      .default {
        font-size: 14px;
        background-color: #eee;
        color: #f40;
      }
    }
  }
}
#cover{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #f40;
  padding: 0 2rem;
  font-weight: bold;
  box-sizing: border-box;
}
</style>