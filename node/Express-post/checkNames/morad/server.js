const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static('public'))

const names = [
  "moran",
  "monera",
   "nivin",
 "nimer",
 "sizar",
 "jeries",
 "morad",
 "rawad",
 "omri",
 "saleh",
 "taimaa",
 "abdallah",
 "yousef",
 "marshood",
 "Rami",
 "Maharn",
 "sally"
];

app.post('/searchName', (req, res)=>{
    const {body} = req;
    const {name} = body;
    let found = false;
    console.log(name)
    for(let i = 0; i < names.length; i++){
        if(names[i] === name){
            found = true;
        }
    }
    if(found === true){
        res.send({success:true})
    }else{
        res.send({success:false})
    }
  })

  app.listen(3000, () => { console.log('App listen on port 3000') })