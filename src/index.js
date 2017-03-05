const Whorl = require('./whorl')
const log = require('./whorl-log')
const updateModel = require('./whorl-update-model')
const runEffects = require('./whorl-run-effects')

const defaultBehaviors = [
  log,
  updateModel,
  runEffects
]

module.exports = (model, functions, behaviors = []) => {
  return new Whorl(model, functions, behaviors.concat(defaultBehaviors))
}
