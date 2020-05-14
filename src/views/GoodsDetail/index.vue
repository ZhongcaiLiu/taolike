<template>
  <div id="GoodsDetail">
    <scroller>
      <div>
        <div class="img"><img :src="goodsDetail.img"></div>
        <div class="title">
          <p class="price"><span>￥</span>{{goodsDetail.price}}</p>
          <p v-show="goodsDetail.discount">价格￥<del>{{goodsDetail.discount}}</del></p>
          <p class="name">{{goodsDetail.name}}</p>
          <div class="detail">
            <span>快递：免运费</span>
            <span>月销量：{{goodsDetail.sold_Num}}件</span>
            <span>{{goodsDetail.address}}</span>
          </div>
        </div>
        <GoodsOptions />
      </div>
      <span class="iconfont icon-iconfontjiantou1" @tap="Back"></span>
      <span class="iconfont icon-gouwuchekong" @tap="toCart"></span>
    </scroller>
    <BottomNav :goodsDetail='goodsDetail'/>
  </div>
</template>

<script>
import GoodsOptions from '@/views/GoodsDetail/components/GoodsOptions'
import BottomNav from '@/views/GoodsDetail/components/BottomNav'
export default {
  name: 'GoodsDetail',
  props: ['id'],
  components: {
    GoodsOptions,
    BottomNav,
  },
  data() {
    return {
      goodsDetail: {}
    }
  },
  methods: {
    Back() {
      this.$router.back()
    },
    toCart() {
      this.$router.push('/cart')
    }
  },
  mounted() {
    this.axios.post('/api/goods/detail', { _id: this.id }).then((res) => {
      let status = res.data.err;
      if (status === 0) {
        this.goodsDetail = res.data.data
      }
    })

  }
}
</script>

<style scoped>
#GoodsDetail {
  position: absolute;
  top: 0;
  z-index: 999;
  background-color: rgb(245, 245, 245);
  width: 100%;
  min-height: 100vh;
}
.img,
.img img {
  width: 100%;
  height: 17rem;
}
.title {
  height: 4.8rem;
  background-color: #fff;
  padding: 0.5rem;
}
.price {
  color: red;
  font-size: 0.9rem;
}
.price span {
  font-size: 0.7rem;
  margin-left: -0.12rem;
}
.title p:nth-child(2) {
  font-size: 0.45rem;
  color: #999;
}
.title .name {
  font-size: 0.7rem;
  font-weight: bolder;
  height: 2rem;
  line-height: 1rem;
  overflow: hidden;
}
.detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.5rem;
  color: #999;
  margin-top: 0.4rem;
}

.icon-iconfontjiantou1 {
  position: fixed;
  left: 0.6rem;
  top: 0.5rem;
  color: #fff;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-gouwuchekong {
  position: fixed;
  right: 0.6rem;
  top: 0.5rem;
  color: #fff;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>