const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'));

const users = [
   {email: "1@gmail.com", pass:"1"},
   {email: "12@gmail.com", pass:"12"} ,
   {email: "123@gmail.com", pass:"123"},
   {email: "1234@gmail.com", pass:"1234"},
   
  ];
 
app.get('//users', function (req, res) {
  
  res.send(users)
})




 
app.listen(3000, ()=>{console.log("App is Listening to 3000")})
