// # Express
const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))


// # File System:
const fs = require('fs');
let datamodel = fs.readFileSync('articles.json');
let articles = JSON.parse(datamodel);
//console.log(articles);


//# MongoDB
const url = "mongodb+srv://mahran:mahran84@cluster0.mr6bw.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// create Schema in MongoDB
const RE_Article = mongoose.model('RE_Article', {

  articleNr: String,
  location: String,
  livingSpace: Number,
  availability: String,
  rentalPrice: Number,
  currency: String,
  status: String

});

const Article_005 = new RE_Article ({
  articleNr: 'A005',
  location: 'Taybee',
  livingSpace: 50,
  availability: "15.01.2021",
  rentalPrice: 3000,
  currency: 'NIS',
  status: 'active'
})

//Article_005.save().then( () => console.log(" A005 written to DB"))

//GET the Articles
 app.get('/api/getArticles', function (request, response) {
//  response.send(articles);
let docs =   RE_Article.find().then( () => console.log(RE_Article.find()));
response.send(docs);
console.log(RE_Article.find());

})

//Update Article
app.put('/api/updateArticle', function (request, response) {

  let oReqBody = request.body;
  let rarticleNr = oReqBody.vArticleNr;
  let rLocation = oReqBody.vLocationInptut;

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].articleNr == oReqBody.vArticleNr) {

      articles[i].location = oReqBody.vLocationInptut;
      articles[i].livingSpace = oReqBody.vLivingSpaceInput;
      articles[i].availability = oReqBody.vAvailabilityInput;
      articles[i].rentalPrice = oReqBody.vPriceInput;

      response.send(articles);
    } else {
      // do nothing
    }
  }

  const fs = require('fs');
  fs.writeFileSync('articles.json', JSON.stringify(articles));

})

//Delete Article

app.put('/api/removeArticle', function (request, response) {

  let oReqBody = request.body;
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].articleNr == oReqBody.vArticleNr) {


      articles[i].status = oReqBody.vArticleStatus;


      response.send(articles);

    } else {
      // do nothing
    }
  }

  const fs = require('fs');
  fs.writeFileSync('articles.json', JSON.stringify(articles));
  console.log(articles[i].articleNr + "" + "set to deleted");

})


app.listen(3000, () => { console.log("App is Listening to 3000") })