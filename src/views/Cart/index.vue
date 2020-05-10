<template>
  <div id="Cart">
    <scroller>
      <div class="cart">
        <CartHeader />
        <CartList v-if="goodsQty" />
        <EmptyCart v-else />
        <div class="guessyoulike"> <img src="@/assets/images/guessyoulike.png"></div>
        <GoodsList />
      </div>
    </scroller>
    <div id="totalPrice" v-if="goodsQty">
      <input type="checkbox" v-model="Check"><span>全选</span>
      <span>合计：<span>￥0</span></span>
      <button>结算(0)</button>
    </div>
    <Tabbar />
    <router-view></router-view>
  </div>
</template>

<script>

import CartHeader from '@/views/Cart/components/CartHeader'
import CartList from '@/views/Cart/components/CartList'
import EmptyCart from '@/views/Cart/components/EmptyCart'
import GoodsList from '@/components/GoodsList'
import Tabbar from '@/components/Tabbar'
import { mapState } from 'vuex'

export default {
  name: "cart",
  components: {
    CartHeader,
    CartList,
    EmptyCart,
    GoodsList,
    Tabbar
  },
  computed: {
    ...mapState(['goodsQty', 'isChecked', 'goodsid']),
    Check: {
      get() {
        return this.isChecked.length === this.goodsQty
      },
      set() {
        this.$store.commit('ALL_CHECK')
      }
    }
  }
};
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.guessyoulike {
  display: flex;
  justify-content: center;
  align-items: center;
}
.guessyoulike img {
  width: 40%;
}
#totalPrice {
  width: 100%;
  height: 2rem;
  position: fixed;
  bottom: 2.3rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
}
#totalPrice input {
  appearance: none;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-left: 1.25rem;
  margin-right: 0.2rem;
}
#totalPrice input::after {
  content: "";
  display: block;
  width: 0.8rem;
  height: 0.8rem;
}
#totalPrice input:checked {
  background: url("../../assets/images/checked.png") no-repeat;
  background-size: cover;
}
#totalPrice span:nth-of-type(2) {
  margin-left: 5.8rem;
}
#totalPrice span:nth-of-type(2) span {
  color: red;
}
#totalPrice button {
  width: 3.5rem;
  height: 70%;
  background-image: linear-gradient(90deg, #ff9000 0%, #ff5000 98%);
  color: #fff;
  border-radius: 1rem;
  margin-left: 0.6rem;
  font-size: 0.65rem;
}
</style>