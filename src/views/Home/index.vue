<template>
  <div id="Home">
    <div class="header">taolike!淘你喜欢！</div>
    <scroller :refresh='refresh' :refreshEnd='refreshEnd'>
      <div id="padding">
        <!--better-scroll只能有一个子元素 -->
        <div class="tip" v-if="tip">{{tip}}</div>
        <Navicon />
        <Carousel />
        <GoodsList ref="GoodsList" :changeTip='changeTip'></GoodsList>
      </div>
    </scroller>
    <Tabbar />
    <router-view></router-view>
  </div>
</template>

<script>

import Navicon from '@/views/Home/components/Navicon'
import Carousel from '@/views/Home/components/Carousel'
import GoodsList from '@/components/GoodsList'
import Tabbar from "@/components/Tabbar";

export default {
  name: "home",
  data() {
    return {
      tip: ''
    }
  },
  components: {
    Navicon,
    Carousel,
    GoodsList,
    Tabbar
  },
  methods: {
    refresh(pos) {
      if (pos.y > 30) {
        this.tip = '正在刷新'
      }
    },
    refreshEnd(pos) {
      if (pos.y > 30) {
        setTimeout(() => {
          this.$refs.GoodsList.Refresh()
        },1000)
      }
    },
    changeTip(tip) {
      this.tip = tip
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 2rem;
  color: #fff;
  line-height: 2rem;
  text-align: center;
  font-size: 0.8rem;
  background-image: linear-gradient(-90deg, #ff5000 0%, #ff8400 100%);
}
.tip {
  font-size: 0.6rem;
  color: #999;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
}
#padding {
  padding-bottom: 2rem;
}
</style>