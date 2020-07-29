const express = require('express')
const app = express()

app.use(express.static('public'))

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


const students = [
  "moran",
  "monera",
   "nivin",
 "nimer",
 "sizar",
 "jeries",
 "morad",
 "rawad",
 "omri",
 "saleh",
 "taimaa",
 "abdallah",
 "yousef",
 "marshood",
 "Rami",
 "Maharn",
 "sally"
];

app.get('/jokes', function (req, res) {
  
    res.send(jokes)
  })

app.listen(3000, () => { console.log('App listen on port 3000') })