console.log("hello");

const express=require('express')
const app=express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'))



const games =[
{ }
"DAS VS DAFAF",
"SDASDA VS DASDD",
"DASFGAD VS AFEGAEG",
"DAS VS DAFAF",
"SDASDA VS DASDD",
"DASFGAD VS AFEGAEG",
    
   
];




    
    
 
app.listen(3000,()=>{console.log('App listen on port 3000')})