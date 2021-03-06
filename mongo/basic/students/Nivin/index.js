const express = require("express");
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'));

const url =
  "mongodb+srv://nivin:apiFHVcK1RJINyzq@cluster0.gsx6h.mongodb.net/test";

const mongoose = require("mongoose");
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model("People", {
  name: String,
  age: Number,
});

const nivin = new User({ name: "nivin", age: 27 });
nivin.save().then(() => console.log("nenene"));
