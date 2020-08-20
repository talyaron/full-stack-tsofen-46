const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({    
    extended: true
}));


app.use(express.static('public'))

const url = "mongodb+srv://abdalla1:abdalla99@cluster0.s25z3.mongodb.net/randomNames";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    email: String,
    name: String,
    password: String,
    img: String
});




app.post('/api/register', (req, res) => {
    const { email, name, password, img } = req.body;


    let user = User({ email, name, password, img })
    user.save().then(doc => {
        console.log(doc)
        res.send({ register: true });

    })

})

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email, password: password }).then(doc => {
        console.log(doc)
        res.send({ login: true, id: doc._id })
    })

})

app.get('/api/participents1', (req, res) => {

    User.find({}, function (err, docs) {

        res.send(docs)


    })
})


app.post('/api/getimg', (req, res) => {
    const {id} = req.body;
    console.log(id)
    User.find({ _id: id}).then(doc => {
        
        res.send( {doc })
        
    })
    
})


app.get('/api/group', (req, res) => {
    User.find({}, function (err, docs) {
        res.send(docs);

    })
    // function timout() {
        //     setTimeout(reset(), 10000000);
        // }
        
        // // function reset() {
        // //     users.dropAllUsers();
        // // }
        
        // timout()
    
    
   
   
})



const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("App is Listening to", port) })