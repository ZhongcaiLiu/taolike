import {
    ADD_CART,
    IS_CHECK,
    NO_CHECK,
    ALL_CHECK
} from './mutation-type';
export default {
    [ADD_CART](state, id) {
        if (!state.goodsid.includes(id)) { //防止多次点击同一商品加入购物车，购物车宝贝数量会叠加且会存入重复的值
            state.goodsQty++;
            state.goodsid.push(id);
        }
    },
    [IS_CHECK](state, id) {
        state.isChecked.push(id)
    },
    [NO_CHECK](state, id) {
        state.isChecked.splice(id, 1)
    },
    [ALL_CHECK](state) {
        if (state.isChecked === state.goodsid) {
            state.isChecked = []
        } else {
            state.isChecked = state.goodsid
        }
    }
}