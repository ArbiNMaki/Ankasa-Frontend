import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import airLinesModule from './modules/admin/airlines'
import flightRouteModule from './modules/admin/flightroute'
import auth from './modules/auth/auth'
import customerModule from './modules/customer/customer'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
const ls = new SecureLS({ isCompression: false })

import user from './modules/user/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    findtickets: []
  },
  mutations: {
    SET_FINDTICKETS (state, payload) {
      state.findtickets = payload
    }
  },
  actions: {
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    getTickets (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        console.log('abcd')
        axios.get(`http://18.234.186.153:2000/api/ticketing/find?routeFrom=${payload.routeFrom}&routeTo=${payload.routeTo}&flightClass=${payload.flightClass}&tripType=${payload.triptype}&tripDate=${payload.tripdate}&facilities=${payload.facilities}&price=${payload.price}&airline=${payload.airlines}&departureTime=${payload.departureTime}&timeArrived=${payload.timeArrived}&transit=${payload.transit}`)
          .then((res) => {
            console.log('sukses')
            context.commit('SET_FINDTICKETS', res.data.result)
            console.log(res.data.result)
          })
          .catch((err) => {
            console.log('gagal')
            console.log(err.response)
          })
      })
    }
  },
  getters: {
    getTickets (state) {
      return state.findtickets
    }
  },
  modules: {
    airlines: airLinesModule,
    flightroute: flightRouteModule,
    auth: auth,
    customer: customerModule,
    user: user
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ]
})
