const express = require('express')
const app = express()
const mongoose = require('mongoose');

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://morad:698532741mm@cluster0.89onk.mongodb.net/test";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const item = mongoose.model('Item', {
    uid: String,
    image: String,
    price: Number,
    name: String
});

item.createCollection().then(function (collection) {
    console.log("inserted");
})

ShopItems = [{
    id: uid().toString(), image: "https://cdn.motor1.com/images/mgl/oemzp/s1/2020-ferrari-812-gts.jpg"
    , price: 10, name: "bugati"
}, {
    id: uid().toString(), image: "https://i.ytimg.com/vi/PkkV1vLHUvQ/maxresdefault.jpg", price: 20,
    name: "ferrari"
}]

//item.deleteMany({ name: /bugati/,name : /ferrari/ } , function(err,docs){})
addItemToDb();
function addItemToDb() {
    item.find({}, function (err, docs) {
        let listToInsert = [];
        ShopItems.forEach(item => {
            let found = false;
            docs.forEach(doc => {
                if (item.name === doc.name) {
                    found = true;
                }
            });
            console.log(found)
            if (!found) {
                listToInsert.push(item);
            }
        })
        item.insertMany(listToInsert, function (err, docs) {
            if (err) {
                return console.error(err);
            } else {
                console.log("Multiple documents inserted to Collection Items");
            }
        });

    })
}

app.put('/api/addItem', (req, res) => {
    const { imageUrl, itemName, itemPrice } = req.body;
    ShopItems.push({ id: uid(), image: imageUrl, price: itemPrice, name: itemName });
    addItemToDb()
    res.send({ added: true });
})

app.get('/api/getShopItems', (req, res) => {
    item.find({},function(err, params) {
        res.send(params);
    })
    
})
app.put('/api/updatePrice', (req, res) => {
    const { itemId, newPrice } = req.body;
    let changed = false;
    ShopItems.forEach(item => {
        if (item.id === itemId) {
            let newPriceInt = parseInt(newPrice)
            item.price = newPriceInt;
            changed = true;
        }
    });
    console.log(ShopItems)
    res.send({ changed: changed });

})

//get Hmburger;
function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
};

app.put('/api/deleteItem', (req, res) => {
    const itemId = req.body.itemId;
    ShopItems.forEach(item => {
        if (item.id === itemId) {
            const index = ShopItems.indexOf(item);
            ShopItems.splice(index, 1)
            deleted = true;
        }
    })
    console.log(ShopItems)
    res.send({ deleted: deleted });
})

app.get('/api/orderByPrice/', (req, res) => {
    let SortedShopItems = [];
    let minIndex = 0;
    while (ShopItems.length > 0) {
        let i = 0;
        if (ShopItems.length === 1) {
            minIndex = 0;
        }
        while (i < ShopItems.length - 1) {
            if (ShopItems[i].price < ShopItems[i + 1].price) {
                minIndex = i;
            } else {
                minIndex = i + 1;
            }
            i++;
        }
        SortedShopItems.push(ShopItems[minIndex]);
        ShopItems.splice(minIndex, 1);
    }
    ShopItems = SortedShopItems
    res.send(ShopItems)
})
app.listen(3000, () => { console.log("App is Listening to 3000") })

