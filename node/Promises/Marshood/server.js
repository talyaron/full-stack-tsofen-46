const express = require('express')
const app = express();
var path = require("path");
var http = require('http');
const fs = require("fs");// to read json file 
//npm init  --y
//npm i yargs
//npm install express
//
//
//
var bodyParser = require('body-parser');
const { isNull } = require('util');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use(express.static('public'));


var itemOnMarket = [

  { img: "c2RLAG7h_400x400.jpg", name: "BMW", Price: "100$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test2", Price: "10$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test3", Price: "500$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test4", Price: "20$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test5", Price: "200$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test6", Price: "250$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test7", Price: "50$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test8", Price: "27$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test9", Price: "100$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test11", Price: "5$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test22", Price: "10$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test33", Price: "10$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test44", Price: "1000$", quantity: "5", ID: uid() },
  { img: "c2RLAG7h_400x400.jpg", name: "test55", Price: "1001$", quantity: "5", ID: uid() }
]

var cart = []
function uid() {

  return '_' + Math.random().toString(36).substr(2, 9);
};
console.log(cart)
app.get('/getItems', function (req, res) {
  console.log("test server get menu")
  res.send(itemOnMarket)
})
app.put('/AddItem', function (req, res) {
  console.log("Adding...")
  var IDitem = req.body.id;
  var success = { success: false }
  // console.log("IDitem  " + IDitem)
  itemOnMarket.forEach(elem => {
    if (elem.ID == IDitem) {
      console.log("find it 1")
      elem.quantity = elem.quantity - 1;
      imgNew = elem.img;
      namNew = elem.name;
      PriceNew = elem.Price;
      IDNew = elem.ID;
      //console.log(itemOnMarket)
    }
  });
  let flag = 0;
  cart.forEach(elemCart => {
    if (elemCart.ID == IDitem) {
      console.log("find it on cart" + elemCart.quantity)
      elemCart.quantity = parseInt(elemCart.quantity) + 1;
      flag = 1;
    }
  });
  if (flag == 0) {
    console.log("adding first time")
    itemOnMarket.forEach(elem1 => {
      if (elem1.ID == IDitem) {
        //console.log("hola")
        cart.push({ img: elem1.img, name: elem1.name, Price: elem1.Price, quantity: "1", ID: elem1.ID });
        //console.log(cart)
      }
    });
  }

  console.log("Print Cart*******************************")
  cart.forEach(elemCart => {
    console.log(elemCart)
  });
  console.log("Print Items*******************************")
  itemOnMarket.forEach(elemCart => {
    //console.log(elemCart)
  });
  res.send("")

})
function isEmpty1(obj) {
  return Object.keys(obj).length === 0;
}
app.get('/checkCart', function (req, res) {
  var success = { success: false }
  //console.log((cart.length) + "   11112")
  // console.log("test")
  if (cart.length == 0) {
    success.success = true;
  }
  else {
    success.success = false;
  }
  res.send(success)


})

function clean(item) {
  for (var i = 0; i < item.length; i++) {
    if (item[i] === undefined || item[i] == "") {
      item.splice(i, 1);
      i--;
    }
  }

  return item;
};

app.put('/RemoveItem', function (req, res) {
  console.log("RemoveItem...")
  var IDitem = req.body.id;
  var ShowRemoveButt = { ShowRemoveButt: false }
  var i = 0
  //console.log(cart)

  cart.forEach(elemCart => {
    if (elemCart.ID == IDitem) {
      console.log("find it on cart to remove " + elemCart.quantity)
      if (elemCart.quantity > 1) {
        elemCart.quantity = parseInt(elemCart.quantity) - 1;
        itemOnMarket.forEach(elemCart => {
          if (elemCart.ID == IDitem)
            elemCart.quantity = parseInt(elemCart.quantity) + 1;
          //console.log(elemCart)
          ShowRemoveButt.ShowRemoveButt = true;
        });

      } else {
        delete cart[i];
        ShowRemoveButt.ShowRemoveButt = false
      }
      cart = clean(cart)
    }
    i++;
  });

  console.log("Print Cart*******************************")
  cart.forEach(elemCart => {
    console.log(elemCart)
  });
  // console.log("Print Items*******************************")
  itemOnMarket.forEach(elemCart => {
    //console.log(elemCart)
  });
  res.send(ShowRemoveButt)

})
app.get('/cartTableShow', function (req, res) {
  console.log("test server get cart")
  console.log(cart)
  res.send(cart)
})


app.put('/EditItem', function (req, res) {
  console.log("Edit ITem...")
  var success = { success: false }

  var IDitem = req.body.id;
  var NewIMG = req.body.NewIMG;
  var NewName = req.body.NewName;
  var NewPrice = req.body.NewPrice;
  var NewQuantity = req.body.NewQuantity;
   //console.log(cart)

  cart.forEach(elemCart => {
    if (elemCart.ID == IDitem) {
        
        // elemCart.img=NewIMG;
        elemCart.name=NewName;
        elemCart.Price=NewPrice;
        elemCart.quantity=NewQuantity;
       }});

       itemOnMarket.forEach(elemMarket => {
        if (elemMarket.ID == IDitem) {
            
             //elemMarket.img=NewIMG;
            elemMarket.name=NewName;
            elemMarket.Price=NewPrice;
            elemMarket.quantity=NewQuantity;
           }});
           res.send(success)

})
//*********/
app.listen(3000, () => { console.log("App is Listening") })
