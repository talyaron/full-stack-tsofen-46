
//initilize express
const express = require('express')
const app = express();

//enable the server to recive data(body) from client
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));

const registerData= [] 

app.post('/api/check-name', (request, response) => {
    //request com from the client
    const { name , password} = request.body;
    console.log(name , password)
    //check if name is in names
    let valid=false;
    for (let i=0 ; i<registerData.length ; i++){ 
        if(registerData[i].name===name && registerData[i].password===password ){
            valid=true;
        }
    }
    if(valid==true){
        response.send({valid})
    }else {
         registerData.push({name:name , password:password})
         response.send({valid})
    }


   
    console.log(valid)
    //send response to client
    
})


app.post('/api/login', (request, response) => {
    //request com from the client
    const { name , password} = request.body;
    console.log(name , password)
    //check if name is in names
    let valid=false;
    for (let i=0 ; i<registerData.length ; i++){ 
        if(registerData[i].name===name && registerData[i].password===password ){
            valid=true;
        }
    }
    console.log(valid)
    //send response to client
    response.send({valid})

})



app.listen(3000 , ()=> {
    console.log("port 3000")
})
