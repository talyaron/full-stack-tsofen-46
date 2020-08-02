const express = require('express')
const app = express()

const fs = require('fs');

let datamodel = fs.readFileSync('articles.json');
let articles = JSON.parse(datamodel);
console.log(articles);



var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))

//GET the Articles
app.get('/api/getArticles', function (request, response) {
  response.send(articles);

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
  console.log(articles[i].articleNr + "" +"set to deleted");

})


app.listen(3000, () => { console.log("App is Listening to 3000") })