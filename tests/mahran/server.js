const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Express
app.use(express.static('public'));


// MongoDB: Estaplish connection
const url = "mongodb+srv://mahran:mahran84@cluster0.mr6bw.mongodb.net/test";
const mongoose = require('mongoose');
const { request, response } = require('express');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


// Shema:


const Votes = mongoose.model('Votes', {
    "title": String,
    "description": String,
    "voteOptionType": String,
    "voteOptionCount": Number,

    "voteOptions": [
        {
            "optionTile": String,
            "optionDesc": String,
            "voters": Array

        }
    ]

});


const newVotes = [
    {
        title: "do you like ice?",
        description: "do eating ice",
        voteOptionType: "simple",
        voteOptionCount: 3,
        voteOptions: [
            {
                optionTile: "I like",
                optionDesc: "i like",
                voters: ["user1", "user2", "user3", "user4"]

            },
            {
                optionTile: "I dont like",
                optionDesc: "i dont like",
                voters: ["user1"]

            },
            {
                optionTile: "maybe sometimes",
                optionDesc: "maybe sometimes",
                voters: ["user1", "user3"]

            }
        ]
    }

]
/*
 Votes.insertMany(newVotes, (error, docs) =>{
     if(error) {
         console.log(error);
     } else {
         console.log(docs);
     }
 })

*/

//API Definition:

app.get('/api/getVotes', (request, respons) => {
    Votes.find({}, (err, res) => {
        respons.send(res);

    })

})

app.post('/api/getSelectedQuestion', (request, respons) => {
    let { title } = request.body
    Votes.findOne({ title }, (err, res) => {
        respons.send(res);

    })
})


app.post('/api/addVote', (request, response) => {
    let title = request.body.title;
    let choosenOption = request.body.columntoUpdate;
    let optionTitle = choosenOption.optionTile;
    let newVoters = choosenOption.updatedColumnResult;
    console.log(optionTitle);
    console.log(newVoters);

    Votes.findOneAndUpdate(
        { title, "voteOptions.optionTile": optionTitle }, { $set: { "voteOptions.$.voters": newVoters } }, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                response.send(doc);
            }
        })


})


app.post('/api/createQuestion', (request,response) => {
    let newQuestion = request.body;

    newQuestion = new Votes({
        title: newQuestion.title,
        description: newQuestion.description,
        voteOptionType: newQuestion.voteOptionType,
        voteOptionCount: newQuestion.voteOptionCount,
        voteOptions: newQuestion.voteOptions

    })
    console.log(newQuestion);
    newQuestion.save(function(err,result){ 
        if (err){ 
            console.log(err); 
        } 
        else{ 
            console.log(result)
            response.send(result);
        } 
    
    })

})


const port = process.env.PORT || 3000
app.listen(port, () => { console.log("App is Listening on port", port) })