<template>
  <div id="Header">
   <div class="header" @tap='back'><span class="iconfont icon-iconfontjiantou1"></span>确认订单</div>
   <div class="adress">
       <div class="icon"><span class="iconfont icon-shouhuodizhi"></span></div>
       <div class="userinfo" v-if="adress"></div>
       <p v-else>添加收货地址</p>
       <span class="iconfont icon-youjiantou"></span>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
      return{
          adress:false
      }
  },
  methods:{
      back(){
          this.$router.back()
      }
  }
}
</script>

<style lang='less' scoped>
#Header{
    height: 5rem;
    .header{
        font-size: 18px;
        font-weight: bold;
        margin-top: .5rem;
        display: inline-block;
        span{
            margin-right: .3rem;
        }
    }
    .adress{
        background-color: #fff;
        border-radius: .5rem;
        height: 3rem;
        width: 88%;
        margin:1rem auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .5rem;
        .icon{
            width: 15%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: red;
            span{
                 font-size: 1.5rem;
            }
        }
        p{
            font-size: .7rem;
            transform: translateX(-88%);
        }
    }
}
</style>