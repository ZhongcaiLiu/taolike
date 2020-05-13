<template>
  <div id="GoodsList">
    <ul class="goodslist">
      <li v-for="item in goodslist" :key="item.id">
        <img :src="item.img" @tap='toDetail(item._id)'>
        <p class="title" @tap='toDetail(item._id)'>{{item.name}}</p>
        <p class="price"><span>￥{{item.price | formatPrice}}</span><span>{{item.buy_Num}}人已购买</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  props: {
    changeTip: Function
  },
  data() {
    return {
      goodslist: []
    }
  },
  mounted() {
    this.axios.get('/api/goods').then((res) => {
      let status = res.data.err;
      if (status === 0) {
        this.goodslist = res.data.list
      }
    })
  },
  filters: {
    formatPrice(val) {
      return parseInt(val.split('-')[0]);
    }
  },
  methods: {
    Refresh() {
      this.axios.get('/api/goods').then((res) => {
        let status = res.data.err;
        if (status === 0) {
          this.changeTip('刷新成功')
          setTimeout(() => {
            this.goodslist = res.data.list;
            this.changeTip('')
          }, 1000)
        }
      })
    },
    toDetail(goodsid) {
      this.$router.push(this.$route.path + '/goodsDetail/' + goodsid)
    }
  }
}
</script>

<style scoped>
#GoodsList {
  width: 100%;
  padding-top: 0.6rem;
  background-color: #eee;
}
.goodslist {
  width: 100%;
  padding: 0.2rem 0 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goodslist li {
  width: 46%;
  height: 11.5rem;
  background-color: #fff;
  border-radius: 0.3rem;
  overflow: hidden;
  margin-top: 0.5rem;
}
.goodslist li img {
  width: 100%;
  height: 7.6rem;
}
.goodslist li .title {
  font-size: 0.6rem;
  color: #666;
  height: 1.8rem;
  line-height: 0.9rem;
  overflow: hidden;
  padding: 0 0.5rem;
}
.goodslist li .price {
  padding: 0.5rem 0;
  font-size: 0.7rem;
}
.goodslist li .price span {
  margin-left: 0.5rem;
  color: red;
}
.goodslist li .price span:nth-child(2) {
  font-size: 0.5rem;
  color: #999;
}
</style>