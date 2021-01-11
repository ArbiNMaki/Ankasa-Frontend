import axios from 'axios'

const state = () => {
  return {
    dataUser: []
  }
}

const getters = {
  getUserData (state) {
    return state.dataUser
  }
}

const mutations = {
  SET_DATA_USER (state, payload) {
    state.dataUser = payload
  }
}

const actions = {
  getUser ({ dispatch, commit, getters, rootGetters }, payload) {
    dispatch('interceptorRequest', null, { root: true })
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_SERVICE_API}/api/user/detail`)
        .then((response) => {
          commit('SET_DATA_USER', response.data.data)
          resolve(response.data.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  updateProfile ({ dispatch, commit, getters, rootGetters }, payload) {
    dispatch('interceptorRequest', null, { root: true })
    return new Promise((resolve, reject) => {
      axios.patch(`${process.env.VUE_APP_SERVICE_API}/api/user/edit-profile`, payload)
        .then((response) => {
          resolve(response.data.message)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  updateImage ({ dispatch, commit, getters, rootGetters }, payload) {
    dispatch('interceptorRequest', null, { root: true })
    return new Promise((resolve, reject) => {
      axios.patch(`${process.env.VUE_APP_SERVICE_API}/api/user/update-image`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
