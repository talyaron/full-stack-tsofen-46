const express = require('express')
const app = express()

app.use(express.static('public'))




const jokes = ["What did one ocean say to the other ocean? Nothing, they just waved!",
    "What does a baby computer call his father? Data!",
    "What do you call a can opener that doesn’t work?A can’t opener!",
    "Why don’t crabs donate? Because they’re shellfish.",
    "Why did Adele cross the road? To say hello from the other side"
];


app.get('/jokes', function (req, res) {
    res.send({ joke: jokes[Math.floor(Math.random() * 5)] });
})



app.listen(5698, () => { console.log('App listenting on port 5698') })




