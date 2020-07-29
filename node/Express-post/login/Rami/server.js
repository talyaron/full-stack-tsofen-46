const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));

const emails = ['rami.lol@hotmail.com'];
let passwords =['123'];

app.post('/login',(req,res)=>{
    const { email , pass } = req.body;
    const indexEmail=emails.indexOf(email)
    if(indexEmail!=-1)
    {
        if(passwords[indexEmail]==pass)
        {
            res.send({success:true})
        }
    }
    

    res.send({success:false})
})

app.post('/register',(req,res)=>{
    const { email , pass } = req.body;
    const found = emails.find(element => element==email);
    if(found)
    {
        res.send({success:false})
    }
    emails.push(email);
    passwords.push(pass);
    res.send({success:true})
})


const port = process.env.Port || 3000;
app.listen(port, () => { console.log('listen to port', port) })
