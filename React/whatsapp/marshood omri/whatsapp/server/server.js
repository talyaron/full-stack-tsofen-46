const express = require('express')
const app = express();
var path = require("path");
var http = require('http');
const fs = require("fs");// to read json file 
//npm init  --y
//npm i yargs
//npm install express
//
//
// DB

const url = "mongodb+srv://Marshood:raMHdQuDOBxwrcss@cluster0.ifcjp.mongodb.net/twitter";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

var bodyParser = require('body-parser');
const { isNull } = require('util');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static('public'));
var urlencodeParser= bodyParser.urlencoded({extended: false});
    app.use(express.static(path.join(__dirname,"")));
app.use(express.static(path.join(__dirname,"public")));

 const UserT = mongoose.model('User', {
    name: String,
    img: String,
 });

 const OnlineUser= mongoose.model('OnlineUser', {
    name: String,
    img: String,
 });
 const Twitt= mongoose.model('Twitt', {
    Twitt: String,
    img: String,
    name: String 
 });


    app.get('/get/chats',function(req,res) {
        console.log("Ayoub Server")
        Twitt.find({}, function (err, doc) {
            res.send(doc)
          })
       })
    
        
    app.listen(3000, () => { console.log("App is Listening") })
