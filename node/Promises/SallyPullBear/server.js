const express = require('express')
const app = express()


const url = "mongodb+srv://sally:sally7118@cluster0.rdozv.mongodb.net/test";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))


const ShopClothes = mongoose.model('ShopClothes', {
  Url: String,
  price: Number,
  uid: String
});

const clothe1 = new ShopClothes({ Url: 'https://static.pullandbear.net/2/photos//2020/I/0/1/p/9391/312/629/9391312629_2_4_8.jpg?t=1596016881084&imwidth=563', price: 120, uid: uid() });
clothe1.save().then(() => console.log('first'));

const clothe2 = new ShopClothes({ Url: 'https://static.pullandbear.net/2/photos//2020/I/0/1/p/9244/330/612/02/9244330612_6_1_8.jpg?t=1596199279209&imwidth=563', price: 127, uid: uid() });
clothe2.save().then(() => console.log('second'));

const clothe3 = new ShopClothes({ Url: 'https://static.pullandbear.net/2/photos//2020/I/0/1/p/9394/301/807/02/9394301807_6_1_8.jpg?t=1596199282321&imwidth=563', price: 150, uid: uid() });
clothe3.save().then(() => console.log('third'));




/* 
const menu = [
    {name: 'https://static.pullandbear.net/2/photos//2020/I/0/1/p/9391/312/629/9391312629_2_4_8.jpg?t=1596016881084&imwidth=563',price: 169.99, ID: uid()},
    {name: 'https://static.pullandbear.net/2/photos//2020/I/0/1/p/9244/330/612/02/9244330612_6_1_8.jpg?t=1596199279209&imwidth=563',price: 89.90, ID: uid()},
    {name: 'https://static.pullandbear.net/2/photos//2020/I/0/1/p/9394/301/807/02/9394301807_6_1_8.jpg?t=1596199282321&imwidth=563',price: 99.90, ID: uid()},
    
  ]; */


function uid() {

  return '_' + Math.random().toString(36).substr(2, 9);
}



app.get('/getmenu', function (req, res) {
  ShopClothes.find({}, function (err, docs) {
    res.send(docs)
  })
});


app.put('/updateprice', (req, res, next) => {
  const { id, val } = req.body;
  console.log(val)
  ShopClothes.updateOne({ uid: id }, { price: val }, function (err, docs) {
    res.send(docs)
  })
})

app.post('/api/addClothe', async(request, response) => {
  //request com from the client
  const { url, price } = request.body;
  console.log(url)
  //check if name is in names

  const clothe4 = new ShopClothes({ Url: url, price: price, uid: uid() });
  await clothe4.save().then().catch(err=> console.log(err))
  clothe4.find({}).then(docs=>
    res.send(docs))
  


  //send response to client

})

app.put('/api/deleteTheClothe', (request, response) => {
  //request com from the client
  const { ItemId } = request.body;
  const index = menu.findIndex(item => item.ID === ItemId);
  console.log(index);
  if (index != -1) {
    menu.splice(index, 1)
  }
  response.send('Got a PUT request at user')
})




app.listen(3000, () => { console.log("App is Listening to 3000") })