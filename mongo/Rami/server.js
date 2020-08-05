const express = require('express');
const app = express();

const url = "mongodb+srv://tal2:cFjgmJTT9b42Aoin@tal-test1-m39if.mongodb.net/test";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('Users', {
    name: String,
    age: Number
});



// const salah = new User({ name: 'salah', age: 24 });
// salah.save().then(() => console.log('meow2'));
User.find().then(docs=>{console.log(docs)})