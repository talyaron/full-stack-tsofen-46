const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
const url = "mongodb+srv://Sizar:Sizar123@cluster0.jbvwy.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static('Public'))


const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    imageurl: String,
});



app.post('/api/register', (req, res) => {
    const { name, email, password, imageurl } = req.body;
    let user = User({ name: name, email: email, password: password, imageurl: imageurl })
    user.save().then(doc => {
        // console.log(doc)
        res.send({ register: true });

    })

})

app.post('/api/Login', (req, res) => {
    const { Email, password } = req.body;
    User.find({ email: Email, password: password })
        .then(doc => {
            if (doc.length > 0) {
                console.log("in");
                res.send({ login: true, id: doc[0]._id });
            } else {
                console.log("else");
                res.send({ login: false });
            }
        })

})

app.post('/api/users', (req, res) => {
    const { id } = req.body;
    console.log(id)
    User.find({_id: { $ne: id }
    }).then(doc => {
        res.send(doc)
    })
})
app.get('/api/getall', (req, res) => {
    
    User.find({})
    .then(doc => {
        res.send(doc)
    })
})







const port = process.env.PORT || 3001;

app.listen(port, () => { console.log(`App is Listening to ${port}`) })