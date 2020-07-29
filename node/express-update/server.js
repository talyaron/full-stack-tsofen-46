const express = require('express')
const app = express()

app.use(express.static('public'));



//RERST api
app.get('/students', function (req, res) {
  console.log(students)
  res.send(students)
})



app.get('/admin', function (req, res) {
  res.send('admin panel')
})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App listen on port',port) })