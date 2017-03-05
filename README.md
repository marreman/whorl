# Whorl

A tiny application library that holds a `model` and receive `message`s. `behavior`s makes Whorl actually do stuff.

Example (built-in) `behaviors`:
- `log`: Logs the `message` and `model` when a message is sent through
- `updateModel`: As a reaction to messages, update the model
- `runEffects`: Run asynchronous side-effects such as HTTP requests
