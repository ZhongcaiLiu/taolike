import {
    SELECT_GOODS_COUNT,
    SELECT_GOODS_PRICE,
    ORDER_PRICE
} from './mutation-type'
export default {
    [SELECT_GOODS_COUNT](state) {
        let ShopCart = state.ShopCart;
        let count = 0;
        ShopCart.forEach(s => {
            if (s.checked === true) {
                count++;
            }
        })
        return count;
    },
    [SELECT_GOODS_PRICE](state) {
        let ShopCart = state.ShopCart;
        let totalPrice = 0;
        ShopCart.forEach(s => {
            if (s.checked) {
                totalPrice += s.num * parseFloat(s.price)
            }
        })
        return totalPrice.toFixed(2);
    },
    [ORDER_PRICE](state) {
        let order = state.Order;
        let totalPrice = 0;
        order.forEach(o => {
            totalPrice += o.price * o.num;
        })
        return totalPrice.toFixed(2);
    }
}