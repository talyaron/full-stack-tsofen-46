
const express = require('express')
const app = express()

app.use(express.static('public'));

const jokes = ["asasasa",
    "aaaasdsad",
    "tyets",
    "asdasdad"]


app.get('/random', function (req, res) {

})

app.listen(3000,()=>{console.log('listen on port', 3000)})