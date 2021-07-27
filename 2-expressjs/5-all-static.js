//storing index.html file in public(static assets)
const express = require('express')
const app = express()

app.use(express.static('./public'))

app.all('*', (req, res) => {
  res.send('Page not found')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})
