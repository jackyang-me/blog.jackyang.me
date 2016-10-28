'use strict'

const STRING_TYPE = '[object String]'
const NUBMER_TYPE = '[object Number]'
const DATE_TYPE = '[object Date]'
const NULL_TYPE = '[object Null]'
const UNDEFINED_TYPE = '[object Undefined]'
const OBJECT_TYPE = '[object Object]'
const ARRAY_TYPE = '[object Array]'
const FUNCTION_TYPE = '[object Function]'
const BOOLEAN_TYPE = '[object Boolean]'

function getType (value) {
  return Object.prototype.toString.call(value);
}

exports.checkType = function (value, typeConstructor) {
  return getType(value) === '[object ' + typeConstructor.name + ']'
}

exports.isString = function (value) {
  return getType(value) === STRING_TYPE
}

exports.isNumber = function (value) {
  return getType(value) === NUMBER_TYPE
}

exports.isDate = function (value) {
  return getType(value) === DATE_TYPE
}

exports.isArray = function (value) {
  return getType(value) === ARRAY_TYPE
}

exports.isObject = function (value) {
  return getType(value) === OBJECT_TYPE
}

exports.isFunction = function (value) {
  return getType(value) === FUNCTION_TYPE
}

exports.isBoolean = function (value) {
  return getType(value) === BOOLEAN_TYPE
}

exports.isNull = function (value) {
  return getType(value) === NULL_TYPE
}

exports.isUndefined = function (value) {
  return getType(value) === UNDEFINED_TYPE
}

exports.hasValue = function (value) {
  return !exports.isNull(value) && !exports.isUndefined(value) && value !== ''
}
