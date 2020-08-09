const express = require('express');
const mongoose = require('mongoose');
const app = express();


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'));

const url = "mongodb+srv://morad:698532741mm@cluster0.89onk.mongodb.net/twitter";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


const User = mongoose.model('User', {
    id: String,
    name: String,
    imageUrl: String
});

const Post = mongoose.model('Post' , {
    id: String,
    post: String
})

app.post('/api/addUser', (req, res)=>{
    const {name, imageUrl} = req.body;
    
    const newUser = new User({name : name ,imageUrl: imageUrl});
    newUser.save().then(function(Event) {
        res.send({success:true})
  });  
  })



app.listen(3000, ()=>{console.log("App is Listening")})