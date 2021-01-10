import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vueCountryRegionSelect from 'vue-country-region-select'
import { BootstrapVue, BootstrapVueIcons, BIcon } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAWN from 'vue-awesome-notifications'
import Vuelidate from 'vuelidate'
// Your custom options
const options = {
  durations: {
    global: 2000
  }
}

Vue.use(Vuelidate)
Vue.use(VueAWN, options)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(vueCountryRegionSelect)
Vue.config.productionTip = false

Vue.component('BIcon', BIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
