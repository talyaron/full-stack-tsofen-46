const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))




const students = [
    "moran",
    "lina",
    "monera",
    "nivin",
   "nimer",
   "sizar",
   "jeries",
   "morad",
   "rawad",
   "omri",
   "saleh",
   "taimaa",
   "abdallah",
   "yousef",
   "marshood",
   "Rami",
   "Maharn",
   "sally"
  ];


// app.get('/students', function (req, res) {
//     res.send(students);
// })

app.post('/name', (req, res) => {
    const { body } = req;
    console.log(body)
    const { name } = body;
    console.log(name);
    if (students.includes(name)) {
        res.send({ success: 'ok' });
        document.body.style.backgroundColor = "red";
    }
    else {
        res.send({ success: false });
    }
})



app.listen(3001, () => { console.log('App listenting on 3000') })




