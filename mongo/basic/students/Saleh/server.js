const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://saleh:saleh1996@cluster0.kpqta.mongodb.net/first";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Item = mongoose.model('item', {
    image: String,
    price: Number
});


const img1 = new Item({ image: "images/img1.jpg", price: 55 })
const img2 = new Item({ image: "images/img2.jpg", price: 33 })
const img3 = new Item({ image: "images/img3.jpg", price: 12 })


// let menu = [
//     {img:"images/img1.jpg", price:55},
//     {img:"images/img2.jpg", price:33},
//     {img:"images/img3.jpg", price:12},

// ];


// img1.save().then(console.log("img1"))
// img2.save().then(console.log("img2"))
// img3.save().then(console.log("img3"))

let cart = { count: 0, sum: 0 };


app.get('/getmenu', function (req, res) {

    Item.find({}).then(docs => { res.send({ menu: docs }) })
    // console.log("yousef was here !!!!!!!!!!")
    // console.log(menu)
    // res.send({ menu })
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

app.post('/removefrommenu', async (req, res) =>{
    const { body } = req;
    const { itemId } = body;
    console.log(itemId)
    await Item.deleteOne({ _id: itemId })
    Item.find({}).then(docs => {
        res.send({ menu: docs })
    })
})



app.post('/addtomenu', async (req, res) => {
    const { body } = req;
    const { price } = body;
    const { image } = body;

    const itm = new Item({ image: image, price: price })
    await itm.save()

    Item.find({}).then(docs =>
        res.send({ menu: docs })
    )
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