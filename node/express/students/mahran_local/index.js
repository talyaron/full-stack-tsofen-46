const express = require('express')
const app = express()

app.use(express.static('public'))

const jockes = [
    "A",
    "B",
    "C",
    "D"
  ];
  
  //RERST api
  app.get('/jockes', function (req, res) {
    console.log(jockes)
    res.send(jockes)
  })




n