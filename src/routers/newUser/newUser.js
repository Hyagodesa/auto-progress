const { Router } = require('express')
const validName = require('../../shared/utils/validName.js')
const userRouter = Router()

userRouter.post('/user', (req, res) => {
  const { name } = req.body
  const validarNome = validName()
  if (validarNome) { return res.json(404).send('insira um nome maior') }

  return res.json({ newUser: name })
})

module.exports = userRouter
