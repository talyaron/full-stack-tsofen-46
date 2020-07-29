const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'));


function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
  };
const menu =[
{ name: 'molkhyee', price: 23,ID: uid() },
{ name: 'sabanekh', price: 50,ID: uid() },
{ name: 'mjadara', price: 15,ID: uid() },
{ name: 'lobyee', price: 18,ID: uid() },
{ name: 'bamyee', price: 19,ID: uid() }];


app.get('/menu', function (req, res) {
    console.log(menu)
    res.send(menu)
  })


  app.put('/editMenuPrice', (req, res) => {
    const { body } = req;
    console.log(body)
    const { price, id } = body;
  
    let result = false
    for (let item of menu){
  
      if (item.ID == id){ 
          item.price=price;
          result=true;
      }
    }
        if(result){
          res.send({answer:"Edit price Successfully"})
        }
        else{
        
        res.send({ answer: "there's No Such a product Like that" })
        }
      
  })



const port = process.env.PORT || 3500;
app.listen(port, () => { console.log('App listen on port',port) })






