const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(express.static('public'));



const menu = [
    { name: 'Hamburger', price: 25, ID: '1' },
    { name: 'Pizza', price: 15, ID: '2' },
    { name: 'Maclobe', price: 40, ID: '3' },
    { name: 'Rvioly', price: 15, ID: '4' },
    { name: 'Cola', price: 15, ID: '5' },
    { name: 'Ice lemonande', price: 15, ID: '6' },
]

app.get('/menu', function (req, res) {
    console.log(menu)
    res.send(menu)
})

//RERST api
app.put('/menu-update', function (req, res) {
    const { price, id } = req.body;

    //find index of the element
    const index =menu.findIndex(item => item.ID === id);
    console.log(index);

    menu[index].price=price;
    //check if name is in names

    // const new1= menu.find(Element => id); 
    // new1.price=price; 
    // menu.find(Element => id).price==price; 

    
    res.send( menu )
})



const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('App listen on port', port) })