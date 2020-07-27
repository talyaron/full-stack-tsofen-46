const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Home')
})

app.get('/about', function (req, res) {
  res.send('about me')
});

app.get('/students/:studentID/:name?', function (req, res) {
  const { studentID, name } = req.params
  res.send(`about the student with id: ${studentID} with name of ${name}`)
})

app.listen(3000, ()=>{ console.log("Listening to port 3000")
})