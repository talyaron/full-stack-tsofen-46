const express = require('express')
const app = express()

const jokes =[`A man walks into a bar.Ouch!`, `A dyslexic man walks into a bra.`,`Doctor, I can’t stop singing The Green Green Grass of Home.
He says “That sounds like Tom Jones syndrome.”
“Is it common?” I asked.
“It’s not unusual” he replied`];


app.use(express.static('public'))

 

app.get('/jokes',  (req, res)=> {
 const ran = Math.floor((Math.random() * 3));
 const joke =jokes[ran];
 res.send({joke});
})
 

//web server
app.listen(3000,()=> console.log(`Listening on port 3000`))