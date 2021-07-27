const express = require('express')
const app = express()
const { products, people } = require('./data')

app.get('/', (req, res) => {
  res.send('<h2>Home page</h2> <a href = "/api/products">Products</a>')
})
app.get('/api/products', (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProduct)
})

//simple approach if have few id's
// app.get('/api/products/1', (req, res) => {
// const singleProduct = products.find((product) => product.id === 1)
// const { id, name, image } = singleProduct
// res.json({ id, name, image })
//   res.json(singleProduct)
// })

//express approach route parameter (productId is placeholder)
app.get('/api/products/:productID', (req, res) => {
  console.log(req.params)
  const { productID } = req.params
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Page Not Found')
  }
  return res.send(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewsID', (req, res) => {
  const { reviewID } = req.params
  console.log(req.params)
  res.send('Hello World')
})

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // return res.status(200).send('Product you are looking for is not here')
    return res.status(200).json({ success: true, data: [] })
  }
  res.send(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on post 5000...')
})
