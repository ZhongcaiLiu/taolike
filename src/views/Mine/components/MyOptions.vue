<template>
  <div id="MyOptions">
    <div class="item">
      <div>
        <p><span class="iconfont icon-shoucang"></span>我的收藏</p><span class="iconfont icon-youjiantou"></span>
      </div>
      <div>
        <p><span class="iconfont icon-youhuiquan-copy"></span>我的优惠券</p><span class="iconfont icon-youjiantou"></span>
      </div>
    </div>
    <div class="item">
      <p @touchstart='toMyaddress'><span class="iconfont icon-shouhuodizhi"></span>我的收货地址</p><span class="iconfont icon-youjiantou"></span>
    </div>
    <div class="item">
      <div>
        <p><span class="iconfont icon-dianhua"></span>联系客服</p>
        <p class="kefu">客服时间：07：00-22：00<span class="iconfont icon-youjiantou"></span></p>
      </div>
      <div>
        <p><span class="iconfont icon-yijianfankui01"></span>意见反馈</p><span class="iconfont icon-youjiantou"></span>
      </div>
    </div>
    <div class="item">
      <p @touchstart='loginOut'><span class="iconfont icon-shezhi"></span>退出登录</p><span class="iconfont icon-youjiantou"></span>
    </div>
  </div>
</template>

<script>
import { messageBox, confirm } from '@/components/JS'
export default {
  name: 'MyOptions',
  methods: {
    loginOut() {
      let This=this;
      confirm({
        title: '确认退出登录吗？',
        cancel: '取消',
        ok: '确定',
        handelok() {
          This.axios.get('/api/user/loginOut').then(res => {
            messageBox({
              content: res.data.msg
            })
            This.$router.push('/login')
          })
        }
      })
    },
    toMyaddress(){
      this.$router.push('/myaddress')
    }
  }
}
</script>

<style scoped>
#MyOptions {
  height: 60vh; /* 让better-scroll生效 */
}
#MyOptions .item {
  background-color: #fff;
  margin-top: 0.5rem;
  font-size: 15px;
}
#MyOptions .item div,
.item:nth-child(2),
.item:nth-child(4) {
  display: flex;
  justify-content: space-between;
  padding: 0.45rem;
}
#MyOptions .item p {
  color: #000;
}
#MyOptions .item p span {
  color: #f40;
  margin-right: 0.5rem;
}
#MyOptions .item .kefu {
  color: #888;
  font-size: 14px;
}
#MyOptions .item .kefu span {
  margin: 0;
  color: #333;
}
</style>