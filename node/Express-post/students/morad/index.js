const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static('public'))

var namesPassword = []

app.post('/register', (req, res)=>{
    const {body} = req;
    const {name,password} = body;
    let found = false
    for(let i = 0; i< namesPassword.length; i++){
        if(namesPassword[i].name === name){
            found = true;
        }
    }
    if(found){
        res.send({success : false});
    }else{
        namesPassword.push({name,password});
        res.send({success : true});
    }
})
app.post('/login' , (req,res)=>{
    const {body} = req;
    const {name,password} = body;
    let found= false;
    namesPassword.forEach(user => {
        if(user.name === name && user.password === password)
        found = true;
        })
    console.log(found)
    if(found){
        res.send({success : true});
    }
    else{
        res.send({success : false});
    }

})
  app.listen(3000, () => { console.log('App listen on port 3000') })