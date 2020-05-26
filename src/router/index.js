import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

const Home = () => import('../views/Home')
const Category = () => import('../views/Category')
const Cart = () => import('../views/Cart')
const Mine = () => import('../views/Mine')
const GoodsDetail = () => import('../views/GoodsDetail')
const Register = () => import('../views/Register')
const Login = () => import('../views/Login')
const Order = () => import('../views/Order')
const MyAddress = () => import('../views/MyAddress')
const AddAddress = () => import('../views/AddAddress')
const EditAddress = () => import('../views/EditAddress')


const router= new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: {
                KeepAlive: true,
            },
            children: [{
                path: 'goodsDetail/:id',
                component: GoodsDetail,
                props: true
            }]
        },
        {
            path: '/category',
            component: Category,
            meta: {
                KeepAlive: true,
            },
            children: [{
                path: 'goodsDetail/:id',
                component: GoodsDetail,
                props: true
            }],
        },
        {
            path: '/cart',
            component: Cart,
            meta: {
                KeepAlive: true,
            },
            children: [{
                path: 'goodsDetail/:id',
                component: GoodsDetail,
                props: true
            }],
        },
        {
            path: '/mine',
            component: Mine,
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/myaddress',
            component: MyAddress,
        },
        {
            path: '/addaddress',
            component: AddAddress
        },
        {
            path: '/editaddress/:id',
            component: EditAddress
        }
    ]
})
//配置全局前置路由守卫
router.beforeEach((to,from,next) => {
    if (to.path === '/cart' || to.path === '/mine') {
        axios.get('/api/user/getUser').then(res => {//调用接口判断是否登录
            let status = res.data.err;
            if (status === 0) {
                next();
            } else {
                next('/login')
            }
       })
    } else {
        next();
    }
})
export default router;