const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));



const conversations = [{ img: 'https://cdnb.artstation.com/p/assets/images/images/001/863/575/medium/irakli-nadar-artstation-da.jpg?1453903033', name: 'Lana', msg: 'hi how are you?' }, 
{ img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Moran', msg: 'I am home , where are you?' },
 { img: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Rola', msg: 'what are you doing?' },
 { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Moran', msg: 'I am home , where are you?' },
 { img: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Rola', msg: 'what are you doing?' },
 { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Moran', msg: 'I am home , where are you?' },
 { img: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'Rola', msg: 'what are you doing?' }
]

app.get('/api/conversations', function (req, res) {
    console.log(conversations)
    res.send(conversations)
})


const port = process.env.PORT || 4000
app.listen(port, () => { console.log("App is Listening on port", port) })