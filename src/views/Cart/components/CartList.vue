<template>
  <div id="CartList">
    <div class="goods" v-for="item in CartList" :key="item._id">
      <input type="checkbox" @tap='isCheck(item._id)' :checked='allcheck'>
      <img :src="item.img">
      <div class="content">
        <p>{{item.name}}</p>
        <span>￥{{item.price | formatPrice(item.price)}}</span>
        <div class="count">
          <button @tap='decrease'>-</button>
          <input type="number" v-model="quantity">
          <button @tap='increase'>+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CartList',
  data() {
    return {
      quantity: 1,
      CartList: [],
    }
  },
  computed: {
    ...mapState(['goodsid', 'isChecked','goodsQty']),
    allcheck(){
      return this.isChecked===this.goodsid
    }
  },
  methods: {
    increase() {
      this.quantity++;
    },
    decrease() {
      if (this.quantity === 1) {
        this.quantity = 1;
      } else {
        this.quantity--;
      }
    },
    isCheck(id) {
      if (this.isChecked.indexOf(id) === -1) {
        this.$store.commit('IS_CHECK', id)
      } else {
        this.$store.commit('NO_CHECK', this.isChecked.indexOf(id))
      }
    }
  },
  watch: {
    goodsid: {
      handler: function (val, oldval) {
        localStorage.setItem('goodsid', JSON.stringify(val))
        this.axios.post('/api/goods/CartDetail', { goodsid: val }).then((res) => {
          let status = res.data.err;
          if (status === 0) {
            this.CartList = res.data.data
          }
        })
      },
      immediate: true //立即监视
    }
  },
  filters: {
    formatPrice(val) {
      return val.split('-')[0]
    }
  }
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
input[type="checkbox"] {
  appearance: none;
  border-radius: 50%;
  border: 1px solid #ccc;
}
input[type="checkbox"]::after {
  content: "";
  display: block;
  width: 0.8rem;
  height: 0.8rem;
}
input[type="checkbox"]:checked {
  background: url("../../../assets/images/checked.png") no-repeat;
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