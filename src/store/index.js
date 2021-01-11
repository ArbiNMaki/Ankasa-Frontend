import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import airLinesModule from './modules/admin/airlines'
import flightRouteModule from './modules/admin/flightroute'
import auth from './modules/auth/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    }
  },
  modules: {
    airlines: airLinesModule,
    flightroute: flightRouteModule,
    auth: auth
  }
})
