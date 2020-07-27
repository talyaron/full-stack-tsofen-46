const express = require('express')
const app = express()
const fs = require('fs');

const jokes=[
    "“Dad, I got my smarts from you, didn’t I?” - “That’s right my clever boy!” - “Yup, thought so, mom still has hers.”",
    "I thought it would be nice to share a burger with this homeless guy I keep seeing on my way to work. - But that stingy jerk told me to go get my own.",
    "What do electric cars and diarrhea have in common? - The idea, “I will make it home.”",
    "“Dad, I got my smarts from you, didn’t I?” - “That’s right my clever boy!” - “Yup, thought so, mom still has hers.”"]

app.use(express.static('public'))

// let num = Math.floor((Math.random() * 3)

app.get("/jokes", (req,res)=>{
    res.send(jokes);
})

app.listen(3000, () =>  console.log('App listen on port 3000') )