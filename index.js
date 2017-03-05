function send(hjelm) {
  return hjelm.program.model =
    hjelm.program.update(hjelm.message, hjelm.program.model)
}

class Hjelm {
  constructor(program) {
    this.program = program
  }

  run(message) {
    return this.program.model =
      send({ message, program: this.program })
  }
}

module.exports = program => {
  return new Hjelm(program)
}
