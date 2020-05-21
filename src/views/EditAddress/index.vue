<template>
  <div id="EditAddress">
    <div id="Header">
      <span class="iconfont icon-iconfontjiantou1" @touchstart='back'></span>
      <span>编辑收货地址</span>
      <span @touchstart='save'>保存</span>
    </div>
    <div class="addaddress">
      <input type="text" placeholder="收货人" v-model="info.name">
      <input type="number" placeholder="手机号码" v-model="info.phone">
      <input type="text" placeholder="收货地址" v-model="info.address">
    </div>
    <div class="default">设为默认地址
      <div @touchstart='move' ref="qiu"></div>
      <div ref="kuang"></div>
    </div>
    <p class="del">删除收货地址</p>
  </div>
</template>

<script>
import { messageBox } from '../../components/JS'
import { mapState } from 'vuex'
export default {
  name: 'EditAddress',
  data() {
    return {
      default: false,
      id:''
    }
  },
  computed: {
    ...mapState(['Address'])
  },
  methods: {
    move() {
      if (!this.default) {
        this.$refs.qiu.style.transform = 'translateX(55%)'
        this.$refs.qiu.style.backgroundColor = 'skyblue'
        this.$refs.kuang.style.backgroundColor = '#f40'
        this.default = true;
      } else {
        this.$refs.qiu.style.transform = 'translateX(-8%)'
        this.$refs.qiu.style.backgroundColor = '#ddd'
        this.$refs.kuang.style.backgroundColor = '#888'
        this.default = false;
      }
    },
    back() {
      this.$router.push('/myaddress')
    },
    save() {
      let address = this.info;
      this.$set(address, 'default', this.default)
      this.$store.commit('ADD_ADDRESS', address)
      messageBox({
        content: '添加成功！'
      })
      setTimeout(() => {
        this.$router.push('/myaddress')
      }, 1000)

    }
  }
}
</script>

<style scoped lang="less">
#Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 0.5rem;
  span {
    &:nth-child(2) {
      font-size: 18px;
      font-weight: bold;
    }
    &:nth-child(3) {
      color: #f40;
    }
  }
}
.addaddress {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  input {
    border-bottom: 1px solid #ddd;
    padding: 0.8rem;
  }
}
.default {
  height: 2rem;
  background-color: #fff;
  margin-top: 1rem;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
  position: relative;
  div {
    transition: all 0.2s linear;
    &:nth-child(1) {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #ddd;
      position: absolute;
      right: 1.3rem;
    }
    &:nth-child(2) {
      width: 1.4rem;
      height: 30%;
      background-color: #888;
      border-radius: 10px;
    }
  }
}
.del {
  background-color: #fff;
  color: #f40;
  font-size: 14px;
  height: 2rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding-left: 0.8rem;
}
</style>