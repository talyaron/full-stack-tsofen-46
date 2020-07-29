const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))




const menu = [
  { name: 'Hamburger', price: 25, ID: 1},
  { name: 'Pizza', price: 15, ID: 2},
  { name: 'Maclobe', price: 40, ID: 3},
  { name: 'Rvioly', price: 15, ID: 4 },
  { name: 'Cola', price: 15, ID: 5 },
  { name: 'Ice lemonande', price: 15, ID: 6},
];



app.get('/menu', function (req,res) {
  res.send(menu);
});


//   app.get('/menu', (req, res) => {
//     const { body } = req;
//     //const {arabic,hebrew} = body;
//     const {arabic} = body;
//     console.log(arabic);
//     //console.log(hebrew);

//     let index = words.findIndex(elm=>elm.ar == arabic);
//     if (index != -1) 
//     {
//         console.log('found')
//         res.send({existWord:true, he: words[index].he});
//     }
//     else {
//         console.log('not found')
//         res.send({existWord:false, he: 'word not found'});
//       //words.push({ar:arabic, he: hebrew});
//     }
// })


app.listen(3000, () => { console.log("App is Listening to 3000")})




