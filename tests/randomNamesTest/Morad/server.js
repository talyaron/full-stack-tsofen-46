const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Express
app.use(express.static('public'));

var groups = [{}];
// MongoDB: Estaplish connection
const url = "mongodb+srv://morad:698532741mm@cluster0.89onk.mongodb.net/testB";
const mongoose = require('mongoose');
const { group } = require('yargs');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Question = mongoose.model('Question', {
   question : String,
   numOfAnswers : Number,
   answers : [{answer : String , 
       votes : [{userName : String }]
    }]
});
const User = mongoose.model('User', {
    userName : String
});
    
// const question = new Question({
//     question: "sfdf", numOfAnswers: 2,
//     answers: [{answer : "ffff" , votes : [{userName : "aaaa"},{userName : "bbbb"}]},
//     {answer : "ffffqqq" , votes : [{userName : "aaaaqqq"},{userName : "bbbbqq"}]},]
// });
// question.save().then(function (doc) {
//     console.log(doc);
// });

app.get('/api/questions', (req,res) => {
    Question.find({}).then(function(docs) {
        res.send({docs});
    })
})

app.post('/api/getQuestion', (req,res) => {
    const{ques} = req.body;
    Question.findOne({question:ques}).then(function(doc) {
        console.log(doc);
        res.send({doc});
    })
})
app.post('/api/signIn', (req, res) => {
    const{userName} = req.body;
    User.findOne({userName:userName}).then(function(doc) {
        console.log(doc);
        if(doc == null){
            const newUser = new User({userName : userName});
            newUser.save().then(function(doc){
                res.send({succesfull : true});
            })
        }
        res.send({succesfull : true});
    })
});

app.post('/api/vote', (req,res) => {
    const{userName,currentQues,answer} = req.body;
    Question.findOneAndUpdate({question:currentQues}).findOneAndUpdate({answer:answer},
        {$push:{'answers':
    {"userName" : userName}}}, {new : true},(err,result) => {
        console.log(err);
        console.log(result)
    })
    
})
const port = process.env.PORT || 3000
app.listen(port, () => { console.log("App is Listening on port", port) })
