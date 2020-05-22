<template>
  <div id="MyAddress">
    <AddressHeader />
    <div v-if="Address.length">
      <CheckedAddress />
      <AddressList />
    </div>
    <div v-else class="tip">
      您还没有收货地址...
    </div>
  </div>
</template>

<script>
import AddressHeader from '@/views/MyAddress/components/AddressHeader'
import CheckedAddress from '@/views/MyAddress/components/CheckedAddress'
import AddressList from '@/views/MyAddress/components/AddressList'
import { mapState } from 'vuex'
export default {
  name: 'MyAddress',
  components: {
    AddressHeader,
    CheckedAddress,
    AddressList
  },
  computed: {
    ...mapState(['Address'])
  },
  mounted() {
    this.$store.dispatch('getAddressList')
  }
}
</script>

<style scoped>
#MyAddress {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.tip {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background-color: #fff;
  color: #f40;
}
</style>