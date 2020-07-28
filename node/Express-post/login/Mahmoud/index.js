const express = require('express')
const app = express()

app.use(express.static('public'))

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const Namess = [
  
 "Mahmoud",
 "Marshood",
 "Rawad",
 "Tal"

];

 
app.get('/names', function (req, res) {
  
  res.send(names)
})

app.post('/names', (req, res)=>{
  const {body} = req;
  const {name} = body;
 var found=false;

console.log("ma"+ name)
  for (i=0;i<=Namess.length;i++){
    if(Namess[i] == name)
    found=true;
    
  }

  if(found==true){
    res.send({success:true})}
  else{
    res.send({success:false})}
  
})


app.listen(3000, () => { console.log('App listen on port 3000') })