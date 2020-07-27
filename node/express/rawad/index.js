const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello rawadd')
})

app.get('/about', function(req,res){
    res.send('about me')

})
app.get('/students/:studentid/name', function(req,res){
  const {studentid,name}=req.params
    res.send(`about the students:" ${studentid} sd ${name}`)

})
app.get('/admin', function(req,res){
    res.send('admain admain')

})

 
app.listen(3100, ()=>{console.log('App listen on port 3100')})