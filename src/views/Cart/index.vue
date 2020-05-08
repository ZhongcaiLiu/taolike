<template>
  <div id="Cart">
    <scroller>
      <div class="cart">
        <div class="header">购物车(0)</div>
        <div class="cartContent">
          <img src="../../assets/imgs/cart.webp">
          <p>购物车竟然是空的</p>
          <p>再忙，也要记得买点什么犒赏自己~</p>
          <button @tap='toHome'>去逛逛</button>
        </div>
        <div class="guessyoulike"> <img src="../../assets/imgs/guessyoulike.png"></div>
        <GoodsList />
      </div>
    </scroller>
    <Tabbar />
    <router-view></router-view>
  </div>
</template>

<script>
import GoodsList from '@/components/GoodsList'
import Tabbar from '@/components/Tabbar'
export default {
  name: "cart",
  components: {
    GoodsList,
    Tabbar
  },
  methods: {
    toHome() {
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.cart .header {
  width: 100%;
  height: 4rem;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.65rem;
  text-indent: 0.5rem;
  font-weight: bolder;
  background: linear-gradient(-90deg, #ff5000 0%, #ff8400 100%);
}
.cartContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cartContent img {
  width: 4.5rem;
  margin: 0.5rem;
}
.cartContent p {
  font-size: 0.7rem;
  color: #666;
}
.cartContent p:nth-of-type(2) {
  font-size: 0.52rem;
  color: #999;
  margin: 0.5rem;
}
.cartContent button {
  width: 3.5rem;
  height: 1.6rem;
  color: #666;
  background-color: rgb(245, 245, 245);
  border: 1px solid #ddd;
}
.guessyoulike {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
}
.guessyoulike img {
  width: 40%;
}
</style>