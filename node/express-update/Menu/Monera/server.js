const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

/*//RERST api
app.get('/students', function (req, res) {
  console.log(students)
  res.send(students)
})

app.get('/menu')

app.get('/admin', function (req, res) {
  res.send('admin panel')
})*/

const menu = [
    { name: 'hamburger', price: 25, ID: uid() , },
    { name: 'pizza', price: 15, ID: uid() },
    { name: 'maklobe', price: 40, ID: uid() },
    { name: 'ravioly', price: 15, ID: uid() },
    { name: 'cola', price: 7, ID: uid() },
    { name: 'ice leonade', price: 15, ID: uid() }
]

//get hamburger with unique ID to know which hamburger to change
function uid() {
    return '_' + Math.random().toString(36).substr(2, 9);
};
app.get('/menu', function (req, res) {
    res.send(menu);
})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App listen on port', port) })