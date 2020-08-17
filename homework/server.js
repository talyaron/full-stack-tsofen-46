const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use(express.static('public'))

const url = "mongodb+srv://rawadsabik:0505489471d@cluster0.1ue9i.mongodb.net/homework";

//connection with DB
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    name: String,
    password: String
}); 

const Menu = mongoose.model('Menu',{
    
    foodname:String,
    imgefood:String,
    foodprice :String,
    foodrecipe:String 

});

app.post('/api/login',(req, res)=>{
    const {name, password} = req.body;
    console.log(name, password)
    
    let user  = User({name, password})
    user.save().then(doc=>{
        console.log(doc)
        res.send({login:true, id:doc._id});
        
    })
    
})
app.post('/api/getUser',(req,res)=>{
    const {id} = req.body;
    console.log(id)
    User.findOne({_id:id}).then(doc=>{
         console.log(doc)
        res.send(doc)
    })
   
})

app.post('/api/editmenu',(req, res)=>{
    const {foodname, imgefood,foodprice,foodrecipe} = req.body;
    console.log(foodname, imgefood,foodprice,foodrecipe)
    
    let menu  = Menu({foodname, imgefood,foodprice,foodrecipe})
    menu.save().then(doc=>{
        console.log(doc)
        // res.send({login:true, id:doc._id});

    })
    
})

app.get('/api/menus',(req,res)=>{
    
    Menu.find({},function(err,docs){

        console.log(docs)
       res.send(docs)
       
     
     })
})



const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("App is Listening to",port) })