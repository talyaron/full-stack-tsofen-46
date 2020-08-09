const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))


let menu = [
    { img: "images/img1.jpg", price: 55, id: 1 },
    { img: "images/img2.jpg", price: 33, id: 2 },
    { img: "images/img3.jpg", price: 12, id: 3 },

];

let cart = { count: 0, sum: 0 };


app.get('/getmenu', function (req, res) {
    res.send({ menu })
})

app.post('/change55', (req, res) => {
    menu.forEach(item => item.price = 55)
    res.send({ menu: menu })
})


app.post('/addtocart', function (req, res) {
    const { body } = req;
    const { itemId } = body;
    console.log(itemId);

    const index = menu.findIndex(item => item.id == itemId);
    cart.count += 1;
    cart.sum += menu[index].price;
    console.log(cart.sum);

    res.send({ count: cart.count, total: cart.sum })
})

app.post('/removefromcart', function (req, res) {
    const { body } = req;
    const { itemId } = body;
    console.log(itemId)

    const index = menu.findIndex(item => item.id == itemId)
    console.log(index)
    cart.count -= 1;
    cart.sum -= menu[index].price;
    console.log(cart.sum);
    res.send({ count: cart.count, total: cart.sum })
})

app.post('/removefrommenu', function (req, res) {
    const { body } = req;
    const { itemId } = body;
    console.log(itemId)

    const index = menu.findIndex(item => item.id == itemId)
    if (index > -1) {
        menu.splice(index, 1)
    }
    res.send({ menu })
})

app.post('/addtomenu', function (req, res) {
    const { body } = req;
    const { price } = body;
    const { image } = body;
    const { id } = body;

    menu.push({ img: image, price: price, id: id })
    console.log(menu)
    res.send({ menu })
})

app.post('/sort', function (req, res) {
    menu.sort(compare)
    res.send({ menu })
})

function compare(a, b) {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
}


app.listen(3000, () => { console.log("App is Listening to 3000") })