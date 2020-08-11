const express = require('express');
const app = express();

const url = "mongodb+srv://abdalla1:abdalla99@cluster0.s25z3.mongodb.net/test";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    name: String,
    age: Number
});

const mahmood = new User({ name: 'mahmood', age: 25 });
mahmood.save().then(() => console.log('added'));


