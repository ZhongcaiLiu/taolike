<template>
  <div id="GoodsOptions">
    <div class="content">
      <p><span>促销</span><span class="jifen">积分</span>购买可得10积分<span class="iconfont icon-youjiantou"></span></p>
      <p><span>服务</span>假一赔四·退货运费险·极速退款·七天无理由退换<span class="iconfont icon-youjiantou"></span></p>
    </div>
    <div class="content">
      <p><span>选择</span>请选择颜色分类<span class="iconfont icon-youjiantou"></span></p>
      <p><span>参数</span>品牌材质...<span class="iconfont icon-youjiantou"></span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsOptions'
}
</script>

<style scoped>
#GoodsOptions{
    padding-bottom: 5rem;
}
.content {
  height: 3rem;
  background-color: #fff;
  font-size: 0.55rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem;
  color: #666;
}
.content p {
  height: 1.5rem;
  line-height: 1.5rem;
}
.content .jifen {
  color: #f40;
  font-size: 0.4rem;
  background-color: pink;
  margin-right: 0.2rem;
  padding: 0.08rem 0;
}
.content p span:nth-child(1) {
  color: #999;
  margin-right: 0.5rem;
}
.icon-youjiantou {
  float: right;
  font-size: 0.5rem;
}
</style>