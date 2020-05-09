<template>
  <div id="Cart">
    <scroller>
      <div class="cart">
        <CartHeader />
        <CartList v-if="goods" />
        <EmptyCart v-else />
        <div class="guessyoulike"> <img src="@/assets/images/guessyoulike.png"></div>
        <GoodsList />
      </div>
    </scroller>
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
    ...mapState(['goods'])
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
</style>