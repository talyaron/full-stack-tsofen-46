const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));



const conversations = [{ img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Alex', msg: 'hi how are you?',author:1}, 
{ img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Alex', msg: 'I am home , where are you?',author:0 },
 { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Alex', msg: 'wenak?',author:1 },
 { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Alex', msg: 'I am home , where are you?' ,author:0},
 { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'RAlex', msg: 'Rood?',author:0 },
 { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Alex', msg: 'I am home , where are you?' ,author:1},
 { img: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Alex', msg: 'bl Beet?',author:1 }
]

app.get('/api/conversations', function (req, res) {
    console.log(conversations)
    res.send(conversations)
})


const port = process.env.PORT || 3000
app.listen(port, () => { console.log("App is Listening on port", port) })