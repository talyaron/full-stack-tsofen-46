const express = require('express')
const app = express()
const fs = require('fs');


app.use(express.static('public'));


app.get('/', function (req, res) {
  res.send('Home')
})
 
app.get('/about', function (req, res) {
  fs.readFile('./indext.html',{encoding:'utf-8'},(err,data)=>{
    try{
      res.send(data.toString());
    }catch(err){
      console.error(err);
      res.status(404).send('Not found');
    }
  })
})

app.get('/students', function (req, res) {
  res.send('About student')
})

app.get('/Admin', function (req, res) {
  res.send('About Admin')
})

app.get('/Studentd/:studentID/:name', function (req, res) {
  const {studentID, name} = req.params
  console.log(studentID, name)
  res.send(`<h1>about the student with id: ${studentID} with name of ${name}</h1>`);
})

app.listen(3000, ()=>{console.log('App listen on port 3000')})