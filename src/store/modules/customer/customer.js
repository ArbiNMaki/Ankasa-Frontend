import axios from 'axios'

const customer = {
  namespaced: true,
  state: {
    passengerDesc: null,
    childPassenger: null,
    adultPassenger: null
  },
  getters: {
    getPassenger (state) {
      return {
        desc: state.passengerDesc,
        child: state.childPassenger,
        adult: state.adultPassenger
      }
    }
  },
  mutations: {
    SET_PASSENGER (state, payload) {
      state.childPassenger = payload.child
      state.adultPassenger = payload.adult
      state.passengerDesc = `${payload.child} child ${payload.adult} adult`
    }
  },
  actions: {
    selectTicket ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/api/ticketing/select-ticket`, payload)
          .then((result) => {
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    getOrderDetail ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/ticketing/detail/${payload}`)
          .then((result) => {
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    updateOrderDetail ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/api/ticketing/input-flight-detail`, payload)
          .then((result) => {
            resolve(result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    interceptorResponseAirLines (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        const errorStatusCode = error.response.data.statusCode
        const errorMessage = error.response.data.err.message
        console.log('errorStatusCode :>> ', errorStatusCode)
        console.log('errorMessage :>> ', errorMessage)
        if (errorStatusCode === 404) {
          if (errorMessage === 'Data not found') {
            return Promise.reject(errorMessage)
          }
        }
        return Promise.reject(error)
      })
    }
  },
  modules: {
  }
}

export default customer
