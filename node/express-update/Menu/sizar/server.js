const express = require('express')
const app = express();

var bodyParser = require('body-parser');
const { request } = require('express');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))
const menu = [
    { name: 'Hamburger', price: 25 },
    { name: 'Pizza', price: 15 },
    { name: 'Maclobe', price: 40 },
    { name: 'Rvioly', price: 15 },
    { name: 'Cola', price: 15 },
    { name: 'Ice lemonande', price: 15 },
]
app.get('/api/getMenu',(req, res)=>{
    res.send(menu)
})

app.post('/menu', (req, res) => {
    const { menu } = req.body;
    console.log(menu)

    res.send({ menu })
    console.log(menu)
}
)

app.listen(3000, () => {
    console.log("port 3000")
})
