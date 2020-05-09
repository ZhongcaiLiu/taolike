import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios //把axios挂载到vue实例原型上，使全局可以通过this调用

import scroll from '@/components/Scroller'
Vue.component('Scroller', scroll);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')