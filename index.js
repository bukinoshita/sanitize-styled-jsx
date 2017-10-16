'use strict'

module.exports = str => {
  const regex = str.match(/\sclassName=(["])jsx-\d+(["])/g)

  return str.replace(regex, '')
}
