const express = require('express')
const app = express()

const url = "mongodb+srv://jeries:g1g2g3g4g5@cluster0.sb6dm.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(express.static('public'));
function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const menuDb = mongoose.model('menuDb', {
    name: String,
    price:Number , 
    ID:String,
    color:String,
    type:String
});

menuDb.find({price:{$gte:2400}}).then(docs=>{console.log(docs)})    
menuDb.updateOne({name:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQleML32Q1c1cZZjTNPe1i9-55a7mzo2KRKREk7vfP8FJh1431XThKwsUNknIc53qxdGq6PJfsb&usqp=CAc'},{price:25000}).then(doc=>{
    
})

const admins = [ { name:'jeries' , password:'1234' } ,
                 { name:'tal'    , password:'1111' } 
               ]

app.get('/menu', (req, res) => {
    menuDb.find({},function(err,menu){
        res.send(menu)
    })
})

app.get('/menu-sorted', (req, res) => {

    menuDb.find({},function(err,menu){
        res.send(menu)
    })
})


              
app.get('/admin', (req, res) => {
    menuDb.find({},function(err,menu){
        res.send(menu)
    })
})

app.post('/login-admin', function (req, res) {
    const { name, password } = req.body;
  
    let validAdmin=false;
    for (let i=0 ; i<admins.length ; i++){
        if(admins[i].name==name && admins[i].password==password){
            validAdmin=true;
        }
    }
    

    res.send({validAdmin:validAdmin})
})

app.put('/menu-update', function (req, res) {
    const { price, id } = req.body;

    //find index of the element
    //const index =menuDb.findIndex(item => item.ID === id);
    
    //console.log(index);
    menuDb.updateOne({ID:id},{price:price}).then(doc=>{
    
    })
    
  //  menuDb[index].price=price;
    
    //check if name is in names

    // const new1= menu.find(Element => id); 
    // new1.price=price; 
    // menu.find(Element => id).price==price; 
    res.send( menuDb )
})


app.delete('/delete-item', function (req, res) {
    const { id } = req.body;

    //find index of the element
    //const index =menuDb.findIndex(item => item.ID === id);
   // console.log(index);

    //menu.splice(index,1)
    //check if name is in names

    // const new1= menu.find(Element => id); 
    // new1.price=price; 
    // menu.find(Element => id).price==price; 

    menuDb.deleteOne({ ID: id }, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
      });    
      res.send( menuDb )
})

app.listen(3000 , ()=> {
    console.log("Port is running in 3000")
})

app.post('/addProduct', (req, res) => {
    const { body } = req;
    console.log(body)
    const {img,price,color,type } = body;
  
   /* let result = false
    for (let item of menu){
  
      if (item.name == img) result = true
    }
        if(result){
        }*/
        
            let newProduct=new menuDb ( { name:img, price: price ,ID:uid(),color:color,type:type} )
            newProduct.save().then(() => console.log("Added"));
        
      
  })
  