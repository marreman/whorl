/**
 * Logs the Hjelm instance everytime a message is run.
 */
function log (whorl) {
  console.log('MESSAGE:', whorl.message)
  console.log('MODEL:', whorl.model)

  return whorl
}

module.exports = log
