const { argv } = require('yargs')


const express = require('express');
const app = express();

const url = "mongodb+srv://tal2:cFjgmJTT9b42Aoin@tal-test1-m39if.mongodb.net/test";

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));



let count = 1;
app.get('/api/age-groups', (req, res) => {

    console.log('api/age-groups')
    const filter = { age: { $gte: 21 } }
    User.aggregate([
        { $match: filter },
        { $group: { _id: '$age', count: { $sum: 1 } } }
    ]).then(docs => {
        console.log(count); count++;

        res.send(docs)
    })
})
let c = 0;
app.get('/api/random', async (req, res) => {
    console.log(c);
    c++;
    const rand = await getRandom();
    res.send({number: rand})

})

function getRandom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 500)

    })
}

const { i } = argv;

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(connect => {
    console.log('connected');


    const port = process.env.PORT || 3000
    app.listen(port, () => { console.log('server listen on port ', port) })
});

const User = mongoose.model('User', {
    name: String,
    age: Number
});



if (i) {

    const users = [
        { name: "Lena", age: 20 },
        { name: "Nimer", age: 22 },
        { name: "Jeris", age: 20 },
        { name: "Omry", age: 22 },
        { name: "Nivin", age: 20 },
        { name: "Moran", age: 22 }

    ]

    User.create(users).then(docs => { console.log('save to DB') })

}





