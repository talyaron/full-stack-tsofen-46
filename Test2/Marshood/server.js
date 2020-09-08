const express = require('express');
const app = express();
var path = require("path");
const fs = require("fs");

const url = "mongodb+srv://Marshood:raMHdQuDOBxwrcss@cluster0.ifcjp.mongodb.net/testbellafile";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var bodyParser = require('body-parser');
const { CONNREFUSED } = require('dns');
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
            const CurrentUser = new OnlineUser({ email: email, name: doc[0].name, img: doc[0].img, DateOnline: myDate, UHour: UHour, UMin: UMin });
            // CurrentUser.save().then(() => console.log('wellcome'));
            res.send([{ success: true }, { name: doc[0].name, img: doc[0].img, _id: doc[0]._id }])
        }
    })
})
app.get('/GetOnlineUsers', async function (req, res) {
    const today = new Date();
    const Halfhourago = new Date(today.getTime() - (500 * 60 * 60));
    const UMin = today.getMinutes();
    const UHour = today.getHours();
    OnlineUser.find({ "DateOnline": { $gt: new Date(Date.now() - 0.5 * 60 * 60 * 1000) } }, function (err, doc) {
        res.send(doc);

    })
})
app.post('/LogOutUser', function (req, res) {
    console.log("LogOutUser...");
    let { success } = true;
    var email = req.body.email;
    OnlineUser.deleteOne({ email: email }, function (err) {
        if (err) return handleError(err);
    });
    res.send([{ success: true }]);
});


app.post('/addOnlineUser', function (req, res) {
    var UserID = req.body.UserID;
    console.log(UserID + " asad")
    let { success } = false;
    UserT.findById(UserID, function (err, doc) {
        var myDate = new Date(Date.now());
        const date = Date("2014-12-11T14:12:00Z")
        const currDate = new Date();
        const UMin = currDate.getMinutes();
        const UHour = currDate.getHours();
        const CurrentUser = new OnlineUser({ email: doc.email, name: doc.name, img: doc.img, DateOnline: myDate, UHour: UHour, UMin: UMin });
        console.log("UserUserUserUserUser")
        // console.log(CurrentUser)
        CurrentUser.save().then(() => console.log('wellcome'));
        res.send([{ success: true }])

    })
})


app.post("/test", function (req, res) {

    console.log("test post");
    let name = req.body.email;
    console.log(req.body, name);
    // const CurrentUser = new OnlineUser({ email: email, name: doc[0].name});
    //  CurrentUser.save().then(() => console.log('wellcome'));

    res.send({ src: "/loginAdmin.html" });

})
const multer = require("multer")

app.get("/4testfile/:file", function (req, rs) {
    res.download("/" + req.params.file)
})
app.get('/api/users', function (req, res) {
    var user_id = req.param('id');
    var userpass = req.param('pass');
    var geo = req.param('geo');
    res.download("/" + geo)
    let rawdata = fs.readFileSync(geo);// to read mockdata json file 
    let DataFiles = JSON.parse(rawdata);
    res.download(DataFiles)
    res.send(user_id + ' ' + userpass + ' ' + geo);
});


var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // Uploads is the Upload_folder_name 
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})

// Define the maximum size for uploading 
// picture i.e. 1 MB. it is optional 
const maxSize = 1 * 1000 * 1000;

var upload = multer(
    {
        storage: storage,
        limits: { fileSize: maxSize },
        fileFilter: function (req, file, cb) {
            // Set the filetypes, it is optional 
            var filetypes = /json/;
            var mimetype = filetypes.test(file.mimetype);
            var extname = filetypes.test(path.extname(
                file.originalname).toLowerCase());
            if (mimetype && extname) {
                return cb(null, true);
            }
            cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes);
        }
        // mypic is the name of file attribute 
    }).single("mypic");

app.get("/", function (req, res) {
    res.render("Signup");
})
const save = require('save-file');

const JsonFileDB = mongoose.model('bellsFiles', {
    type: String,
    data: Buffer

});
const fse = require('fs-extra');// to save the data to folder receivingData 
app.get("/GetBellaData", async function (req, res) {
    const { user_id, user_pass, data } = req.query;
    if (user_id == "bella" && user_pass == "bella") {
        let rawdata = fs.readFileSync(data);
        subData = data.substring(data.length - 4, data.length);
        if (subData === "json" || subData === "JSON") {
            let JsonFile = JSON.parse(rawdata);

             date = DateFormatToSaveJsonFiles();//new Date().toISOString();
             fse.outputFile(`receivingData/${date}.JSON`, rawdata)// to save the files to local 
                .then(() => {
                    console.log('The file was saved!');
                })
                .catch(err => {
                    console.error(err)
                });
        }else{
            res.send({ "success": "false" });
        }
 
    }
    res.send({ "success": "true" });

  })

// to get the time format YY-MM-DD
function DateFormatToSaveJsonFiles() {
  const d = new Date();
  const ye = new Intl.DateTimeFormat("en", {
    year: "numeric"
  }).format(d);
  const mo = new Intl.DateTimeFormat("en", {
    month: "2-digit"
  }).format(d);
  const da = new Intl.DateTimeFormat("en", {
    day: "2-digit"
  }).format(d);
  const Ho = new Intl.DateTimeFormat("en", {
    hour: "2-digit"
  }).format(d);
  const min = new Intl.DateTimeFormat("en", {
    minute: "2-digit"
  }).format(d);
 const  AMPM=Ho.substring(Ho.length - 2, Ho.length);
 hour=Ho.substring(0,Ho.length - 3);
  return `${ye}-${mo}-${da}T${hour}-${min}-${AMPM}`;
};
app.post("/GetBellaData", async function (req, res) {
    console.log("asd")
    const { user_id, user_pass, data } = req.query;
    console.log(user_id, user_pass, data);
    res.send({ "success": "ture" });
})

app.listen(3000, () => { console.log("App is Listening : 3000") })









// var user_id = req.param('user_id:');
    // var user_pass = req.param('pass');
    // var file = req.param('file');
    // var ext = `${req.param("file")}`.substring(`${req.param("file")}`.indexOf('.') + 1);
    // if (ext == "JSON" || ext == "json") {
    //     let rawdata = fs.readFileSync(`${req.param("file")}`);// to read mockdata json file 
    //     let DataFiles = JSON.parse(rawdata);
    //     console.log(DataFiles)
    //     await save("DataFiles.json", `${DataFiles}`)
    //     res.send("Success, Image uploaded!")
    // }else{
    //     res.send("Error")
    // }
    // console.log("ext   " + ext)
    // res.download(req.param("file"))
    // upload(req, res, function (err) {
    //     if (err) {
    //         res.send(err)
    //     }
    //     else {
    //         res.send("Success, Image uploaded!")
    //     }
    // })