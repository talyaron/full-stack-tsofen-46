const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));

const url = "mongodb+srv://mahran:mahran84@cluster0.mr6bw.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// schema for DB:
const WhatsAppMsg = mongoose.model('WhatsAppMsg', {

    img: String,
    name: String,
    msg: String,
    time: String,
    count: String
  });
  const arrMsg = [
    { img: "Img",
      name: "name1",
      msg: "msg1",
      time: "00:00",
      count: "1"
    }  
  
]

//   API
app.get('/api/getChats', function(request, response) {
  //  response.send(WhatsAppMsg.find() )
  //  console.log(WhatsAppMsg.find({}, function(err, res) {
 //       return(res);
        response.send(arrMsg);
        console.log(arrMsg);
 

    

})
console.log(arrMsg);

const port = process.env.PORT || 4000
app.listen(port, () => { console.log("App is Listening on port", port) })