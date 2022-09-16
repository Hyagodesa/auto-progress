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

  users.push({ name, email, password, id: idUtils.generate(), createdAt: dateUtils.now(), status: true })
  return res.status(204).json()
})

userRouter.get('/users', (req, res) => {
  const userRegistered = users.map((userList) => {
    const { password, ...user } = userList
    return user
  })
  return res.json(userRegistered)
})

module.exports = userRouter
