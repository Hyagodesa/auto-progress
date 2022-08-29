const express = require('express')

const app = express()
const userRuter = require('./routers/newUser/newUser.js')

app.use(express())
app.use(express.json())
app.use(userRuter)

app.listen(4488, () => console.log(`servidor rodando em http://locahost:${4488}`))
