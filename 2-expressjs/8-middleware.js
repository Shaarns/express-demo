// middleware are functions that are executed during the request to SERVERS
// middleware are everywhere in express
// expresss is nothing but bunch of middlewhere functions

//  req => middlewarer => res

const express = require('express')
const app = express()
const logger = require('./logger')

app.use(logger)

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
