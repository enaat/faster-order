import Vue from 'vue'
import App from './App'
import router from './router/index'
// import axios from 'axios'
import store from './store/store'

Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
