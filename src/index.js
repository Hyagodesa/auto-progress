const express = require('express')
const app = express()
app.use(express())
app.use(express.json())

app.post('/', (req, res) => {
  res.json('HELLOW WORLD')
})

app.listen(4488)
