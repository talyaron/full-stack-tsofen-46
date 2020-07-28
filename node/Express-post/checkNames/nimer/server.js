const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));

const names = [
    "Lina",
   "monera",
   "Mahmoud",
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


app.post('/checkNames', (req, res)=>{
    const { body } = req;
    console.log(body)
    const {name} = body;
    let valid= false;
    names.forEach(nameInArray =>{
        if(nameInArray == name)
            valid = true;
        
    } )
    
    console.log(valid);
    res.send({
      success: true,
      answer: valid
    })
  })








app.listen(3002, () => { console.log("Server is Listening on port 3001") })