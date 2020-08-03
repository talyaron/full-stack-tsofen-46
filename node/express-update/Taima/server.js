const express = require('express');
const app = express();


var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));




//RERST api

const menu = [
  { name: 'Hamburger', price: 25, ID: uid(), newName: inputNameFunc()},
  { name: 'Pizza', price: 15, ID: uid(), newName: inputNameFunc()},
  { name: 'Pizza', price: 15, ID: uid(), newName: inputNameFunc()},
  { name: 'Maclobe', price: 40, ID: uid(), newName: inputNameFunc()},
  { name: 'Rvioly', price: 15, ID: uid(), newName: inputNameFunc()},
  { name: 'Cola', price: 15, ID: uid(), newName: inputNameFunc()},
  { name: 'Ice lemonande', price: 15, ID: uid(), newName: inputNameFunc()}
]

function uid() {

  return '_' + Math.random().toString(36).substr(2, 9);
};

function inputNameFunc(){
  return 134;
}

app.get('/menu', function (req, res) {
  console.log(menu)
  res.send(menu)
})


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App listen on port',port) })