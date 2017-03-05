const whorl = require('../src/index')


const makeRandomNumberEffect = Msg => done => {
  const msg = new Msg(Math.random())
  done(msg)
}

function MakeRandomNumber () {}
function NewRandomNumber (number) {
  this.number = number
}


const app = whorl({ count: 0}, {

  updateModel: (msg, model) => {
    switch (msg.constructor) {
      case NewRandomNumber:
        return { number: msg.number }

      default:
        return model
    }
  },

  runEffects: msg => {
    switch (msg.constructor) {
      case MakeRandomNumber:
        return makeRandomNumberEffect(NewRandomNumber)
    }
  }
})

console.log(app.model)
app.send(new MakeRandomNumber())
console.log(app.model)
