const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Home')
})
 
app.get('/about', function (req, res) {
  res.send('About me')
})

app.get('/students', function (req, res) {
  res.send('About student')
})

app.get('/Admin', function (req, res) {
  res.send('About Admin')
})
app.listen(3000, ()=>{console.log('App listen on port 3000')})