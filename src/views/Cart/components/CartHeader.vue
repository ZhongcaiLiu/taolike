<template>
  <div id="CartHeader" :style="goods?{height:'5.8rem'}:{}">
    <span>购物车(0)</span>
    <span>管理</span>
    <p>共1件宝贝</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CartHeader',
  computed: {
    ...mapState(['goods'])
  }
}
</script>

<style scoped>
#CartHeader {
  width: 100%;
  height: 4rem;
  color: #fff;
  padding: 0.6rem;
  text-indent: 0.5rem;
  background: linear-gradient(-90deg, #ff5000 0%, #ff8400 100%);
}
span:nth-child(1) {
  font-size: 0.8rem;
  font-weight: bolder;
}
span:nth-child(2) {
  font-size: 0.6rem;
  float: right;
  margin: 0.3rem 0.5rem 0 0;
}
p {
  font-size: 0.5rem;
  margin-top: .5rem;
}
</style>