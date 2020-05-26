<template>
  <div id="Register">
    <div class="title">
      <h2>邮箱号注册</h2>
      <p>亲，欢迎注册taolike账号</p>
    </div>
    <div class="form">
      <input type="email" placeholder="请输入你的邮箱号码" v-model="email">
      <input type="password" placeholder="请输入密码" v-model="password">
      <input type="number" placeholder="请输入验证码" v-model="code">
      <a href="javascript:;" @touchstart='Getcode' v-if="getCode">获取验证码</a>
      <a href="javascript:;" v-else>{{time}}s后重新获取</a>
    </div>
    <router-link to="/login" class="toLogin">去登录</router-link>
    <div class="bottom">
      <button @touchstart='Register'>同意协议并注册</button>
      <p>已阅读并同意以下协议
        <a href="#"> taolike平台服务协议,</a>
        <a href="#"> 隐私权政策,</a>
        <a href="#"> 法律声明,</a>
        <a href="#"> 支付宝及客户端服务协议</a>
      </p>
    </div>
  </div>
</template>

<script>
import {messageBox} from '@/components/JS'
export default {
  name: 'Register',
  data(){
    return{
      email:'',
      password:'',
      code:'',
      getCode: true,
      time: 60
    }
  },
  methods:{
    Getcode() {
      this.axios.post('/api/user/verify', { email: this.email }).then(res => {
        messageBox({
          content: res.data.msg
        })
        if (res.data.msg === '验证码发送成功') {
          this.getCode = false;
          let timer = setInterval(() => {
            this.time -= 1;
            if (this.time === 0) {
              clearInterval(timer);
              this.getCode = true;
              this.time=60;
            }
          }, 1000)
        }
      }).catch((err) => {
        messageBox({
          content: res.data.msg
        })
      })
    },
    Register(){
      this.axios.post('/api/user/register',{email:this.email,password:this.password,code:this.code}).then(res=>{
        messageBox({
          content:res.data.msg
        })
        if(res.data.msg==='注册成功'){
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
#Register {
  padding: 2.5rem 2rem;
  background-color: #fff;
  height: 100vh;
  box-sizing: border-box;
}
.title h2 {
  font-weight: 500;
  font-size: 30px;
}
.title p {
  font-size: 16px;
  color: #888;
  margin-top: 0.5rem;
}
.form {
  position: relative;
  margin: 1rem 0 0.6rem;
}
input {
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  padding: 0 10px;
  margin-top: 1rem;
  box-sizing: border-box;
}
input::-webkit-input-placeholder {
  color: #999;
}
.form a {
  font-size: 16px;
  position: absolute;
  right: 0;
  bottom: 0.5rem;
  color: red;
}
.bottom button {
  width: 100%;
  height: 2rem;
  border-radius: 30px;
  color: #fff;
  margin: 1rem 0;
  background-image: linear-gradient(90deg, #f90, #ff5000);
  font-size: 18px;
}
.bottom p {
  font-size: 14px;
  color: #999;
}
.bottom p a {
  color: #f40;
}
.toLogin {
  font-size: 14px;
}
</style>