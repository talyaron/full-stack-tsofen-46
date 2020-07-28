//initilize express
const express = require('express')
const app = express();

//enable the server to recive data(body) from client
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//send to client static files from public folder
app.use(express.static('public'));

const names = ['a', 'b', 'c'];

//api route fore checking names
app.post('/api/check-name', (request, response) => {
    //request com from the client
    const { name } = request.body;
console.log(name)
    //check if name is in names
    const isInNames = names.includes(name);
    console.log(isInNames)

    //send response to client
    response.send({isInNames})
})


//listen to cliennts call on port 3000
const port = process.env.Port || 3000;
app.listen(port, () => { console.log('listen to port', port) })

