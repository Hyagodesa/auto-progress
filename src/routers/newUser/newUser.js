const { Router } = require('express')
const userRouter = Router()

const user = []

// const validName = (name) => {
//   if (name.length <= 3) return ('nome invalido')
// }

userRouter.post('/user', (req, res) => {
  const { name } = req.body
  console.log(name)
})

userRouter.get('/user', (req, res) => {
  res.json(user)
})
module.exports = userRouter
