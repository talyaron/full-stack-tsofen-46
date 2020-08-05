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
const Art_Tira01 = new article({
    articleNr: 'A001',
    location: 'Tira Town',
    livingSpace: 100,
    rentalPrice: 3500

})

// save toi database
Art_Tira01.save().then(() => console.log('article saved to database'));