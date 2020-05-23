<template>
  <div id="Category">
    <div id="boxFixed" :class="{'is_fixed' : isFixed}">
      <Search />
      <Nav />
    </div>
    <Scroller>
      <GoodsCategory />
    </Scroller>
    <router-view></router-view>
    <Tabbar />
  </div>
</template>

<script>
import Search from '@/views/Category/components/Search'
import Nav from '@/views/Category/components/Nav'
import GoodsCategory from '@/views/Category/components/GoodsCategory'
import Tabbar from '@/components/Tabbar'
export default {
  name: "category",
  data() {
    return {
      isFixed: false,
      offsetTop:0
    }
  },
  components: {
    Search,
    Nav,
    GoodsCategory,
    Tabbar
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
      this.offsetTop = document.querySelector('#boxFixed').offsetTop;
    })
  },
  methods: {
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
  },
  //回调中移除监听
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
};
</script>

<style scoped>
 .is_fixed{
    position: fixed;
    top: 0;
    z-index: 999;
  }
</style>