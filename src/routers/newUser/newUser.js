
const express = require('express')
const idUtils = require('../../shared/utils/idUtility')
const dateUtils = require('../../shared/utils/dateUtils')

const userRouter = express.Router()
const list = []
userRouter.post('/user', (req, res) => {
  const { name, email, password } = req.body
  if (name.length <= 3) return res.send('nome invalido')
  if (!email.includes('@')) return res.send('email invalido')
  if (password.length <= 7) return res.send('insira uma senha mais forte')
  const verify = list.find((user) => user.email === email)
  if (verify) return res.send('usuario ja foi cadastrado')
  list.push({ name, email, password, id: idUtils.generate(), createdAt: dateUtils.now(), status: true })

  res.json({ NewUser: 'cadastrado' })
  console.log(list)
})

module.exports = userRouter
