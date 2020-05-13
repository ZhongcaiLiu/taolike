import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from '@/store/state'
import mutations from '@/store/mutations'
import getters from '@/store/getters'

export default new Vuex.Store({
    state,
    mutations,
    getters
})