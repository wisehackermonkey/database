const express = require('express')
const app = express()
const PORT = 80
 
// reply to request with the hello world html file
app.get('/', function (req, res) {
  res.send("{'works':'true'}")
  console.log("{'works':'true'}")
})

// start a server on port 80 and log its start to our console
app.listen(PORT, () => {
  console.log(`Database app listening on port ${PORT}`)
})
