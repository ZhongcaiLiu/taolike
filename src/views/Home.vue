<template>
  <div id="Home">
      <Navicon/>
      <Carousel/>
  </div>
</template>

<script>

import Navicon from '@/components/Navicon'
import Carousel from '@/components/Carousel'

export default {
  name: "home",
  components:{
    Navicon,
    Carousel
  }
};
</script>

<style scoped>

</style>