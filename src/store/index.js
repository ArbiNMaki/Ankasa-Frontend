import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AirLinesModule from './modules/admin/airlines'

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
    airlines: AirLinesModule
  }
})
