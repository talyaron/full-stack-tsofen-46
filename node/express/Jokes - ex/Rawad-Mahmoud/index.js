const express = require('express')
const app = express()

app.use(express.static('public'))

const jokes = [
  "moran",
 "monera",
 "nivin",
 "nimer",
 "sizar",

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