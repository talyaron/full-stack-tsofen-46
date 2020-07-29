const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
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

app.post('/reaction', (req, res)=>{
    const { body } = req;
    const { name } = body;
    console.log(name)
    
    isValid=names.includes(name);
    res.send({isExits:isValid})
   
 })









app.listen(3000, () => {
    console.log("running in port 3000")
})