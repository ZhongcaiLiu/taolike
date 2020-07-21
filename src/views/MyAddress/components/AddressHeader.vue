<template>
  <div id="Header">
    <span class="iconfont icon-iconfontjiantou1" @touchstart='back'></span>
    <span>我的收货地址</span>
    <span @touchstart='addAddress'>添加新地址</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    back() {
      this.$router.push('/order')
    },
    addAddress() {
      this.$router.push('/addaddress')
    }
  }
}
</script>

<style scoped lang="less">
#Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 0.5rem;
  span {
    &:nth-child(2) {
      font-size: 18px;
      font-weight: bold;
      margin-right: -1rem;
    }
  }
}
</style>