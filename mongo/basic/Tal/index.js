const express = require('express');
const app = express();

const url = "mongodb+srv://TaBs:TaBs1998!!@cluster0.yl4n3.mongodb.net/test?authSource=admin&replicaSet=atlas-gm677r-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";


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













