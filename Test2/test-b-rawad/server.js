const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use(express.static('public'))

const url = "mongodb+srv://rawadsabik:0505489471d@cluster0.1ue9i.mongodb.net/random";

//connection with DB
const mongoose = require('mongoose');
const e = require('express');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    email:String,
    name: String,
    password: String,
    userimg:String
}); 


const Group = mongoose.model('Group', {
    email:String,
    name: String,
    userimg:String,
    time:String
}); 


app.post('/api/register',(req, res)=>{
    const {email, name, password ,userimg} = req.body;
    console.log(email, name, password ,userimg);
    
    let user  = User({email, name, password ,userimg})
    user.save().then(doc=>{
        console.log(doc)
        res.send({login:true, id:doc._id});
        
    })
    
})


app.post('/api/login',(req, res)=>{
    const {email, password} = req.body;
    console.log(email, password)
    
    
    User.findOne({email:email,password:password}).then(docs=>{
        console.log(docs);

        res.send({login:true, email:docs.email});
   
      
    })
    
})


app.post('/api/group',(req, res)=>{
    const {email} = req.body;
    console.log(email)
    
    
    User.findOne({email:email}).then(docs=>{
        console.log(docs);
          let email=docs.email;
          let name=docs.name;
          let userimg=docs.userimg;
          let date=new Date();
          let time=date.getTime();
    
          console.log(date)
    
        //   let group  = Group({email,name,userimg,time})
        //   group.save().then(doc=>{

        //   })

   
      })


    
    
})


app.get('/api/getgroup',(req,res)=>{
    

    Group.find({},function(err,docs){
        console.log('getgroup');
      console.log(docs)
         res.send(docs);
 
     })

  
})










const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("App is Listening to",port) })