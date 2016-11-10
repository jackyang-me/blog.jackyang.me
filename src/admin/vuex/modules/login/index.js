import * as type from 'src/admin/vuex/mutation-types'
import * as userAPI from 'api/user'

const state = {
  userName: '',
  password: ''
}

const mutations = {
  [type.LOGIN_CHANGE_USERNAME] (state, { userName }) {
    state.userName = userName
  },
  [type.LOGIN_CHANGE_PASSWORD] (state, { password }) {
    state.password = password
  }
}

const actions = {
  changeUserName ({ commit }, userName) {
    commit(type.LOGIN_CHANGE_USERNAME, { userName })
  },
  changePassword ({ commit }, password) {
    commit(type.LOGIN_CHANGE_PASSWORD, { password })
  },
  login ({ commit, state }) {
    userAPI.login(state.userName, state.password).then(response => {
      console.log('login success', response)
      localStorage.setItem('userToken', response.data.token)
    }).catch(error => {
      console.log('login error', error)
    })
  },
  logout ({ commit, state }) {

  }
}

export default {
  state,
  actions,
  mutations
}
