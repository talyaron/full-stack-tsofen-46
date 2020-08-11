const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://Yousef:5DITEwKxJ0hWLJPH@cluster0.rpovv.mongodb.net/FirstDB";

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Items = mongoose.model('Items', {
    name: String,
    src: String,
    price: Number
});


const shawarmaList = [
    { name: 'עגל', src: "/img/egel.jpg", price: 25 },
    { name: 'הודו', src: "/img/hodo.jpg", price: 30 },
    { name: 'עוף', src: "/img/oof.jpg", price: 20 }

]

// Items.insertMany(shawarmaList, function (err, docs) {
//     if (err) {
//         return console.error(err);
//     } else {
//         console.log("Multiple documents inserted to Collection Items");
//     }
// });





app.get('/api/shawarmaList', (req, res) => {
    Items.find({},function(err,docs){
        res.send(docs)
    })
})

app.put('/updatePrice', function (req, res) {
    const { body } = req;
    const { name, newPrice } = body;
    Items.updateOne({name:name} , {price:newPrice},function(err,docs){
        res.send(docs)
    })
    
})

// app.put('/deleteItem', function (req, res) {
//     const { body } = req;
//     const { name } = body;
//     let idx = shawarmaList.map(function (e) { return e.name; }).indexOf(name);
//     shawarmaList.splice(idx, 1);
//     res.send(shawarmaList)
// })

// function compare(a, b) {
//     // Use toUpperCase() to ignore character casing
//     const priceA = a.price;
//     const priceB = b.price;

//     let comparison = 0;
//     if (priceA > priceB) {
//         comparison = 1;
//     } else if (priceA < priceB) {
//         comparison = -1;
//     }
//     return comparison;
// }



// app.put('/sort', function (req, res) {
//     shawarmaList.sort(compare);
//     res.send(shawarmaList)
// })

// app.put('/addElement', function (req, res) {
//     const { body } = req;
//     const { newImg, newPrice, newName } = body;
//     let newObj = { name: newName, src: newImg, price: parseInt(newPrice) }
//     shawarmaList.push(newObj);
//     res.send(shawarmaList)
// })



app.listen(3000, () => { console.log("App is Listening to 3000") })




