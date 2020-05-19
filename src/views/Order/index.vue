<template>
  <div id="Order">
    <Scroller>
      <div>
        <Header />
        <OrderDetail />
      </div>
    </Scroller>
    <Submit />
  </div>
</template>

<script>
import Header from '@/views/Order/components/Header'
import OrderDetail from '@/views/Order/components/OrderDetail'
import Submit from '@/views/Order/components/Submit'
export default {
  name: 'Order',
  components: {
    Header,
    OrderDetail,
    Submit
  }
}
</script>

<style scoped>
#Order {
  min-height: 100vh;
}
</style>