const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://lina:linanijem1@cluster0.mzrxp.mongodb.net/moran2";


const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Admin = mongoose.model('Admin', {
    image: String,
    name: String,
    comment: String
});

const admin = new Admin({
    image: "https://addons-media.operacdn.com/media/CACHE/images/themes/95/78195/1.0-rev1/images/f1b54fe9-e138-44e6-929b-182bb1e82a68/e692a2c2fe07202eda545c69833230bd.jpg",
    name: "MoraNijem"
});

// admin.save();


app.get('/enter', (req, res) => {
    Admin.find({}).then(docs => {
        res.send({ admin: docs })
    })
})

app.post('/firstpage', (req, res) => {
    Admin.find({}).then(docs => {
        console.log("firstpage")
        console.log(docs)
        res.send({ admin: docs })
    })

})


app.post('/addcomment', (req, res) => {

    const { text } = req.body
    console.log(text)
    Admin.updateOne(
        { _id: "5f2f97bfe4a6573948a7e596" },
        { $push: { comment: text } }
    ).then(console.log(" added"))
        .then(
            Admin.find({}).then(docs => {
                console.log("firstpage")
                console.log(docs)
                res.send({ admin: docs })
            }))

})





app.listen(3000, () => { console.log("App is Listening to 3000") })