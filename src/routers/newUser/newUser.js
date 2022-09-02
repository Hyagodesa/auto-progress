
const express = require('express')
const idUtils = require('../../shared/utils/idUtility')
const dateUtils = require('../../shared/utils/dateUtils')

const userRouter = express.Router()
const list = []
userRouter.post('/user', (req, res) => {
  const { name, email, password } = req.body
  if (name.length <= 3) return res.status(400).send('nome invalido')
  if (!email.includes('@')) return res.status(400).send('email invalido')
  if (password.length <= 7) return res.status(400).send('insira uma senha mais forte')
  const verify = list.find((user) => user.email === email)
  if (verify) return res.status(400).send('usuario ja foi cadastrado')
  list.push({ name, email, password, id: idUtils.generate(), createdAt: dateUtils.now(), status: true })

  res.status(204).json({ NewUser: 'cadastrado' })
  console.log(list)
})

module.exports = userRouter
