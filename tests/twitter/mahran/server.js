// # Express
const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//MongoDB

const url = "mongodb+srv://mahran:mahran84@cluster0.mr6bw.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Schema for users
const TwitUser = mongoose.model('TwitsUser', {

  username: String,
  imageSrc: String,
  status: String


});

// schema for Twists Page:

const Twits = mongoose.model('Twits', {

    username: String,
    comment: String
  
  
  });

app.use(express.static('public'))

//API

app.post('/api/postUserInput', function(request, response) {
    let oReqBody = request.body;
    let newUserInp = oReqBody.vUsename;
    let newImgInp = oReqBody.vImage;
    let currStatus = "active"


    let currUser = new TwitUser ({
        username: newUserInp,
        imageSrc: newImgInp,
        status : currStatus

    })
  
    var filter = { 'username': newUserInp};
    var update = {'imageSrc': newImgInp, 'status': currStatus };

    currUser.updateOne(filter, update, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        response.send(res);
      }
  
  
    })


 

})

app.get('/api/getUserDetails', function (request, response) {

}
)









app.listen(3000, () => { console.log("App is Listening to 3000") })
