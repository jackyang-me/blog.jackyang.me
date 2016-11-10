import fetch from 'src/fetch'

export function login (username, password) {
  return fetch.post(`/admin/user/login/`, { username, password })
}

export function logout () {
  return fetch.post('/admin/user/logout')
}
