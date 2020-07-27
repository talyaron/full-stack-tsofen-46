const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
    res.send('About me')
  })
 
  app.get('/student', function (req, res) {
    res.send('About Student')
  })
app.listen(3000, ()=>{console.log('App listen on port 3000')})