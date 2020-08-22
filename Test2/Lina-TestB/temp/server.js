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

//User Table
const Question = mongoose.model('Question', new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  options: [{ value: String, names: [String] }]
}));

///////////////////////////////Function with DB///////////////////////////////////////////////

//get one Question with DB
app.post('/getOneQuestion', (req, res) => {
  const { id } = req.body;
  Question.findOne({id: id}, function (err, docs) {
    console.log(docs);
    res.send(docs);
  })
})

//get Question with DB
app.get('/getQuestion', function (req, res) {
  Question.find({}, function (err, docs) {
    res.send(docs)
  })
})

//////////////////////
app.listen(3000, () => { console.log("App is Listening to 3000") })




