<template>
  <div id="CartList">
    <div class="goods" v-for="item in ShopCart" :key="item._id">
      <a href="javascript:;" :checked='item.checked' @tap='isCheck(item)'></a>
      <img :src="item.img">
      <div class="content">
        <p>{{item.name}}</p>
        <span>￥{{item.price | formatPrice}}</span>
        <div class="count">
          <button @tap='changeNum(item,false)'>-</button>
          <input type="number" v-model="item.num" @input="inputNum($event,item._id)">
          <button @tap='changeNum(item,true)'>+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CartList',
  computed: {
    ...mapState(['ShopCart']),
  },
  filters: {
    formatPrice(val) {
      return parseFloat(val.split('-')[0]).toFixed(2)
    }
  },
  methods: {
    changeNum(item, flag) {
      if (flag) {
        this.$store.commit('INC_NUM', item)
      } else {
        this.$store.commit('DEC_NUM', item)
      }
    },
    inputNum(e, id) {
      let value = e.target.value
      this.$store.commit('INP_NUM', { value, id })
    },
    isCheck(item) {
      this.$store.commit('IS_CHECK', item)
    }
  },
}
</script>

<style scoped>
#CartList {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-3rem);
}
.goods {
  width: 95%;
  height: 5.5rem;
  border-radius: 0.8rem;
  background-color: #fff;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  padding: 0.6rem;
  position: relative;
  box-sizing: border-box;
}
a {
  display: block;
  width: 12%;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid #ccc;
}
a[checked] {
  background: url("../../../assets/images/Cart/checked.png") no-repeat;
  background-size: cover;
}
.goods img {
  width: 25%;
  height: 90%;
  margin: 0 0.6rem;
}
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.content p {
  font-size: 0.6rem;
  color: #666;
  height: 1.4rem;
  line-height: 0.7rem;
  overflow: hidden;
}
.content span {
  font-size: 0.6rem;
  color: red;
}
.count {
  position: absolute;
  right: 0.8rem;
  bottom: 1.4rem;
  height: 1rem;
}
.count input {
  width: 1.4rem;
  height: 100%;
  text-align: center;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
}
.count button {
  width: 1.2rem;
  height: 100%;
  border: 1px solid #ddd;
  color: #999;
  background-color: #fff;
}
</style>