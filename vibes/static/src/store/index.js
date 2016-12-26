import Vue from 'vue'
import Vuex from 'vuex'
import { postToken } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null
  },
  
  actions: {
        POST_TOKEN: ({ commit, state }, data) => {
            return postToken(data.email, data.password).then(response => commit('SET_TOKEN', response.token))
        }
  },

  mutations: {
      SET_TOKEN: (state, token) => {
        state.token = token
      }
  },

  getters: {
      token: state => {
        return state.token
    }
  }
})

export default store
