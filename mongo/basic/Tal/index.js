const express = require('express');
const app = express();

const url = "mongodb+srv://tal2:cFjgmJTT9b42Aoin@tal-test1-m39if.mongodb.net/test";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    name: String,
    age: Number
});

User.updateOne({name:'salah'},{age:25}).then(doc=>{
    
})

// const salah = new User({ name: 'salah', age: 24 });
// salah.save().then(() => console.log('meow2'));
User.find({age:{$lte:24}}).then(docs=>{console.log(docs)})













