const compose = require("compose-function")


/**
 * Allows an update function to transform the
 * model based on the message sent through Hjelm.
 */
function updateModel(hjelm) {
  hjelm.model = hjelm.ops.updateModel(hjelm.message, hjelm.model)

  return hjelm
}


/**
 * Runs sid
 */
function runEffects(hjelm) {
  const effect = hjelm.ops.runEffects(hjelm.message)

  if (effect) {
    const handle = setTimeout(() => {
      clearTimeout(handle)
      effect(message => hjelm.run(message))
    }, 0)
  }

  return hjelm
}


/**
 * Logs the Hjelm instance everytime a message is run.
 */
function log(hjelm) {
  console.log("MESSAGE:", hjelm.message)
  console.log("MODEL:", hjelm.model)

  return hjelm
}


/** The Hjelm class */
class Hjelm {

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
  return new Hjelm(model, ops, [log, updateModel, runEffects])
}
