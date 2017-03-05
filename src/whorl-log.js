/**
 * Logs the Whorl instance everytime a message is sent through.
 */
function log (whorl) {
  console.log('MESSAGE:', whorl.message)
  console.log('MODEL:', whorl.model)

  return whorl
}

module.exports = log
