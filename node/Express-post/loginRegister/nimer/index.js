const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))

const users = []

app.post('/register', (req, res) => {
  const { body } = req;
  console.log(body)
  const { email, password } = body;

  let result = false
  for (let user of users){

    if (user.email == email) result = true
  }
      if(result){
        res.send({answer:"register not completed user exist"})
      }
      else{
      users.push({ email: email, password: password })
      res.send({ answer: "Regsiter Completed" })
      }
    
})

app.post('/logIn', (req, res) => {
  const { body } = req;
  console.log(body)
  const { email, password } = body;

  let result = false
  for (let user of users){

    if (user.email == email) 
      if(user.password==password)
         result=true;
  }
      if(result){
        res.send({answer:"logged in"})
      }
      else{
      
      res.send({ answer: "wrong info" })
      }
    
})

app.listen(3005, () => { console.log("App is Listening on 3000S") })