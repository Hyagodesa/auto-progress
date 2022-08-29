const express = require('express')
const app = express()
const router = require('./routers/newUser/newUser.js')

app.use(express())
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  return res.json(router)
})

app.listen(4488, () => console.log(`servidor rodando em http://locahost:${4488}`))
