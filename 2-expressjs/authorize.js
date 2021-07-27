const authorize = (req, res, next) => {
  // console.log('authorize')
  const { user } = req.query
  if (user === 'john') {
    req.user = { name: 'john ', id: 1 }
    next()
  } else {
    res.status(401).send('Unauthorized')
  }
}

module.exports = authorize
