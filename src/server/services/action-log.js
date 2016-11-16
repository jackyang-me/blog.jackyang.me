'use strict'

const UAParser = require('ua-parser-js')
const userAgentParser = new UAParser()
const AV = require('leanengine')
const ActionLogAVObject = AV.Object.extend('ActionLog')

exports.create = function *(next) {
  let actionLog = new ActionLogAVObject()
  let request = this.request.body
  let uaResult = userAgentParser.setUA(this.headers['user-agent'])

  actionLog.set('ip', this.ip)
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
