const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.static('public'));

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
  })

app.post('/api/users', jsonParser, function (req, res))


app.get('/', function (req, res) {
    res.send('Hello World')
})

console.log("hiiii") 
app.listen(3000)

