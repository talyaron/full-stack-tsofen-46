const express = require('express');
const app = express();

const url = "mongodb+srv://tal2:cFjgmJTT9b42Aoin@tal-test1-m39if.mongodb.net/test";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    name: String,
    age: Number
});

const mahmood = new User({ name: 'mahmood', age: 25 });
mahmood.save().then(() => console.log('meow2'));













