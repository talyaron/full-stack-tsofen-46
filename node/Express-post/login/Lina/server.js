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

const names = [
    {username:"lina", pass:"123"},
    {username:"moran", pass:"111"},
    {username:"monera", pass:"123"}
];





//api route fore checking names
app.post('/api/check-name', (request, response) => {
    //request com from the client
    const { name, pass } = request.body;
    //console.log(name)
    //check if name is in names

    if(names.includes(name))
    {
        res.send({ isInNames: 'exists' });
        console.log(name);
    }
    else {
        res.send({ isInNames: 'not exists' });
    }


    // const isInNames = names.includes(name.username);
    // console.log(isInNames);


    // if(isInNames)
    // {
    //     if()
    // }

    //send response to client
    // response.send({isInNames})
})


//listen to cliennts call on port 3000
const port = process.env.Port || 3000;
app.listen(port, () => { console.log('listen to port', port) })

