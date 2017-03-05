/**
 * Runs sid
 */
function runEffects (whorl) {
  const effect = whorl.functions.runEffects(whorl.message)

  if (effect) {
    const handle = setTimeout(() => {
      clearTimeout(handle)
      effect(message => whorl.run(message))
    }, 0)
  }

  return whorl
}

module.exports = runEffects
