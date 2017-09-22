'use strict'

module.exports = str => {
  const regex = str.match(/\sdata-jsx=(["])\d+(["])/g)

  return str.replace(regex, '')
}
