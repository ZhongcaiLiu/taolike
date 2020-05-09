<template>
  <div id="CartList">
    <div class="goods">
      <div class="circle"></div>
      <img src="@/assets/images/bo1.jpg">
      <div class="content">
        <p>【尾单处理】北欧流苏披肩盖毯办公室空调午休毯沙发休闲棉麻毯子</p>
        <span>￥888</span>
        <div class="count">
          <button>-</button>
          <input type="number">
          <button>+</button>
        </div>
      </div>
    </div>
    <div class="goods"></div>
  </div>
</template>

<script>
export default {
  name: 'CartList'

}
</script>

<style scoped>
#CartList {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-3rem);
}
.goods {
  width: 90%;
  height: 5rem;
  border-radius: 0.8rem;
  background-color: #fff;
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .8rem;
  position: relative;
  box-sizing: border-box;
}
.goods .circle {
  width: 1.4rem;
  height: .8rem;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.goods img {
  width: 3.8rem;
  height: 3.6rem;
  margin:0 .7rem;
}
.content p {
  font-size: 0.6rem;
  color:#666;
  height: 1.4rem;
  line-height: 0.7rem;
  overflow: hidden;
}
.content span{
    font-size: .8rem;
    color: red;
}
.count{
    position: absolute;
    right: .8rem;
    bottom: 1rem;
    height: 1rem;
    border: 1px solid #ddd;
}
.count input{
    width: 1rem;
    height: 100%;
    text-align: center;
}
.count button{
    width: .8rem;
    height: 100%;
}
</style>