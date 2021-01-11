import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import airLinesModule from './modules/admin/airlines'
import flightRouteModule from './modules/admin/flightroute'
import auth from './modules/auth/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    findtickets: [],
    city: [],
    myprofile: {},
    mybooking: [],
    orderdetail: {}
  },
  mutations: {
    SET_FINDTICKETS (state, payload) {
      state.findtickets = payload
    },
    SET_CITY (state, payload) {
      state.city = payload
    },
    SET_MYPROFILE (state, payload) {
      state.myprofile = payload
    },
    SET_MYBOOKING (state, payload) {
      state.mybooking = payload
    },
    SET_ORDERDETAIL (state, payload) {
      state.orderdetail = payload
    }
  },
  actions: {
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    getTickets (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/ticketing/find?routeFrom=${payload.routeFrom}&routeTo=${payload.routeTo}&flightClass=${payload.flightClass}&tripType=${payload.triptype}&tripDate=${payload.tripdate}&facilities=${payload.facilities}&price=${payload.price}&airline=${payload.airlines}&departureTime=${payload.departureTime}&timeArrived=${payload.timeArrived}&transit=${payload.transit}`)
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
    },
    getCity (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/data-lookup/city`)
          .then((res) => {
            console.log('sukses')
            context.commit('SET_CITY', res.data.result)
            console.log(res.data.result)
          })
          .catch((err) => {
            console.log('gagal')
            console.log(err.response)
          })
      })
    },
    getMyProfile (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/user/detail`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
          .then((res) => {
            context.commit('SET_MYPROFILE', res.data.data)
          })
          .catch((err) => {
            console.log(err.response)
          })
      })
    },
    getMyBooking (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/user/my-booking`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
          .then((res) => {
            console.log(res.data)
            context.commit('SET_MYBOOKING', res.data.data)
          })
          .catch((err) => {
            console.log(err.response)
          })
      })
    },
    getOrderDetail (context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/ticketing/detail/${localStorage.getItem('orderid')}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
          .then((res) => {
            console.log(res.data.result)
            context.commit('SET_ORDERDETAIL', res.data.result)
          })
          .catch((err) => {
            console.log(err.response)
          })
      })
    }
  },
  getters: {
    getTickets (state) {
      return state.findtickets
    },
    getCity (state) {
      return state.city
    },
    getMyProfile (state) {
      return state.myprofile
    },
    getMyBooking (state) {
      return state.mybooking
    },
    getOrderDetail (state) {
      return state.orderdetail
    }
  },
  modules: {
    airlines: airLinesModule,
    flightroute: flightRouteModule,
    auth: auth
  }
})
