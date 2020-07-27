const express = require('express')
const app = express()
const fs = require('fs');

app.use(express.static('public'))
 

app.get('/', function (req, res) {
  res.send('Hello jeries')
})




app.get('/students/:studentId/:name', function (req, res) {
    const {studentId , name} = req.params
    res.send(`Id :  ${studentId} and his name : ${name}`)
  })
  app.get('/about/:id', function (req, res) {
      const {id}=req.params
      if(id=="10")
         res.send('hello admin')
        else {
            res.send(`hello id : ${id}`)
        }
  })
  app.get('/admin', function (req, res) {
    res.send('Hello admin')
  })

app.listen(3001, ()=>{console.log('App listen on port 3000')})