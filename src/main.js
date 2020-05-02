import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
