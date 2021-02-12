import axios from 'axios'

const flightRoute = {
  namespaced: true,
  state: {
  },
  mutations: {

  },
  actions: {
    getAllFlightRoute ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/flightroute?limit=10&page=${payload.page}&orderby=departureTime&order=ASC`)
          .then((result) => {
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    getCity ({ dispatch, commit, getters, rootGetters }, payload) {
      return new Promise((resolve, reject) => {
        dispatch('interceptorRequest', null, { root: true })
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/data-lookup/city`)
          .then((result) => {
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    getFlightRouteById ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/flightroute/get-by-id/${payload}`)
          .then((result) => {
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    search ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/flightroute/search?searchby=routeFrom&searchValue=jakarta`)
          .then((result) => {
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    insertNewFlightRoute ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/api/flightroute/insert-route`, payload)
          .then((result) => {
            resolve(result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    searchFlightRoute ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/flightroute/search?searchby=${payload.searchBy}&searchValue=${payload.searchValue}`)
          .then((result) => {
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    updateFlightRoute ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/api/flightroute/update/${payload.id}`, payload.data)
          .then((result) => {
            resolve(result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    deleteFlightRoute ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_SERVICE_API}/api/flightroute/delete/${payload}`)
          .then((result) => {
            resolve(result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    getAmountFlightRoute ({ dispatch, commit, getters, rootGetters }, payload) {
      return new Promise((resolve, reject) => {
        dispatch('interceptorRequest', null, { root: true })
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/flightroute/amount`)
          .then((result) => {
            // console.log('result dari index :>> ', result)
            resolve(result.data)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    getAmountCompletedPayment ({ dispatch, commit, getters, rootGetters }, payload) {
      return new Promise((resolve, reject) => {
        dispatch('interceptorRequest', null, { root: true })
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/ticketing/amount-completed-payment`)
          .then((result) => {
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        const errorStatusCode = error.response.data.statusCode
        const errorMessage = error.response.data.err.message
        console.log('errorStatusCode :>> ', errorStatusCode)
        console.log('errorMessage :>> ', errorMessage)
        return Promise.reject(error)
      })
    }
  }
}

export default flightRoute
