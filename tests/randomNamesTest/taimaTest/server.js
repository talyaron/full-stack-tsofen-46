const express = require('express');
const app = express();



app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}))

//DB
const url = "mongodb+srv://TaBs:TaBs1998!!@cluster0.yl4n3.mongodb.net/Web1DB";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const contact = mongoose.model('contacts', {
    // creating the contact modle
    name: String,
    email: String,
});

var bodyParser = require('body-parser');
const { isNull } = require('util');
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({   
  extended: true
}));

// app.post('/login', (req, res) => {
    
// })

// app.post('/AddUser', (req, res) => {
//     consolereq.body.email
// })

// app.post('register', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         contact.push({
//             id: Date.now().toString(),
//             email: req.body.email,
//             password: hashedPassword
//         })
//         location.replace('login.html');
//     } catch{
//         location.replace("register.html")
//     }

// })





app.post('/AddUser', function (req, res) {
    console.log("AddUser...")
    var email = req.body.email;
    var password = req.body.password;
    var imgURL = req.body.imgURL;
    
    const User = new UserT({   
        email: email,
        password: password,
        imgURL: imgURL });
    const CurrentUser = new OnlineUser({           
        email: email,
        password: password,
        imgURL: imgURL});

    OnlineUser.deleteOne({ }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    User.save().then(() => console.log('wellcome1'));
    CurrentUser.save().then(() => console.log('wellcome2'));

    res.send("register.html");
  
    });




app.listen(5000, () => { console.log("App is Listening on port :: 5000") })









