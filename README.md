# Whorl

Whorl is a tiny application library that holds a `model` and receive `message`s. In its bare form it does not do anything:

```js
const whorl = require("whorl")

const model = { count: 0 }

function NoOp() {}

const app = whorl(model)
app.run(new NoOp())
```

Its behavior can be altered and enhanced by adding `behaviors`. Whorl has three `behaviors` bundled:
- `log`: Logs the Whorl object everytime a message is passed through
- `updateModel`: Allows the developer to, as a reaction to messages, change the model
- `runEffects`: Runs asynchronous side-effects such as HTTP requests
