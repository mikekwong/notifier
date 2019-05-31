const express = require('express')

const app = express()
const PORT = 8080

app.get('/test', (req, res, next) => {
  try {
    return res.json('test works')
  } catch (error) {
    next(error)
  }
})

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
