const functions = require('./functions')

module.exports = function(bp) {
  bp.dialogEngine.registerFunctions(functions)

  bp.hear(/.+/i, (event, next) => {
    bp.dialogEngine.processMessage(event.sessionId || event.user.id, event).then()
  })
}
