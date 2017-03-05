const Whorl = require('./whorl')
const log = require('./whorl-log')
const updateModel = require('./whorl-update-model')
const runEffects = require('./whorl-run-effects')

const defaultBehaviors = [
  log,
  updateModel,
  runEffects
]

module.exports = (model, ops, behaviors = []) => {
  return new Whorl(model, ops, behaviors.concat(defaultBehaviors))
}
