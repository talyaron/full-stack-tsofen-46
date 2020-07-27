const express = require('express')
const app = express()

app.use(express.static('public'))

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

//RERST api
app.get('/students', function (req, res) {
  
  res.send(students)
})



app.get('/admin', function (req, res) {
  res.send('admin panel')
})

app.listen(3000, () => { console.log('App listen on port 3000') })