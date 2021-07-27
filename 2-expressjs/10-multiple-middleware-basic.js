const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

app.use([logger, authorize])

app.get('/', (req, res) => {
  res.send('This is Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/product', (req, res) => {
  res.send('Product page')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})
