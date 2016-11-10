'use strict'

const AV = require('leanengine')
const aDay = 24 * 60 * 60 * 1000

function saveUserInSession (session, user) {
  let token = user._sessionToken
  let userId = user.get('id')
  session[userId] = {
    token: token,
    maxAge: aDay,
    activatedFrom: Date.now()
  }
  return token
}

exports.login = function *() {
  let result = yield AV.User.logIn(
    this.request.body.username,
    this.request.body.password
  ).then(response => {
    return {
      userId: response.get('id'),
      userName: response.get('username'),
      email: response.get('email'),
      token: saveUserInSession(this.app.context.userSession, response)
    }
  }).catch(error => {
    this.throw(404, 'user not exits')
  })

  this.status = 200
  this.body = {
    code: 0,
    data: result
  }
}

exports.logout = function *() {
  let token = this.header['authentication']
  let userId = this.header['user-id']
  let session = this.app.context.userSession[userId]

  if (session && session.token === token) {
    delete this.app.context.userSession[userId]
  }

  this.status = 200
  this.body = {
    code: 0,
    data: null
  }
}
