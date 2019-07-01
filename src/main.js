import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://ai-economy.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'public-leaders-investors-coders'
axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
