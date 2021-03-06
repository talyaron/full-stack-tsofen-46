
const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://tal2:cFjgmJTT9b42Aoin@tal-test1-m39if.mongodb.net/test";

//connection with DB
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    name: String,
    imgUrl: String
}); 

app.post('/api/login',(req, res)=>{
    const {name, imgUrl} = req.body;
    console.log(name, imgUrl)
    
    let user  = User({name, imgUrl})
    user.save().then(doc=>{
        console.log(doc)
        res.send({login:true, id:doc._id})
    })
})

app.post('/api/getUser',(req,res)=>{
    const {id} = req.body;
    
    User.findOne({_id:id}).then(doc=>{
        res.send({user:doc})
    })
   
})

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("App is Listening to",port) })

