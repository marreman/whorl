const whorl = require('../src/index')

const model = { count: 0 }

function Increment (amount) {
  this.amount = amount
}

function update (msg, model) {
  switch (msg.constructor) {
    case Increment:
      return { count: model.count + msg.amount }

    default:
      return model
  }
}

const app = whorl(model, { updateModel: update })
const newModel = app.send(new Increment(5))

console.log(newModel) // { count: 5 }
