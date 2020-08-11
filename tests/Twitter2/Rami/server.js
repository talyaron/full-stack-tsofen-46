const express = require('express');
const mongoose = require('mongoose');
const app = express();


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));

const url = "mongodb+srv://rami30080:mxzmxz123@cluster0.halwb.mongodb.net/test";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('Twitter2', {
    ID: Number,
    Name: String,
    URL: String
});


app.post('/api/checkuser',(req,res)=>{
    const {name,url}=req.body;
    console.log(name,url)
    User.findOne({Name:name}).then(docs=>{
        console.log(docs._id)
        const id = docs._id
        res.send({success:true,id})
    })
    
})

app.get('/')


app.listen(3000, () => { console.log("App is Listening") })