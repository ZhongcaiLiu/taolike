<template>
  <div id="EmptyCart">
    <img src="@/assets/images/Cart/cart.webp">
    <p>购物车竟然是空的</p>
    <p>再忙，也要记得买点什么犒赏自己~</p>
    <button @tap='toHome'>去逛逛</button>
  </div>
</template>

<script>
export default {
  name: 'EmptyCart',
  methods: {
    toHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
#EmptyCart {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
}
img {
  width: 4.5rem;
  margin: 0.5rem;
}
p {
  font-size: 0.7rem;
  color: #666;
}
p:nth-of-type(2) {
  font-size: 0.52rem;
  color: #999;
  margin: 0.5rem;
}
button {
  width: 3.5rem;
  height: 1.6rem;
  color: #666;
  background-color: rgb(245, 245, 245);
  border: 1px solid #ddd;
}
</style>