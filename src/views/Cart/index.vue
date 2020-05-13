<template>
  <div id="Cart">
    <scroller>
      <div class="cart">
        <CartHeader/>
        <CartList v-if="ShopCart.length" />
        <EmptyCart v-else />
        <div class="guessyoulike"> <img src="@/assets/images/guessyoulike.png"></div>
        <GoodsList />
      </div>
    </scroller>
    <div id="totalPrice" v-if="ShopCart.length">
      <div class="checkbox">
        <input type="checkbox" v-model="CheckAll">
        <span>全选</span>
      </div>
      <div class="price" v-if="manage=='管理'">
        <span>合计：<span>￥{{SELECT_GOODS_PRICE}}</span></span>
        <button>结算({{SELECT_GOODS_COUNT}})</button>
      </div>
      <div class="delGoods" v-else>
        <button>移入收藏夹</button>
        <button @touchstart='DEL_GOODS'>删除</button>
      </div>
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
import { mapState, mapGetters,mapMutations } from 'vuex'

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
    ...mapState(['ShopCart','manage']),
    ...mapGetters(['SELECT_GOODS_COUNT', 'SELECT_GOODS_PRICE']),
    CheckAll: {
      get() {
        return this.$store.state.AllCheck
      },
      set(val) {
        this.$store.commit('ALL_CHECK', val)
      }
    }
  },
  methods:{
   ...mapMutations(['DEL_GOODS']),
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
#totalPrice .checkbox {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.8rem;
}
#totalPrice input {
  appearance: none;
  border: 1px solid #ccc;
  border-radius: 50%;
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
#totalPrice .price,.delGoods {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 0.8rem;
}
#totalPrice .price span span {
  color: red;
}
#totalPrice .price button {
  width: 3.5rem;
  height: 70%;
  background-image: linear-gradient(90deg, #ff9000 0%, #ff5000 98%);
  color: #fff;
  border-radius: 1rem;
  margin-left: 0.6rem;
  font-size: 0.65rem;
}
#totalPrice .delGoods button{
  width: 3.5rem;
  height: 50%;
  border-radius: 1rem;
  border: 1px solid #f40;
  color: #ff5000;
  background-color: #fff;
}
#totalPrice .delGoods button:nth-child(2){
  width: 2.5rem;
  margin-left: .5rem;
  color: #fc0a0a;
}
</style>