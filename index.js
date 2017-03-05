const compose = require("compose-function")


/**
 * Allows an update function to transform the
 * model based on the message sent through Hjelm.
 */
function send(hjelm) {
  return hjelm.program.model =
    hjelm.program.update(hjelm.message, hjelm.program.model)
}


/**
 * Logs the Hjelm instance everytime a message is run.
 */
function log(hjelm) {
  console.log(hjelm)
  return hjelm
}


/** The Hjelm class */
class Hjelm {

  /**
   * Creates a Hjelm instance
   */
  constructor(program, middlewares) {
    this.program = program
    this.runMiddlewares = compose(...middlewares)
  }

  run(message) {
    return this.program.model =
      this.runMiddlewares({ message, program: this.program })
  }
}


module.exports = program => {
  return new Hjelm(program, [send, log])
}
