import * as type from 'src/admin/vuex/mutation-types'
import * as userAPI from 'api/user'

const state = {
  userName: '',
  password: '',
  loginResult: {
    error: false
  }
}

const mutations = {
  [type.LOGIN_CHANGE_USERNAME] (state, { userName }) {
    state.userName = userName
  },
  [type.LOGIN_CHANGE_PASSWORD] (state, { password }) {
    state.password = password
  },
  [type.LOGIN_CHANGE_RESULT] (state, { result }) {
    state.loginResult = result
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
    let result = {}
    return userAPI.login(state.userName, state.password).then(response => {
      result.error = false
      localStorage.setItem('userToken', response.data.token)
      localStorage.setItem('userId', response.data.userId)
      commit(type.LOGIN_CHANGE_RESULT, { result })
    }).catch(error => {
      result.error = error
      commit(type.LOGIN_CHANGE_RESULT, { result })
    })
  },
  logout ({ commit, state }) {
    userAPI.logout().then(() => {
      window.location.href = window.location.origin + window.location.pathname
    })
  }
}

export default {
  state,
  actions,
  mutations
}
