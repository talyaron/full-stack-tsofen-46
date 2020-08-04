const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const shawarmaList = [
    { name: 'עגל', src: "/img/egel.jpg", price: 25 },
    { name: 'הודו', src: "/img/hodo.jpg", price: 30 },
    { name: 'עוף', src: "/img/oof.jpg", price: 20 }

]

app.get('/api/shawarmaList', (req, res) => {
    res.send(shawarmaList)
})

app.put('/updatePrice', function (req, res) {
    const { body } = req;
    const { name, newPrice } = body;
    const new1 = shawarmaList.find(Element => Element.name === name);
    new1.price = newPrice;
    res.send(shawarmaList)
})

app.put('/deleteItem', function (req, res) {
    const { body } = req;
    const { name } = body;
    let idx = shawarmaList.map(function (e) { return e.name; }).indexOf(name);
    shawarmaList.splice(idx, 1);
    res.send(shawarmaList)
})

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const priceA = a.price;
    const priceB = b.price;

    let comparison = 0;
    if (priceA > priceB) {
        comparison = 1;
    } else if (priceA < priceB) {
        comparison = -1;
    }
    return comparison;
}



app.put('/sort', function (req, res) {
    shawarmaList.sort(compare);
    res.send(shawarmaList)
})

app.put('/addElement', function (req, res) {
    const { body } = req;
    const { newImg, newPrice, newName } = body;
    let newObj = { name: newName, src: newImg, price: parseInt(newPrice) }
    shawarmaList.push(newObj);
    res.send(shawarmaList)
})



app.listen(3000, () => { console.log("App is Listening to 3000") })




