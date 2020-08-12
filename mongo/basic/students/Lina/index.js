const express = require('express');
const app = express();

const url = "mongodb+srv://lina:linanijem1@cluster0.mzrxp.mongodb.net/test";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    name: String,
    age: Number
});

const lina = new User({ name: 'lina', age: 24 });
lina.save().then(() => console.log('done'));













