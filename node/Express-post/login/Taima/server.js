const express = require('express');
const { findSourceMap } = require('module');
const app = express();

const namesArr = [
    {username:"omar90@gmail.com",password:"12345"},
    {username:"omar91@gmail.com",password:"12345"},
    {username:"omar92@gmail.com",password:"12345"},
    {username:"omar93@gmail.com",password:"12345"},
    {username:"omar94@gmail.com",password:"12345"},
    {username:"omar95@gmail.com",password:"12345"}
];


app.use(express.static('public'));
app.use(express.json());  //parsing objects from json --> js object 

app.post("/register",function(req,res){
    const sUser =req.body;
    const foundObject = namesArr.find(user=> user.username === sUser.username );
    if(foundObject)
        return res.status(400).send({message:"User already registered"})
    
    namesArr.push(sUser);
    res.status(200).send({message:"Succesfully registered."})
    
});



app.listen(3001, function(){

    console.log("Listening on port 3001")

});