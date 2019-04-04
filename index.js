const express = require('express')
const app = express()
const port = 9100

app.get('/', (req, res) =>
  res.send('Greetings from Kritsatorn...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
