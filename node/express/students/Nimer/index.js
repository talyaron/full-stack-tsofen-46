const express = require('express')
const app = express()
 
app.use(express.static('public'))


app.get('/about/:studentId?/:name?',function (req,res){
    const {studentId,name} = req.params;
    console.log(studentId,name);
    if(studentId == undefined){
        res.send(`name is ${name}`)
    }
    if(name == undefined){
        res.send(`studentId is ${studentId}`)
    }
    else {
        res.send(`studentId is ${studentId} name: ${name}`)
    }
    
    })
 
app.listen(3006, ()=>{console.log('App listen on port 3006')})