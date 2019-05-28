import { getStorage, setStorage } from '@/utils/tool'

const state = {
    token: '',
    name: '',
    avatar: '',
    roles: []
}

const getters = {

}

const mutations = {
  SET_TOKEN: (state:any, token:string): void => {
    state.token = token
  }
}

const actions = {
  LogOut({ commit, state }) {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
