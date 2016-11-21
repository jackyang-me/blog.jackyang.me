'use strict'

const UAParser = require('ua-parser-js')
const userAgentParser = new UAParser()
const AV = require('leanengine')
const ActionLogAVObject = AV.Object.extend('ActionLog')

exports.create = function *(next) {
  let actionLog = new ActionLogAVObject()
  let request = this.request.body
  let uaResult = userAgentParser.setUA(this.headers['user-agent'])
  let realIP = thsi.headers['x-real-ip'] // x-real-ip in nginx

  actionLog.set('ip', realIP)
  actionLog.set('os', uaResult.getOS())
  actionLog.set('browser', uaResult.getBrowser())
  actionLog.set('device', uaResult.getDevice())
  actionLog.set('action', request.actionType)
  actionLog.set('key', request.actionKey)
  actionLog.save()

  this.status = 200
  this.body = {
    code: 0,
    data: {}
  }
}
