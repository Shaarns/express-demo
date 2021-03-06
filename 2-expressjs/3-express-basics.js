const express = require('express')
const path = require('path')
const app = express()

//store all the static resouces like style.css javscript and logo images
//file in public folder
//express.static method will load all the files from there to server
//setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('<h1> Page Not Found </h1>')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})
