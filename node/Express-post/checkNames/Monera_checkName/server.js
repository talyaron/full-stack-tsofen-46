const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));

const studentsNames = [
    "sally",
    "monera",
    "moran",
    "lina"
]



app.post('/name', (req, res) => {
    const { body } = req;
    const { name } = body;
    console.log(name);
    if (studentsNames.includes(name)) {
        
        res.send({ success: true });
        
       
    }
    else {
        
        res.send({ success: false });
      
    }
})

app.listen(3009, () => { console.log("App is Listening to 3000") })
