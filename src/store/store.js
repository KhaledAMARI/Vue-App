import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //  process.env.NODE_ENV !== 'production
  state: {
    registredUserEmail: ''
  },
  mutations: {
    setRegistredUserEmail (state, email) {
      state.registredUserEmail = email
    }
  },
  actions: {
    setRegistredUserEmail ({ commit }, email) {
      commit('setRegistredUserEmail', email)
    }
  },
  getters: {
    getState (state) {
      return state
    },
    getRegistredUserEmail (state) {
      return state.registredUserEmail
    }
  }
})
