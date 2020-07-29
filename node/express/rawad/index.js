const express = require('express')
const app = express()
const fs = require('fs');

 


app.use(express.static('public'))

// app.get('/', function (req, res) {
//   res.send('Hello rawadd')
// })

// app.get('/about', function(req,res){
//   fs.readFile('./html.html', { encoding: 'utf-8' }, (err, data) => {
//     try {
//       if (err) { throw err }
//       res.send(data.toString());
//     } catch (err) {
//       console.error(err)
//       res.status(404).send('Not found')
//     }

//   })

// })


// app.get('/students/:studentid/:name?', function(req,res){
//   const {studentid,name}=req.params
//     res.send(`about the students:" ${studentid} sd ${name}`)

// })
// app.get('/admin', function(req,res){
//     res.send('admain admain')

// })

 
app.listen(3100, ()=>{console.log('App listen on port 3100')})