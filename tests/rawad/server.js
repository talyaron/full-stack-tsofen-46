const express=require('express')
const app=express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public'))

const url = "mongodb+srv://rawadsabik:0505489471d@cluster0.1ue9i.mongodb.net/test-twitter";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// const info = [
//     { img: "https://en.as.com/en/imagenes/2019/03/29/football/1553884745_490464_noticia_normal.jpg",name:"messi", info:"The best decisions aren’t made with your mind, but with your instinct."},
//     { img: "https://upload.wikimedia.org/wikipedia/commons/7/76/LeBron_James_2011-03-30_brightened.jpg",name:"lebron James", info:"I’m going to use all my tools, my God-given ability, and make the best life I can with it."},
// ]

const users = mongoose.model('users',{
    img:String,
    name:String
});

const twitterdata = mongoose.model('twitterdata',{
    img:String,
    name:String,
    info:String
})



// twitterdata.insertMany(info,function (err, docs) {
//     if (err) {
//         return console.error(err);
//     } else {
//         console.log("Multiple documents inserted to Collection Items");
//     }
// });

app.put('/login',(req,res)=>{
    const {body}=req;
    console.log(body);
    const userdata=body;

    // const user = new users({img:`${userdata.userimg}`,name:`${userdata.usern}`});
    // user.save().then(()=> console.log("save-done"));

    res.send(body);

  })

  app.put('/tweetsave',(req,res)=>{
    const {body}=req;
    console.log(body);
    const tweetdata=body;

   console.log(tweetdata.tweet);

  
    const save = new twitterdata({   img:`${tweetdata.userimg}`,  name:`${tweetdata.user}`,info:`${tweetdata.tweet}`})
    save.save().then(()=>console.log('doneee'));

  })


  
  app.get('/twitter',(req,res)=>{
    setTimeout(() => {
     // res.send(Shopitems)
     twitterdata.find({},function(err,docs){
      res.send(docs)

     
     })

   }, 1000);
})





app.listen(3000,()=>{console.log('App listen on port 3000')})