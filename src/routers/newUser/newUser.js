const { Router } = require('express')
const validName = require('../../shared/utils/validName.js')
const userRouter = Router()

userRouter.post('/user', (req, res) => {
  const { name } = req.body
  const validar = validName.validName(name)
  console.log(validar)
})

module.exports = userRouter
