const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));

const news = [
    { text: 'Mahmoud', img: 'https://i.pinimg.com/474x/ff/03/1b/ff031b94de044e48d770fbb9d81baf3b.jpg' , chat:'hello whatsapp' }, 
    { text: 'Abdullah', img: 'https://i.pinimg.com/236x/a6/83/c5/a683c5ee05d93db6299aa1fdd471472e.jpg',chat:' wenk ya zlme ' },
     { text: 'Yosef', img: 'https://i.pinimg.com/474x/74/42/d4/7442d4fd0ba23b42f275ba98a702b22d.jpg', chat: ' g3an ? ' },
     { text: 'Marshood', img: 'https://i.pinimg.com/474x/74/42/d4/7442d4fd0ba23b42f275ba98a702b22d.jpg', chat: ' How are you? ' },
     
    ]
  

app.get('/api/news', function (req, res) {
    
    res.send(news)
})


const port = process.env.PORT || 4000
app.listen(port, () => { console.log("App is Listening on port", port) })
