const express = require('express')
const app = express()

app.use(express.static('public'))

const jokes = [
  
 " למה עצים לא יכולים ללכת לבית הספר: כי הם לא היו שורדים את החטיבה",
 " ניקיון יסודי:מה עושות מנקות בכיתה א'-ו",
 "Why are frogs always so happy? They eat what ever bugs them",
 "Q: How do you count cows? With a cowculator"

];

function rand(){
  
  
  const randNum = Math.floor(Math.random()*jokes.length);
  console.log(randNum)
  return randNum
}


//RERST api
app.get('/jokes', function (req, res) {
  // console.log("dasda:",students)
  res.send({joke:jokes[rand()]})
})




app.get('/admin', function (req, res) {
  res.send('admin panel')
})

app.listen(3000, () => { console.log('App listen on port 3000') })