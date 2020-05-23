<template>
  <div id="OrderDetail">
    <div class="orders" v-for="item in Order" :key="item._id">
      <div class="img">
        <img :src="item.img">
        <div class="detail">
          <p>{{item.name}}</p>
          <p>￥{{item.price | moneyFormat}} x {{item.num}}</p>
        </div>
      </div>
      <ul class="content">
        <li>
          <div class="left">公益宝贝</div>
          <div class="middle">成交后卖家将捐赠0.02元给公益宝贝计划</div>
          <span class="iconfont icon-youjiantou"></span>
        </li>
        <li>
          <div class="left">配送方式</div>
          <div class="middle">普通配送<span>快递 免邮</span></div>
          <span class="iconfont icon-youjiantou"></span>
        </li>
        <li>
          <div class="left">配送时间</div>
          <div class="time">24.00前付款，预计{{Mounth}}月{{Day}}日送达</div>
        </li>
        <li>
          <div class="left">运费险</div>
          <div class="middle">卖家赠送，退换货可赔</div>
          <span class="iconfont icon-youjiantou"></span>
        </li>
        <li>
          <div class="left">开具发票</div>
          <div class="middle"><span>本次不开具发票</span></div>
          <span class="iconfont icon-youjiantou"></span>
        </li>
        <li>
          <div class="left">订单备注</div>
          <input type="text" placeholder="选填，请先和商家商量一致">
        </li>
        <p><span>共{{item.num}}件</span> 小计：<span>￥{{item.price*item.num|moneyFormat}}</span></p>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'OrderDetail',
  computed: {
    ...mapState(['Order']),
    Mounth(){
      return new Date().getMonth()+1
    },
    Day(){
      return new Date().getDate()+2
    }
  },
  filters: {
    moneyFormat(val) {
      return parseFloat(val).toFixed(2)
    }
  }
}
</script>

<style lang='less' scoped>
#OrderDetail {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  .orders {
    width: 88%;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 0.8rem 0.5rem;
    margin-top: 1rem;
    .img {
      display: flex;
      img {
        width: 3.5rem;
        height: 4rem;
        margin-left: 0.5rem;
      }
      .detail {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 16px;
        margin-left: 1rem;
        p {
          width: 80%;
          &:nth-child(1) {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          &:nth-child(2) {
            font-size: 14px;
          }
        }
      }
    }
    .content {
      padding-left: 1rem;
      li {
        display: flex;
        font-size: 14px;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        .left {
          width: 20%;
          text-align: center;
        }
        .middle {
          width: 66%;
          color: #888;
          span {
            float: right;
            color: #000;
          }
        }
        .time {
          transform: translateX(-27%);
        }
        input {
          flex: 1;
          padding: 0 0.6rem;
        }
      }
      p {
        font-size: 14px;
        text-align: right;
        margin-top: 0.8rem;
        span {
          &:nth-child(1) {
            color: #999;
          }
          &:nth-child(2) {
            color: #f40;
          }
        }
      }
    }
  }
}
</style>