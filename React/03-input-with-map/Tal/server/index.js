const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));

const news = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQf3l-BojSERIrrFijPc1cxHdT2u5No59H1KA&usqp=CAU", text: 'very very good 55' },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Morning%2C_just_after_sunrise%2C_Namibia.jpg/1200px-Morning%2C_just_after_sunrise%2C_Namibia.jpg", text: 'good 1' },
    { img: "https://www.poynter.org/wp-content/uploads/2019/07/shutterstock_264132746.jpg", text: 'good 2' },
    { img: "https://img.huffingtonpost.com/asset/5e0f68ec2500003b1998fb2e.jpeg", text: 'good 3' }
];

app.get('/api/news', function (req, res) {
    console.log(news)
    res.send(news)
})


const port = process.env.PORT || 4000
app.listen(port, () => { console.log("App is Listening on port", port) })
