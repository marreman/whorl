const whorl = require('../src/index')


const makeRandomNumberEffect = Msg => done => {
  const msg = new Msg(Math.random())
  done(msg)
}


const model = { number: 0 }


function MakeRandomNumber () {}
function NewRandomNumber (number) {
  this.number = number
}


function updateModel (msg, model) {
  switch (msg.constructor) {
    case NewRandomNumber:
      return { number: msg.number }

    default:
      return model
  }
}


function runEffects (msg) {
  switch (msg.constructor) {
    case MakeRandomNumber:
      return makeRandomNumberEffect(NewRandomNumber)
  }
}


const app = whorl(model, {
  updateModel,
  runEffects
})

console.log(app.model)
app.send(new MakeRandomNumber())
console.log(app.model)
