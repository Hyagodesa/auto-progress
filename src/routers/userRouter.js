const express = require('express')
const validator = require('class-validator')
const idUtils = require('../shared/utils/idUtils')
const dateUtils = require('../shared/utils/dateUtils')

const userRouter = express.Router()
const users = []

userRouter.post('/user', (req, res) => {
  const { name, email, password } = req.body

  if (!name) return res.status(400).send('Insira um nome.')
  if (!validator.minLength(name, 4)) return res.status(400).send('Insira um nome maior, com pelo menos 4 caracteres.')
  if (!validator.maxLength(name, 30)) return res.status(400).send('Insira um nome menor, com no máximo 30 caracteres.')

  if (!email) return res.status(400).send('Insira um email.')
  if (!validator.IsEmail(email)) return res.status(400).send('Email inválido.')

  if (!password) return res.status(400).send('Insira uma senha.')
  if (!validator.length(password, 8, 20)) return res.status(400).send('Insira uma senha entre 8 e 20 caracteres.')

  const user = users.find((user) => user.email === email)
  if (user) return res.status(400).send('Este email já foi cadastrado.')

  const id = idUtils.generate()
  console.log(id)
  users.push({ name, email, password, id, createdAt: dateUtils.now(), status: true })
  return res.status(204).json()
})

userRouter.patch('/user/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const isValidID = users.find((user) => user.id === id)
  const isValidName = users.find((user) => user.name === name)
  const index = users.findIndex((user) => user.id === id)

  if (!isValidID) return res.status(400).send('Insira um ID válido.')
  if (!name) return res.status(400).send('Insira um nome.')
  if (isValidName) return res.status(400).send('Insira um nome diferente do atual.')
  if (!validator.minLength(name, 4)) return res.status(400).send('Insira um nome maior, com pelo menos 4 caracteres.')
  if (!validator.maxLength(name, 30)) return res.status(400).send('Insira um nome menor, com no máximo 30 caracteres.')

  if (index >= 0) {
    users[index] = { ...users[index], name }
  }
  return res.json({ update: name })
})

module.exports = userRouter
