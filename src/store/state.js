import {getLocalStorage}from '../utils/LocalStorage'
export default {
    ShopCart: getLocalStorage('ShopCart')||[],
    AllCheck: getLocalStorage('AllCheck')||false,
    manage:'管理'
}