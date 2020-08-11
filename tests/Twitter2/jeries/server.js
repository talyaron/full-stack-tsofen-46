const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
const url = "mongodb+srv://jeries:g1g2g3g4g5@cluster0.sb6dm.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static('public'))


const userRegister = mongoose.model('userRegister', {
    Id:String,
    name: String,
    username:String , 
});

const tweets = mongoose.model('tweets', {
   tweet:String
});


app.get('/registerAdmin', (req, res) => {
    res.send(userRegister)
})

app.post('/addAdmin', (req, res) => {
    const { body } = req;
    console.log(body)
    const {id,img,username } = body;
            let newAdmin=new userRegister ( { Id:id , name:img, username: username} )
            newAdmin.save().then(doc=>{
                console.log(doc)
                res.send({login:true, id:doc._id})
            })
        
  })

  app.post('/api/getUser',(req,res)=>{
    const {id} = req.body;
    console.log(id)
    userRegister.findOne({_id:id}).then(doc=>{
        res.send({user:doc})
    })
   
})

app.get('/api/data', (req, res) => {
    tweets.find({},function(err,tweets){
        console.log(tweets)
    res.send(tweets) 
    })
})
app.post('/addData', (req, res) => {
    const { body } = req;
    console.log(body)
    const { text } = body;
     let newpost=new tweets ( { tweet  : text } )
     newpost.save().then(() => console.log("Added"));
        
  })
  
const port=process.env.PORT || 3000;

app.listen(port, () => { console.log(`App is Listening to ${port}`) })