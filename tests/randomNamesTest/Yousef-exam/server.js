const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://Yousef:5DITEwKxJ0hWLJPH@cluster0.rpovv.mongodb.net/FirstDB";

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

const User = mongoose.model('User', {
    email: String,
    userName: String,
    password: String,
    imgUrl: String,
    date: Date
});


// const usersList = [
//     {email:"Yousef@gmail.com" ,userName:"Yousef", password:"1234", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJiDsfGi_ieJbl1oWuYzN1KjMSEOPQVelCjA&usqp=CAU",date:null},
//     {email:"Saleh@gmail.com" , userName:"Saleh",password:"1111", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJiDsfGi_ieJbl1oWuYzN1KjMSEOPQVelCjA&usqp=CAU",date: null},
//     {email:"Abdalla@gmail.com" ,userName:"Abdalla", password:"9876",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJiDsfGi_ieJbl1oWuYzN1KjMSEOPQVelCjA&usqp=CAU",date:null},
// ]

// User.insertMany(usersList, function (err, docs) {
//     if (err) {
//         return console.error(err);
//     } else {
//         console.log("Multiple documents inserted to Collection Users");
//     }
// });



app.post('/api/register', (req, res) => {
    const { email, password, imgUrl, userName } = req.body;
    User.find({ email: email })
        .then(doc => {
            if (doc.length > 0) {
                res.send({ success: false })
            }
            else {
                let newUser = new User({
                    email: email, userName: userName, password: password, imgUrl: imgUrl, date: null
                })
                newUser.save();
                res.send({ success: true })
            }
        })
})

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    User.find({ email: email, password: password })
        .then(doc => {
            res.send(doc)
        })
})

app.post('/api/updateDate', (req, res) => {
    const { email } = req.body;
    User.findOneAndUpdate({ email: email },
        { date: new Date() }, { new: true }, function (err, docs) {
            res.send(docs)
        })
})

app.get('/api/getUsersWithMe', (req, res) => {
    User.find({})
        .then(doc => {
            res.send(doc)
        })

})


app.post('/api/getUsers', (req, res) => {
    const { email } = req.body;
    User.find({ email: { $ne: email } }).then(docs => {
        res.send(docs)
    })
})


const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("App is Listening to", port) })