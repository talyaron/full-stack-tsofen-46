const express = require('express')
const app = express()

const mongoose = require('mongoose')

const url = "mongodb+srv://TaBs:TaBs1998!!@cluster0.yl4n3.mongodb.net/test";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model('User', {
    name: String,
    age: Number
})

const Taima = new User({ name: 'Taima', age: 22});
Taima.save().then(() => console.log('Heeeeyyy'));