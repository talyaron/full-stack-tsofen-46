const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));


const userProfiles = [ 

    { username: "Salwa" ,userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQf3l-BojSERIrrFijPc1cxHdT2u5No59H1KA&usqp=CAU" },
    { username: "abed" ,userImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQf3l-BojSERIrrFijPc1cxHdT2u5No59H1KA&usqp=CAU" }
                    ]

const userHistory = [
    { username: "Salwa" ,messages: ["hi abed"] },
    { username: "abed" ,messages: ["hi", "its me abed"] } 
]

let userHistoryobj = {
    { Salwa , messages: ["hi abed"] 

}


// API:

app.post('/api/getUser', function(request, response) {

    const user = request.body.vInput;
    const aResult = [];
    const aUserHistory = []
    console.log(user);
    for(let i =0; i< userProfiles.length; i++) {
        console.log("in the loop");
        if(user == userProfiles[i].username) {
            for(let j=0;j<userHistory.length; j++) {

            }
            aResult.push(userProfiles[i]);

            console.log(aResult);


            break;
        } else {
                // do nothing
        }
    }
    response.send(aResult);
})





const port = process.env.PORT || 4000
app.listen(port, () => { console.log("App is Listening on port", port) })