console.log("hello");

const express=require('express')
const app=express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'))




    const menu = [
        { name: 'Hamburger', price: 25, ID: uid() },
        { name: 'Pizza', price: 15, ID: uid() },
        { name: 'Maclobe', price: 40, ID: uid() },
        { name: 'Rvioly', price: 15, ID: uid() },
        { name: 'Cola', price: 15, ID: uid() },
        { name: 'Ice lemonande', price: 15, ID: uid() },
      ]
  
       //get Hmburger;
       function uid() {

        return '_' + Math.random().toString(36).substr(2, 9);
      };

      app.get('/menu', function (req, res) {
        console.log(menu)
        res.send(menu)
      })

      
app.put('/updet', (req, res)=>{
    const {body} = req;
    const itemId = body.itemID;
    const itemprice =body.itemnewprice;
    console.log(itemprice);

       
    const index = menu.findIndex(item => item.ID === itemId);

    if (index > -1) {
      //update to zero
     console.log(menu[index].price)
     menu[index].price=itemprice;

    }

    
    
    


  })
   




    
    
 
app.listen(3000,()=>{console.log('App listen on port 3000')})