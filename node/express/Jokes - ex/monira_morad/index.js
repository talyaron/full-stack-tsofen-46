const express = require('express')
const app = express()

app.use(express.static('public'))

const jokes = [
  "היום הייתי בבית חולים והיו שם מלא סבתות... מעכשיו שלא יחפרו לי שתרופות סבתא באמת עובדות.",
 "מה זה חמור? זברה שירדה מהפסים",
 "אם כבשה תאכל גפן, יגדל לה צמר גפן?",
 "איזו גלידה חתולים אוהבים לאכול? תשובה: גלידת פרווה"
];

//RERST api
app.get('/jokes', function (req, res) {
  res.send(jokes)
})



app.get('/admin', function (req, res) {
  res.send('admin panel')
})

app.listen(3000, () => { console.log('App listen on port 3000') })