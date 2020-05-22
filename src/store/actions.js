import axios from 'axios'
export default {
    getAddressList({ commit }) {
        axios.get('/api/address').then(res => {
            commit('GET_ADDRESS',res.data.data)
        })
    },
}