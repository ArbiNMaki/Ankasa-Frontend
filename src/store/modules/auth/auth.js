import axios from 'axios'
import { url } from '../../../helper/env'
import router from '../../../router/index'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}
const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}
const mutations = {
  REMOVE_TOKEN (state) {
    state.token = null
  }
}
const actions = {
  onRegister (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/api/auth/signup`, payload)
        .then(result => {
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err.message)
        })
    })
  },
  onLogin (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/api/auth/login`, {
          email: payload.email,
          password: payload.password
        })
        .then(result => {
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('id', result.data.data.id)
          localStorage.setItem('username', result.data.data.username)
          context.dispatch('interceptorRequest')
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err.message)
        })
    })
  },
  onLogout (context) {
    return new Promise(resolve => {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('username')
      resolve()
    })
  },
  onForgotPassword (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/api/auth/forgot-password/request`, payload)
        .then(result => {
          resolve(result.data.message)
        })
        .catch(err => reject(err.message))
    })
  },
  onResetPassword (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/api/auth/forgot-password/new-password/${payload.token}`, {
          password: payload.password,
          repeat_password: payload.confirm
        })
        .then(result => {
          resolve(result)
        })
        .catch(err => reject(err.message))
    })
  },
  interceptorRequest (context) {
    axios.interceptors.request.use(function (config) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
      return config
    }, function (error) {
      return Promise.reject(error)
    })
  },
  interceptorResponse (context) {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      if (error.response.status === 401) {
        if (error.response.data.err.message === 'Invalid Token') {
          localStorage.clear()
          context.commit('REMOVE_TOKEN')
          router.push({ name: 'Login' })
        } else if (error.response.data.err.message === 'Token Expired') {
          localStorage.clear()
          context.commit('REMOVE_TOKEN')
          router.push({ name: 'Login' })
        }
      }
      return Promise.reject(error)
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
