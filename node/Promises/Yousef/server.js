const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'))

const shawarmaList = [
    { name: 'egel', src: "/img/egel.jpg" },
    { name: 'hodo', src: "/img/hodo.jpg" },
    { name: 'oof', src: "/img/oof.jpg"  }

]

app.get('/api/shawarmaList', (req, res) => {
    res.send(shawarmaList)
})



app.listen(3000, () => { console.log("App is Listening to 3000") })




