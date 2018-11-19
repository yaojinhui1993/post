import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios';
import router from './router'

Vue.config.productionTip = false

window.axios = axios;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
