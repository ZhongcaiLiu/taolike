<template>
  <div id="Header">
    <h2>我的</h2>
    <div class="user">
        <div class="userimg"><img src="@/assets/images/Mine/user.jpg"></div>
        <div class="userinfo">
            <p>Arjun</p>
            <p>手机号：18888888888</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#Header{
    height: 6.5rem;
    display: flex;
    flex-direction: column;
    background:linear-gradient(to right,#fd9126,#ff5000);
}
#Header h2{
    text-align: center;
    font-size: 16px;
    padding: .5rem 0;
    color: #fff;
}
.user{
    display: flex;
    padding: .8rem;
}
.userimg{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
}
.userimg img{
    width: 3rem;
    height: 3rem;
}
.userinfo{
    font-size: 15px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
}
.userinfo p{
    margin: .1rem .5rem;
}
</style>