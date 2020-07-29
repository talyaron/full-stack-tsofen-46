const express = require('express')
const app = express()

app.use(express.static('public'))

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const Emails = [
  { email: "Mahmoud.ataria@gmail.com", pass: "1234" },
  { email: "Marshood.ayoup@gmail.com", pass: "123" },

];


app.get('/names', function (req, res) {

  res.send(names)
})

app.post('/names', (req, res) => {
  const { body } = req;
  const { name } = body;
  const { Psw } = body;
  var found = false;


  for (i = 0; i < Emails.length; i++) {
    if (Emails[i].email == name && Emails[i].pass == Psw) {
      found = true;
    }
  }

  if (found == true) {
    res.send({ success: true })
  }
  else {
    res.send({ success: false })
  }

})

app.post('/register', (req, res) => {
  const { body } = req;
  const { name } = body;
  const { Psw } = body;
  


  Emails.push({ email: name, pass: Psw })
  res.send({ answer: "Regsiter Completed" })
  

})


app.listen(3000, () => { console.log('App listen on port 3000') })