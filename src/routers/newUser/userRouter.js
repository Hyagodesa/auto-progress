const express = require('express')
const idUtils = require('../../shared/utils/idUtility')
const dateUtils = require('../../shared/utils/dateUtils')
const userRouter = express.Router()
const list = []
userRouter.post('/user', (req, res) => {
  const { name, email, password } = req.body
  if (name.length <= 3) return res.status(400).send('nome muito curto, insira um nome maior')
  if (!email.includes('@') && !email.includes('.com')) return res.status(400).send('email invalido')
  if (password.length <= 7) return res.status(400).send('insira uma senha mais forte, contendo pelo menos 8 digitos')
  if (!name) return res.status(400).send('insira um nome')
  if (!email) return res.status(400).send('insira um email')
  if (!password) return res.status(400).send('insira uma senha')
  const usuario = list.find((user) => user.email === email)
  if (usuario) return res.status(400).send('usuário ja foi cadastrado')
  list.push({ name, email, password, id: idUtils.generate(), createdAt: dateUtils.now(), status: true })
  res.status(204)
})
module.exports = userRouter
