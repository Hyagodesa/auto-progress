const express = require('express')
const app = express()
app.use(express())
app.use(express.json())

app.get('/', (req, res) => {
  res.json('HELLO WORLD')
})

app.listen(4488, () => console.log(`servidor rodando em http://locahost:${4488}`))
