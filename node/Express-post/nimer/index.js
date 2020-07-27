const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))

const answersAvg = { questionsCounter: 0, trueAnsweres: 0 };

app.post('/answer', (req, res)=>{
  const { body } = req;
  console.log(body)
  
  if (body.event == 'answer3') {answersAvg.trueAnsweres++}
  else { answersAvg.trueAnsweres += 0 }
  
  answersAvg.questionsCounter++;
  console.log(answersAvg);
  res.send({
    success: true,
    avg: answersAvg.trueAnsweres / answersAvg.questionsCounter
  })
})

app.listen(3001, () => { console.log("Server is Listening on port 3000") })