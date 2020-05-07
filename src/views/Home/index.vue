<template>
  <div id="Home">
    <scroller :refresh='refresh' :refreshEnd='refreshEnd'>
      <div>
        <!--better-scroll只能有一个子元素 -->
        <div class="tip">{{tip}}</div>
        <Navicon />
        <Carousel />
        <GuessYouLike ref="GuessYouLike" :changeTip='changeTip'></GuessYouLike>
      </div>
    </scroller>
    <router-view></router-view>
  </div>
</template>

<script>

import Navicon from '@/components/Navicon'
import Carousel from '@/components/Carousel'
import GuessYouLike from '@/components/GuessYouLike'

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
    GuessYouLike
  },
  methods: {
    refresh(pos) {
      if (pos.y > 30) {
        this.tip = '正在刷新'
      }
    },
    refreshEnd(pos) {
      if (pos.y > 30) {
        this.$refs.GuessYouLike.Refresh()
      }
    },
    changeTip(tip){
      this.tip=tip
    }
  }
};
</script>

<style scoped>
.tip {
  font-size: 0.6rem;
  color: #999;
}
</style>