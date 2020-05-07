<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroller',
  props: {
    refresh: Function,
    refreshEnd:Function
  },
  mounted() {
    const scroll = new BScroll(this.$refs.wrapper, {
      tap: true,    //tap事件配置参数
      probeType: 1, //滚动的时候会派发scroll事件，会截流(一段时间内只能触发一次)
      mouseWheel: true    //解决PC端鼠标滚轮无法滚动问题
    })
    scroll.on('scroll', (pos) => {
      this.refresh(pos)
    })
    scroll.on('touchEnd', (pos) => {
      this.refreshEnd(pos)
    })
  }
}
</script>
<style scoped>
.wrapper {
  height: 100vh; /*better-scroll作用容器高必须比子元素的高小，且只能有一个子元素 */
}
</style>