'use strict'

const AV = require('leanengine')
const aDay = 24 * 60 * 60 * 1000

function saveUserInSession (session, user) {
  let token = user._sessionToken
  session[token] = {
    maxAge: 10 * 1000,
    created: new Date()
  }
  return token
}

exports.login = function *() {
  let result = yield AV.User.logIn(
    this.request.body.username,
    this.request.body.password
  ).then(response => {
    return {
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
