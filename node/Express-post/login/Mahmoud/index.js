const express = require('express')
const app = express()

app.use(express.static('public'))

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const Emailes = [
  
 "Mahmoud.ataria95@gmail.com",
 "Marshood.ayoup@gmail.com",
 
];

 
app.get('/names', function (req, res) {
  
  res.send(names)
})

app.post('/names', (req, res)=>{
  const {body} = req;
  const {name} = body;
 var found=false;


  for (i=0;i<=Emailes.length;i++){
    if(Emailes[i] == name)
    found=true;
    
  }

  if(found==true){
    res.send({success:true})}
  else{
    res.send({success:false})}
  
if(name=='')
{
  res.send({'You need to enter your E-mail'})}
}

})


app.listen(3000, () => { console.log('App listen on port 3000') })