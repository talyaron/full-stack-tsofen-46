const express = require('express')
const app = express()

app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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

//RERST api
app.get('/menu', function (req, res) {
  res.send(menu)
})

app.put('/edit', (req, res)=>{
   
    const {itemId,newPrice} = req.body;
    let found = false;
    menu.forEach(menuItem => {
        if(menuItem.ID === itemId){
            found = true;
            menuItem.price = newPrice;
        }
    })
    if(found){
        res.send({updated : true})
    }else{
        if(!found){
            res.send({updated : false})
        }
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App listen on port',port) })