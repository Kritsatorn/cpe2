const express = require('express')
const app = express()
const port = 9100

app.get('/', (req, res) =>
  res.send('Greetings from CPE2...FUCKKK')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
