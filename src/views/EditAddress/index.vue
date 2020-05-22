<template>
  <div id="EditAddress">
    <div id="Header">
      <span class="iconfont icon-iconfontjiantou1" @touchstart='back'></span>
      <span>编辑收货地址</span>
      <span @touchstart='save'>保存</span>
    </div>
    <div class="addaddress">
      <input type="text" placeholder="收货人" v-model="Address.name">
      <input type="number" placeholder="手机号码" v-model="Address.phone">
      <input type="text" placeholder="收货地址" v-model="Address.address">
    </div>
    <div class="default">设为默认地址
      <div @touchstart='move' ref="qiu"></div>
      <div ref="kuang"></div>
    </div>
    <p class="del" @touchstart='Delete'>删除收货地址</p>
  </div>
</template>

<script>
import { messageBox, confirm } from '../../components/JS'
import { mapState } from 'vuex'
export default {
  name: 'EditAddress',
  data() {
    return {
      id: this.$route.params.id,
      Address: {}
    }
  },
  async mounted() {
    await this.axios.get('/api/address/edit', { params: { id: this.id } }).then(res => {
      this.Address = res.data.data[0];
    });
    if (this.Address.defaults) {
      this.$refs.qiu.style.transform = 'translateX(55%)'
      this.$refs.qiu.style.backgroundColor = 'skyblue'
      this.$refs.kuang.style.backgroundColor = '#f40'
    }
  },
  methods: {
    move() {
      if (!this.Address.defaults) {
        this.$refs.qiu.style.transform = 'translateX(55%)'
        this.$refs.qiu.style.backgroundColor = 'skyblue'
        this.$refs.kuang.style.backgroundColor = '#f40'
        this.Address.defaults = true;
      } else {
        this.$refs.qiu.style.transform = 'translateX(-8%)'
        this.$refs.qiu.style.backgroundColor = '#ddd'
        this.$refs.kuang.style.backgroundColor = '#888'
        this.Address.defaults = false;
      }
    },
    back() {
      this.$router.push('/myaddress')
    },
    save() {
      this.axios.post('/api/address/editSave', this.Address).then(res => {
        messageBox({
          content: '编辑成功！'
        })
        setTimeout(() => {
          this.$router.push('/myaddress')
        }, 1000)
      })
    },
    Delete() {
      let This=this;//改变this指向
      confirm({
        title: '确认删除这个收货地址吗？',
        cancel: '取消',
        ok: '确定',
        handelok() {
          This.axios.post('/api/address/del', { _id: This.id }).then(res => {
            messageBox({
              content: '删除成功！'
            })
            setTimeout(() => {
              This.$router.push('/myaddress')
            }, 1000)
          })
        }
      })

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