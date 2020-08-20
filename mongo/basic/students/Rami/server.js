const express = require('express');
const app = express();

const url = "mongodb+srv://rami30080:mxzmxz123@cluster0.halwb.mongodb.net/market";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('market', {
    name: String,
    age: Number
});

User.insertMany({name:'Rami',age: 3})



// const salah = new User({ name: 'salah', age: 24 });
// salah.save().then(() => console.log('meow2'));
User.find().then(docs=>{console.log(docs)})