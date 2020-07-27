const express = require('express')
const app = express()
const fs = require('fs');

app.use(express.static('public'))


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

app.get('/students/:studentID/:name?', function (req, res) {
  const { studentID, name } = req.params
  res.send(`<h1>about the student with id: ${studentID} with name of ${name}</h1>`)
})



app.get('/admin', function (req, res) {
  res.send('admin panel')
})

app.listen(3000, () => { console.log('App listen on port 3000') })