const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
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
]

// app.get('/name', function (req, res) {
  
//     res.send(names)
//   })

  app.post('/name', (req, res)=>{
    const {body} = req;
    const {name} = body;
    names.forEach(element => {
        var result = element.localeCompare(name)
        if(!result)
        {
            console.log(element)
            
        }
        res.send({success:true})
    });
  

    
})


app.listen(3000, ()=>{console.log("App is Listening")})