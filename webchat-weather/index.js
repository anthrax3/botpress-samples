const _ = require('lodash')
const ummBlocs = require('./umm')

module.exports = function(bp) {
  _.forIn(ummBlocs, (value, key) => bp.umm.registerBloc(key, value))

  bp.dialogEngine.registerFunctions(require('./functions'))

  bp.hear(/.+/i, (event, next) => {
    bp.dialogEngine.processMessage(event.sessionId || event.user.id, event).then()
  })
}
