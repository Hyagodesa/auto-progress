const express = require('express')

const app = express()
const userRouter = require('./routers/newUser/newUser.js')

app.use(express())
app.use(express.json())
app.use(userRouter)

app.listen(4488, () => console.log(`servidor rodando em http://locahost:${4488}`))
