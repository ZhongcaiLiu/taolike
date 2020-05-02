import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home.vue')
const Classify = () => import('../views/Classify.vue')
const Cart = () => import('../views/Cart.vue')
const Mine = () => import('../views/Mine.vue')

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/classify',
            component: Classify
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/mine',
            component: Mine
        }
    ]
})
export default router