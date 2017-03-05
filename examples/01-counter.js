const whorl = require('../src/index')


const model = { count: 0 }


function Increment (amount) {
  this.amount = amount
}


function updateModel (msg, model) {
  switch (msg.constructor) {
    case Increment:
      return { count: model.count + msg.amount }

    default:
      return model
  }
}


const app = whorl(model, { updateModel })

console.log(app.model)
app.send(new Increment(5))
console.log(app.model)
