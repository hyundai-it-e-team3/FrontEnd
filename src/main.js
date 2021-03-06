import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import axios from './apis/axiosConfig'

Vue.config.productionTip = false

//Axios 설정 파일을 가져오면서 실행하기
//axios.defaults.baseURL을 먼저 적용
import axiosConfig from "./apis/axiosConfig"

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);