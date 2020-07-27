const express = require('express')
const app = express()
const fs = require('fs');
 
app.get('/', function (req, res) {
  res.send('Hello To express npm')
})

app.get('/about', function (req, res) {

  fs.readFile('./index.html', { encoding: 'utf-8' }, (err, data) => {
    try {
      if (err) { throw err }
      res.send(data.toString());
    } catch (err) {
      console.error(err)
      res.status(404).send('Not found')
    }

  })

});

app.get('/students/:studentID/:name', function (req, res) {
  const { studentID, name } = req.params
  res.send(`about the student with id: ${studentID} with name of ${name}`)
})

app.listen(3000, ()=>{console.log('App listen on port 3000')})