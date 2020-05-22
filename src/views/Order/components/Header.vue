<template>
  <div id="Header">
    <div class="header" @tap='back'><span class="iconfont icon-iconfontjiantou1"></span>确认订单</div>
    <div class="userinfo" v-if="Address.length||defaults.length" @tap='toAdress'>
      <span class="iconfont icon-shouhuodizhi"></span>
      <div class="address" v-for="(item, index) in defaults" :key="index">
        <p><span>{{item.name}}</span><span>{{item.phone}}</span></p>
        <p><span class="default">默认地址</span>{{item.address}}</p>
      </div>
    </div>
    <div id="address" @tap='toAdress' v-else>
      <div class="icon"><span class="iconfont icon-shouhuodizhi"></span></div>
      <p>添加收货地址</p>
      <span class="iconfont icon-youjiantou"></span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['Address']),
    defaults() {
      return this.Address.filter(a => a.defaults)
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    toAdress() {
      this.$router.push('/myaddress')
    }
  }
}
</script>

<style lang='less' scoped>
#Header {
  height: 5rem;
  .header {
    font-size: 18px;
    font-weight: bold;
    margin-top: 0.5rem;
    display: inline-block;
    span {
      margin-right: 0.3rem;
    }
  }
  .userinfo {
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 4rem;
    width: 88%;
    margin: 1rem auto;
    padding:0 .5rem;
    border-radius: 10px;
    > span {
      font-size: 28px;
      margin-right: 0.5rem;
      color: #f40;
    }
    .address {
      font-size: 14px;
      p {
        margin-bottom: 0.2rem;
        span {
          font-size: 18px;
          &:nth-child(2) {
            color: #888;
            font-size: 14px;
            margin: 0 0.6rem;
          }
        }
        .default {
          font-size: 14px;
          background-color: #eee;
          color: #f40;
        }
      }
    }
  }
  #address {
    background-color: #fff;
    border-radius: 0.5rem;
    height: 3rem;
    width: 88%;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    .icon {
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: red;
      span {
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 0.7rem;
      transform: translateX(-88%);
    }
  }
}
</style>