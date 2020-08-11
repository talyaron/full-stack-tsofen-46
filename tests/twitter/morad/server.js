const express = require('express');
const mongoose = require('mongoose');
const app = express();


var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
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

const Twitt = mongoose.model('Twitt', {
    user: { id: String, name: String, imageUrl: String },
    twit: String
})

app.post('/api/addUser', (req, res) => {
    const { name, imageUrl, id } = req.body;

    const newUser = new User({ id: id, name: name, imageUrl: imageUrl });
    newUser.save().then(function(doc) {
        res.send({ success: true, id: doc._id })
    });
})

app.post('/api/getUser', (req, res) => {
    const { id } = req.body;
    console.log(id)
    User.findOne({ _id: id }).then(doc => {
        res.send({ user: doc })
    })

})

app.post('/api/addTwitt', (req, res) => {
    const { id, twitt } = req.body;
    console.log(id)
    User.findOne({ _id: id }).then(doc => {
        console.log(doc.name)
        const user = { id: id, name: doc.name, imageUrl: doc.imageUrl };
        const twit = new Twitt(user, twitt)
        console.log(twit.user);
        twit.save().then(function(doc) {
            Twitt.find().then(function(docs) {
                console.log(docs[0]);
                res.send({ docs });
            })
        });
    })

})



app.listen(3000, () => { console.log("App is Listening") })