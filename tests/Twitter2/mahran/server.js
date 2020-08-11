// # Express
const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))



//# MongoDB
const url = "mongodb+srv://mahran:mahran84@cluster0.mr6bw.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

//shema:
const twitterDB = mongoose.model('twitterDB', {

    username: String,
    imgURL: String

});

// API:
app.post('/api/postUserlogIn', function (request, response) {
    let vNewUser = request.body.username;
    let vImg = request.body.imgSrc;

    //create Instance of twitterDB
    const newUserData = new twitterDB({
        username: vNewUser,
        imgURL: vImg
    })
    //update user value
    let filter = { username: vNewUser }
    let update = { imgURL: vImg }
    newUserData.save().then(doc => {
        response.send(doc);
        console.log(doc);
    })




})





const port = process.env.PORT || 3000;
app.listen(port, () => { console.log("App is Listening to 3000", port) })