const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static('public'))

const names = [
    "A",
    "B",
    "C",
    "D"
  ];
  
  //RERST api
  app.get('/names', function (req, res) {
    console.log(names)
    res.send(names)
  })

// POST method route
app.post("/names", function (req, res) {
  return res.body;
 /*  const {body} = req
   const {data} = body
    let found = false
   for(let i = 0; i < names.length; i++){
      if(names[i] === data)
      true
   }
   if(found)
   res.send({success : true})
   else
   res.send({success: false})
   */
});




app.listen(3000, () => { console.log('App listen on port 3000') })