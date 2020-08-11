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
{ photo: "https://media-cdn.tripadvisor.com/media/photo-s/0b/05/ba/47/pita-shawarma.jpg" ,name: 'Shawarma', price: 23,ID: uid() },
{ photo: "https://www.hiamag.com/sites/default/files/styles/ph2_960_600/public/recipe/6232206-303641575.jpg" ,name: 'Falafel', price: 50,ID: uid() },
{ photo: "https://kitchen.sayidaty.net/uploads/small/4b/4b67152b7e62ae05fa3ca56e0eb820bb_w750_h500.jpg" ,name: 'Kabab', price: 15,ID: uid() },
];


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
        // if(result){
        //   res.send({answer:"Edit price Successfully"})
        // }
        // else{
        
        // res.send({ answer: "there's No Such a product Like that" })
        // }
        res.send(menu);
  })


  app.delete('/delete-item', (req, res) => {
    const { id } = req.body;

    //find index of the element
    const index =menu.findIndex(item => item.ID === id);
    console.log(index);

    menu.splice(index,1)
    res.send(menu);
})

app.post('/addProduct', (req, res) => {
  const { body } = req;
  console.log(body)
  const {img,name,price } = body;

  let result = false
  for (let item of menu){

    if (item.photo == img) result = true
  }
      if(result){
      }
      else{
      menu.push( { photo:img,name:name, price: price ,ID:uid()} )
      
      }
    
})


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App listen on port',port) })






