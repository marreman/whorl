const compose = require('compose-function')

class Whorl {
  constructor (model, functions, behaviors) {
    this.model = model
    this.functions = functions
    this.runBehaviors = compose(...behaviors)
  }

  send (message) {
    this.message = message

    const app = this.runBehaviors(this)

    this.model = app.model

    return this.model
  }
}

module.exports = Whorl
