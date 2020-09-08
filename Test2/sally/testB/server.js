const express = require('express');
const app = express();

const url = "mongodb+srv://sally:sally7118@cluster0.rdozv.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static('public'));

//mongoos collection for users and thier fields 
const Users = mongoose.model("Users", {
    user:String,
    password: String,
    Email: String,
    url: String,
    currentloged:Number
    
})


//Registerion opperation  
 app.post('/Register',function (req, res){
    console.log("running");
    const { user, password, Email, url } = req.body;
    let { success } = false;
     let UserNew = new Users({ user: user, password: password, Email: Email, url:url, currentloged:0});
     console.log("Check If This User Exist... Register");
    Users.find({ user: user, password: password }, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            console.log("Create new user");
            UserNew.save().then().catch(err=> console.log(err))

            res.send([{ success: true }])
        } else {
            console.log("user Found")
            res.send([{ success: false }])
        }
    })
})
 

/* app.post('/Register', async(request, response) => {
    //request com from the client
    const { user, password, Email, url } = req.body;
    console.log("running");
    //check if name is in names
  
    let UserNew = new Users({ user: user, password: password, Email: Email, url:url});
    await UserNew.save().then().catch(err=> console.log(err))
    clothe4.find({}).then(docs=>
      res.send(docs))
    
  
  
    //send response to client
  
  }) */


  //check if the user exsit in DB  
app.post('/LoginUser', function (req, res) {
    let { success } = false;
    const {Email,password}=req.body;
    Users.find({Email: Email, password: password }, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            res.send([{ success: false }])
        } else {
            //updating the currentloged field to be 1 in order to know that this user already loged at the moment
            Users.updateOne({Email:Email}, {currentloged:1}, function (err, docs) {
                res.send([{success: true}, {doc:doc}])
              })
        }
    })
})

//getting the students 
app.get('/getStudents', function (req, res) {
    let {success} = false;
    Users.find({}, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            res.send([{success:false}])
        } else {
            res.send([{doc:doc}])
        }
    })
})


//You should get by date of last 30 minutes
//get the all the students from database
app.get('/getgroup', (req, res) => {
    Users.find({}, function (err, docs) {
        res.send(docs);

    })
})







app.listen(3000, () => { console.log("App is Listening to 3000") })