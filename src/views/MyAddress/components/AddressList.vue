<template>
  <ul id="AddressList">
    <li v-for="(item, index) in Address" :key="index">
      <span class="iconfont icon-shouhuodizhi" v-rainbow></span>
      <div class="address">
        <p><span>{{item.name}}</span><span>{{item.phone}}</span></p>
        <p>{{item.address}}</p>
      </div>
      <span @touchstart='editAddress(index)'>编辑</span>
    </li>
  </ul>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'AddressList',
  computed:{
     ...mapState(['Address'])
  },
  methods:{
    editAddress(index){
      this.$router.push('/editaddress/'+index)
    }
  },
  directives:{
    rainbow:{
      inserted:function(el){
        el.style.color='#'+Math.random().toString().slice(2,8)
      }
    }
  }
}
</script>

<style scoped lang="less">
#AddressList {
  margin-top: 1rem;
  background-color: #fff;
  min-height: 80vh;
  li {
    display: flex;
    align-items: center;
    height: 4rem;
    padding: 0 1rem;
    span {
      &:nth-child(1) {
        font-size: 28px;
        margin-right: 0.5rem;
      }
      &:nth-child(3) {
        font-size: 14px;
        padding: 0.5rem 0 0.5rem 0.5rem;
        border-left: 1px solid #ddd;
        display: inline-block;
        color: #999;
      }
    }
    .address {
      font-size: 14px;
      width: 75%;
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
      }
    }
  }
}
</style>