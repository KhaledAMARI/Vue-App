import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //  process.env.NODE_ENV !== 'production
  state: {
    confirmationToken: null,
    loginToken: null,
    registredUserEmail: ''
  },
  mutations: {
    setConfirmationToken (state, token) {
      state.confirmationToken = token
    },
    setLoginToken (state, token) {
      state.loginToken = token
    },
    setRegistredUserEmail (state, email) {
      state.registredUserEmail = email
    }
  },
  actions: {
    setConfirmationToken ({ commit }, token) {
      commit('setConfirmationToken', token)
    },
    setLoginToken ({ commit }, token) {
      commit('setLoginToken', token)
    },
    setRegistredUserEmail ({ commit }, email) {
      commit('setRegistredUserEmail', email)
    }
  },
  getters: {
    getState (state) {
      return state
    },
    getConfirmationToken (state) {
      return state.confirmationToken
    },
    getLoginToken (state) {
      return state.loginToken
    },
    getRegistredUserEmail (state) {
      return state.registredUserEmail
    }
  }
})
