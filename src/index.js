const express = require('express')
const userRouter = require('./routers/userRouter.js')

const app = express()

app.use(express.json())
app.use(userRouter)

app.get('/', (req, res) => {
  res.json('HELLO WORLD')
})

const port = 4488
app.listen(port, () => console.log(`servidor rodando em http://localhost:${port}`))
