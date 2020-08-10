const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://morad:698532741mm@cluster0.89onk.mongodb.net/test";

//connection with DB
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });




app.listen(3000, () => { console.log("App is Listening to 3000") })