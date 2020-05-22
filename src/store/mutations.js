import Vue from 'vue'
import {
    ADD_GOODS,
    INC_NUM,
    DEC_NUM,
    INP_NUM,
    IS_CHECK,
    ALL_CHECK,
    CHANGE_MANAGE,
    DEL_GOODS,
    UPDATE_ORDER,
    ADD_ADDRESS,
    EDIT_ADDRESS,
    DELETE_ADDRESS,
    GET_ADDRESS
} from './mutation-type';
import {
    setLocalStorage
} from '@/utils/LocalStorage';
export default {
    [ADD_GOODS](state, item) {
        //从state里取出购物车数据
        let ShopCart = state.ShopCart;
        let index = ShopCart.findIndex(s => {
            return s._id === item._id
        })
        if (index === -1) {
            Vue.set(item, 'checked', false)
            Vue.set(item, 'num', 1)
            ShopCart.push(item)
        } else {
            ShopCart[index].num++;
        }
        ShopCart.forEach(s => {
            if (!s.checked) {
                state.AllCheck = false;
            }
        })
        setLocalStorage('ShopCart',ShopCart)//把ShopCart变化存入本地
        //同步更新state数据
        state.ShopCart = ShopCart;
    },
    [INC_NUM](state, item) {
        let ShopCart = state.ShopCart;
        let i = ShopCart.findIndex(s => s._id === item._id);
        ShopCart[i].num++;
        setLocalStorage('ShopCart',ShopCart)//把ShopCart变化存入本地
        state.ShopCart = ShopCart;
    },
    [DEC_NUM](state, item) {
        let ShopCart = state.ShopCart;
        let i = ShopCart.findIndex(s => s._id === item._id);
        if (ShopCart[i].num > 1) {
            ShopCart[i].num--;
        }
        setLocalStorage('ShopCart',ShopCart)//把ShopCart变化存入本地
        state.ShopCart = ShopCart;
    },
    [INP_NUM](state, data) {
        let ShopCart = state.ShopCart;
        let {
            value,
            id
        } = data;
        let i = ShopCart.findIndex(s => s._id === id);
        if (value == '') {
            value = 1
        }
        let val = parseInt(value)
        ShopCart[i].num = val;
        setLocalStorage('ShopCart',ShopCart)//把ShopCart变化存入本地
        state.ShopCart = ShopCart;
    },
    [IS_CHECK](state, item) {
        let ShopCart = state.ShopCart;
        if (typeof (item.checked) == 'undefined') {
            Vue.set(item, 'checked', true)
        } else {
            item.checked = !item.checked;
        }
        let arr = ShopCart.filter(s => s.checked);
        if (arr.length == ShopCart.length && ShopCart.length > 0) {
            state.AllCheck = true;
        } else {
            state.AllCheck = false;
        }
        setLocalStorage('AllCheck',state.AllCheck)//把是否全选存入本地
        setLocalStorage('ShopCart',ShopCart)//把ShopCart变化存入本地
        state.ShopCart = ShopCart;
    },
    [ALL_CHECK](state, val) {
        let ShopCart = state.ShopCart;
        ShopCart.forEach(s => {
            s.checked = val, state.AllCheck = val
        })
        setLocalStorage('AllCheck',state.AllCheck)//把是否全选存入本地
        setLocalStorage('ShopCart',ShopCart)//把ShopCart变化存入本地
        state.ShopCart = ShopCart;
    },
    [CHANGE_MANAGE](state, manage) {
        if (manage === '管理') {
            state.manage = '完成'
        } else {
            state.manage = '管理'
        }
    },
    [DEL_GOODS](state) {
        let ShopCart = state.ShopCart;
        ShopCart = ShopCart.filter(s => s.checked === false)
        if (ShopCart.length === 0) {
            state.manage = '管理';
            state.AllCheck = false;
        }
        setLocalStorage('AllCheck',state.AllCheck)//把是否全选存入本地
        setLocalStorage('ShopCart',ShopCart)//把ShopCart变化存入本地
        state.ShopCart = ShopCart;
    },
    [UPDATE_ORDER](state,item) {
        let { ShopCart, Order } = state
        if (!item) {
            Order = ShopCart.filter(s => s.checked)
        } else {
            let index=Order.findIndex(o=>o._id===item._id)
            if (Order.length === 0||index===-1) {
                Vue.set(item, 'num', 1)
                Order = [];
                Order.push(item)
            } else {
               Order[index].num++
            }  
        }
        Order.forEach(o => {
            o.price=parseFloat(o.price)
        })
        setLocalStorage('Order',Order)
        state.Order = Order;
    },
    [ADD_ADDRESS](state, address) {
        let Address = state.Address;
        if (address.default) {
            Address.forEach(a => {
                if (a.default) {
                    a.default = false;
                }
            })
        }
        Address.push(address)
        setLocalStorage('Address', Address)
        state.Address = Address;
    },
    [EDIT_ADDRESS](state,newaddress) {
        let Address = state.Address;
        let { index, address } = newaddress;
        Address[index] = address;
        setLocalStorage('Address', Address);
        state.Address = Address;
    },
    [DELETE_ADDRESS](state, index) {
        let Address = state.Address;
        Address.splice(index, 1);
        setLocalStorage('Address', Address);
        state.Address = Address;
    },
    [GET_ADDRESS](state, data) {
        state.Address = data;
    }
}