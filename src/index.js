const Whorl = require("./whorl")
const log = require("./whorl-log")
const updateModel = require("./whorl-update-model")
const runEffects = require("./whorl-run-effects")

const defaultMiddlewares = [
  log,
  updateModel,
  runEffects
]

module.exports = (model, ops, middlewares = []) => {
  return new Whorl(model, ops, middlewares.concat(defaultMiddlewares))
}
