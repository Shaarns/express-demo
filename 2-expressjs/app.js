// const { response } = require('express')
// const express = require('express')
// const app = express()
// const { people } = require('./data')

// //static assets
// //takes all the static file from specific route and then display
// //display it in the webpage
// app.use(express.static('./methods-public'))

// // parse form data
// app.use(express.urlencoded({ extended: false }))

// // body parse
// app.use(express.json())

// app.post('/login', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res.status(401).send('Empty value') //401 - unathorized client error
//   }
//   return res.status(200).send(`Welcome Home, ${name}`)
// })

// app.get('/api/people', (req, res) => {
//   res.status(200).json({ success: true, data: people })
// })

// app.post('/api/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(200)
//       .json({ success: false, message: 'Please provide a value' })
//   }
//   return res.status(200).send({ success: true, person: name })
// })

// app.put('/api/people/:id', (req, res) => {
//   const { id } = req.params
//   const { name } = req.body
//   const person = people.find((person) => person.id === Number(id))
//   if (!person) {
//     //not to communicate with given server
//     res.status(404).json({
//       success: false,
//       message: `person with Id: ${id} does not existss`,
//     })
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name
//     }
//     return person
//   })
//   res.status(200).json({ success: true, data: newPeople })
// })

// app.delete('/api/people/:id', (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id))
//   if (!person) {
//     return res.status(404).json({
//       success: false,
//       message: `person with id: ${req.params.id} does not exists`,
//     })
//   }
//   const newPerson = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   )
//   return res.status(200).json({ success: true, data: newPerson })
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000...')
// })
const express = require('express')
const app = express()
const { people } = require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.post('/login', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(401).send('Please provide value')
  }
  return res.status(200).send(`Welcome home ${name}`)
})

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(404)
      .json({ success: false, message: 'Please enter a name' })
  }
  return res.status(200).json({ success: true, person: name })
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const person = people.find((person) => person.id === Number(id))
  if (!person) {
    return res
      .status(401)
      .json({ success: false, message: `No person with id: ${id}` })
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPerson })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(401)
      .json({
        success: false,
        message: `No person with id: ${req.params.id} exists`,
      })
  }
  const newPerson = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPerson })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})
