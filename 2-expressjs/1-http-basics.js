const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Home page')
})

app.get('/about', (req, res) => {
  res.status(200).send('welcome to about page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>Oops! \n Page not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on post 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.usey
// app. listen
