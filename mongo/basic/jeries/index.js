const express = require('express');
const app = express();

const url = "mongodb+srv://jeries:g1g2g3g4g5@cluster0.sb6dm.mongodb.net/test";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Students = mongoose.model('Students', {
    name: String,
    age: Number
});

const jeries = new Students({ name: 'jeries', age: 23 });
jeries.save().then(() => console.log('Hello jeries'));


