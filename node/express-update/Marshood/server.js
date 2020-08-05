const express = require('express')
const app = express();
var path = require("path");
var http = require('http');
//npm init  --y
//npm i yargs
//npm install express
//
//
//
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(express.static('\public'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/html")));
var menu = [
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
app.put('/UpdatePrice', function (req, res) {
    console.log("UpdatePrice...")
     dic.forEach(elem => {
        //console.log(elem)
    });
    var success = { success: false }

    res.send({ toreturn: toreturn })

})

app.get('/getMenu', function (req, res) {
    console.log("test server get menu")
    res.send(menu)
  })


app.listen(3000, () => { console.log("App is Listening") })
