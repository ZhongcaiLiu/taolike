<template>
  <div id="MyOrder">
   <div class="title">
       <p><span class="iconfont icon-order_icon"></span>我的订单</p>
       <p>查看全部订单<span class="iconfont icon-youjiantou"></span></p>
   </div>
   <ul class="content">
    <li><span class="iconfont icon-daifukuan"></span><span>待付款</span></li>
    <li><span class="iconfont icon-icon3"></span><span>待收货</span></li>
    <li><span class="iconfont icon-pingjia"></span><span>评价</span></li>
    <li><span class="iconfont icon-tuikuanshouhou"></span><span>退款/售后</span></li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
}
</script>

<style scoped>
#MyOrder{
    height: 6rem;
    background-color: #fff;
    font-size: 16px;
    display: flex;
    flex-direction: column;
}
#MyOrder .title{
    padding: .5rem .45rem;
    display: flex;
    justify-content: space-between;
}
#MyOrder .title p:nth-child(2){
    color: #888;
    font-size: 14px;
}
.icon-order_icon{
    font-size: 18px;
    color: red;
    margin-right: .2rem;
}
.content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    border-top: 1px solid #ddd;
}
.content li{
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 80%;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #666;
}
.content li span:nth-child(1){
    font-size:30px;
    color: red;
    margin-bottom: .3rem;
}
</style>