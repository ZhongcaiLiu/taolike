<template>
  <div id="Login">
    <header><span>您需要登录才能继续访问</span><router-link tag="span" to="/home">关闭</router-link></header>
    <div class="img"> <img src="@/assets/images/Login/logo.png"></div>
    <div class="form" v-if="flag">
      <input type="email" placeholder="邮箱">
      <input type="password" placeholder="请输入登录密码">
      <p><span @touchstart='flag=!flag'>邮箱验证码登录</span><span @touchstart='toRegister'>免费注册</span></p>
      <button>登录</button>
    </div>
    <div class="form2" v-else>
      <input type="email" placeholder="请输入你的邮箱号码">
      <input type="number" placeholder="请输入验证码">
      <span>获取验证码</span>
      <router-link to="/register">免费注册</router-link>
      <button>登录</button>
      <button @touchstart='flag=!flag'>账号密码登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      flag: true
    }
  },
  methods: {
    toRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
#Login {
  background-color: #fff;
  height: 100vh;
}
#Login header {
  height: 2rem;
  background-color: #eee;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-weight: bold;
}
#Login header span:nth-child(2) {
  color: #888;
}
.img {
  display: flex;
  justify-content: center;
}
img {
  height: 3.2rem;
}
.form {
  padding: 0 1rem;
}
.form input {
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #f40;
  font-size: 18px;
  padding: 0 10px;
  margin-top: 1rem;
  box-sizing: border-box;
}
.form p {
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1.6rem;
  color: #888;
}
button {
  width: 100%;
  height: 2rem;
  border-radius: 30px;
  color: #fff;
  background-image: linear-gradient(90deg, #f90, #ff5000);
  font-size: 18px;
}
.form2 {
  position: relative;
  margin: 1rem 0 0.6rem;
  padding: 0 1rem;
}
.form2 input {
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  padding: 0 10px;
  margin-top: 1rem;
  box-sizing: border-box;
}
.form2 input::-webkit-input-placeholder {
  color: #999;
}
.form2 span {
  font-size: 16px;
  position: absolute;
  right: 1rem;
  top: 4.7rem;
  color: red;
}
.form2 a {
  font-size: 14px;
}
.form2 button{
    margin-top: 1rem;
}
.form2 button:nth-of-type(2){
    background-color: transparent;
    background-image: none;
    color: #f40;
    border: 1px solid #f40;
}
</style>