const express = require('express')

const userRouter = express.Router()

userRouter.post('/user', (req, res) => {
  const { name, email, password } = req.body
  const user = { name, email, password }
  if (user.name.length <= 3) return res.status(404).send('nome invalido')
  if (!user.email.includes('@')) return res.status(404).send('email invalido')
  if (user.password.length <= 7) return res.status(404).send('insira uma senha mais forte')
  res.json({ NewUser: 'cadastrado' })
})
module.exports = userRouter
