const express = require('express')
const app = express()

var bodyParser = require('body-parser');


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

const url = "mongodb+srv://jeries:g1g2g3g4g5@cluster0.sb6dm.mongodb.net/test";

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


app.use(express.static('public'));

//define the data base collection body (each item contain the variables in the body of this function)

const User = mongoose.model('User', {
    name: String, 
    img: String, 
    password:String,
});

const Participnts = mongoose.model('Participnts', {
    name: String, 
    img: String, 
});



//sever function to get the data from the database to the server.
app.get('/getParticipnts', (req, res) => {
    Participnts.find({}, function(err,docs) {
            res.send(docs)
    })

})

//server function to add new item to the database.
app.post('/addPosts' , (req, res)=> {
    const {text ,name}=req.body;
    let newpost= new User( {username:name ,text:text } )
        newpost.save()
        

})
app.post('/register', function (req, res) {
    console.log("register")
    const { body } = req;
    // console.log(body)
    const {  username, img, password } = body;
    let registred=false;
    User.findOne({ name: username, img:img, password: password }, function (err, docs) {
        if (docs != null) {
            registred= false;
            let answer = 'already exist'
            res.send({ registred: registred })
        }
        else {
            const newUser = new User({ name: username, img:img, password: password })
            newUser.save()
            registred=true;
            res.send({ registred: registred })
        }

    })

})

app.post('/login-user', function (req, res) {
    const { name, password } = req.body;
    console.log(name,password)
    let validAdmin=false;
    User.findOne( {name:name , password:password } , function(err, docs) {
        console.log(docs);
        if ( docs!=null ) {
            let validAdmin=true;
            res.send( {validAdmin:validAdmin , id:docs._id})
        } 
        else {
            res.send({validAdmin:validAdmin})
        }

    })
});
app.post('/addParticpnt', (req, res) => {

    const {img,name } = req.body;
    let particpant=false;
    Participnts.findOne( {name:name , img:img } , function(err, docs) {
        if ( docs!=null ) {
            let particpant=true;
            res.send( {particpant:particpant} )
        } 
        else {
            let newParticipnts= new Participnts( { img:img, name:name} )
             newParticipnts.save()
            res.send({particpant:particpant})
        }

    })
      
  })


  app.post('/api/userPannel',(req,res)=>{
    const {id} = req.body;
    
    User.findOne({_id:id}).then(doc=>{
        res.send({user:doc})
    })
   
})



app.delete('/delete-item', function (req, res) {
    const { id } = req.body;
  
    //find index of the element
    console.log(id)
    Item.deleteOne({id:id}, function (err) {
        if(err) console.log(err);
        console.log("Successful deleted");
      });
    
   
  })




//function to update details of certain item in the database.
app.put('/updateItem', function (req, res) {
    const { body } = req; //get all the variables from the client to work with them 
    const { id, price } = body; // variables from the client to change in database 
    Item.updateOne({ id: id }, { price: price }, function (err, docs) { //function to update certain item details in the database
        res.send(docs)
    })

})



  

app.listen(3000 , ()=>{
    console.log('port 3000')
})