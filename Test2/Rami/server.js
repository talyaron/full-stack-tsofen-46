const express=require('express')
const app=express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'))

const url = "mongodb+srv://rami30080:mxzmxz123@cluster0.halwb.mongodb.net/Random";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const users = mongoose.model('users',{
  email:String,
  password:String,
  name:String,
  img:String,
  added:Number
});


app.post('/register',(req,res)=>{
  const {email1,password1,img1,name1} = req.body
  console.log(email1)
  users.find({email:email1}).then(docs=>{
    if(docs.length>0){
      console.log("email exists")
    }else{
      users.insertMany({email:email1,password:password1,name:name1,img:img1,added:0})
    }
  })

  

  res.send('done')

})

app.post('/login',(req,res)=>{
  const {email1,password1} = req.body
  users.find({email:email1,password:password1}).then(docs=>{
    if(docs.length>0){
      const user = docs[0].name
      console.log(user)
      res.send({user})
      
    }else{
      console.log("The email or password you entered is incorrect")
    }
  })
});

app.get('/renderUsers',(req,res)=>{
  const now =Date.now()
  const lasthalfhour = 1800000
  users.find().then(docs=>{
    let arr = []
    docs.map((user,index)=>{
      if((now-user.added)<=lasthalfhour)
        arr.push(user)
        
        
    })
    res.send({arr})
  })
})

app.put('/add',(req,res)=>{
  const {user} = req.body
  const now = Date.now()
  users.updateOne({name:user},{added:now}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return res.send('Succesfully saved.');
});

})



app.listen(3000,()=>{console.log('App listen on port 3000')})