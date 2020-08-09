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
//const fs = require('fs');
//let datamodel = fs.readFileSync('articles.json');
//let articles = JSON.parse(datamodel);
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

const Article_006 = new RE_Article ({
  articleNr: 'A006',
  location: 'Tol Karem',
  livingSpace: 80,
  availability: "15.01.2021",
  rentalPrice: 1500,
  currency: 'NIS',
  status: 'active'
})

//Article_006.save().then( () => console.log(" A006 written to DB"))

//GET the Articles
app.get('/api/getArticles', function (request, response) {
  //  response.send(articles);

  RE_Article.find({}, (err, res) => {
    response.send(res);
  });


})



//Update Article
app.put('/api/updateArticle', function (request, response) {

  let oReqBody = request.body;
  let rarticleNr = oReqBody.vArticleNr;
  let rLocation = oReqBody.vLocationInptut;

  /*  RE_Article.findOne( {articleNr: rarticleNr}, (err, res) => {
      location = oReqBody.vLocationInptut;
      livingSpace = oReqBody.vLivingSpaceInput;
      availability = oReqBody.vAvailabilityInput;
      rentalPrice = oReqBody.vPriceInput;
      console.log(location);
    })
    */
  var filter = { 'articleNr': rarticleNr };
  var update = {
    location: oReqBody.vLocationInptut,
    livingSpace: oReqBody.vLivingSpaceInput,
    availability: oReqBody.vAvailabilityInput,
    rentalPrice: oReqBody.vPriceInput,
  }
  RE_Article.updateOne(filter, update, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      response.send(res);
      console.log(res.nModified);
    }
  })
  /*
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
  */
})

//Delete Article
app.put('/api/removeArticle', function (request, response) {

  let oReqBody = request.body;
  let rarticleNr = oReqBody.vArticleNr;

  //Delete in MongoDB
  var filter = { 'articleNr': rarticleNr };
  var update = { 'articleNr': rarticleNr, status: "deleted" };
  RE_Article.updateOne(filter, update, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      response.send(res);
    }


  })

  /* 
   for (let i = 0; i < articles.length; i++) {
     if (articles[i].articleNr == oReqBody.vArticleNr) {
 
 
       articles[i].status = oReqBody.vArticleStatus;
 
 
       response.send(articles);
 
     } else {
       // do nothing
     }
   }
 
   //write to file system
   const fs = require('fs');
   fs.writeFileSync('articles.json', JSON.stringify(articles));
   console.log(articles[i].articleNr + "" + "set to deleted");
 */
})


/*RE_Article.find( { }, (err, res) => {
  console.log(res);
}) */
//console.log(doc);

app.listen(3000, () => { console.log("App is Listening to 3000") })