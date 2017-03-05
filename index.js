const compose = require("compose-function")


/**
 * Allows an update function to transform the
 * model based on the message sent through Hjelm.
 */
function updateModel(whorl) {
  whorl.model = whorl.ops.updateModel(whorl.message, whorl.model)

  return whorl
}


/**
 * Runs sid
 */
function runEffects(whorl) {
  const effect = whorl.ops.runEffects(whorl.message)

  if (effect) {
    const handle = setTimeout(() => {
      clearTimeout(handle)
      effect(message => whorl.run(message))
    }, 0)
  }

  return whorl
}


/**
 * Logs the Hjelm instance everytime a message is run.
 */
function log(whorl) {
  console.log("MESSAGE:", whorl.message)
  console.log("MODEL:", whorl.model)

  return whorl
}


/** The Whorl class */
class Whorl {

  /**
   * Creates a Hjelm instance
   */
  constructor(model, ops, middlewares) {
    this.model = model
    this.ops = ops
    this.runMiddlewares = compose(...middlewares)
  }

  run(message) {
    this.message = message

    const app = this.runMiddlewares(this)

    return this.model = app.model
  }
}


module.exports = (model, ops) => {
  return new Whorl(model, ops, [log, updateModel, runEffects])
}
