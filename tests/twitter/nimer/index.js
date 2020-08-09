const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))


//data base url so the server knows where to store all the data.
const url = "mongodb+srv://nimer:318453180@cluster0.tejcy.mongodb.net/test";



const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });



//define the data base collection body (each item contain the variables in the body of this function)
const Tweet = mongoose.model('Tweet', {
    id: String,
    name: String,
    src: String,
    content: String

});

const User = mongoose.model('user', {
    id: String,
    name: String,
    src: String,
    password: String

});






//sever function to get the data from the database to the server.
app.get('/getTweets', (req, res) => {
    Tweet.find({}, function (err, menu) {//Items is the name of the data base collection to get the data from (err,
        res.send(menu)       //menu can be changed to any variable name we want but the most important thing is to give it a name that has meaning)

    })
})
app.get('/getUser', (req, res) => {
    User.find({}, function (err, menu) {//Items is the name of the data base collection to get the data from (err,
        res.send(menu)       //menu can be changed to any variable name we want but the most important thing is to give it a name that has meaning)

    })
})


//server function to add new item to the database.
app.post('/logIn', (req, res) => {
    const { body } = req;
    console.log(body)
    const { imgSrc,id,password,name } = body;
  
    new User({name:name, id:id, src:imgSrc, password:password}).save();
    
  res.send({answer:'added successfully'});
})


app.post('/tweet', (req, res) => {
    const { body } = req;
    console.log(body)
    const { id,content,name,src} = body;

    
        
     const newTeet = new Tweet({name:name, id:id, src:src, content:content}).save();

  res.send({answer:'added successfully'});
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









app.listen(3000, () => { console.log("App is Listening to 3000") })
