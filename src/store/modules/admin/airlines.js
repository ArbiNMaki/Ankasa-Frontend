import axios from 'axios'

const airlines = {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    getDataAirLines ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      console.log('payload :>> ', payload)
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/airlines?limit=10&page=${payload.page}&orderby=name&order=ASC`)
          .then((result) => {
            console.log('result :>> ', result)
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    searchAirLines ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      console.log('payload :>> ', payload)
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/api/airlines/search`, payload)
          .then((result) => {
            console.log('result :>> ', result)
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    getDataAirLinesById ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/api/airlines/get-by-id/${payload}`)
          .then((result) => {
            resolve(result.data.result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    updateLogo ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/api/airlines/update-logo/${payload.id}`, payload.form, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then((result) => {
            resolve(result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    deleteAirLines ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      console.log('payload :>> ', payload)
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_SERVICE_API}/api/airlines/delete/${payload}`)
          .then((result) => {
            resolve(result)
          }).catch((err) => {
            reject(err)
          })
      })
    },
    insertNewAirLines ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        console.log('payload :>> ', payload)
        axios.post(`${process.env.VUE_APP_SERVICE_API}/api/airlines/insert-airlines`, payload, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then((result) => {
            console.log('result :>> ', result)
            resolve(result)
          }).catch((err) => {
            resolve(err)
          })
      })
    },
    updateAirLines ({ dispatch, commit, getters, rootGetters }, payload) {
      dispatch('interceptorRequest', null, { root: true })
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/api/airlines/update-airlines/${payload.id}`, payload)
          .then((result) => {
            resolve(result)
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

export default airlines
