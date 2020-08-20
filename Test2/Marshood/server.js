const express = require('express');
const app = express();
var path = require("path");

const url = "mongodb+srv://Marshood:raMHdQuDOBxwrcss@cluster0.ifcjp.mongodb.net/RandomNames";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
    extended: true
}));
app.use(express.static('public/html'));
app.use(express.static(path.join(__dirname, "")));
app.use(express.static(path.join(__dirname, "public")));
const UserT = mongoose.model('User', {
    name: String,
    email: String,
    Password: String,
    img: String,
});
const OnlineUser = mongoose.model('OnlineUser', {
    email: String,
    name: String,
    img: String,
    DateOnline: Date,//{type :String}//default : Date.now
    UHour: Number,
    UMin: Number
});

app.post('/Register', function (req, res) {
    console.log("AddUser...")
    var name = req.body.name;
    var email = req.body.email;
    var Password = req.body.Password;
    var img = req.body.img;
    let { success } = false;
    const User = new UserT({ name: name, email: email, Password: Password, img: img });
    UserT.find({ name: name, email: email }, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            User.save().then(() => console.log('wellcome to our system'));
            res.send([{ success: true }])
        } else {
            console.log("user Found")
            res.send([{ success: false }])
        }
    })
});
app.post('/Login', function (req, res) {
    var email = req.body.email;
    var Password = req.body.Password;
    console.log("Login...", email, Password)
    let { success } = false;
    UserT.find({ email: email, Password: Password }, function (err, doc) {
        //console.log(doc)
        if (doc.length === 0 || doc.length === []) {
            console.log("not found ...");
            console.log("user not exist on DB with the same inputs..");
            res.send([{ success: false }])
        } else {
            var myDate = new Date(Date.now());
             const date = Date("2014-12-11T14:12:00Z")
             const currDate = new Date();
            const UMin = currDate.getMinutes();
            const UHour = currDate.getHours();
            const CurrentUser = new OnlineUser({ email: email, name: doc[0].name, img: doc[0].img,DateOnline:myDate, UHour: UHour, UMin: UMin });
            // CurrentUser.save().then(() => console.log('wellcome'));
            res.send([{ success: true }, { name: doc[0].name, img: doc[0].img ,_id:doc[0]._id}])
        }
    })
})
app.get('/GetOnlineUsers', async function (req, res) {
    const today = new Date();
    const Halfhourago = new Date(today.getTime() - (500 * 60 * 60));
    const UMin = today.getMinutes();
    const UHour = today.getHours();
    OnlineUser.find({ "DateOnline": { $gt: new Date(Date.now() - 5*60*60 * 1000) } }, function (err, doc) {
         res.send(doc);

    })
})
app.post('/LogOutUser', function (req, res) {
    console.log("LogOutUser...");
    let { success } = true;
    var email = req.body.email;
    OnlineUser.deleteOne({email:email }, function (err) {
            if (err) return handleError(err);
           });
    res.send([{ success: true }]);
});


app.post('/addOnlineUser', function (req, res) {
    var UserID = req.body.UserID;
    console.log(UserID+" asad")
     let { success } = false;
    UserT.findById(UserID, function (err, doc) {
             var myDate = new Date(Date.now());
              const date = Date("2014-12-11T14:12:00Z")
             const currDate = new Date();
            const UMin = currDate.getMinutes();
            const UHour = currDate.getHours();
            const CurrentUser = new OnlineUser({ email: doc.email, name: doc.name, img: doc.img,DateOnline:myDate, UHour: UHour, UMin: UMin });
            console.log("UserUserUserUserUser")
           // console.log(CurrentUser)
           CurrentUser.save().then(() => console.log('wellcome'));
            res.send([{ success: true }])
        
    })
})
app.listen(3000, () => { console.log("App is Listening : 3000") })
