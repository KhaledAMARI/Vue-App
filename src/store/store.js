import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //  process.env.NODE_ENV !== 'production
  state: {
    token: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    }
  },
  getters: {
    getState (state) {
      return state
    }
  }
})
