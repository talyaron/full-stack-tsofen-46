const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://lina:linanijem1@cluster0.mzrxp.mongodb.net/test";

//connection with DB
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

//Table
const Skins = mongoose.model('Skins', {
  name: String,
  skin: String,
  img: String,
  price: String
});

////////////////////////////////////////////


// const champions = [
//   { name: 'Annie', skin:'annie', img:'img/annie/annie.jpg', price:'50 $' },
//   { name: 'Annie', skin:'frostfire_annie', img:'img/annie/frostfire_annie.jpg', price:'50 $' },
//   { name: 'Annie', skin: 'goth_annie', img: 'img/annie/goth_annie.jpg', price: '50 $' },
//   { name: 'Annie', skin: 'panda_annie', img: 'img/annie/panda_annie.jpg', price: '50 $' },
//   { name: 'Annie', skin: 'red_riding_annie', img: 'img/annie/red_riding_annie.jpg', price: '50 $' },
//   { name: 'Lux', skin: 'Lux', img: 'img/lux/lux.jpg', price: '50 $' },
//   { name: 'Lux', skin: 'LunarEmpressLux', img: 'img/lux/LunarEmpressLux.jpg', price: '50 $' },
//   { name: 'Lux', skin: 'ImperialLux', img: 'img/lux/ImperialLux.jpg', price: '50 $' },
//   { name: 'Lux', skin: 'ElementalistLux', img: 'img/lux/ElementalistLux.jpg', price: '50 $' },
//   { name: 'Lux', skin: 'SorceressLux', img: 'img/lux/SorceressLux.jpg', price: '50 $' },
//   { name: 'Leblanc', skin: 'Leblanc', img: 'img/Leblanc/Leblanc.jpg', price: '50 $' },
//   { name: 'Leblanc', skin: 'CovenLeblanc', img: 'img/Leblanc/CovenLeblanc.jpg', price: '50 $' },
//   { name: 'Leblanc', skin: 'MistletoeLeblanc', img: 'img/Leblanc/MistletoeLeblanc.jpg', price: '50 $' },
//   { name: 'Leblanc', skin: 'RavenbornLeblanc', img: 'img/Leblanc/RavenbornLeblanc.jpg', price: '50 $' },
//   { name: 'Leblanc', skin: 'WickedLeblanc', img: 'img/Leblanc/WickedLeblanc.jpg', price: '50 $' },
//   { name: 'MissFortune', skin: 'MissFortune', img: 'img/MissFortune/MissFortune.jpg', price: '50 $' },
//   { name: 'MissFortune', skin: 'CandyCaneMissFortune', img: 'img/MissFortune/CandyCaneMissFortune.jpg', price: '50 $' },
//   { name: 'MissFortune', skin: 'SecretAgnetMissFortune', img: 'img/MissFortune/SecretAgnetMissFortune.jpg', price: '50 $' },
//   { name: 'MissFortune', skin: 'CowgirlMissFortune', img: 'img/MissFortune/CowgirlMissFortune.jpg', price: '50 $' },
//   { name: 'MissFortune', skin: 'CrimeCityMissFortune', img: 'img/MissFortune/CrimeCityMissFortune.jpg', price: '50 $' }
// ]


// insert one item
// const champion = new Skins({ name: 'Annie', skin:'goth_annie', img:'img/annie/goth_annie.jpg', price:'50 $' },);
// champion.save().then(() => console.log('done'));


// Insert many items
// Skins.insertMany(champions, function (err, docs) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log("Multiple documents inserted to Collection Skins");
//   }
// });


// get champions without DB
// app.get('/champions', function (req,res) {
//     res.send(champions);
//   });

//get champions with DB
app.get('/champions', function (req, res) {
  Skins.find({}, function (err, docs) {
    res.send(docs)
  })
})



////////
app.put('/addSkin', (req, res) => {
  const { body } = req;

  const { name, skin, img, price } = body;

  let index = champions.findIndex(elm => elm.skin == skin);
  if (index != -1) {
    console.log('found not add')
    res.send({ existSkin: true });
  }
  else {
    console.log('Added');

    res.send({ existSkin: false });
    champions.push({ name: name, skin: skin, img: img, price: price });
  }
  //res.send(champions);



})
//////////////////////

app.put('/UpdatePrice', function (req, res) {
  const { body } = req;
  const { skin, newPrice } = body;
  const champion = champions.find(Element => Element.skin === skin);
  champion.price = newPrice;
  res.send(champions);
})


app.delete('/deleteSkin', function (req, res) {
  const { body } = req;
  const { skin } = body;
  const index = champions.findIndex(Element => Element.skin === skin);
  champions.splice(index, 1);
  res.send(champions);
})

app.put('/SortChampions', function (req, res) {
  const { body } = req;
  const { name } = body;
  champions.sort((a, b) => (a.skin > b.skin) ? 1 : ((b.skin > a.skin) ? -1 : 0));
  res.send(champions);
})



/////////////////////////////////////////////
// const pupils = [
//     { name: 'Moran', grade: 100 },
//     { name: 'Lina', grade: 99 },
//     { name: 'Yosuf', grade: 85 }
// ]

// app.get('/api/pupils', (req, res) => {
//     setTimeout(()=>{
//     res.send(pupils)
//     },4000)
// })

// app.get('/api/students', (req, res) => {

//     setTimeout(()=>{
//         res.send(students)
//     },2000)

// })


app.listen(3000, () => { console.log("App is Listening to 3000") })

