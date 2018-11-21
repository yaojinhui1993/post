import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store'

Vue.config.productionTip = false

window.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
