import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home')
const Category = () => import('../views/Category')
const Cart = () => import('../views/Cart')
const Mine = () => import('../views/Mine')
const GoodsDetail = () => import('../views/Home/components/GoodsDetail.vue')

export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            children: [{
                path: 'goodsDetail/:id',
                component: GoodsDetail,
                props: true
            }]
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/cart',
            component: Cart,
            children: [
                {
                    path: 'goodsDetail/:id',
                    component: GoodsDetail,
                    props:true
                }
            ]
        },
        {
            path: '/mine',
            component: Mine
        }
    ]
})