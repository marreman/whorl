/**
 * Runs side-effects
 */
function runEffects (whorl) {
  if (!(whorl.functions.runEffects instanceof Function)) {
    return whorl
  }

  const effect = whorl.functions.runEffects(whorl.message)

  if (effect) {
    const handle = setTimeout(() => {
      clearTimeout(handle)
      effect(message => whorl.send(message))
    }, 0)
  }

  return whorl
}

module.exports = runEffects
