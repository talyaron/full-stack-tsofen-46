const express=require('express')
const app=express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'))

const url = "mongodb+srv://lina:linanijem1@cluster0.mzrxp.mongodb.net/test3";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User',{
    name:String,
    email:String,
    profileimg:String,
    password:String,
    flag:Boolean
});

////////////////////////////////////////////////////////////////////////////////////////////////////
//Register 
app.post('/Register', function (req, res) {
    const {name,email,password,profileimg} = req.body;
    let { success } = false;
     let UserNew = new User({email:email,name:name,profileimg:profileimg,password:password,flag:false});
     console.log("Check User Exist... Register");
    User.find({email:email,password:password}, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            console.log("not found ...");
            console.log("Create new user...");
            UserNew.save().then(docs => { console.log('save to DB,',name,email) });

            res.send([{ success: true }])
        } else {
            console.log("user Found")
            res.send([{ success: false }])
        }
    })
})
///////////////////////////////////////////////////////////////////////////////////
app.post('/loginpage', function (req, res) {
    // console.log("aaaa")
    let { success } = false;
    const {email,Password}=req.body;
    console.log("Check User Exist",email,Password);
    User.find({email:email,email:email}, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            res.send([{ success: false }])
        } else {
            User.updateOne({email:email}, {flag:true}, function (err, docs) {
                res.send([{ success: true }, { doc: doc }])
              })
           
        }
    })
})

    /////////////////////////////////////////////////////////////////////////
    app.get('/groupRandom', (req, res) => {
        User.find({}, function (err, docs) {
            res.send(docs);
    
        })
    })




////////////////////////////////////////////////////////////////////////////////////////


app.get('/getparticipents', function (req, res) {
        let {success} = false;
        User.find({}, function (err, doc) {
            if (doc.length === 0 || doc.length === []) {
                res.send([{success:false}])
            } else {
                res.send([{doc}])
            }
        })
    })


app.listen(3000, () => { console.log("App is Listening to 3000") })


































