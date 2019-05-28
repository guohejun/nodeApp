import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'

Vue.use(Vuex)

// initial state
const state = {}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    global
  },
  strict: false,
  plugins: []
})
