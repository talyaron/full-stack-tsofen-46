const express=require('express')
const app=express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'))

const url = "mongodb+srv://rawadsabik:0505489471d@cluster0.1ue9i.mongodb.net/test-twitter";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });






app.listen(3000,()=>{console.log('App listen on port 3000')})