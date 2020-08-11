const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use(express.static('public'))

const url = "mongodb+srv://rawadsabik:0505489471d@cluster0.1ue9i.mongodb.net/trends-RNM";

//connection with DB
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    name: String,
    imgUrl: String
}); 
const trenddata =mongoose.model('trenddata', {
    trend:String,
    tweetnum:Number,
    ID:String
})

// const trends = [
//        { trend: "America", tweetnum: 20000,ID:""},
//        { trend: "nba", tweetnum: 3401 ,ID:""},
//      { trend: "חוק הלאום", tweetnum: 65000,ID:""}
// ]

//   trenddata.insertMany(trends,function (err, docs) {
//     if (err) {
//         return console.error(err);
//     } else {
//         console.log("Multiple documents inserted to Collection Items");
//     }
// });



app.post('/api/login',(req, res)=>{
    const {name, imgUrl} = req.body;
    console.log(name, imgUrl)
    
    let user  = User({name, imgUrl})
    user.save().then(doc=>{
        console.log(doc)
        res.send({login:true, id:doc._id});
        trenddata.updateMany({},{ID:doc._id}).then(doc=>{
    
        })
    })
    
})
app.post('/api/getUser',(req,res)=>{
    const {id} = req.body;
    console.log(id)
    User.findOne({_id:id}).then(doc=>{
        res.send(doc)
    })
   
})

app.post('/api/gettrends',(req,res)=>{
    const {id} = req.body;
    console.log(id)
    trenddata.find({ID:id}).then(doc=>{
        res.send(doc)
    })
   
})


const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("App is Listening to",port) })