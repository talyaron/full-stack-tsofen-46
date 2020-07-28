const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));

let users = [
    { email: "1@gmail.com", pass: "1" },
    { email: "12@gmail.com", pass: "12" },
    { email: "123@gmail.com", pass: "123" },
    { email: "1234@gmail.com", pass: "1234" }

];



app.post('/users', (req, res) => {
    const { mail } = req.body;
    const { pass } = req.body;
    console.log(mail)
    console.log(pass)
    let check = false;
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === mail && users[i].pass === pass) {
            check = true;
        };

    }
    
    if (check === false) {
        users.push({ email: mail, pass: pass })
    }
    res.send(check)
})




app.listen(3000, () => { console.log('listen to port') });