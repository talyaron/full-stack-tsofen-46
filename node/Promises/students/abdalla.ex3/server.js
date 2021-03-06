const express = require('express')
const app = express()

app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const resturant = [
    { name: 'Hamburger', img: 'https://www.kingsford.com/wp-content/uploads/2014/11/kfd-howtohamburger-Burgers_5_0391-1024x621.jpg', price: 25, ID: uid() },
    { name: 'mnsaf', img: 'https://www.tareekaa.com/wp-content/uploads/2014/12/%D9%85%D9%86%D8%B3%D9%811.jpg', price: 15, ID: uid() },
    { name: 'Maclobe', img: 'https://kitchen.sayidaty.net/uploads/small/36/36fb0116ed3b918c96f3b1f3b3f1c333_w750_h750.jpg', price: 40, ID: uid() },
    { name: 'Cola', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Coca-Cola_Glas_mit_Eis.jpg/280px-Coca-Cola_Glas_mit_Eis.jpg', price: 15, ID: uid() },
    { name: 'Knafe', img: 'https://turkishfoodchef.com/wp-content/uploads/2018/09/Knafeh-Kunefe-10.jpg', price: 15, ID: uid() }

]



function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
};


const url = "mongodb+srv://abdalla1:abdalla99@cluster0.s25z3.mongodb.net/resturant";

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Item = mongoose.model('Item', {
    name: String,
    img: String,
    price: Number
});

const item1 = new Item({ name: 'Hamburger', img: 'https://www.kingsford.com/wp-content/uploads/2014/11/kfd-howtohamburger-Burgers_5_0391-1024x621.jpg', price: 25 });
const item2 = new Item({ name: 'mnsaf', img: 'https://www.kingsford.com/wp-content/uploads/2014/11/kfd-howtohamburger-Burgers_5_0391-1024x621.jpghttps://www.tareekaa.com/wp-content/uploads/2014/12/%D9%85%D9%86%D8%B3%D9%811.jpg', price: 30 });
const item3 = new Item({ name: 'maqlobe', img: 'https://kitchen.sayidaty.net/uploads/small/36/36fb0116ed3b918c96f3b1f3b3f1c333_w750_h750.jpg', price: 36 });



app.get('/resturant1', (req, res) => {
    Item.find({}, function (err,docs) {
        console.log(docs)
        res.send({resturat:docs})
    })
} )
    


app.put('/resturant2', (req, res) => {
    const { newprice } = req.body;
    const { itemID } = req.body;

    const index = resturant.findIndex(item => item.ID === itemID);

    resturant[index].price = newprice;


    res.send({ resturant });

})

app.put('/resturant3', (req, res) => {
    const { itemID } = req.body;

    const index = resturant.findIndex(item => item.ID === itemID);


    if (index != -1) {
        resturant.splice(index, 1)
    }

    res.send({ resturant });

})

app.put('/resturant4', (req, res) => {
    const { itemID } = uid();
    const { newprice } = req.body;
    const { newimg } = req.body;


    resturant.push({ name: 'newMeal', img: newimg, price: newprice, ID: itemID });

    res.send({ resturant });

})





app.put('/resturant5', (req, res) => {

    // const {resturant}=req.body;

    resturant.sort(function (a, b) { return a.price - b.price });

    res.send({ resturant });

})



app.listen(3000, () => { console.log("App is Listening") })



;


