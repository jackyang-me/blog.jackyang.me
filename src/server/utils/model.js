'use strict'

const lang = require('./lang')

exports.validateModel = function (model, fields) {
  for (let i = 0; i < fields.length; i++) {
    let field = fields[i]
    let value = model[field.name]

    if (!lang.hasValue(value)) {
      if (field.mandatory) {
        return {
          error: field.name + ' is mandatory'
        }
      } else {
        continue
      }
    }

    if (!lang.checkType(value, field.type)) {
      return {
        error: field.name + ' should be ' + field.type.name
      }
    }

    if (field.validation && !field.validation(value)) {
      return {
        error: field.name + ' validation failed'
      }
    }
  }

  return true
}

exports.fillModel = function (avObject, model, fields) {
  fields.forEach(field => {
    avObject.set(field.name, model[field.name])
  })
}
