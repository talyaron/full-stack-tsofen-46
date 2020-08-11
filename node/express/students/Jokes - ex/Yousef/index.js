const express = require('express')
const app = express()

app.use(express.static('public'))

const students = [
    "/img/j1.jpg",
    "/img/j2.jpg",
    "/img/j3.jpg",
    "/img/j4.jpg",
    "/img/j5.jpg",
    "/img/j6.jpg",
    "/img/j7.jpg",
    "/img/j8.jpg",
    "/img/j9.jpg",
    "/img/j10.jpg"
  ];
 
app.get('/jokes', function (req, res) {
    res.send(students)
})
 
app.listen(3000, ()=>{console.log("App is Listening")})