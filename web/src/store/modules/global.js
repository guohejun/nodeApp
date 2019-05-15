import tool from '@/utils/api'

const state = {
  token: sessionStorage.getItem('token'),
  alert: {
    show: false,
    title: '',
    content: '',
    onShow: function () {},
    onHide: function () {}
  }
}

const getters = {}

const mutations = {
  updateAlert (state, data) {
    state.alert = data
  },
  updateToken (state, data) {
    state.token = sessionStorage.setItem('token', data)
  }
}

const actions = {
  updateAlert ({ commit }, data) {
    commit('updateAlert', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
