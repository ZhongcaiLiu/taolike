export default{
    goodsQty:JSON.parse(localStorage.getItem('goodsQty'))||0,
    goodsid: JSON.parse(localStorage.getItem('goodsid')) || [],
    isChecked:[]
}