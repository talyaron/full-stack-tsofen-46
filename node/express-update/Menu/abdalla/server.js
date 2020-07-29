const express = require('express')
const app = express()

app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
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


function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
};

app.get('/firstmenu', function (req, res) {
    res.send({menu});
})


app.put('/menu', (req, res) => {
    const { newprice } = req.body;
    const { itemID } = req.body;

    const index = menu.findIndex(item => item.ID === itemID);
    menu[index].price = newprice;

    console.log(menu)

    res.send({menu});

})




const port = process.env.PORT || 3008;
app.listen(port, () => { console.log('App listen on port', port) })