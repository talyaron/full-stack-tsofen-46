const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static('public'))

const names = ['a', 'b', 'c'];

//RERST api
app.get('/names', function (req, res) {

  res.send(names)
})

// POST method route
app.post("/post-name", function (request, response) {
  const { input } = request.body;
  console.log(input);
  const isInNames = names.includes(input)
  response.send({ isInNames });
  console.log(isInNames);
  //return(res.body);

});

//
app.post("/post-name2", function (request, response) {
  const { input } = request.body;
  console.log(input);
  const isInNames = names.includes(input)
  var result;
 if (isInNames == true) {
    result = 1;
  } else {
    result = 2;
  }
  response.send({ result });
  console.log(result);
  //return(res.body);

});




app.listen(3000, () => { console.log('App listen on port 3000') })