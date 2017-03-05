const compose = require("compose-function")

class Whorl {
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

module.exports = Whorl
