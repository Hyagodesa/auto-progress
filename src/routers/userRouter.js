const express = require('express')
const idUtils = require('../shared/utils/idUtility')
const dateUtils = require('../shared/utils/dateUtils')

const userRouter = express.Router()
const list = []

userRouter.post('/user', (req, res) => {
  const { name, email, password } = req.body

  if (!name) return res.status(400).send('Insira um nome.')
  if (name.length <= 3) return res.status(400).send('Insira um nome maior, com pelo menos 4 caracteres.')

  if (!email) return res.status(400).send('Insira um email.')
  if (!email.includes('@') || !email.includes('.com')) return res.status(400).send('Email inválido.')

  if (!password) return res.status(400).send('Insira uma senha.')
  if (password.length <= 7) return res.status(400).send('Insira uma senha mais forte, com pelo menos 8 caracteres.')

  const user = list.find((user) => user.email === email)
  if (user) return res.status(400).send('Este email já foi cadastrado.')

  list.push({ name, email, password, id: idUtils.generate(), createdAt: dateUtils.now(), status: true })
  return res.status(204).json()
})

module.exports = userRouter
