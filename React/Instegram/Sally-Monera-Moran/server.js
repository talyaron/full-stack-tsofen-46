const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
var path = require("path");
const url = "mongodb+srv://Monera:35719523571952@cluster0.gkvm6.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "")));
app.use(express.static(path.join(__dirname, "public")));



const User = mongoose.model("User", {
    firstName: String,
    imgUrl: String
})


//check if the user exsit in DB  Login
app.post('/getUserStory', function (req, res) {
    console.log("aaaa")
    let { success } = false;
    User.find({ userEmail: userEmail, password: password }, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            res.send([{ success: false }])
        } else {
            res.send([{ success: true }, { doc: doc }])
        }
    })
})


//Register 
app.post('/Register', function (req, res) {
    const { firstName, lastName, userEmail, password, imgUrl } = req.body;
    let { success } = false;
     let UserNew = new User({ userEmail: userEmail, firstName: firstName, lastName: lastName, imgUrl:imgUrl,password:password});
     console.log("Check User Exist... Register");
    User.find({ userEmail: userEmail, password: password }, function (err, doc) {
        if (doc.length === 0 || doc.length === []) {
            console.log("not found ...");
            console.log("Create new user...");
            UserNew.save().then(docs => { console.log('save to DB,',firstName,lastName) });

            res.send([{ success: true }])
        } else {
            console.log("user Found")
            res.send([{ success: false }])
        }
    })
})




// get Family Users
app.get('/get/Family', function (req, res) {
    const lastName = req.body.lastName;
    // User.find({ lastName: lastName }, function (err, doc) {
    //     res.send(doc)
    // })
 
})
// get todo Task
app.post('/get/toDo', async function (req, res) {
    const lastName = req.body.lastName;
    console.log("todoget" ,lastName)
    // Task.find({ "user.lastName": lastName }, function (err, doc) {
    //     res.send(doc)
    // })
    let todoTasks = await Task.aggregate([
        { $match: {"user.lastName": lastName } },
        {
            $group: {
                _id: '$user.firstName',
                todoTasks: { $push: "$$ROOT" },
             }
        }
        // {$project:
        //     {'sum':true,'carTypes':true}
        // }
    ])
    console.log("*******************")
    console.log(todoTasks);
    res.send(todoTasks)
})

//edit Task and update it 
app.put('/Update/Todo', function (req, res) {
    const { taskTitle, taskContent, done, TaskId } = req.body;
    let { success } = false;
    console.log("Updated ToDo");
    Task.findOneAndUpdate({ _id, TaskId }, { $set: { taskTitle: taskTitle, taskContent: taskContent, done: done } });
})

//add Todo 
//edit Task and update it 
app.put('/Update/Todo', function (req, res) {
    const { userEmail, firstName, lastName, imgUrl, password, taskTitle, taskContent, done } = req.body;
    let { success } = false;
    console.log("Updated ToDo");
    Task.findOneAndUpdate({ _id, TaskId }, { $set: { taskTitle: taskTitle, taskContent: taskContent, done: done } });
})


//Remove Todo






app.listen(port, () => { console.log('server Listen on port', port) }); 