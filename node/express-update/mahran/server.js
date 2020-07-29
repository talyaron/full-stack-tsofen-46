const express = require('express')
const app = express()

app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
  };
const menu = [
    { name: 'Hamburger', price: 25, ID: uid() },
    { name: 'Pizza', price: 15, ID: uid() },
    { name: 'Maclobe', price: 40, ID: uid() },
    { name: 'Rvioly', price: 15, ID: uid() },
    { name: 'Cola', price: 15, ID: uid() },
    { name: 'Ice lemonande', price: 15, ID: uid() },
  ]


//RERST api
app.get('/api/getMenu', function (req, res) {

  res.send(menu);
});

app.put('/api/updateMenu', function (request, response) {
let UserMsg = "";
  let itemPriceToUpdate = request.body;
  console.log(itemPriceToUpdate);
  for(let i=0; i<menu.length; i++) {
    console.log(menu[i].price);
    if(menu[i].name == itemPriceToUpdate.itemToUpdate) {
      menu[i].price = itemPriceToUpdate.itemPriceToUpdate;
      UserMsg = "The Product" + menu[i].name + "has been updated Successfuly!";
      console.log("Item found in Menu")
      break;
      
    } else {
      // do nothing
    }
  }
  response.send(UserMsg);
})


app.get('/admin', function (req, res) {
  res.send('admin panel')
})

app.listen(3000, () => { console.log('App listen on port 3000') })