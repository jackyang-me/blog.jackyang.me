'use strict'

const AV = require('leancloud-storage')

exports.login = function *() {
  AV.User.logIn(this.request.body.username, this.request.body.password).then(function (user) {
    console.log('login user', user)
  }).catch(function (error) {
    console.log('login failed', error)
  })

  this.status = 200
  this.body = {
    code: 0,
    data: result
  }
}
