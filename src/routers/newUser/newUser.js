
const express = require('express')

const userRouter = express.Router()
const list = []
console.log(list)
userRouter.post('/user', (req, res) => {
  const { name, email, password } = req.body
  if (name.length <= 3) return res.status(404).send('nome invalido')
  if (!email.includes('@')) return res.status(404).send('email invalido')
  if (password.length <= 7) return res.status(404).send('insira uma senha mais forte')
  const verify = list.find((user) => user === email)
  if (verify) return res.send('usuario ja foi cadastrado')

  res.json({ NewUser: 'cadastrado' })
})

userRouter.get('/user', (req, res) => {
  res.json(list)
})
module.exports = userRouter
