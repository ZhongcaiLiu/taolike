<template>
  <div id="Submit">
    <div>共{{Order.length}}件，合计：<span>￥{{ORDER_PRICE}}</span></div>
    <button @touchstart='subMit'>提交订单</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { messageBox } from '@/components/JS'
export default {
  name: 'Submit',
  computed: {
    ...mapState(['Order']),
    ...mapGetters(['ORDER_PRICE'])
  },
  methods: {
    subMit() {
      messageBox({ content: '提交订单' })
    }
  }
}
</script>

<style lang='less'scoped>
#Submit {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2rem;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    font-size: 16px;
    span {
      color: #f40;
    }
  }
  button {
    width: 4rem;
    height: 80%;
    border-radius: 0.8rem;
    color: #fff;
    margin: 0 0.5rem;
    font-size: 16px;
    background-image: linear-gradient(90deg, #ff9000 0%, #ff5000 98%);
  }
}
</style>