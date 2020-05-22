import Vue from 'vue'
import VueRouter from 'vue-router'

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


export default new VueRouter({
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
            meta: {
                KeepAlive: true,
            },
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
            component:EditAddress
        }
    ]
})