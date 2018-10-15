// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'

import axios from 'axios'
import qs from 'qs'

Vue.use(Toast)

/*axios相关*/
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';//"Accept": "application/json"
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
