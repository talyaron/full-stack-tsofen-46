//initialize express
const express = require('express')
const app = express();

//enable the server to recieve data{body} from client
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//send to client static files from public folder
app.use(express.static('public'));


const users=[
    {name:"j",password:"j"},
    {name:"k",password:"k"}

]


app.post('/addUserDB', (req, res) => {
    const { body } = req;
    const {name,password} = body;
    console.log(name);
    console.log(password)
    if (users.findIndex(users=>users.name ==name) ==-1) {//register user
        users.push({name:name,password:password});
        console.log(users);
        res.send({ValidUser:false});
    }
    else {
        
        res.send({ValidUser:true });//can't register
      
    }
})


app.post('/LogInUserDB', (req, res) => {
    const { body } = req;
    const {name,password} = body;
    console.log(name);
    console.log(password)
    if (users.findIndex(users=>users.name ==name) ==-1) {//log in failed user
        users.push({name:name,password:password});
        console.log(users);
        res.send({ValidUser:false});
    }
    else {
        
        res.send({ValidUser:true });//can't register
      
    }
})

app.listen(3001, () => { console.log("App is Listening to 3001")})

