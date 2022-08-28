const { v4: uuid, validate } = require('uuid')

const generate = () => {
  return uuid()
}

const isValid = (id) => {
  return validate(id)
}

const idUtility = {
  generate,
  isValid
}

module.exports = idUtility
