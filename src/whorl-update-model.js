/**
 * Allows an update function to transform the
 * model based on the message sent through Hjelm.
 */
function updateModel(whorl) {
  whorl.model = whorl.ops.updateModel(whorl.message, whorl.model)

  return whorl
}

module.exports = updateModel
