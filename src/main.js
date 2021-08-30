import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router.js'
import axios from 'axios'
import { get, post } from './axios/index.js'

import './mock/index.js'

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  axios,
  router,
  render: h => h(App),
}).$mount('#app')
