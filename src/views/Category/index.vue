<template>
  <div id="Category">
    <div :class="isFixed?'fixed':''" ref="boxFixed">
      <Search />
      <Nav />
    </div>
    <div id="wrapper">
      <GoodsCategory />
    </div>
    <router-view></router-view>
    <Tabbar />
  </div>
</template>

<script>
import Search from '@/views/Category/components/Search'
import Nav from '@/views/Category/components/Nav'
import GoodsCategory from '@/views/Category/components/GoodsCategory'
import Tabbar from '@/components/Tabbar'
import BScroll from 'better-scroll'
export default {
  name: "category",
  data() {
    return {
      isFixed: false,
    }
  },
  components: {
    Search,
    Nav,
    GoodsCategory,
    Tabbar
  },
  mounted() {
    // handleScroll为页面滚动的监听回调
    // window.addEventListener('scroll', this.handleScroll); //注意如果用了better-scroll则监听不到scroll事件
    // window.onscroll=this.handleScroll;
    this.$nextTick(() => {
       const scroll = new BScroll(document.getElementById('wrapper'), {
        tap: true,
        mouseWheel: true,    //解决PC端鼠标滚轮无法滚动问题
        probeType:2 //滚动的时候实时派发scroll事件，不会截流。
      });
      scroll.on('scroll', (pos) => {
        if(pos.y<-2*(this.$refs.boxFixed.offsetHeight)){
          this.isFixed=true;
        }else{
          this.isFixed=false;
        }
      })
    })
  },
  methods: {
    // handleScroll() {
    //   // 得到页面滚动的距离
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //   // 当页面滚动距离大于导航高度时开始吸顶
    //   if (scrollTop > this.$refs.boxFixed.offsetHeight) {
    //     this.isFixed = true
    //   }else{
    //      this.isFixed = false
    //   }
    // }
  },
  destroyed() {
    // window.removeEventListener('scroll', this.handleScroll);
    // window.onscroll=null;
  }
};
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
#wrapper {
  height: 100vh; /*better-scroll包裹元素要小于子元素高度 */
}
</style>