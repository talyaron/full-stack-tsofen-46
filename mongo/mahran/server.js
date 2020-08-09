const express = require('express');
const app = express();


// Establish connection MongoDB
const url = "mongodb+srv://mahran:mahran84@cluster0.mr6bw.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// create Schema
const article = mongoose.model('article', {

    articleNr: String,
    location: String,
    livingSpace: Number,
    rentalPrice: Number

});

// create record
const Art_Tira02 = new article({
    articleNr: 'A002',
    location: 'Tira Town',
    livingSpace: 50,
    rentalPrice: 1500

})
//Art_Tira02.save();
console.log("server is there");
//article.find().then(docs=>{console.log(docs)})
//let docs = [];
//docs.push(article.find());
//console.log(docs);
 //article.find();
//console.log({docs})
//let docs = article.find({});


// save toi database
//Art_Tira01.save().then(() => console.log('article saved to database'));
//let arr = [];
//arr.push(article.findOne());
//console.log(arr);

article.find( { }, (err, res) => {
        console.log(res);
})
