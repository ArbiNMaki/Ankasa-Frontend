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
