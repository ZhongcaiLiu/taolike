<template>
  <div id="bottomNav">
    <div class="icon">
      <div><span class="iconfont icon-dianpu"></span>店铺</div>
      <div><span class="iconfont icon-kefu"></span>客服</div>
      <div><span class="iconfont icon-xingxing"></span>收藏</div>
    </div>
    <div class="btn">
      <button @touchstart='addGoods(goodsDetail)'>加入购物车</button>
      <button>立即购买</button>
    </div>
  </div>
</template>

<script>
import {messageBox} from '../../../components/JS'
export default {
  name: 'bottomNav',
  props: {
    goodsDetail: Object
  },
  methods: {
    addGoods(item) {
      this.$store.commit('ADD_GOODS', item);
      messageBox({content:'添加成功！在购物车等 亲~'})
    }
  }
}
</script>

<style scoped>
#bottomNav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.3rem;
  background-color: #fff;
  font-size: 0.55rem;
  color: #999;
  display: flex;
}
#bottomNav .icon {
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#bottomNav .icon div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#bottomNav .icon div span {
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
}
.icon-dianpu {
  color: #f40;
}
#bottomNav .btn {
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#bottomNav .btn button {
  width: 48%;
  height: 80%;
  color: #fff;
  font-size: 0.68rem;
  font-weight: bolder;
}
#bottomNav .btn button:nth-child(1) {
  background-image: linear-gradient(to right, #ffc500, #ff9402);
  border-radius: 1rem 0 0 1rem;
}
#bottomNav .btn button:nth-child(2) {
  background-image: linear-gradient(to right, #ff7a00, #fe560a);
  border-radius: 0 1rem 1rem 0;
}
</style>