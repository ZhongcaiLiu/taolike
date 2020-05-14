<template>
  <div id="Mine">
    <Scroller>
      <div>
        <Header />
        <MyOrder />
        <MyOptions />
      </div>
    </Scroller>
    <Tabbar />
  </div>
</template>

<script>

import Header from '@/views/Mine/components/Header'
import MyOrder from '@/views/Mine/components/MyOrder'
import MyOptions from '@/views/Mine/components/MyOptions'
import Tabbar from '@/components/Tabbar'
export default {
  name: "mine",
  components: {
    Header,
    MyOrder,
    MyOptions,
    Tabbar
  }
};
</script>

<style scoped>
</style>