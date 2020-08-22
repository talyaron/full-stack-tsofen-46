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


function uid() {

  return '_' + Math.random().toString(36).substr(2, 9);
}

//////////////////////////For running only once////////////////////////
// questions array
// const questions = [
//   {
//     id: uid(), name: "הצעות לשיפור החינוך", description: "",
//     options: [
//       { value: "לימוד מרחוק", names: ["לינא", "טל", "רים"] },
//       { value: "לימוד בכיתה", names: ["מיקי", "מורן"] },
//       { value: "אין העדפה", names: ["גנא", "אייה"] }
//     ]
//   },

//   {
//     id: uid(), name: "הצעות לתחבורה ובטיחות בדרכים", description: "",
//     options: [
//       { value: "כל נוסע חייב רב קו", names: ["לינא", "טל", "רים"] },
//       { value: "אפשר לשלם במזומן לנהג", names: ["מיקי", "מורן"] },
//       { value: "נמנע", names: ["סאלח", "מהראן"] }
//     ]
//   },

//   {
//     id: uid(), name: "הצעות לפעילויות הקהילה", description: "",
//     options: [
//       { value: "התנדבות למען בעלי צרכים מיוחדים", names: ["לינא", "טל", "רים"] },
//       { value: "התנדבות למען בעלי חיים", names: ["מיקי", "מורן"] },
//       { value: "הכל טוב", names: ["סאלח", "מהראן"] },
//     ]
//   }
// ]


// // // Insert many items
// Question.insertMany(questions, function (err, docs) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log("Multiple documents inserted to Collection account");
//   }
// });




///////////////////////////////Function with DB///////////////////////////////////////////////


//LogIn
app.post('/api/login', (req, res) => {
  const { username } = req.body;
  console.log(username)
  res.send({ login: true})
})

//get All the Question with DB
app.get('/getQuestion', function (req, res) {
  Question.find({}, function (err, docs) {
    res.send(docs)
  })
})

//get one Question with DB
app.post('/getOneQuestion', (req, res) => {
  const { id } = req.body;
  Question.findOne({id: id}, function (err, docs) {
    console.log(docs);
    res.send(docs);
  })
})



// add new Question
app.post('/addNewQuestion', (req, res) => {
  const { body } = req;
  console.log(body)

  const { name, description, option1, option2, option3} = body;

  // insert one item
  const newQuestion = new Question({
        id: uid(), 
        name: name, 
        description:description,
        options: [
          { value: option1, names: [] },
          { value: option2, names: [] },
          { value: option3, names: [] },
        ]
      });
  newQuestion.save().then(() => console.log('done'));
  res.send({ newQuestion: true });
})






//////////////////////

// app.put('/UpdatePrice',function(req,res){
//   const {body} = req;
//   const {skin,newPrice} = body;
//  const champion= champions.find(Element => Element.skin===skin);
//  champion.price=newPrice;
//  res.send(champions);
// })


// app.delete('/deleteSkin',function(req,res){
//   const {body} = req;
//   const {skin} = body;
//  const index = champions.findIndex(Element => Element.skin===skin);
//  champions.splice(index,1);
//  res.send(champions);
// })

// app.put('/SortChampions',function(req,res){
//   const {body} = req;
//   const {name} = body;
//   champions.sort((a,b) => (a.skin > b.skin) ? 1 : ((b.skin > a.skin) ? -1 : 0)); 
//  res.send(champions);
// })




app.listen(3000, () => { console.log("App is Listening to 3000") })




