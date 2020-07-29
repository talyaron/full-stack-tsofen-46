const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))


const dictonary=[{hebrew:"שלום",arabic:"مرحبا"}];

app.post('/translateHebrewArabic', (req, res) => {
  const { body } = req;
  console.log(body)
  const { hebrew } = body;

  let result = false
  for (let word of dictonary){

    if (word.hebrew == hebrew) result = word.arabic
  }
      if(result==false){
        res.send({answer:"Word Not Found!!"})
      }
      else{
      res.send({ answer: result })
      }
    
})


app.post('/editWordHebrew', (req, res) => {
  const { body } = req;
  console.log(body)
  const { hebrew, arabic } = body;

  let result = false
  for (let word of dictonary){

    if (word.hebrew == hebrew){ 
        word.arabic=arabic;
         result=true;
    }
  }
      if(result){
        res.send({answer:"Edit meaning Successfully"})
      }
      else{
      
      res.send({ answer: "there's No Such a Word Like that" })
      }
    
})



app.post('/addNew', (req, res) => {
  const { body } = req;
  console.log(body)
  const { hebrew, arabic } = body;

  let result = false
  for (let word of dictonary){

    if (word.hebrew == hebrew) result = true
  }
      if(result){
        res.send({answer:"Word Already exist"})
      }
      else{
        dictonary.push({ hebrew: hebrew, arabic: arabic })
      res.send({ answer: "added Word Successfully " })
      }
    
})

app.listen(3000, () => { console.log("App is Listening on 3000") })
